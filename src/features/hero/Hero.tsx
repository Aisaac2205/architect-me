import { useEffect, useRef } from 'react';
import { HeroGridBackground } from './components/HeroGridBackground';
import { HeroHeadline } from './components/HeroHeadline';
import { HeroServices } from './components/HeroServices';
import { HeroIntro } from './components/HeroIntro';
import { HeroRecentWork } from './components/HeroRecentWork';
import gsap from 'gsap';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Set initial states to avoid flashing
            gsap.set([
                '.hero-headline-title',
                '.hero-headline-year',
                '.hero-headline-name',
                '.hero-services-card',
                '.hero-services-portrait',
                '.hero-intro',
                '.hero-recent-work-thumb',
                '.hero-recent-work-btn'
            ], { opacity: 0 });

            // 1. Headline Slide up & Fade in
            tl.fromTo('.hero-headline-title', 
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 }
            );

            // Year and Name
            tl.fromTo(['.hero-headline-year', '.hero-headline-name'],
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
                '-=0.6'
            );

            // 2. Services Card & Portrait image
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

            // 3. Intro tagline and button
            tl.fromTo('.hero-intro',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                '-=0.4'
            );

            // 4. Recent Work Thumbnails & Button
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
        <section ref={heroRef} className="min-h-screen overflow-hidden relative py-20">
            <div className="mx-auto max-w-7xl relative z-20 px-6">
                <HeroHeadline />
                <HeroServices />
                <HeroIntro />
                <HeroRecentWork />
            </div>
            <HeroGridBackground />
        </section>
    );
};

export default Hero;
