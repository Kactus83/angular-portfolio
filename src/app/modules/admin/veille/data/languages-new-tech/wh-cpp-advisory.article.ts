import { Article } from '../../veille.types';

export const WH_CPP_ADVISORY: Article = {
  id: 'wh-cpp-advisory',
  title: '« Fuir le C++ » : la recommandation de la Maison-Blanche',
  subtitle: 'Vers des langages memory-safe',
  summary: `
    En 2023, l’OMB et la CISA ont alerté sur les vulnérabilités C++ et
    encouragé Rust & Go pour renforcer la cybersécurité.`,
  imageUrl: 'https://source.unsplash.com/featured/?cplusplus,security,cyber',
  paragraphs: [
    {
      title: 'Contexte officiel',
      content: `
        <p>
          Dans l’<a href="https://www.lemondeinformatique.fr/actualites/lire-la-maison-blanche-exhorte-les-developpeurs-a-abandonner-c-et-c-93089.html" target="_blank">
          Executive Order sur la cybersécurité</a> (janv. 2023),
          l’OMB et la CISA pointent les failles mémoire
          (buffer overflows, use-after-free) comme vecteurs majeurs
          d’attaques.
        </p>`
    },
    {
      title: 'Risques du C++',
      content: `
        <ul>
          <li>Gestion manuelle (<code>new/delete</code>) sans garantie.</li>
          <li>Pointeurs bruts exposés à <em>dangling pointers</em>.</li>
          <li>Pas de vérification automatique contre les overflows.</li>
        </ul>`
    },
    {
      title: 'Pourquoi Rust & Go ?',
      content: `
        <p>
          <strong>Rust</strong> : son <em>borrow checker</em> et son
          compilateur éliminent les erreurs mémoire avant l’exécution.
          <br>
          <strong>Go</strong> : garbage collector et slices sécurisées
          réduisent drastiquement les risques tout en conservant
          une syntaxe simple.
        </p>`
    },
    {
      title: 'Impact pour les équipes',
      content: `
        <p>
          Adopter un langage memory-safe implique un temps d’apprentissage,
          mais les coûts de correctifs en production et les audits de
          sécurité s’en trouvent fortement allégés. Ces recommandations
          visent à renforcer la résilience des infrastructures critiques.
        </p>`
    }
  ]
};
