import { heroData } from '../data/hero.data';

export const HeroServices = () => {
    const { services, portrait } = heroData;

    return (
        <div className="grid relative">
            <div className="hidden md:flex space-y-8 pt-12 gap-6 justify-center">
                <div className="hero-services-card opacity-0 flex gap-6 bg-secondary w-full max-w-xl h-fit p-10 items-end space-y-2">
                    <div className="font-semibold text-base sm:text-lg md:text-base lg:text-lg xl:text-xl tracking-wide space-y-1">
                        {services.map((service) => (
                            <div key={service}>{service}</div>
                        ))}
                    </div>
                    <div className="hero-services-portrait opacity-0 absolute hidden md:flex left-1/2 -top-16 w-72 overflow-hidden bg-secondary">
                        <img
                            src={portrait.url}
                            alt={portrait.alt}
                            className="h-[28rem] w-64 object-cover object-top grayscale"
                        />
                        <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest flex-1 flex items-center justify-center">
                            {portrait.caption}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile portrait */}
            <div className="hero-services-portrait opacity-0 flex md:hidden w-full overflow-hidden bg-secondary mt-20">
                <img
                    src={portrait.url}
                    alt={portrait.alt}
                    className="h-[25rem] flex-1 object-cover object-top grayscale"
                />
                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest w-8 flex-shrink-0 flex items-center justify-center">
                    {portrait.caption}
                </div>
            </div>
        </div>
    );
};
