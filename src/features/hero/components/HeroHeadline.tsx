import { useTranslation } from 'react-i18next';
import { heroData } from '../data/hero.data';

export const HeroHeadline = () => {
    const { t } = useTranslation();
    const { year } = heroData;

    const headline = t('hero.headline');
    const headlineParts = headline.split(/(SOFTWARE)/i);

    return (
        <div className="relative">
            <p className="hero-headline-year opacity-0 text-base absolute -top-7 left-20 font-medium tracking-wider">
                {year}
            </p>
            {/* Reference: tracking-[-7px] text-7xl md:text-9xl xl:text-[10rem] */}
            <h1 className="hero-headline-title opacity-0 z-20 text-primary relative font-bold text-center tracking-[-3px] sm:tracking-[-7px] text-6xl xs:text-7xl sm:text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] 2xl:text-[10rem]">
                {headlineParts.map((part, index) => 
                    part.toLowerCase() === 'software' ? (
                        <span key={index} className="text-[#3b82f6]">{part}</span>
                    ) : (
                        part
                    )
                )}
            </h1>
            {/* xl: right-24 gives 96px breathing room from edge — reference value */}
            <p className="hero-headline-name opacity-0 text-4xl hidden xl:block absolute -bottom-12 right-24 font-thin tracking-[6px]">
                {t('hero.name')}
            </p>
            {/* Mobile/tablet: left-24 matches reference, scale text for smaller screens */}
            <p className="hero-headline-name opacity-0 text-lg sm:text-2xl md:text-4xl absolute xl:hidden -bottom-10 sm:-bottom-12 md:-bottom-12 left-12 sm:left-20 md:left-24 font-thin tracking-[6px]">
                {t('hero.name')}
            </p>
        </div>
    );
};
