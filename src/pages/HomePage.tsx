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
        <FlowSection aria-label="About">
          <About />
        </FlowSection>

        <FlowSection aria-label="Tech Stack">
          <TechStack />
        </FlowSection>

        <FlowSection aria-label="Projects">
          <Projects />
        </FlowSection>

        <FlowSection aria-label="Contact">
          <Contact />
        </FlowSection>
      </FlowArt>
    </MainLayout>
  );
};

export default Index;
