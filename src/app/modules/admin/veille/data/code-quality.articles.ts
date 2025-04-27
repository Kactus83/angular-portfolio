import { Article } from '../veille.types';

export const CODE_QUALITY_ARTICLES: Article[] = [
  {
    id: 'clean-code-book',
    title: '« Clean Code » : la bible du code lisible',
    subtitle: 'Uncle Bob & mes premiers refactorings',
    summary: `
      Comment ce classique de Robert C. Martin m’a fait passer
      d’un code désordonné à un code clair, compréhensible et
      durable.`,
    imageUrl: 'https://source.unsplash.com/featured/?clean,code,book',
    paragraphs: [
      {
        title: 'Mon point de départ',
        content: `
          <p>
            À l’automne 2023, mes projets TypeScript prenaient de l’ampleur :
            nouvelles routes, services métiers, composants Angular… Mon
            code commençait à ressembler à un champ de bataille où chaque
            ajout risquait de casser l’existant. Maintenir et comprendre
            mes fichiers <code>.ts</code> devenait un vrai casse‐tête.
            J’ai alors ouvert <em>Clean Code</em> pour y trouver un guide
            pratique et structuré permettant de ramener ordre et intelligibilité.
          </p>
          <p>
            Cette lecture a démarré comme un défi personnel : appliquer
            chaque principe à mes petits scripts utilitaires, jusqu’à
            refactorer un ancien module de mailing devenu illisible.
          </p>`
      },
      {
        title: 'Enseignements clés',
        content: `
          <ul>
            <li>
              <strong>Nommage explicite :</strong> un nom de variable ou de
              fonction doit raconter son histoire sans commentaire
              supplémentaire. Par exemple, <code>calculateInvoiceAmount</code>
              est préférable à <code>calcAmt</code>.
            </li>
            <li>
              <strong>Fonctions courtes :</strong> idéalement moins de
              20 lignes et une seule responsabilité. Une fonction
              <code>handleOrder</code> ne doit pas à la fois valider
              l’entrée, calculer un total, persister et notifier.
            </li>
            <li>
              <strong>Gestion des erreurs structurée :</strong> privilégier
              <code>try/catch</code> et lever des exceptions significatives
              plutôt qu’une cascade de retours booléens.
            </li>
            <li>
              <strong>Commentaires au minimum :</strong> documenter le
              <em>pourquoi</em>, pas le <em>comment</em>; le code propre
              doit être auto‐explicatif.
            </li>
          </ul>`
      },
      {
        title: 'Exemple avant/après',
        content: `
          <pre><code class="language-ts">
// Avant : tout en un, peu lisible
function processOrder(o) {
  if (!o.items) return;
  o.items.forEach(item => {
    total += item.price * item.qty;
  });
  saveOrder(o);
  notifyCustomer(o);
}

// Après : responsabilités séparées
function calculateTotal(order: Order): number {
  return order.items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

async function persistOrder(order: Order): Promise<void> {
  await orderRepo.save(order);
}

function informCustomer(order: Order): void {
  emailService.send(order.customerEmail, 'Votre commande a été prise en compte');
}

async function handleOrder(order: Order) {
  const total = calculateTotal(order);
  order.total = total;
  await persistOrder(order);
  informCustomer(order);
}
          </code></pre>`
      },
      {
        title: 'Bénéfices observés',
        content: `
          <p>
            Depuis ces refactorings, mes pull‐requests durent moins de
            cinq minutes, les nouveaux arrivants naviguent sans peine dans
            le projet, et les bugs sont souvent détectés avant même la
            mise en production. La discipline du « Clean Code » a
            véritablement transformé ma manière de coder au quotidien.
          </p>`
      },
      {
        title: 'À retenir',
        content: `
          <p>
            <em>Clean Code</em> n’est pas un manuel à lire une fois, mais
            une pratique à réviser régulièrement : chaque nouveau projet
            mérite d’être démarré avec ces principes en tête.
          </p>`
      }
    ]
  },
  {
    id: 'solid-principles-overview',
    title: 'Principes SOLID',
    subtitle: 'Les fondations d’un code modulaire',
    summary: `
      SRP, OCP, LSP, ISP et DIP expliqués simplement,
      pour écrire un code évolutif et testable.`,
    imageUrl: 'https://source.unsplash.com/featured/?solid,code,principles',
    paragraphs: [
      {
        title: 'Single Responsibility Principle (SRP)',
        content: `
          <p>
            Une classe ou une fonction doit n’avoir qu’une seule
            responsabilité, donc une seule raison de changer.
            Exemple : un service <code>UserService</code> ne doit pas
            gérer à la fois la persistance et l’envoi d’emails.
          </p>`
      },
      {
        title: 'Open/Closed Principle (OCP)',
        content: `
          <p>
            Le code doit être <strong>ouvert à l’extension</strong> mais
            <strong>fermé à la modification</strong>. On utilise
            l’héritage ou l’injection de dépendances pour étendre le
            comportement sans toucher au code existant.
          </p>`
      },
      {
        title: 'Liskov Substitution Principle (LSP)',
        content: `
          <p>
            Toute implémentation d’une classe abstraite doit pouvoir la
            remplacer sans altérer le comportement attendu.
            Exemple : une classe <code>Square</code> dérivée de
            <code>Rectangle</code> ne doit pas casser les méthodes de
            redimensionnement.
          </p>`
      },
      {
        title: 'Interface Segregation Principle (ISP)',
        content: `
          <p>
            Préférer plusieurs petites interfaces spécifiques plutôt qu’une
            interface globale. Un client ne doit pas être contraint de
            dépendre de méthodes qu’il n’utilise pas.
          </p>`
      },
      {
        title: 'Dependency Inversion Principle (DIP)',
        content: `
          <p>
            Dépendre d’abstractions (interfaces) plutôt que de classes
            concrètes. L’injection de dépendances (DI) permet de
            décorréler l’implémentation et de faciliter les tests.
          </p>`
      },
      {
        title: 'Mise en pratique',
        content: `
          <pre><code class="language-ts">
// Mauvais : tout dans une même classe
class ReportGenerator {
  generate(data) { /* … */ }
  saveToDb() { /* … */ }
  formatAsPdf() { /* … */ }
}

// SOLID : responsabilités séparées
interface Formatter { format(data): string; }
interface Persister { save(content): void; }

class PdfFormatter implements Formatter { /* … */ }
class DbPersister implements Persister { /* … */ }

class ReportService {
  constructor(
    private formatter: Formatter,
    private persister: Persister
  ) {}
  generateAndSave(data) {
    const content = this.formatter.format(data);
    this.persister.save(content);
  }
}
          </code></pre>`
      }
    ]
  },
  {
    id: 'cicd-docker-pipeline',
    title: 'Mon pipeline CI/CD avec Docker',
    subtitle: 'Lint, tests, docs & déploiement automatisé',
    summary: `
      Workflow multi-conteneurs garantissant qualité, tests et
      documentation à chaque itération.`,
    imageUrl: 'https://source.unsplash.com/featured/?ci-cd,docker,pipeline',
    paragraphs: [
      {
        title: 'Contexte et enjeux',
        content: `
          <p>
            Sur plusieurs micro-services (API Node, worker, front Angular),
            il fallait unifier le process : linting, génération de types
            dynamiques (Prisma & Hardhat), tests unitaires, documentation
            et déploiement sans friction. Mon objectif : ne jamais
            déployer un conteneur non testé ou sans docs à jour.
          </p>`
      },
      {
        title: 'Architecture multi-étapes Docker',
        content: `
          <ol>
            <li>
              <strong>Builder :</strong> install des dépendances, génération
              de types (Hardhat & Prisma), <code>npm run lint</code>,
              <code>npm test</code>.
            </li>
            <li>
              <strong>Docs :</strong> génération TSDoc & Swagger via NestJS
              ou TypeDoc, copie des artefacts.
            </li>
            <li>
              <strong>Run :</strong> image finale légère avec le dist et les
              fichiers de docs, prête à être déployée.
            </li>
          </ol>`
      },
      {
        title: 'Automatisation & orchestration',
        content: `
          <p>
            Un script Bash lance <code>docker build</code> pour chaque
            service en séquence, puis <code>docker push</code> si et seulement
            si tous les checks passent. Intégré dans GitLab CI et GitHub
            Actions, ce pipeline déclenche aussi des tests d’intégration
            sur Kubernetes via Terraform.
          </p>`
      },
      {
        title: 'Résultats et perspectives',
        content: `
          <ul>
            <li>Lint et tests exécutés en moins de 2 minutes.</li>
            <li>Documentation Swagger toujours à jour dans chaque conteneur.</li>
            <li>Déploiement continu sur un cluster k8s avec Helm.</li>
            <li>Prochaine étape : passer à un vrai framework GitOps (Argo CD).</li>
          </ul>`
      },
      {
        title: 'Bonnes pratiques',
        content: `
          <p>
            - Isoler chaque étape pour faciliter le debug.<br>
            - Versionner vos Dockerfiles et scripts CI.<br>
            - Surveiller les métriques (temps de build, couverture) pour
            optimiser en continu.
          </p>`
      }
    ]
  }
];
