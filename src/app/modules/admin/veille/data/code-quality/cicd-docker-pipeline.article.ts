import { Article } from '../../veille.types';

export const CICD_DOCKER_PIPELINE: Article = {
  id: 'cicd-docker-pipeline',
  title: 'Mon pipeline CI/CD avec Docker',
  subtitle: 'Lint, tests, docs & déploiement automatisé',
  summary: `
    Workflow multi-conteneurs garantissant qualité, tests et
    documentation à chaque itération.`,
  imageUrl: 'https://source.unsplash.com/featured/?ci-cd,docker,pipeline',
  paragraphs: [
    {
      title: 'Contexte & enjeux',
      content: `
        <p>
          Dans mes micro-services (API Node, workers Hardhat,
          front Angular), chaque nouveau commit devait passer
          par le même filtre : lint, tests, génération de docs,
          build et déploiement.  
          Mon objectif : zéro conteneur non testé ou sans
          documentation à jour en production.
        </p>`
    },
    {
      title: 'Multi-stage build Docker',
      content: `
        <ol>
          <li>
            <strong>Builder :</strong>
            <ul>
              <li>` + "`npm install && npm run lint`" + `</li>
              <li>Génération de types via Hardhat & Prisma</li>
              <li>Exécution des tests unitaires (Jest/Karma)</li>
            </ul>
          </li>
          <li>
            <strong>Docs :</strong> TSDoc + Swagger UI (NestJS / TypeDoc)
          </li>
          <li>
            <strong>Run :</strong> image light (<code>dist/</code> + docs)
          </li>
        </ol>`
    },
    {
      title: 'Pipeline GitLab CI & GitHub Actions',
      content: `
        <p>
          Voici un extrait de mon \`.gitlab-ci.yml\` :
        </p>
        <pre><code class="language-yaml">
stages:
  - build
  - test
  - docs
  - deploy

build:
  stage: build
  script:
    - docker build --target builder -t myapp:\${CI_COMMIT_SHA} .
test:
  stage: test
  script:
    - docker run myapp:\${CI_COMMIT_SHA} npm test
docs:
  stage: docs
  script:
    - docker build --target docs -t myapp-docs:\${CI_COMMIT_SHA} .
deploy:
  stage: deploy
  script:
    - docker push myapp:\${CI_COMMIT_SHA}
    - helm upgrade --install myapp ./charts/myapp
        </code></pre>`
    },
    {
      title: 'Résultats & métriques',
      content: `
        <ul>
          <li>Temps total pipeline : <strong>2 min 15 s</strong></li>
          <li>Couverture tests : 85 % → 95 %</li>
          <li>Docs Swagger disponibles dans chaque conteneur</li>
          <li>Déploiement continu sur k8s via Terraform & Helm</li>
        </ul>`
    },
    {
      title: 'Perspectives & bonnes pratiques',
      content: `
        <p>
          • Isolez chaque étape pour diagnostiquer rapidement.  
          • Versionnez vos Dockerfiles et scripts CI.  
          • Ajoutez des checks de sécurité (Trivy, Snyk).  
          • Envisagez un framework GitOps (Argo CD, Flux).
        </p>`
    }
  ]
};
