# build-and-deploy.ps1
# Script PowerShell pour construire l'image Docker multi-stage et la déployer sur Elastic Beanstalk

# 1) Construire l'image Docker (inclut déjà le build Angular)
$IMAGE_NAME = "portfolio-app:latest"
Write-Host "Building Docker image: $IMAGE_NAME"
docker build -t $IMAGE_NAME .

# 2) Déployer sur Elastic Beanstalk
# Assurez-vous d'avoir exécuté 'eb init' au préalable
$ENV_NAME = "portfolio-env"
Write-Host "Deploying to Elastic Beanstalk environment: $ENV_NAME"
eb deploy $ENV_NAME

# 3) Fin du script
Write-Host "Deployment completed. Check the environment URL in the Elastic Beanstalk console."
