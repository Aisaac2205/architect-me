import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { OrbitAnimation } from "./components/OrbitAnimation";
import { ContactForm } from "./components/ContactForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header elements entrance
      gsap.fromTo(
        ['.contact-header-eyebrow', '.contact-header-title', '.contact-header-subtitle'],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 2. Orbit Animation entrance
      gsap.fromTo(
        '.contact-orbit',
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-orbit',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 3. Contact Form entrance
      gsap.fromTo(
        '.contact-form-container',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contacto" className="py-20 bg-gradient-subtle border-t border-border/30">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Heading and Tech Orbit Animation */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <p className="contact-header-eyebrow opacity-0 section-eyebrow">{t('contact.eyebrow')}</p>
              <h2 className="contact-header-title opacity-0 section-title text-gradient">
                {t('contact.title')}
              </h2>
              <p className="contact-header-subtitle opacity-0 section-subtitle leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </div>
            
            <div className="contact-orbit opacity-0 flex flex-1 min-h-[28rem] lg:min-h-[auto] items-center justify-center relative">
              <OrbitAnimation />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-container opacity-0 lg:col-span-7 flex items-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;