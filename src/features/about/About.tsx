import React from 'react';
import { cn } from '@/lib/utils';
import { TechMarquee } from './components/TechMarquee';

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
      'relative flex min-h-[180px] flex-col justify-between rounded-lg border border-dashed border-border bg-card p-6',
      className
    )}
  >
    <CornerPlusIcons />
    <div className="relative z-10 space-y-3">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
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
];

const About = () => {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="mb-12 max-w-2xl">
          <h2 className="section-title mb-4">Tecnología con Propósito</h2>
          <p className="section-subtitle">
            No solo escribo código: diseño soluciones digitales que hacen crecer tu
            negocio, automatizan procesos y convierten visitantes en clientes.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <BentoCard {...cards[0]} className="lg:col-span-3 lg:row-span-2" />
          <BentoCard {...cards[1]} className="lg:col-span-2 lg:row-span-2" />
          <BentoCard {...cards[2]} className="lg:col-span-4" />
          <BentoCard {...cards[3]} className="lg:col-span-2" />
          <BentoCard {...cards[4]} className="lg:col-span-2" />
        </div>

        {/* Tech stack (se mantiene) */}
        <div className="mt-24">
          <div className="mb-12 max-w-2xl">
            <h3 className="section-title mb-4">Dominio Tecnológico</h3>
            <p className="section-subtitle">
              Tecnologías y herramientas con las que construyo soluciones robustas,
              escalables y mantenibles en el tiempo.
            </p>
          </div>
          <TechMarquee />
        </div>
      </div>
    </section>
  );
};

export default About;
