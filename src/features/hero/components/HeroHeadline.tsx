import { heroData } from '../data/hero.data';

export const HeroHeadline = () => {
    const { year, headline, name } = heroData;

    return (
        <div className="relative">
            <p className="text-sm absolute -top-4 left-6 sm:left-20 font-medium tracking-wider">
                {year}
            </p>
            <h1 className="z-20 text-primary relative font-bold text-center break-words tracking-tighter text-6xl sm:text-7xl sm:tracking-[-7px] md:text-9xl md:tracking-[-14px] xl:text-[10rem] xl:tracking-[-1rem]">
                {headline}
            </h1>
            <p className="hidden xl:block absolute z-30 -bottom-10 right-12 text-xl font-thin tracking-[4px]">
                {name}
            </p>
            <p className="xl:hidden absolute z-30 -bottom-9 left-6 sm:left-24 text-2xl sm:text-4xl font-thin tracking-[4px] sm:tracking-[6px]">
                {name}
            </p>
        </div>
    );
};
