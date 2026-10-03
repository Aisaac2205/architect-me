export interface HeroData {
    year: string;
    portrait: { url: string };
}

export const heroData: HeroData = {
    year: '2026',
    portrait: { url: '/assets/isaac-hero.webp' },
};
