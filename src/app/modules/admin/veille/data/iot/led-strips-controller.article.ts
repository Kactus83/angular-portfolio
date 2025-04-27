import { Article } from '../../veille.types';

export const LED_STRIPS_CONTROLLER: Article = {
  id: 'led-strips-controller',
  title: 'Ma platine de contrôle de bandeaux LED',
  subtitle: 'WS2812, SK6812 & intégration Home Assistant',
  summary: `
    Comment j’ai conçu un contrôleur MQTT pour piloter des
    rubans LED adressables via Home Assistant.`,
  imageUrl: 'https://source.unsplash.com/featured/?ws2812,led,controller',
  paragraphs: [
    {
      title: 'Choix des composants',
      content: `
        <p>
          Mon setup principal :
        </p>
        <ul>
          <li><strong>WS2812</strong> (RGB) : large compatibilité, rafraîchissement rapide.</li>
          <li><strong>SK6812</strong> (RGBW) : canal blanc dédié pour des ambiances plus douces.</li>
          <li><strong>Photon 2</strong> : pilote via un level-shifter 3.3 → 5 V.</li>
        </ul>`
    },
    {
      title: 'Schéma électrique',
      content: `
        <p>
          Principaux points de montage :
        </p>
        <ul>
          <li>Alimentation 5 V/5 A avec filtrage (condensateur 100 µF).</li>
          <li>Level-shifter (74HCT245) pour aligner les niveaux TTL.</li>
          <li>Câblage Data → D0 sur Photon, GND partagé.</li>
        </ul>`
    },
    {
      title: 'Firmware & MQTT',
      content: `
        <p>
          Basé sur <code>Adafruit_NeoPixel</code> :
        </p>
        <pre><code class="language-cpp">
#include &lt;Particle.h&gt;
#include &lt;Adafruit_NeoPixel.h&gt;

#define NUMPIXELS 60
#define PIN D0

Adafruit_NeoPixel strip(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void callback(const char* topic, byte* payload, unsigned int len) {
  // Parser JSON payload, ex: {"r":255,"g":0,"b":0}
}

void setup() {
  strip.begin();
  Particle.subscribe("home/leds/set", callback);
}

void loop() {
  Particle.process();
}
        </code></pre>`
    },
    {
      title: 'Configuration Home Assistant',
      content: `
        <p>
          Déclaration MQTT dans <code>configuration.yaml</code> :
        </p>
        <pre><code class="language-yaml">
light:
  - platform: mqtt
    name: "LED Salon"
    state_topic: "home/leds/state"
    command_topic: "home/leds/set"
    rgb: true
    brightness: true
    qos: 1
        </code></pre>
        <p>
          Lovelace permet ensuite un slider de couleur,
          gestion de scènes et automatisations avancées.
        </p>`
    },
    {
      title: 'Scénarios d’usage',
      content: `
        <ul>
          <li>Ambiance tamisée matin/soir via automatisation chrono.</li>
          <li>Notifications visuelles sur événement domotique.</li>
          <li>Effets festifs synchronisés sur la musique (script Python).</li>
        </ul>`
    }
  ]
};
