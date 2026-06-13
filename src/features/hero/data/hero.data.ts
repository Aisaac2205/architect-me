export interface HeroData {
    year: string;
    cta: { target: string };
    recentWork: { target: string };
    portrait: { url: string };
    thumbnails: { url: string }[];
}

export const heroData: HeroData = {
    year: '2,026',
    cta: { target: '#contacto' },
    recentWork: { target: '#proyectos' },
    portrait: { url: '/assets/isaac-hero.webp' },
    thumbnails: [
        { url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop' },
        { url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop' },
        { url: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop' },
    ],
};
