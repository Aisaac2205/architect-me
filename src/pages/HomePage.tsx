import { MainLayout } from '@/layouts';
import { Hero } from '@/features/hero';
import { About } from '@/features/about';
import { TechStack } from '@/features/tech-stack';
import { Projects } from '@/features/projects';
import { Contact } from '@/features/contact';
import { useLenis } from '@/hooks/use-lenis';
import { SeoHead } from '@/components/SeoHead';

// Simple loading skeleton (kept for reference or other uses if needed)
const SectionSkeleton = () => (
  <div className="py-20">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="h-12 bg-muted/50 rounded-lg mb-8 animate-pulse" />
        <div className="h-64 bg-muted/30 rounded-lg animate-pulse" />
      </div>
    </div>
  </div>
);

const SectionDivider = () => (
  <div className="w-full h-px bg-border/30 relative">
    <span className="absolute left-6 -top-[9px] text-foreground/20 font-light text-sm font-mono">+</span>
    <span className="absolute right-6 -top-[9px] text-foreground/20 font-light text-sm font-mono">+</span>
  </div>
);

const Index = () => {
  useLenis(); // Inicializar Lenis para scroll suave

  return (
    <MainLayout>
      <SeoHead />
      <Hero />

      <SectionDivider />
      <About />

      <SectionDivider />
      <TechStack />

      <SectionDivider />
      <Projects />

      <SectionDivider />
      <Contact />
    </MainLayout>
  );
};

export default Index;
