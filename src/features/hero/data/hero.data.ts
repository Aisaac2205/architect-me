// Centralized content for the Hero slice — edit here to update copy and assets.
// Image URLs are Unsplash placeholders; swap them for your own assets when ready.

export interface HeroData {
    year: string;
    headline: string;
    name: string;
    services: string[];
    location: string;
    tagline: string[];
    cta: { label: string; target: string };
    recentWork: { label: string; title: string; target: string };
    portrait: { url: string; caption: string; alt: string };
    thumbnails: { url: string; alt: string }[];
}

export const heroData: HeroData = {
    year: '2,026',
    headline: 'INGENIERO DE SOFTWARE',
    name: 'ISAAC SARCEÑO',
    services: [
        '/ ANÁLISIS & DISEÑO',
        '/ DESARROLLO',
        '/ ARQUITECTURA',
    ],
    location: 'BASED IN GUATEMALA',
    tagline: [
        'INGENIERO DE SOFTWARE DEDICADO AL',
        'DISEÑO Y DESARROLLO DE SISTEMAS ESCALABLES,',
        'CON ENFOQUE EN CÓDIGO LIMPIO Y ALTO RENDIMIENTO.',
    ],
    cta: { label: 'Contactar', target: '#contacto' },
    recentWork: {
        label: 'TRABAJO RECIENTE',
        title: 'Código sin límites',
        target: '#proyectos',
    },
    portrait: {
        url: '/isaac-hero.jpg',
        caption: 'BASED IN GUATEMALA',
        alt: 'Isaac Sarceño',
    },
    thumbnails: [
        {
            url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop',
            alt: 'Project preview',
        },
        {
            url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop',
            alt: 'Project preview',
        },
        {
            url: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop',
            alt: 'Project preview',
        },
    ],
};
