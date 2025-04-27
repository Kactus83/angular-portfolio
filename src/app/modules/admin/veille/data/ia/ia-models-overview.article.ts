import { Article } from '../../veille.types';

export const IA_MODELS_OVERVIEW: Article = {
  id: 'ia-models-overview',
  title: 'Panorama des modèles IA utilisés',
  subtitle: 'ChatGPT, DeepSeek, Midjourney, Sora & HuggingFace',
  summary: `
    Tour d’horizon des plateformes que j’exploite pour générer
    du texte, des images et entraîner des micro-modèles.`,
  imageUrl: 'https://source.unsplash.com/featured/?AI,models,overview',
  paragraphs: [
    {
      title: 'ChatGPT (OpenAI)',
      content: `
        <p>
          Mon point d’entrée LLM pour du texte :
        </p>
        <ul>
          <li>API REST / WebSocket, latence ~200 ms.</li>
          <li>Cas pratiques : génération de code, rédaction SEO, support QA.</li>
          <li>Limite : coût GPU élevé pour gros volumes.</li>
        </ul>`
    },
    {
      title: 'DeepSeek',
      content: `
        <p>
          Challenger “green” :
        </p>
        <ul>
          <li>Quantization & distillation pour <30 % de consommation.</li>
          <li>Latence CPU-only acceptable (~500 ms).</li>
          <li>Recommandé pour batch-processing et déploiements edge.
          </li>
        </ul>`
    },
    {
      title: 'Midjourney',
      content: `
        <p>
          Générateur d’images via Discord :
        </p>
        <ul>
          <li>Prise en main par simple prompt dans un salon privé.</li>
          <li>Excellente créativité visuelle (concept-art, moodboards).</li>
          <li>Limite : coût par image (~0,10 $) et file d’attente publique.</li>
        </ul>`
    },
    {
      title: 'Sora AI',
      content: `
        <p>
          Plateforme de fine-tuning accessible :
        </p>
        <ul>
          <li>Upload de dataset CSV/JSON, ajustement en quelques minutes.</li>
          <li>Usage : chatbot interne, résumé spécifique à un domaine.</li>
          <li>Limite : taille de corpus max ~10 000 phrases.</li>
        </ul>`
    },
    {
      title: 'HuggingFace',
      content: `
        <p>
          Hub open-source & bibliothèque :
        </p>
        <ul>
          <li>+10 000 modèles (BERT, GPT-Neo, T5…).</li>
          <li>Pipelines prêtes à l’emploi (classification, NER, génération).</li>
          <li>Intégration facile via <code>@huggingface/transformers</code>.</li>
        </ul>`
    },
    {
      title: 'Choisir le bon outil',
      content: `
        <p>
          • Pour du prototypage express : ChatGPT.  
          • Pour de l’échelle “low-cost” : DeepSeek.  
          • Pour du visuel : Midjourney.  
          • Pour custom : Sora.  
          • Pour l’open-source : HuggingFace.
        </p>`
    }
  ]
};
