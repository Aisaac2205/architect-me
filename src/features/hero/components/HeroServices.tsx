import { useTranslation } from 'react-i18next';
import { heroData } from '../data/hero.data';

export const HeroServices = () => {
    const { t } = useTranslation();
    const { portrait } = heroData;
    const services = t('hero.services', { returnObjects: true }) as string[];

    return (
        <div className="grid relative">
            {/* Desktop: reference structure — w-full max-w-xl + justify-center */}
            {/* Services text stays on the LEFT of the card; portrait (absolute) sits center-right */}
            <div className="md:space-y-8 md:pt-10 md:flex md:gap-6 md:justify-center">
                <div className="hero-services-card opacity-0 hidden md:flex gap-6 bg-secondary w-full max-w-xl h-fit p-10 items-end space-y-2">
                    <div className="font-semibold text-base md:text-lg xl:text-xl tracking-wide space-y-1">
                        {services.map((service) => (
                            <div key={service}>{service}</div>
                        ))}
                    </div>
                    {/* Reference: left-1/2 -top-10 w-fit — portrait overlaps the RIGHT half of the card */}
                    <div className="hero-services-portrait opacity-0 absolute hidden md:flex left-1/2 -top-10 w-fit overflow-hidden bg-secondary">
                        <img
                            src={portrait.url}
                            alt={t('hero.portraitAlt')}
                            className="md:h-[18rem] lg:h-[20rem] xl:h-[22rem] 2xl:h-[28rem] w-64 object-cover object-top grayscale"
                            fetchpriority="high"
                            loading="eager"
                        />
                        <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest flex-1 flex items-center justify-center">
                            {t('hero.location')}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile portrait — untouched */}
            <div className="hero-services-portrait opacity-0 flex md:hidden w-full overflow-hidden bg-secondary mt-20">
                <img
                    src={portrait.url}
                    alt={t('hero.portraitAlt')}
                    className="h-[25rem] flex-1 object-cover object-top grayscale"
                    fetchpriority="high"
                    loading="eager"
                />
                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest w-8 flex-shrink-0 flex items-center justify-center">
                    {t('hero.location')}
                </div>
            </div>
        </div>
    );
};
