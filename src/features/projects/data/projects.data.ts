import { Project } from '../types/project.types';

export const projects: Project[] = [
    {
        id: 1,
        key: 'ecommerce',
        image: '/assets/Mock-Ecomerce.webp',
        tags: ['React', 'Node.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'NestJS', 'Railway'],
        storeUrl: 'https://www.lacasadelbalompie.com/',
    },
    {
        id: 2,
        key: 'saas1',
        image: '/assets/Mock-Landing-Demo-1.webp',
        tags: ['React', 'Astro', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Railway'],
        storeUrl: 'https://demo1.restaurantegt.com/',
    },
    {
        id: 3,
        key: 'saas2',
        image: '/assets/Mock-Landing-Demo-2.webp',
        tags: ['React', 'Astro', 'Tailwind CSS', 'Motion', 'UX/UI'],
        storeUrl: 'https://demo2.restaurantegt.com/',
    },
    {
        id: 4,
        key: 'turboauto',
        image: '/assets/Mock-Landing-Turbo-Auto.webp',
        tags: ['React', 'Node.js', 'Vite', 'TypeScript', 'Tailwind CSS'],
        storeUrl: 'https://turboautogt.com/',
    },
];
