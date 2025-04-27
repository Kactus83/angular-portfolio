import { Article } from '../../veille.types';

export const PROMPT_ENGINEERING_HISTORY: Article = {
  id: 'prompt-engineering-history',
  title: 'Histoire et principes du Prompt Engineering',
  subtitle: 'De la simple question au cadre formalisé',
  summary: `
    Comment l’art de formuler des requêtes est devenu une discipline
    incontournable pour piloter efficacement les grands modèles de langage.`,
  imageUrl: 'https://source.unsplash.com/featured/?prompt,engineering,AI',
  paragraphs: [
    {
      title: 'Des débuts artisanaux',
      content: `
        <p>
          En 2018–2019, interroger un modèle de langage revenait souvent
          à taper un simple prompt : “Raconte-moi une histoire.”  
          Sans consignes, les résultats étaient variables et souvent hors sujet.
        </p>
        <p>
          Mon premier essai avec un prototype BERT-based a tourné court : 
          pas de contexte, pas d’instructions, juste une “question brute”.
        </p>`
    },
    {
      title: 'Naissance d’une pratique',
      content: `
        <p>
          Avec l’arrivée de <em>GPT-3</em> (juin 2020), la communauté a
          vite compris que les formulations longues, contenant contexte
          et exemples, produisaient des réponses bien plus précises.
        </p>
        <ul>
          <li><strong>Gwern Branwen</strong> publie en octobre 2020 des “prompt leaks”.</li>
          <li><strong>OpenAI</strong> documente en open source ses meilleures recettes.</li>
        </ul>`
    },
    {
      title: 'Techniques clés (2021–2022)',
      content: `
        <p>
          Plusieurs patterns se sont cristallisés :
        </p>
        <ul>
          <li>
            <strong>Zero-shot</strong> – poser la question sans exemples.
          </li>
          <li>
            <strong>Few-shot</strong> – fournir 2–5 exemples pour cadrer.
          </li>
          <li>
            <strong>Chain-of-Thought</strong> – demander un raisonnement pas à pas.
          </li>
        </ul>
        <p>
          J’ai testé ces approches sur un service d’aide à la génération
          de tests unitaires : la qualité de sortie a bondi de 30 % avec
          une simple restructuration du prompt.
        </p>`
    },
    {
      title: 'Anatomie d’un prompt performant',
      content: `
        <p>
          Pour guider GPT-4, j’adopte toujours cette structure :
        </p>
        <ol>
          <li>
            <strong>Contexte & rôle</strong> (ex. “Vous êtes un expert Angular.”).
          </li>
          <li>
            <strong>Instruction précise</strong> (“Générez un test unitaire…”).
          </li>
          <li>
            <strong>Format de sortie</strong> (“Répondez en JSON…”).
          </li>
          <li>
            <strong>Exemples concis</strong> (2 cas typiques).
          </li>
        </ol>`
    },
    {
      title: 'Bonnes pratiques & limites',
      content: `
        <p>
          • Toujours vérifier la <em>robustesse</em> : un prompt trop verbeux
          peut dépasser la limite de tokens.  
          • Itérer rapidement : moins de 5 s par requête pour ajuster en live.  
          • Attention à l’effet « hallucination » : ne pas déléguer les faits critiques.
        </p>`
    },
    {
      title: 'Mon retour d’expérience',
      content: `
        <p>
          En l’utilisant pour documenter automatiquement mes services
          NestJS, j’ai gagné 50 % de temps de rédaction et conservé
          une cohérence stylistique sur +30 endpoints.
        </p>
        <p>
          Le prompt a évolué de 4 lignes à 12 lignes pour atteindre
          un équilibre entre contexte et concision.
        </p>`
    }
  ]
};
