import { useTranslation } from 'react-i18next';
import { ArrowDownRight } from 'lucide-react';
import { scrollToElement } from '@/hooks/use-lenis';
import { heroData } from '../data/hero.data';

export const HeroRecentWork = () => {
    const { t } = useTranslation();
    const { thumbnails, recentWork } = heroData;
    const recentWorkLabel = t('hero.recentWork.label');
    const recentWorkTitle = t('hero.recentWork.title');
    const imageAlt = t('hero.imageAlt');

    return (
        <div className="flex flex-col md:flex-row mt-20 md:mt-14 items-start md:items-end justify-between gap-12 md:gap-0">
            <div className="relative w-60 h-36 mx-auto md:mx-0 mt-12 md:mt-0 order-2 md:order-1">
                {thumbnails.map((thumb, index) => {
                    const offsets = ['', 'absolute left-6 -top-6', 'absolute left-12 -top-12'];
                    return (
                        <div
                            key={thumb.url}
                            className={`hero-recent-work-thumb w-60 h-36 shadow-lg border rounded-md overflow-hidden ${offsets[index] ?? ''}`}
                        >
                            <img
                                src={thumb.url}
                                alt={imageAlt}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    );
                })}
            </div>
            <div className="order-1 md:order-2 w-full md:w-auto">
                <button
                    type="button"
                    onClick={() => scrollToElement(recentWork.target)}
                    className="hero-recent-work-btn text-left md:text-right group w-full"
                    aria-label={`${recentWorkLabel}: ${recentWorkTitle}`}
                >
                    <div className="flex items-center md:justify-end gap-2">
                        <span className="text-lg font-medium tracking-wider">
                            {recentWorkLabel}
                        </span>
                        <ArrowDownRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                    </div>
                    <div className="mt-3 md:text-right">
                        <h2 className="text-4xl sm:text-5xl uppercase tracking-[-2px] sm:tracking-[-4px]">
                            {recentWorkTitle}
                        </h2>
                    </div>
                </button>
            </div>
        </div>
    );
};
