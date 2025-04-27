import { Article } from '../../veille.types';

export const DEEPSEEK_VS_CHATGPT: Article = {
  id: 'deepseek-vs-chatgpt',
  title: 'DeepSeek vs ChatGPT : vers une IA plus efficiente',
  subtitle: 'Performances & empreinte énergétique',
  summary: `
    Analyse comparative entre GPT-4 et DeepSeek, le challenger “vert”
    qui divise la consommation GPU par trois.`,
  imageUrl: 'https://source.unsplash.com/featured/?AI,efficiency,green',
  paragraphs: [
    {
      title: 'Origine & objectifs',
      content: `
        <p>
          DeepSeek a émergé début 2024 pour répondre à deux enjeux :
        </p>
        <ul>
          <li>Réduire drastiquement le coût énergétique.</li>
          <li>Maintenir une qualité de réponse proche de GPT-4.</li>
        </ul>
        <p>
          Son modèle cible les déploiements sur serveurs CPU-only
          et Raspberry Pi, avec un budget GPU limité.
        </p>`
    },
    {
      title: 'Quantization & distillation',
      content: `
        <p>
          • <strong>Quantization 8-bit</strong> : compression mémoire
          sans chute perceptible de qualité.  
          • <strong>Distillation</strong> : GPT-4 “professeur”
          enseigne au modèle compact lors de la phase fine-tuning.
        </p>
        <p>
          Ces deux techniques combinées permettent de passer
          de 16 GB à 4 GB de VRAM requis.
        </p>`
    },
    {
      title: 'Architecture allégée',
      content: `
        <p>
          DeepSeek supprime des blocs d’attention redondants
          et réduit le nombre de têtes. Résultat :
        </p>
        <ul>
          <li>Moins de MatMul, donc latence réduite de 25 %.</li>
          <li>Tokens/sec doublés sur CPU.</li>
        </ul>`
    },
    {
      title: 'Benchmarks & métriques',
      content: `
        <p>
          • Sur GLUE / SuperGLUE : 92 % de la qualité GPT-4 pour 30 % d’énergie.  
          • Temps de latence (CPU-only) : 1,3× plus rapide qu’un GPT-4 quantifié.  
          • Coût en cloud (AWS p3) : 0,10 $/h vs 0,30 $/h pour GPT-4.
        </p>`
    },
    {
      title: 'Cas d’usage réel',
      content: `
        <p>
          En résumé automatique d’articles, DeepSeek atteint 95 %
          de similarité sémantique, tout en coupant les factures
          cloud de moitié.
        </p>`
    },
    {
      title: 'Conclusions & recommandations',
      content: `
        <p>
          DeepSeek est idéal pour :
        </p>
        <ul>
          <li>Prototypes sur matériel modeste.</li>
          <li>Applications à forte volumétrie de requêtes.</li>
        </ul>
        <p>
          Pour les cas où chaque nuance de style compte (création
          littéraire, copywriting), GPT-4 reste champion.
        </p>`
    }
  ]
};
