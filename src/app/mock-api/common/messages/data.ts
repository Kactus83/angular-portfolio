import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const messages = [
  {
    id: 'c3d4e5f6-a7b8-49c1-23d4-e5f6a7b8c9d0',
    image: 'images/avatars/perso.jpg',
    title: 'Florian MORENA',
    description:
      'Ce portfolio vous plaît ? Je peux en concevoir un pour vous.',
    time: now.toISO(), // now
    read: false,
  },
  {
    id: 'a1b2c3d4-e5f6-47a8-91b2-c3d4e5f6a7b8',
    image: 'images/avatars/male-01.jpg',
    title: 'Jean-Luc Martin',
    description: 'Hey ! je suis étonné de te voir ici ! Tu connais Florian ?',
    time: now.minus({ minutes: 15 }).toISO(), // 15 minutes ago
    read: false,
  },
  {
    id: 'd4e5f6a7-b8c9-40d2-34e5-f6a7b8c9d0e1',
    image: 'images/avatars/female-12.jpg',
    title: 'Sara Dupont',
    description:
      'Pour répondre à votre dernière demande, il faut que je fasse le point avec l\'équipe. je reviens vers vous dès que possible.',
    time: now.minus({ hours: 2 }).toISO(), // 2 hours ago
    read: true,
  },
  {
    id: 'b2c3d4e5-f6a7-48b9-12c3-d4e5f6a7b8c9',
    image: 'images/avatars/male-04.jpg',
    title: 'Alice Giardini',
    description:
      'Oui, J’ai déjà travaillé avec Florian, c’est un pro sérieux.',
    time: now.minus({ minutes: 45 }).toISO(), // 45 minutes ago
    read: false,
  },
];