import { Article } from '../veille.types';
import { PARTICLE_OVERVIEW_PHOTON } from './iot/particle-overview-photon.article';
import { PARTICLE_WORKBENCH_PLATFORMIO } from './iot/particle-workbench-platformio.article';
import { LED_STRIPS_CONTROLLER } from './iot/led-strips-controller.article';

export const IOT_ARTICLES: Article[] = [
  PARTICLE_OVERVIEW_PHOTON,
  PARTICLE_WORKBENCH_PLATFORMIO,
  LED_STRIPS_CONTROLLER
];
