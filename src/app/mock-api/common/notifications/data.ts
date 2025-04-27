import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const notifications = [
  {
    id: 'notif-welcome-0001',
    icon: 'heroicons_mini:gift',
    title: 'Bienvenue !',
    description: 'Bienvenue sur mon portfolio ! Bonne visite !',
    time: now.toISO(), // now
    read: false,
  },
  {
    id: 'notif-share-0002',
    icon: 'heroicons_mini:share',
    title: 'Partagez',
    description: 'Si ce portfolio vous plaît, partagez-le autour de vous !',
    time: now.minus({ minutes: 5 }).toISO(), // 5 minutes ago
    read: false,
    link: 'https://github.com/Kactus83',
    useRouter: false,
  }
];