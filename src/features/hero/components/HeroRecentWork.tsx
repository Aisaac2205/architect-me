import { ArrowDownRight } from 'lucide-react';
import { scrollToElement } from '@/hooks/use-lenis';
import { heroData } from '../data/hero.data';

export const HeroRecentWork = () => {
    const { thumbnails, recentWork } = heroData;
    const offsets = ['', 'absolute left-6 -top-6', 'absolute left-12 -top-12'];

    return (
        <div className="md:flex mt-20 items-end justify-between">
            <div className="relative">
                {thumbnails.map((thumb, index) => (
                    <div
                        key={thumb.url}
                        className={`w-60 h-36 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0 ${offsets[index] ?? ''}`}
                    >
                        <img
                            src={thumb.url}
                            alt={thumb.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={() => scrollToElement(recentWork.target)}
                className="text-left md:text-right group mt-12 md:mt-0"
                aria-label={`${recentWork.label}: ${recentWork.title}`}
            >
                <div className="flex items-center md:justify-end gap-2">
                    <span className="text-lg font-medium tracking-wider">
                        {recentWork.label}
                    </span>
                    <ArrowDownRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </div>

                <div className="mt-3">
                    <h2 className="text-4xl sm:text-5xl uppercase tracking-[-3px] sm:tracking-[-4px]">
                        {recentWork.title}
                    </h2>
                </div>
            </button>
        </div>
    );
};
