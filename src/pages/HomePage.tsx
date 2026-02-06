import { lazy, Suspense } from 'react';
import { MainLayout } from '@/layouts';
import { Hero } from '@/features/hero';
import { useLenis } from '@/hooks/use-lenis';

// Lazy load components below the fold for better initial load performance
const About = lazy(() => import('@/features/about').then(module => ({ default: module.About })));
const Projects = lazy(() => import('@/features/projects').then(module => ({ default: module.Projects })));
const Contact = lazy(() => import('@/features/contact').then(module => ({ default: module.Contact })));

// Simple loading skeleton
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

const Index = () => {
  useLenis(); // Inicializar Lenis para scroll suave

  return (
    <MainLayout>
      <Hero />

      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </MainLayout>
  );
};

export default Index;
