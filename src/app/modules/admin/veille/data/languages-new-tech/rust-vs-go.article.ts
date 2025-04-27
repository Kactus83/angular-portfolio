import { Article } from '../../veille.types';

export const RUST_VS_GO: Article = {
  id: 'rust-vs-go',
  title: 'Pourquoi Rust plutôt que Go ?',
  subtitle: 'Sécurité mémoire vs simplicité syntaxique',
  summary: `
    Comparaison des deux langages pour leurs modèles de mémoire,
    leur ergonomie et leurs performances.`,
  imageUrl: 'https://source.unsplash.com/featured/?rust,go,programming',
  paragraphs: [
    {
      title: 'Contexte personnel',
      content: `
        <p>
          En venant de TypeScript, je cherchais un langage compilé offrant
          un typage strict et une gestion mémoire sûre. J’ai découvert Rust,
          dont le modèle d’ownership élimine toute fuite à la compilation.
          Go, plus simple à aborder, m’a séduit par sa syntaxe épurée et ses
          goroutines légères, mais j’ai finalement opté pour Rust pour la
          robustesse qu’il apporte à long terme.
        </p>`
    },
    {
      title: 'Ownership & Borrowing',
      content: `
        <p>
          Rust utilise un <em>borrow checker</em> qui garantit qu’aucune
          référence ne soit invalide pendant l’exécution. Les règles
          d’ownership :
        </p>
        <ul>
          <li>Une seule variable possède une donnée à un instant (<code>move</code>).</li>
          <li>On peut <em>emprunter</em> (<code>&T</code>) ou <em>emprunter mutablement</em> (<code>&mut T</code>) selon le besoin.</li>
          <li>Tout est vérifié à la compilation, sans overhead runtime.</li>
        </ul>`
    },
    {
      title: 'Concurrence sans data race',
      content: `
        <p>
          Grâce aux traits <code>Send</code> et <code>Sync</code>, Rust
          interdit les data races à la compilation. Contrairement à Go
          dont le garbage collector peut introduire des pauses,
          Rust permet un contrôle fin de la mémoire, idéal pour les
          systèmes temps réel.
        </p>`
    },
    {
      title: 'Quelques benchmarks illustratifs',
      content: `
        <p>
          <strong>Temps de compilation</strong> (projet simple CLI) :
          Go ~0,5 s vs Rust ~1,5 s<br>
          <strong>Performance d’exécution</strong> (boucle intensive) :
          Rust ~1× vs Go ~0,8×<br>
          <strong>Taille binaire</strong> (release, strip) :
          Rust ~1,2 Mo vs Go ~2,5 Mo
        </p>`
    },
    {
      title: 'Simplicité vs contrôle',
      content: `
        <p>
          Go brille par sa rapidité de prise en main (gestion automatique
          de la mémoire, goroutines), mais Rust gagne en garanties.
          Pour des services critiques ou des outils système, Rust 
          devient vite incontournable.
        </p>`
    },
    {
      title: 'Conclusion',
      content: `
        <p>
          Rust impose un effort d’apprentissage plus important, mais offre
          une sécurité mémoire et des performances hors pair. Go reste un
          excellent choix pour des prototypes rapides ou des services
          moins sensibles, tandis que Rust devient le pilier de projets
          à long terme et à exigences fortes.
        </p>`
    }
  ]
};
