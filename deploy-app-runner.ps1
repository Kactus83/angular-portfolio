<#
.SYNOPSIS
  Build, push Docker image and deploy to AWS App Runner for a single-image Angular app
  Processus assisté : complétion de .env, création/validation du repo ECR, build, push et déploiement App Runner.
#>
[CmdletBinding()]
param()
$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding  = [System.Text.Encoding]::UTF8

# Helper: prompt Oui/Non
function Ask-YesNo {
    param(
        [string]$Question,
        [ValidateSet('O','N')][string]$Default = 'O'
    )
    $defaultPrompt = "[$Default]"
    do {
        $resp = Read-Host "$Question $defaultPrompt"
        if ([string]::IsNullOrWhiteSpace($resp)) { $resp = $Default }
        $resp = $resp.Trim().ToUpper()
    } while ($resp -notin 'O','N')
    return ($resp -eq 'O')
}

# Script directory and .env
$scriptDir = Split-Path $MyInvocation.MyCommand.Definition -Parent
$envFile   = Join-Path $scriptDir '.env'
if (-not (Test-Path $envFile)) {
    Write-Error ".env introuvable dans $scriptDir. Créez d'abord un fichier .env avec les clés requises";
    exit 1
}

# Load .env into dictionary
$envMap = @{}
(Get-Content $envFile) | ForEach-Object {
    if ($_ -match '^[^#].*?=.*$') {
        $parts = $_ -split '=',2
        $envMap[$parts[0].Trim()] = $parts[1].Trim(' "')
    }
}

# Required keys to prompt if missing
$requiredKeys = @('IMAGE_TAG','AWS_ACCOUNT_ID','AWS_REGION','PROJECT_NAME','APP_RUNNER_ROLE_ARN')
foreach ($key in $requiredKeys) {
    if (-not $envMap.ContainsKey($key) -or [string]::IsNullOrWhiteSpace($envMap[$key])) {
        do { $val = Read-Host "Entrez la valeur pour '$key'" } while ([string]::IsNullOrWhiteSpace($val))
        if ($envMap.ContainsKey($key)) {
            (Get-Content $envFile) -replace "^$key=.*", "$key=$val" | Set-Content $envFile
        } else {
            Add-Content $envFile "$key=$val"
        }
        $envMap[$key] = $val
        Write-Host "🔧 .env mis à jour : $key=$val" -ForegroundColor Cyan
    }
}

# Ensure ECR_URL equals PROJECT_NAME
$ecrKey = 'ECR_URL'
$ecrVal = $envMap['PROJECT_NAME']
if ($envMap.ContainsKey($ecrKey)) {
    if ($envMap[$ecrKey] -ne $ecrVal) {
        (Get-Content $envFile) -replace "^$ecrKey=.*", "$ecrKey=$ecrVal" | Set-Content $envFile
        Write-Host "ℹ️ .env mis à jour : $ecrKey=$ecrVal" -ForegroundColor Cyan
    }
} else {
    Add-Content $envFile "$ecrKey=$ecrVal"
    Write-Host "ℹ️ .env ajouté : $ecrKey=$ecrVal" -ForegroundColor Cyan
}
$envMap[$ecrKey] = $ecrVal

# Export env vars
foreach ($pair in $envMap.GetEnumerator()) {
    Set-Item -Path Env:$($pair.Key) -Value $pair.Value
}

# Assign variables
$tag       = $env:IMAGE_TAG
$accountId = $env:AWS_ACCOUNT_ID
$region    = $env:AWS_REGION
$repoName  = $env:ECR_URL
$roleArn   = $env:APP_RUNNER_ROLE_ARN
$project   = $env:PROJECT_NAME

Write-Host "Configuration : $($project):$($tag) | AWS $($accountId)/$($region) | ECR repo=$($repoName)" -ForegroundColor Green

# Step 1: Build Docker image
if (Ask-YesNo "1) Builder l'image Docker (local) ?") {
    Write-Host "🔨 Build : $($project):$($tag)" -ForegroundColor Cyan
    docker build -f Dockerfile -t "$($project):$($tag)" $scriptDir
    if ($LASTEXITCODE -ne 0) { Write-Error 'Échec du build'; exit 1 }
    Write-Host '✅ Build terminé.' -ForegroundColor Green
} else {
    Write-Host '⏭️ Build SKIPPÉ.' -ForegroundColor Yellow
}

# Step 2: Push to ECR (create/validate repo)
if (Ask-YesNo "2) Pousser l'image vers ECR ?") {
    $registry = "${accountId}.dkr.ecr.${region}.amazonaws.com"
    aws ecr describe-repositories --repository-names $repoName --registry-id $accountId --region $region
    if ($LASTEXITCODE -ne 0) {
        Write-Host "🆕 Repo ECR '$repoName' manquant, création..." -ForegroundColor Cyan
        aws ecr create-repository --repository-name $repoName --registry-id $accountId --region $region | Out-Null
        Write-Host "✅ Repo créé." -ForegroundColor Green
    } else {
        Write-Host "✅ Repo ECR '$repoName' existe." -ForegroundColor Green
    }
    $imageUri = "${registry}/${repoName}:${tag}"
    Write-Host "🔑 Connexion à ECR ${registry}" -NoNewline
    aws ecr get-login-password --region $region | docker login --username AWS --password-stdin $registry
    Write-Host ' OK' -ForegroundColor Green
    Write-Host "🏷️ Tag local vers ${imageUri}" -ForegroundColor Cyan
    docker tag "$($project):$($tag)" $imageUri
    docker push $imageUri
    if ($LASTEXITCODE -ne 0) { Write-Error 'Échec du push. Vérifiez vos permissions IAM'; exit 1 }
    Write-Host '✅ Push terminé.' -ForegroundColor Green
} else {
    Write-Host '⏭️ Push SKIPPÉ.' -ForegroundColor Yellow
}

# Function: Deploy App Runner service
function Invoke-AppRunnerDeployment {
    param(
        [string] $serviceName,
        [string] $imageUri
    )
    Write-Host "`n🚀 Déploiement App Runner : $serviceName" -ForegroundColor Cyan

    $cfg = @{
        AuthenticationConfiguration = @{ AccessRoleArn = $roleArn }
        ImageRepository = @{
            ImageIdentifier     = $imageUri
            ImageRepositoryType = 'ECR'
            ImageConfiguration  = @{ Port = '80' }
        }
    }
    $tmpFile = Join-Path $env:TEMP "$($serviceName)-config.json"
    $cfg | ConvertTo-Json -Depth 10 | Set-Content $tmpFile -Encoding ASCII

    # Check existing service ARN
    $existingArn = aws apprunner list-services --query "ServiceSummaryList[?ServiceName=='$serviceName'].ServiceArn | [0]" --output text 2>$null
    if ($existingArn -eq 'None' -or [string]::IsNullOrWhiteSpace($existingArn)) {
        Write-Host "Création du service $serviceName..."
        try {
            $arn = aws apprunner create-service --service-name $serviceName --source-configuration file://$tmpFile --instance-configuration Cpu=1024,Memory=2048 --query 'Service.ServiceArn' --output text
        } catch {
            Write-Error "🚫 Échec CreateService : accès refusé pour passer le rôle $roleArn. Assurez-vous d'avoir iam:PassRole sur ce rôle."
            Remove-Item $tmpFile
            exit 1
        }
        if (-not [string]::IsNullOrWhiteSpace($arn)) {
            # Replace or add ARN variable
            if (Select-String -Path $envFile -Pattern '^PORTFOLIO_ARN=') {
                (Get-Content $envFile) -replace '^PORTFOLIO_ARN=.*', "PORTFOLIO_ARN=$arn" | Set-Content $envFile
            } else {
                Add-Content $envFile "PORTFOLIO_ARN=$arn"
            }
            Write-Host "💾 .env mis à jour : PORTFOLIO_ARN=$arn" -ForegroundColor Cyan
        }
    } else {
        Write-Host "Mise à jour du service existant ($existingArn)..."
        aws apprunner update-service --service-arn $existingArn --source-configuration file://$tmpFile | Out-Null
        Write-Host '✅ Service mis à jour.' -ForegroundColor Green
        $arn = $existingArn
    }
    Remove-Item $tmpFile
    # Wait until RUNNING
    do {
        Start-Sleep 5
        $status = aws apprunner describe-service --service-arn $arn --query 'Service.Status' --output text
        Write-Host "Statut = $status"
        if ($status -eq 'CREATE_FAILED') {
            Write-Error "🚫 Échec de la création du service $serviceName. Vérifiez les journaux AWS App Runner pour plus de détails."
            exit 1
        }
    } while ($status -ne 'RUNNING')
    $url = aws apprunner describe-service --service-arn $arn --query 'Service.ServiceUrl' --output text
    Write-Host "✅ $serviceName en ligne → $url" -ForegroundColor Green
}

# Step 3: Deploy
if (Ask-YesNo "3) Déployer sur App Runner ?") {
    $imageUriFull = "${accountId}.dkr.ecr.${region}.amazonaws.com/${repoName}:${tag}"
    Invoke-AppRunnerDeployment -serviceName $project -imageUri $imageUriFull
} else {
    Write-Host '⏭️ Déploiement SKIPPÉ.' -ForegroundColor Yellow
}

Write-Host "`n🎉 Processus terminé !" -ForegroundColor Green
exit 0
