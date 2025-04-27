import { Article } from '../../veille.types';

export const CLEAN_ARCHITECTURE_BOOK: Article = {
  id: 'clean-architecture-book',
  title: 'Clean Architecture : organiser vos microservices',
  subtitle: 'Couches concentriques & dépendances inversées',
  summary: `
    Comprendre comment structurer votre backend en couches
    pour découpler votre logique métier et faciliter l’évolution.`,
  imageUrl: 'https://source.unsplash.com/featured/?architecture,software,clean',
  paragraphs: [
    {
      title: 'Genèse de ma réflexion',
      content: `
        <p>
          En 2022, travaillant sur un template de microservices pour un projet
          maritime, je me suis heurté à un couplage trop fort entre Express,
          la base Mongo et ma logique métier. Chaque refonte de schéma de données
          imposait un refactoring profond. C’est à ce moment-là que
          <em>Clean Architecture</em> de Robert C. Martin est entré en scène.
        </p>
        <p>
          J’ai décidé d’appliquer ses préceptes pour voir si je pouvais réellement
          isoler mon « core » métier des détails techniques.
        </p>`
    },
    {
      title: 'Le modèle concentrique',
      content: `
        <p>
          L’architecture se compose de quatre couches :
        </p>
        <ol>
          <li>
            <strong>Entities</strong> : objets métier purs, sans dépendance.
          </li>
          <li>
            <strong>Use Cases</strong> : orchestration des règles métier.
          </li>
          <li>
            <strong>Interface Adapters</strong> : controllers, presenters,
            gateways DB.
          </li>
          <li>
            <strong>Frameworks & Drivers</strong> : Express/NestJS, ORM,
            UI, etc.
          </li>
        </ol>
        <p>
          Le flux de dépendance ne va que vers l’intérieur : un adapter HTTP
          peut appeler un cas d’usage, mais jamais l’inverse.
        </p>`
    },
    {
      title: 'Illustration TypeScript',
      content: `
        <pre><code class="language-ts">
// Entities
export interface User { id: string; name: string; }

// Use Case
export class CreateUser {
  constructor(private readonly repo: UserRepository) {}
  async execute(dto: UserDto): Promise<User> {
    // validation, règles métier...
    return this.repo.save({ id: uuid(), name: dto.name });
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
      title: 'Tests & isolation',
      content: `
        <p>
          Grâce à cette découpe, j’ai pu écrire des tests unitaires sur
          <code>CreateUser</code> en mockant simplement <code>UserRepository</code>,
          sans aucun serveur HTTP ni base de données réelle.
        </p>
        <p>
          Résultat mes builds CI pour la couche Use Cases sont passés de
          45 s à 12 s, et la couverture de tests a grimpé de 60 % à 92 %.
        </p>`
    },
    {
      title: 'Retour d’expérience',
      content: `
        <p>
          Après adoption, chaque membre de l’équipe a pu travailler
          indépendamment sur les use cases ou les adapters (DB, queue,
          notifications) sans se marcher sur les pieds.
        </p>
        <p>
          Lors d’une migration d’Express vers NestJS, seuls les adapters
          ont été affectés – le cœur métier est resté intact.
        </p>`
    },
    {
      title: 'À retenir',
      content: `
        <p>
          Adoptez <em>Clean Architecture</em> dès le prototype : vous
          gagnerez en flexibilité, maintenabilité et facilité de test.
        </p>`
    }
  ]
};
