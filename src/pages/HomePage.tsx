import { MainLayout } from '@/layouts';
import { Hero } from '@/features/hero';
import { About } from '@/features/about';
import { TechStack } from '@/features/tech-stack';
import { Projects } from '@/features/projects';
import { Contact } from '@/features/contact';
import { FlowArt, FlowSection } from '@/components/FlowArt';
import { useLenis } from '@/hooks/use-lenis';
import { SeoHead } from '@/components/SeoHead';

const Index = () => {
  useLenis();

  return (
    <MainLayout>
      <SeoHead />
      <Hero />

      <FlowArt>
        <FlowSection
          aria-label="About"
          style={{ backgroundColor: '#fd5200', color: '#ffffff' }}
        >
          <About />
        </FlowSection>

        <FlowSection
          aria-label="Tech Stack"
          style={{ backgroundColor: '#000000', color: '#ffffff' }}
        >
          <TechStack />
        </FlowSection>

        <FlowSection
          aria-label="Projects"
          style={{ backgroundColor: '#F5F0E8', color: '#000000' }}
        >
          <Projects />
        </FlowSection>

        <FlowSection
          aria-label="Contact"
          style={{ backgroundColor: '#1A3DE8', color: '#ffffff' }}
        >
          <Contact />
        </FlowSection>
      </FlowArt>
    </MainLayout>
  );
};

export default Index;
