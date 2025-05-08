import { PortfolioNavigationItem } from '@portfolio/components/navigation';

export const defaultNavigation: PortfolioNavigationItem[] = [
    {
        id   : 'home',
        title: 'navigation.home.title',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/home'
    },
    {
        id   : 'profile',
        title: 'navigation.profile.title',
        type : 'basic',
        icon : 'heroicons_outline:user',
        link : '/profile'
    },
    {
        id   : 'skills',
        title: 'navigation.skills.title',
        type : 'basic',
        icon : 'heroicons_outline:light-bulb',
        link : '/skills'
    },
    {
        id   : 'experiences',
        title: 'navigation.experiences.title',
        type : 'basic',
        icon : 'heroicons_outline:briefcase',
        link : '/experiences'
    },
    {
        id   : 'projects',
        title: 'navigation.projects.title',
        type : 'basic',
        icon : 'heroicons_outline:folder',
        link : '/projects'
    },
    {
        id   : 'veille',
        title: 'navigation.veille.title',
        type : 'basic',
        icon : 'heroicons_outline:eye',
        link : '/veille'
    },
    {
        id   : 'contact',
        title: 'navigation.contact.title',
        type : 'basic',
        icon : 'heroicons_solid:at-symbol',
        link : '/contact'
    }
];

export const compactNavigation: PortfolioNavigationItem[] = defaultNavigation;
export const futuristicNavigation: PortfolioNavigationItem[] = defaultNavigation;
export const horizontalNavigation: PortfolioNavigationItem[] = defaultNavigation;