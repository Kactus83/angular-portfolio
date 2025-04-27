import { Article } from '../../veille.types';

export const DESIGN_PATTERNS_GUIDE: Article = {
  id: 'design-patterns-guide',
  title: 'Design Patterns essentiels',
  subtitle: 'Factory, Singleton, Strategy…',
  summary: `
    Appliquer des solutions éprouvées pour résoudre des
    problèmes récurrents et rendre votre code plus robuste.`,
  imageUrl: 'https://source.unsplash.com/featured/?design,pattern,code',
  paragraphs: [
    {
      title: 'Pourquoi des patterns ?',
      content: `
        <p>
          Un pattern est un schéma réutilisable répondant à un problème
          fréquent (création, structure, comportement). Ils favorisent
          la cohérence et la communication au sein de l’équipe.
        </p>
        <p>
          J’ai d’abord découvert les patterns en codant un moteur de
          Space Invaders, où chaque pattern m’a évité de réinventer la roue.
        </p>`
    },
    {
      title: 'Patrons de création',
      content: `
        <ul>
          <li>
            <strong>Factory Method</strong> : déléguer la création à une
            classe/fonction spécialisée.
          </li>
          <li>
            <strong>Abstract Factory</strong> : produire des familles
            cohérentes d’objets (ex. thème clair vs sombre).
          </li>
          <li>
            <strong>Singleton</strong> : garantir une instance unique,
            utile pour un logger ou une config partagée.
          </li>
        </ul>`
    },
    {
      title: 'Patrons structurels',
      content: `
        <ul>
          <li>
            <strong>Adapter</strong> : faire communiquer deux API
            incompatibles (ex. transformer une réponse SOAP en JSON).
          </li>
          <li>
            <strong>Decorator</strong> : ajouter dynamiquement des
            responsabilités (logs, métriques) sans modifier la classe cible.
          </li>
          <li>
            <strong>Facade</strong> : fournir une interface simplifiée
            sur un ensemble complexe de classes.
          </li>
        </ul>`
    },
    {
      title: 'Patrons comportementaux',
      content: `
        <ul>
          <li>
            <strong>Observer</strong> : pub/sub interne pour notifier
            plusieurs composants (ex. UI, logs) d’un événement.
          </li>
          <li>
            <strong>Strategy</strong> : injecter l’algorithme au runtime
            (ex. algorithmes de tri, cache, authentification Passport).
          </li>
          <li>
            <strong>Command</strong> : encapsuler une opération en tant
            qu’objet, facilitant l’historique, l’annulation et le queueing.
          </li>
        </ul>`
    },
    {
      title: 'Exemples concrets',
      content: `
        <p>
          • <em>Factory</em> : création de DTOs selon le rôle d’un utilisateur.<br>
          • <em>Singleton</em> : client HTTP partagé dans tout le service.<br>
          • <em>Strategy</em> : choix dynamique entre cache en mémoire
          ou Redis.<br>
          • <em>Observer</em> : notification en temps réel dans
          un dashboard d’admin.
        </p>`
    },
    {
      title: 'Bonnes pratiques',
      content: `
        <p>
          • Ne forcez pas l’usage d’un pattern : choisissez-le si
          le contexte le justifie.<br>
          • Documentez votre intention pour faciliter la revue.
        </p>`
    },
    {
      title: 'Conclusion',
      content: `
        <p>
          Maîtriser ces patterns clés vous fera gagner en clarté,
          en testabilité et en maintenabilité, quel que soit
          le langage ou le framework.
        </p>`
    }
  ]
};
