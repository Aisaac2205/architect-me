import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { TechMarquee } from './components/TechMarquee';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PlusIcon = ({ className = '' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={20}
    height={20}
    strokeWidth={1}
    stroke="currentColor"
    className={cn('text-foreground/30 size-5', className)}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-2.5 -left-2.5" />
    <PlusIcon className="absolute -top-2.5 -right-2.5" />
    <PlusIcon className="absolute -bottom-2.5 -left-2.5" />
    <PlusIcon className="absolute -bottom-2.5 -right-2.5" />
  </>
);

interface BentoCardProps {
  title: string;
  description: string;
  className?: string;
}

const BentoCard = ({ title, description, className }: BentoCardProps) => (
  <div
    className={cn(
      'relative flex min-h-[150px] md:min-h-[180px] flex-col justify-between rounded-lg border border-dashed border-border bg-card p-4 md:p-6',
      className
    )}
  >
    <CornerPlusIcons />
    <div className="relative z-10 space-y-2 md:space-y-3">
      <h3 className="text-lg md:text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  </div>
);

const cards: BentoCardProps[] = [
  {
    title: 'Soluciones a tu medida',
    description:
      'Convierto ideas en productos digitales sólidos, pensados para los objetivos reales de tu negocio y preparados para acompañar su crecimiento.',
  },
  {
    title: 'Acompañamiento de principio a fin',
    description:
      'Me involucro en cada etapa del proyecto, con comunicación clara y entregas a tiempo, para que tengas total claridad en cada paso del proceso.',
  },
  {
    title: 'Enfoque en resultados',
    description:
      'No entrego solo un sitio web: entrego una herramienta que aporta valor, mejora la experiencia de tus clientes y potencia tu marca.',
  },
  {
    title: 'Calidad que perdura',
    description:
      'Construyo sobre bases sólidas para que tu producto siga funcionando de forma confiable mucho después del lanzamiento.',
  },
  {
    title: 'Presencia en cada dispositivo',
    description:
      'Experiencias que se ven y funcionan de manera impecable en cualquier pantalla, para llegar a tus clientes donde estén.',
  },
  {
    title: 'Rendimiento y velocidad',
    description:
      'Optimizo cada línea de código y recurso para garantizar tiempos de carga ultrarrápidos y un excelente posicionamiento en buscadores (SEO).',
  },
];

const About = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || !sectionRef.current) return;

    const cardsElements = Array.from(gridRef.current.children);

    const ctx = gsap.context(() => {
      // 1. About Intro Header Entrance
      gsap.fromTo(
        ['.about-intro-title', '.about-intro-subtitle'],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-intro-trigger',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 2. Bento cards entrance
      cardsElements.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'sine.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Tech Stack Header & Marquee Entrance
      gsap.fromTo(
        ['.tech-stack-title', '.tech-stack-subtitle', '.tech-stack-marquee'],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.tech-stack-trigger',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="sobre-mi" className="py-20">
      <div className="w-full px-6 md:px-12">
        {/* Intro */}
        <div className="about-intro-trigger mb-12 max-w-2xl">
          <h2 className="about-intro-title opacity-0 section-title mb-4">Tecnología con Propósito</h2>
          <p className="about-intro-subtitle opacity-0 section-subtitle">
             No solo escribo código: diseño soluciones digitales que hacen crecer tu
             negocio, automatizan procesos y convierten visitantes en clientes.
          </p>
        </div>

        {/* Bento grid */}
        <div ref={gridRef} className="grid auto-rows-auto grid-cols-2 gap-4 md:grid-cols-6">
          <BentoCard {...cards[0]} className="col-span-2 md:col-span-3 md:row-span-2" />
          <BentoCard {...cards[1]} className="col-span-1 md:col-span-3 md:row-span-2" />
          <BentoCard {...cards[2]} className="col-span-1 md:col-span-4" />
          <BentoCard {...cards[3]} className="col-span-2 md:col-span-2" />
          <BentoCard {...cards[4]} className="col-span-1 md:col-span-3" />
          <BentoCard {...cards[5]} className="col-span-1 md:col-span-3" />
        </div>
      </div>

      {/* Separator between bento cards and tech stack */}
      <div className="w-full h-px bg-border/30 relative my-20">
        <span className="absolute left-6 -top-[9px] text-foreground/20 font-light text-sm font-mono">+</span>
        <span className="absolute right-6 -top-[9px] text-foreground/20 font-light text-sm font-mono">+</span>
      </div>

      <div className="w-full px-6 md:px-12">
        {/* Tech stack (se mantiene) */}
        <div>
          <div className="tech-stack-trigger mb-12 max-w-2xl">
            <h3 className="tech-stack-title opacity-0 section-title mb-4">Dominio Tecnológico</h3>
            <p className="tech-stack-subtitle opacity-0 section-subtitle">
              Tecnologías y herramientas con las que construyo soluciones robustas,
              escalables y mantenibles en el tiempo.
            </p>
          </div>
          <div className="tech-stack-marquee opacity-0">
            <TechMarquee />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
