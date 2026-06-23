import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/hooks/use-lenis';
import { heroData } from '../data/hero.data';

export const HeroIntro = () => {
    const { t } = useTranslation();
    const { cta } = heroData;
    const tagline = t('hero.tagline', { returnObjects: true }) as string[];

    return (
        <div className="hero-intro opacity-0">
            {/* Reference uses md:mt-40 (160px). Our portrait is h-[28rem] (448px) so we need
                md:mt-52 (208px) to guarantee 40px clearance under the portrait at all md+ sizes. */}
            <div className="mt-10 lg:mt-16 xl:mt-24 2xl:mt-52">
                <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base">
                    {tagline.map((line, index) => (
                        <Fragment key={line}>
                            {line}
                            {index < tagline.length - 1 && <br />}
                        </Fragment>
                    ))}
                </p>
            </div>
            <div className="flex justify-center pt-6">
                <Button size="lg" onClick={() => scrollToElement(cta.target)}>
                    {t('hero.cta')}
                </Button>
            </div>
        </div>
    );
};
