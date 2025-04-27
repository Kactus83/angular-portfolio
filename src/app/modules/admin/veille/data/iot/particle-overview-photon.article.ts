import { Article } from '../../veille.types';

export const PARTICLE_OVERVIEW_PHOTON: Article = {
  id: 'particle-overview-photon',
  title: 'Découverte de Particle & Photon',
  subtitle: 'Du premier Photon au Photon 2',
  summary: `
    Pourquoi j’ai adopté Particle pour mes prototypes IoT et comment
    l’évolution vers le Photon 2 a transformé ma pratique.`,
  imageUrl: 'https://source.unsplash.com/featured/?particle,photon,microcontroller',
  paragraphs: [
    {
      title: 'Écosystème Particle',
      content: `
        <p>
          Lancée en 2015, la plateforme Particle regroupe matériel,
          firmware et cloud sous une même console web. J’ai commencé
          avec le Photon v1 pour sa prise en main immédiate :
        </p>
        <ul>
          <li><strong>Web IDE</strong> : édition et flash OTA en quelques clics.</li>
          <li><strong>APIs intégrées</strong> : REST, MQTT, Webhook et CLI.</li>
          <li><strong>Console cloud</strong> : monitoring des devices et logs temps réel.</li>
        </ul>
        <p>
          Cette uniformisation m’a permis de passer de l’idée au prototype
          en moins d’une heure, sans configuration réseau complexe.
        </p>`
    },
    {
      title: 'Photon v1 vs Photon 2',
      content: `
        <p>
          Entre le v1 et le v2, Particle a revu sa copie pour répondre
          aux besoins grandissants :
        </p>
        <ul>
          <li>
            <strong>Photon v1</strong> (2015) : ARM Cortex-M3 120 MHz, 1 MB
            flash, Wi-Fi 802.11b/g/n, pas de BLE.
          </li>
          <li>
            <strong>Photon 2</strong> (2020) : MCU ARM plus récent, 4 MB
            flash + 1 MB RAM, Wi-Fi plus stable, Bluetooth LE intégré,
            support Unicode & OTA plus volumineux.
          </li>
        </ul>
        <p>
          J’ai constaté une <strong>hausse de stabilité Wi-Fi</strong> (taux de
          reconnexion < 1 % sur 30 jours) et la possibilité d’ajouter
          directement des capteurs BLE, sans circuit additionnel.
        </p>`
    },
    {
      title: 'Développement & débogage avancés',
      content: `
        <p>
          Avec le Particle CLI et le Workbench VS Code :
        </p>
        <ul>
          <li><strong>Compilation locale</strong> rapide (<code>particle compile</code>).</li>
          <li><strong>Flash OTA ou USB</strong> sans débrancher le device.</li>
          <li><strong>Debug série</strong> et instrumentation en CLI.</li>
        </ul>
        <p>
          J’ai automatisé mes builds via GitHub Actions :
          <code>particle compile</code> → tests unitaires → 
          <code>particle flash</code>. Résultat : chaque commit
          est validé sur device réel.
        </p>`
    },
    {
      title: 'Retours terrain & métriques',
      content: `
        <p>
          Déployés dans ma maison connectée :
        </p>
        <ul>
          <li><strong>Temps de boot</strong> : 3 ± 0,5 s après power-cycle.</li>
          <li><strong>Reconnexion</strong> : 1 s en moyenne après coupure réseau.</li>
          <li><strong>Consommation deep-sleep</strong> : ~2 µA (optionnel).</li>
        </ul>
        <p>
          Le cloud Particle a géré plus de 10 000 messages MQTT en un mois
          sans interruption, malgré plusieurs coupures électriques.
        </p>`
    },
    {
      title: 'Perspectives & maillage BLE',
      content: `
        <p>
          Pour aller plus loin :
        </p>
        <ul>
          <li>
            <strong>Argon + Xenon</strong> pour un réseau maillé BLE/Wi-Fi,
            couvrant plusieurs pièces.
          </li>
          <li>
            <strong>OTA sécurisée</strong> via certificats custom
            pour firmware critique.
          </li>
          <li>
            <strong>Connectivité hybride</strong> (Wi-Fi secondaire + BLE
            entraide) pour une résilience maximale.
          </li>
        </ul>`
    }
  ]
};
