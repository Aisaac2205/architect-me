import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TechMarquee } from './components/TechMarquee';
import { InfiniteTextMarquee } from './components/InfiniteTextMarquee';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.tech-stack-title', '.tech-stack-subtitle', '.tech-stack-marquee'],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="tech-stack" className="py-20">
      <div className="w-full px-6 md:px-12">
        <div className="mb-12 max-w-2xl">
          <h3 className="tech-stack-title opacity-0 section-title mb-4">{t('about.techTitle')}</h3>
          <p className="tech-stack-subtitle opacity-0 section-subtitle">
            {t('about.techSubtitle')}
          </p>
        </div>
        <div className="tech-stack-marquee opacity-0">
          <TechMarquee />
          <InfiniteTextMarquee />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
