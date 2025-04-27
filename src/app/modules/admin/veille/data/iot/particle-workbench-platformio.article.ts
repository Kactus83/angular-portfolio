import { Article } from '../../veille.types';

export const PARTICLE_WORKBENCH_PLATFORMIO: Article = {
  id: 'particle-workbench-platformio',
  title: 'Particle Workbench & PlatformIO',
  subtitle: 'Mes environnements de développement embarqué',
  summary: `
    Comparaison entre l’extension Particle officielle VS Code
    et l’outil PlatformIO pour gérer mes projets IoT.`,
  imageUrl: 'https://source.unsplash.com/featured/?platformio,vscode,embedded',
  paragraphs: [
    {
      title: 'Workbench VS Code',
      content: `
        <p>
          L’extension officielle offre :
        </p>
        <ul>
          <li>Intégration du <code>particle</code> CLI en UI.</li>
          <li>Flash OTA/USB en un clic et suivi des logs sérialisés.</li>
          <li>Autocomplete pour les APIs cloud et device.</li>
        </ul>
        <p>
          Idéal pour les prototypes rapides : configuration minimale
          et feedback instantané.
        </p>`
    },
    {
      title: 'Pourquoi PlatformIO ?',
      content: `
        <p>
          PlatformIO est un écosystème plus vaste :
        </p>
        <ul>
          <li>Support de plus de 800 plateformes (Arduino, ESP, STM32…).</li>
          <li>Gestion centralisée des librairies et dépendances.</li>
          <li>Framework de test unitaire (Unity) et CI intégrée.</li>
        </ul>
        <p>
          J’utilise PlatformIO pour mes projets multi-cibles,
          avec tests automatisés et versions de firmware
          gérées par environnement.
        </p>`
    },
    {
      title: 'Workflow unifié',
      content: `
        <p>
          Mon pipeline typique :
        </p>
        <ol>
          <li>Écriture du code & tests unitaires (Unity/PIO).</li>
          <li>Compilation pour Photon, ESP32 et Arduino.</li>
          <li>Flash OTA via CLI ou USB selon la plateforme.</li>
          <li>Validation post-flash : tests d’intégration automatique.</li>
        </ol>
        <p>
          GitHub Actions orchestre ces étapes : build, lint,
          test, déploiement OTA, avec notifications Slack.
        </p>`
    },
    {
      title: 'Avantages & limites',
      content: `
      <ul>
        <li>
          <strong>Workbench</strong> : prise en main éclair,
          parfait pour découvrir Particle.
        </li>
        <li>
          <strong>PlatformIO</strong> : robuste pour CI/CD
          et projets multi-plateformes.
        </li>
      </ul>
      <p>
        Selon la taille et l’ambition du projet, je
        passe de l’un à l’autre pour maximiser productivité
        et fiabilité.
      </p>`
    }
  ]
};
