import { heroData } from '../data/hero.data';

export const HeroServices = () => {
    const { services, portrait } = heroData;

    return (
        <div className="grid relative">
            <div className="space-y-8 pt-16 md:pt-20 flex gap-6 justify-center">
                <div className="relative flex gap-6 bg-secondary w-full max-w-xl h-fit p-6 md:p-10 items-end space-y-2 text-xl font-bold md:text-2xl lg:text-3xl">
                    <div className="font-semibold text-xs sm:text-sm tracking-wide">
                        {services.map((service) => (
                            <div key={service}>{service}</div>
                        ))}
                    </div>
                    <div className="absolute z-10 hidden md:flex left-1/2 -top-12 w-fit overflow-hidden bg-secondary">
                        <img
                            src={portrait.url}
                            alt={portrait.alt}
                            className="h-[26rem] w-72 object-cover object-top grayscale"
                        />
                        <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
                            {portrait.caption}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile portrait */}
            <div className="flex md:hidden mt-12 w-full overflow-hidden bg-secondary">
                <img
                    src={portrait.url}
                    alt={portrait.alt}
                    className="h-[32rem] w-full object-cover object-top grayscale"
                />
                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
                    {portrait.caption}
                </div>
            </div>
        </div>
    );
};
