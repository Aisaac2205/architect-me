import { heroData } from '../data/hero.data';

export const HeroHeadline = () => {
    const { year, headline, name } = heroData;

    return (
        <div className="relative">
            <p className="hero-headline-year opacity-0 text-sm absolute -top-4 left-20 font-medium tracking-wider">
                {year}
            </p>
            <h1 className="hero-headline-title opacity-0 z-20 text-primary relative font-bold text-center tracking-[-3px] sm:tracking-[-7px] text-5xl sm:text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[11rem]">
                {headline}
            </h1>
            <p className="hero-headline-name opacity-0 text-4xl hidden xl:block absolute -bottom-12 xl:right-2 2xl:-right-32 font-thin tracking-[6px]">
                {name}
            </p>
            <p className="hero-headline-name opacity-0 text-lg sm:text-2xl md:text-4xl absolute xl:hidden -bottom-10 sm:-bottom-14 md:-bottom-16 left-12 sm:left-16 md:left-20 font-thin tracking-[6px]">
                {name}
            </p>
        </div>
    );
};
