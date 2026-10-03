export interface HeroData {
    year: string;
    cta: { target: string };
    portrait: { url: string };
}

export const heroData: HeroData = {
    year: '2,026',
    cta: { target: '#footer' },
    portrait: { url: '/assets/isaac-hero.webp' },
};
