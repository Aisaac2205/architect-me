import { Fragment } from 'react';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/hooks/use-lenis';
import { heroData } from '../data/hero.data';

export const HeroIntro = () => {
    const { tagline, cta } = heroData;

    return (
        <div className="md:mt-[17rem] mt-10">
            <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base">
                {tagline.map((line, index) => (
                    <Fragment key={line}>
                        {line}
                        {index < tagline.length - 1 && <br />}
                    </Fragment>
                ))}
            </p>

            <div className="flex justify-center pt-6">
                <Button size="lg" onClick={() => scrollToElement(cta.target)}>
                    {cta.label}
                </Button>
            </div>
        </div>
    );
};
