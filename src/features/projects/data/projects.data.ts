import { Project } from '../types/project.types';

export const projects: Project[] = [
    {
        id: 1,
        key: 'ecommerce',
        image: '/assets/projects/balompie.jpg',
        storeUrl: 'https://www.lacasadelbalompie.com/',
    },
    {
        id: 2,
        key: 'qably',
        image: '/assets/projects/qably.jpg',
        storeUrl: 'https://qably.dev/',
    },
    {
        id: 3,
        key: 'envault',
        image: '/assets/projects/envault.jpg',
        storeUrl: 'https://envault-4rm.pages.dev/',
    },
    {
        id: 4,
        key: 'saas',
        image: '/assets/projects/restaurantes.jpg',
        storeUrl: 'https://restaurant-saas-monorepo.pages.dev/',
    },
    {
        id: 5,
        key: 'mps',
        image: '/assets/projects/mps-guatemala.jpg',
        // Temporary Railway URL until the launch domain is ready.
        storeUrl: 'https://mpsdeguatemala.up.railway.app/',
    },
    {
        id: 6,
        key: 'turboauto',
        image: '/assets/projects/turboauto.jpg',
        storeUrl: 'https://turboautogt.com/',
    },
];
