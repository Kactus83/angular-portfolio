import { Article } from '../../veille.types';

export const CLEAN_CODE_BOOK: Article = {
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
          À l’automne 2023, mes projets TypeScript prenaient de l’ampleur : routes,
          services métiers, composants Angular… Mon code ressemblait à un champ
          de bataille où chaque nouvel ajout risquait de tout casser.  
          <em>Clean Code</em> m’est apparu comme un guide pour retrouver
          un équilibre et rendre mon travail plus serein.
        </p>
        <p>
          J’ai commencé par appliquer les premiers chapitres à un petit script
          de génération de reports, en multipliant les tests avant/après
          refactoring pour mesurer l’impact en termes de lisibilité.
        </p>`
    },
    {
      title: 'Structure de l’ouvrage',
      content: `
        <p>
          Le livre s’organise en trois parties :
        </p>
        <ol>
          <li>
            <strong>Principes</strong> (naming, functions, comments, formatting)
          </li>
          <li>
            <strong>Code Smells</strong> & <strong>Refactoring</strong>
          </li>
          <li>
            <strong>Outils</strong> (unit tests, classes, systèmes)
          </li>
        </ol>
        <p>
          Cette progression m’a aidé à garder en tête un plan d’attaque
          à chaque relecture de code.
        </p>`
    },
    {
      title: 'Nommage explicite',
      content: `
        <p>
          Uncle Bob insiste : un nom doit raconter toute l’histoire.
          Par exemple, j’ai remplacé dans un de mes services
          <code>getData()</code> par
          <code>fetchLatestCustomerOrders()</code>, ce qui a économisé
          des heures de recherche lors d’un débogage.
        </p>`
    },
    {
      title: 'Fonctions & structures de données',
      content: `
        <p>
          • <strong>Fonctions courtes</strong> (<20 lignes) et mono‐responsabilité.  
          • <strong>Objets et Data Abstractions</strong> pour encapsuler
          la logique métier, plutôt que des tableaux bruts.
        </p>
        <p>
          J’ai appliqué ces principes à mon module de calcul de factures :
          découpage en trois utilitaires indépendants et tests unitaires dédiés.
        </p>`
    },
    {
      title: 'Gestion des erreurs & code smells',
      content: `
        <p>
          Préférer <code>try/catch</code> et exceptions documentées plutôt
          qu’un enchevêtrement de retours booléens.  
          Qualifier les erreurs (ex. <code>InvalidOrderError</code>) aide
          au tri lorsque plusieurs layers interceptent l’erreur.
        </p>
        <p>
          Le livre identifie plus de 20 code smells : j’ai commencé
          par éliminer <em>Long Method</em> et <em>Data Clumps</em>.
        </p>`
    },
    {
      title: 'Refactoring & métriques',
      content: `
        <p>
          Chaque refactoring doit être « safe » grâce à une suite de tests
          unitaires. J’ai mesuré :
        </p>
        <ul>
          <li>Couverture de tests (+15 % sur un module core)</li>
          <li>Complexité cyclomatique (–30 % sur mes services)</li>
        </ul>
        <p>
          Ces chiffres m’ont convaincu de l’intérêt de la discipline.
        </p>`
    },
    {
      title: 'Bénéfices sur le long terme',
      content: `
        <p>
          Depuis, mes pull-requests se font en < 10 min, la revue est plus
          constructive, et l’on détecte moins de bugs en prod.  
          <em>Clean Code</em> est devenu un réflexe à chaque nouvelle
          branche feature.
        </p>
        <p>
          <strong>À retenir :</strong> ce n’est pas un manuel à lire une fois,
          mais un compagnon de route à revisiter régulièrement.
        </p>`
    }
  ]
};
