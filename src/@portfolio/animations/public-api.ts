import { expandCollapse } from '@portfolio/animations/expand-collapse';
import {
    fadeIn,
    fadeInBottom,
    fadeInLeft,
    fadeInRight,
    fadeInTop,
    fadeOut,
    fadeOutBottom,
    fadeOutLeft,
    fadeOutRight,
    fadeOutTop,
} from '@portfolio/animations/fade';
import { shake } from '@portfolio/animations/shake';
import {
    slideInBottom,
    slideInLeft,
    slideInRight,
    slideInTop,
    slideOutBottom,
    slideOutLeft,
    slideOutRight,
    slideOutTop,
} from '@portfolio/animations/slide';
import { zoomIn, zoomOut } from '@portfolio/animations/zoom';

export const portfolioAnimations = [
    expandCollapse,
    fadeIn,
    fadeInTop,
    fadeInBottom,
    fadeInLeft,
    fadeInRight,
    fadeOut,
    fadeOutTop,
    fadeOutBottom,
    fadeOutLeft,
    fadeOutRight,
    shake,
    slideInTop,
    slideInBottom,
    slideInLeft,
    slideInRight,
    slideOutTop,
    slideOutBottom,
    slideOutLeft,
    slideOutRight,
    zoomIn,
    zoomOut,
];
