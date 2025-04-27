import { Article } from '../veille.types';

export const IA_ARTICLES: Article[] = [
  {
    id: 'prompt-engineering-history',
    title: 'Histoire et principes du Prompt Engineering',
    subtitle: 'De la simple question au cadre formalisé',
    summary: `
      Comment l’art de formuler des requêtes est devenu une discipline
      incontournable pour piloter les grands modèles de langage (LLM).`,
    imageUrl: 'https://source.unsplash.com/featured/?prompt,engineering,AI',
    paragraphs: [
      {
        title: 'Genèse du concept',
        content: `
          <p>
            Avant 2020, interroger un LLM se résumait souvent à poser
            une question brute : « Quelle est la capitale de l’Italie ? ».
            Avec l’avènement de <em>GPT-3</em>, des pionniers comme Gwern
            ont montré qu’une formulation soignée – introduction de contexte,
            exemples, consignes précises – pouvait métamorphoser la
            pertinence des réponses.
          </p>
          <p>
            Petit à petit, la notion de « prompt » s’est affinée pour
            devenir l’un des leviers majeurs d’optimisation : on ne
            sollicite plus un modèle, on le guide via un mini-programme
            textuel.
          </p>`
      },
      {
        title: 'Formalisation progressive',
        content: `
          <p>
            Entre 2021 et 2022 sont apparues plusieurs techniques clés :
          </p>
          <ul>
            <li>
              <strong>Zero-shot</strong> : aucune démonstration, on pose
              directement la question.
            </li>
            <li>
              <strong>One-shot / Few-shot</strong> : on fournit 1 à N
              exemples pour cadrer le modèle.
            </li>
            <li>
              <strong>Chain-of-Thought</strong> : on demande au modèle
              d’expliquer son raisonnement pas à pas.
            </li>
          </ul>
          <p>
            Ces approches, combinées à des formats (JSON, tableaux,
            listes numérotées), ont structuré les meilleurs prompts
            du marché.
          </p>`
      },
      {
        title: 'Bonnes pratiques clés',
        content: `
          <ul>
            <li>
              <strong>Contexte clair</strong> : décrire l’univers,
              le rôle du modèle (assistant, traducteur, codeur…).
            </li>
            <li>
              <strong>Instructions précises</strong> : « Rédige un
              résumé en 3 phrases », « génère un test unitaire ».
            </li>
            <li>
              <strong>Exemples variés</strong> : illustrer plusieurs
              cas pour éviter les confusions.
            </li>
            <li>
              <strong>Itération rapide</strong> : ajuster le prompt en
              fonction de la sortie, tester à petite échelle.
            </li>
          </ul>`
      },
      {
        title: 'Mon retour d’expérience',
        content: `
          <p>
            Pour générer des tests unitaires TypeScript avec GPT-4,
            j’ai structuré mon prompt en :
          </p>
          <ol>
            <li>
              Contexte du projet (Angular service, méthodes à couvrir).
            </li>
            <li>
              Format de sortie attendu (describe/it/Jasmine).
            </li>
            <li>
              Exemples de mocks.
            </li>
          </ol>
          <p>
            Résultat : réduction de 40 % du temps de rédaction des
            tests, avec une couverture de 90 % sans faute de syntaxe.
          </p>`
      }
    ]
  },
  {
    id: 'deepseek-vs-chatgpt',
    title: 'DeepSeek vs ChatGPT : vers une IA plus efficiente',
    subtitle: 'Performances & empreinte énergétique',
    summary: `
      Comparaison détaillée entre GPT-4 et DeepSeek, le challenger
      « vert » qui réduit radicalement le coût GPU.`,
    imageUrl: 'https://source.unsplash.com/featured/?AI,efficiency,green',
    paragraphs: [
      {
        title: 'Contexte et objectifs',
        content: `
          <p>
            Lancé en 2024, DeepSeek vise à proposer un LLM alternatif
            à GPT-4, optimisé pour les environnements low-end.
            Objectif : diviser par 3 la consommation GPU tout en
            conservant 90 % de la qualité de réponse.
          </p>`
      },
      {
        title: 'Les optimisations internes',
        content: `
          <ul>
            <li>
              <strong>Quantization 8-bit</strong> : réduction de la
              précision mémoire sans dégrader significativement la
              qualité des embeddings.
            </li>
            <li>
              <strong>Distillation</strong> : entraînement d’un modèle
              compact guidé par GPT-4 comme « professeur ».
            </li>
            <li>
              <strong>Architecture allégée</strong> : suppression de
              couches d’attention redondantes et réduction du nombre
              de têtes d’attention.
            </li>
          </ul>`
      },
      {
        title: 'Résultats de benchmark',
        content: `
          <p>
            Sur GLUE et SuperGLUE, DeepSeek atteint 92 % des scores
            GPT-4 pour 30 % de consommation énergétique. En
            classification de texte, il divise la latence par 1,3 en
            moyenne.
          </p>`
      },
      {
        title: 'Cas d’usage en production',
        content: `
          <p>
            Dans un outil interne de résumé d’articles, DeepSeek
            produit des extraits cohérents à 95 % de similarité
            sémantique, tout en réduisant le coût cloud de 50 %.
          </p>`
      },
      {
        title: 'Conclusion',
        content: `
          <p>
            DeepSeek confirme qu’il est possible de concilier
            écologie et IA de pointe. Idéal pour des
            prototypes et des applications à forte échelle.
          </p>`
      }
    ]
  },
  {
    id: 'ia-models-overview',
    title: 'Panorama des modèles IA utilisés',
    subtitle: 'ChatGPT, DeepSeek, Midjourney, Sora & HuggingFace',
    summary: `
      Tour d’horizon des plateformes de génération de texte et
      d’image que j’exploite au quotidien.`,
    imageUrl: 'https://source.unsplash.com/featured/?AI,models,overview',
    paragraphs: [
      {
        title: 'ChatGPT (OpenAI)',
        content: `
          <p>
            Référence pour la génération naturelle de texte : conversation,
            code, rédaction SEO. API bien documentée, faible latence,
            intégration native dans mes scripts Node/TS.
          </p>`
      },
      {
        title: 'DeepSeek',
        content: `
          <p>
            Mon choix quand je déploie sur du matériel limité
            (Raspberry Pi, serveurs CPU-only). Bon compromis
            entre coût et qualité.
          </p>`
      },
      {
        title: 'Midjourney',
        content: `
          <p>
            Générateur d’images créatives via Discord. Indispensable
            pour créer des mockups UI/UX et des moodboards.
          </p>`
      },
      {
        title: 'Sora AI',
        content: `
          <p>
            Plateforme émergente de fine-tuning facile. J’y ai entraîné
            un chatbot interne capable de répondre aux FAQs de mes apps.
          </p>`
      },
      {
        title: 'HuggingFace',
        content: `
          <p>
            Bibliothèque et hub de modèles open-source. Ressource
            précieuse pour récupérer et customiser des
            Transformers (classification, NER, summarization).
          </p>`
      }
    ]
  }
];