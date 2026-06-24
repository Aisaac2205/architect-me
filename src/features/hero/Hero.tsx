import { useEffect, useRef } from 'react';
import { HeroGridBackground } from './components/HeroGridBackground';
import { HeroHeadline } from './components/HeroHeadline';
import { HeroServices } from './components/HeroServices';
import { HeroRecentWork } from './components/HeroRecentWork';
import gsap from 'gsap';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            gsap.set([
                '.hero-headline-title',
                '.hero-headline-year',
                '.hero-headline-name',
                '.hero-services-card',
                '.hero-services-portrait',
                '.hero-recent-work-thumb',
                '.hero-recent-work-btn'
            ], { opacity: 0 });

            tl.fromTo('.hero-headline-title',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 }
            );
            tl.fromTo(['.hero-headline-year', '.hero-headline-name'],
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
                '-=0.6'
            );
            tl.fromTo('.hero-services-card',
                { y: 30, opacity: 0, scale: 0.98 },
                { y: 0, opacity: 1, duration: 0.7 },
                '-=0.4'
            );
            tl.fromTo('.hero-services-portrait',
                { y: 40, opacity: 0, scale: 1.03 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8 },
                '-=0.5'
            );
            tl.fromTo('.hero-recent-work-thumb',
                { x: -30, opacity: 0, scale: 0.95 },
                { x: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.08 },
                '-=0.4'
            );
            tl.fromTo('.hero-recent-work-btn',
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6 },
                '-=0.6'
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="w-full overflow-hidden relative pt-14 pb-10 md:pt-10 md:pb-10 md:flex md:flex-col md:flex-1">
            <div className="relative z-20 md:flex md:flex-col md:justify-between md:flex-1 lg:flex lg:flex-col lg:justify-between lg:flex-1">
                <HeroHeadline />
                <HeroServices />
                <HeroRecentWork />
            </div>
            <HeroGridBackground />
        </div>
    );
};

export default Hero;
