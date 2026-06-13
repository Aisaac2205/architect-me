import { useTranslation } from 'react-i18next';
import { heroData } from '../data/hero.data';

export const HeroHeadline = () => {
    const { t } = useTranslation();
    const { year } = heroData;

    return (
        <div className="relative">
            <p className="hero-headline-year opacity-0 text-base absolute -top-4 left-20 font-medium tracking-wider">
                {year}
            </p>
            {/* Reference: tracking-[-7px] text-7xl md:text-9xl xl:text-[10rem] */}
            <h1 className="hero-headline-title opacity-0 z-20 text-primary relative font-bold text-center tracking-[-3px] sm:tracking-[-7px] text-5xl xs:text-6xl sm:text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[10rem]">
                {t('hero.headline')}
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
