import { Article } from '../veille.types';

export const ARCHITECTURE_ARTICLES: Article[] = [
  {
    id: 'clean-architecture-book',
    title: 'Clean Architecture : organiser vos microservices',
    subtitle: 'Couches concentriques & dépendances inversées',
    summary: `
      Comprendre comment structurer votre backend en couches
      pour découpler votre logique métier et faciliter l’évolution.`,
    imageUrl: 'https://source.unsplash.com/featured/?architecture,software,clean',
    paragraphs: [
      {
        title: 'Pourquoi une bonne architecture ?',
        content: `
          <p>
            Dans un écosystème de microservices, un couplage excessif
            entraîne des temps de mise à jour et de déploiement très
            longs. <em>Clean Architecture</em> de Robert C. Martin
            propose un modèle où la dépendance des couches va toujours
            du plus extérieur (frameworks, BD, UI) vers le plus intérieur
            (logique métier). Cela garantit que votre cœur reste
            indépendant des détails techniques.
          </p>`
      },
      {
        title: 'Les quatre couches concentriques',
        content: `
          <ol>
            <li>
              <strong>Entities</strong> : objets métier purs, sans aucune
              dépendance externe (ex. : <code>User</code>, <code>Order</code>).
            </li>
            <li>
              <strong>Use Cases</strong> : scripts orchestrant les règles
              métier (ex. : <code>CreateOrder</code>, <code>ValidateUser</code>).
            </li>
            <li>
              <strong>Interface Adapters</strong> : traducteurs vers/depuis
              le monde extérieur (controllers HTTP, presenters, gateways DB).
            </li>
            <li>
              <strong>Frameworks & Drivers</strong> : couches externes
              (Express, NestJS, bases de données, UI).
            </li>
          </ol>`
      },
      {
        title: 'Le principe de dépendance',
        content: `
          <p>
            Seules les couches internes peuvent être référencées par
            les couches externes. Ni votre base de données, ni votre
            framework web ne doivent importer vos entités. Ainsi, vous
            pouvez changer de framework ou de moteur de stockage sans
            toucher à votre logique métier.
          </p>`
      },
      {
        title: 'Exemple TypeScript',
        content: `
          <pre><code class="language-ts">
// Entities (domaine)
export interface User { id: string; name: string; }

// Use Case
export class CreateUser {
  constructor(private readonly repo: UserRepository) {}
  async execute(data: User): Promise<User> {
    // validation, règles métier...
    return this.repo.save(data);
  }
}

// Adapter HTTP (Express ou NestJS)
app.post('/users', async (req, res) => {
  const user = await new CreateUser(userRepo).execute(req.body);
  res.status(201).json(user);
});
          </code></pre>`
      },
      {
        title: 'Mon retour d’expérience',
        content: `
          <p>
            Sur un projet de template de microservices, l’application
            de cette architecture a permis à chaque équipe de
            travailler indépendamment sur la couche Use Cases sans
            craindre les impacts de migrations de BD ou de framework.
            Les tests unitaires portent exclusivement sur la couche
            Use Cases, garantissant une couverture simple et rapide.
          </p>`
      },
      {
        title: 'À retenir',
        content: `
          <p>
            Adopter la <em>Clean Architecture</em> dès la phase de
            prototypage, c’est se donner la liberté de faire évoluer
            son application sans craindre de tout casser.
          </p>`
      }
    ]
  },

  {
    id: 'design-patterns-guide',
    title: 'Design Patterns essentiels',
    subtitle: 'Factory, Singleton, Strategy…',
    summary: `
      Appliquer des solutions éprouvées pour résoudre des
      problèmes récurrents et rendre votre code plus robuste.`,
    imageUrl: 'https://source.unsplash.com/featured/?design,pattern,code',
    paragraphs: [
      {
        title: 'Pourquoi utiliser des patterns ?',
        content: `
          <p>
            Les <em>Design Patterns</em> sont des schémas de conception
            permettant de répondre à des besoins récurrents (création,
            structure, comportement). Ils évitent de réinventer la roue
            et favorisent la compréhension mutuelle dans l’équipe.
          </p>`
      },
      {
        title: 'Patrons de création',
        content: `
          <ul>
            <li>
              <strong>Factory Method :</strong> déléguer la création
              d’objets à des sous‐classes ou des fonctions
              configurables.
            </li>
            <li>
              <strong>Singleton :</strong> garantir une instance unique
              (ex. logger global, connexion DB partagée).
            </li>
            <li>
              <strong>Abstract Factory :</strong> groupe de factories
              cohérentes (ex. UI Windows vs UI Mac).
            </li>
          </ul>`
      },
      {
        title: 'Patrons structurels',
        content: `
          <ul>
            <li>
              <strong>Adapter :</strong> faire communiquer deux interfaces
              incompatibles (ex. SOAP → REST).
            </li>
            <li>
              <strong>Decorator :</strong> ajouter dynamiquement des
              responsabilités (ex. logs, métriques) autour d’un objet.
            </li>
            <li>
              <strong>Facade :</strong> fournir une interface simplifiée
              à un sous‐système complexe.
            </li>
          </ul>`
      },
      {
        title: 'Patrons comportementaux',
        content: `
          <ul>
            <li>
              <strong>Observer :</strong> implémenter un système de
              publication/abonnement pour gérer les événements
              internes (ex. notifications en temps réel).
            </li>
            <li>
              <strong>Strategy :</strong> injecter au runtime une
              implémentation d’algorithme (ex. algorithmes de cache,
              stratégies de tri).
            </li>
            <li>
              <strong>Command :</strong> encapsuler une requête
              sous forme d’objet, facilitant l’annulation ou le
              logging des actions.
            </li>
          </ul>`
      },
      {
        title: 'Exemples dans mes projets',
        content: `
          <p>
            - <em>Factory</em> pour générer dynamiquement des DTO
            selon le rôle utilisateur.<br>
            - <em>Strategy</em> pour permuter facilement entre
            stockage local ou distant.<br>
            - <em>Observer</em> dans un moteur Space Invaders
            pour gérer les collisions et les événements de jeu.
          </p>`
      },
      {
        title: 'Conclusion',
        content: `
          <p>
            Une maîtrise des patterns clés permet de structurer
            votre code de manière cohérente, d’améliorer la
            maintenabilité et de faciliter les évolutions.
          </p>`
      }
    ]
  },

  {
    id: 'express-to-nestjs',
    title: 'Du middleware Express à NestJS',
    subtitle: 'Pourquoi migrer votre API Node ?',
    summary: `
      Explorer les gains de productivité, de testabilité et
      de structure offerts par NestJS par rapport à Express.`,
    imageUrl: 'https://source.unsplash.com/featured/?nestjs,nodejs,framework',
    paragraphs: [
      {
        title: 'Les limites d’Express',
        content: `
          <ul>
            <li>
              <strong>Pas de structure imposée :</strong> chaque projet
              devient un puzzle de dossiers et de middlewares.
            </li>
            <li>
              <strong>DI manuelle :</strong> gestion complexe des
              dépendances, boilerplate élevé pour injecter un service.
            </li>
            <li>
              <strong>Documentation & tests :</strong> à configurer
              soi‐même (Swagger, Jest, fixtures).
            </li>
          </ul>`
      },
      {
        title: 'NestJS : modularité et annotations',
        content: `
          <p>
            NestJS s’appuie sur TypeScript et les décorateurs pour offrir :
          </p>
          <ul>
            <li>
              <strong>Modules :</strong> découpage clair en domaines
              fonctionnels (<code>@Module</code>).
            </li>
            <li>
              <strong>Contrôleurs & Providers :</strong> couches HTTP
              et services avec DI <em>out‐of‐the‐box</em>.
            </li>
            <li>
              <strong>Pipes, Guards, Interceptors :</strong> points
              d’extension pour valider, sécuriser et logger.
            </li>
          </ul>`
      },
      {
        title: 'Exemple schématique',
        content: `
          <pre><code class="language-ts">
// Express
app.get('/users', (req, res) =>
  userService.findAll().then(u => res.json(u))
);

// NestJS
@Controller('users')
export class UsersController {
  constructor(private readonly svc: UserService) {}

  @Get()
  findAll() {
    return this.svc.findAll();
  }
}
          </code></pre>`
      },
      {
        title: 'Intégration Swagger & tests',
        content: `
          <p>
            - <code>@nestjs/swagger</code> génère automatiquement la
            documentation OpenAPI.<br>
            - Modules de test fournis : <code>TestingModule</code>,
            <code>supertest</code> prêt à l’emploi.
          </p>`
      },
      {
        title: 'Bénéfices concrets',
        content: `
          <ul>
            <li>
              Démarrage et onboarding plus rapides pour les nouveaux
              développeurs.
            </li>
            <li>
              Couverture de tests accrue grâce aux helpers intégrés.
            </li>
            <li>
              Maintenance simplifiée : ajouter un nouveau module
              sans casser l’existant.
            </li>
          </ul>`
      },
      {
        title: 'Conclusion',
        content: `
          <p>
            Passer d’Express à NestJS a profondément structuré
            mes API Node, réduit le boilerplate et
            accéléré la mise en place de standards de qualité
            (tests, documentation, DI).
          </p>`
      }
    ]
  }
];