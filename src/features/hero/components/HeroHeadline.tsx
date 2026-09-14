import { useTranslation } from 'react-i18next';
import { heroData } from '../data/hero.data';

export const HeroHeadline = () => {
    const { t } = useTranslation();
    const { year } = heroData;

    const headline = t('hero.headline');
    const headlineParts = headline.split(/(SOFTWARE)/i);

    return (
        <div className="relative w-full">
            <p className="hero-headline-year opacity-0 text-xs sm:text-sm md:text-base font-mono font-medium tracking-widest text-muted-foreground/80 absolute -top-5 sm:-top-7 left-1 sm:left-3 md:left-6">
                {year}
            </p>
            <h1
                className="hero-headline-title opacity-0 z-20 text-primary relative font-bold text-center leading-[0.88] tracking-tight sm:tracking-tighter md:tracking-[-0.03em] whitespace-pre-line text-balance select-none"
                style={{ fontSize: 'clamp(2.75rem, 8.2vw, 8.5rem)' }}
            >
                {headlineParts.map((part, index) => 
                    part.toLowerCase() === 'software' ? (
                        <span key={index} className="text-[#3b82f6]">{part}</span>
                    ) : (
                        part
                    )
                )}
            </h1>
            <div className="flex justify-end pt-2 sm:pt-3 md:pt-4 pr-1 sm:pr-4 md:pr-8">
                <p className="hero-headline-name opacity-0 text-base sm:text-xl md:text-2xl lg:text-3xl font-extralight tracking-[4px] sm:tracking-[6px] uppercase text-foreground/80">
                    {t('hero.name')}
                </p>
            </div>
        </div>
    );
};
