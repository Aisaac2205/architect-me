import { MainLayout } from '@/layouts';
import { Hero } from '@/features/hero';
import { About } from '@/features/about';
import { TechStack } from '@/features/tech-stack';
import { Projects } from '@/features/projects';
import { Contact } from '@/features/contact';
import Footer from '@/layouts/Footer';
import { FlowArt, FlowSection } from '@/components/FlowArt';
import { useLenis } from '@/hooks/use-lenis';
import { SeoHead } from '@/components/SeoHead';

const FLOW_STYLE = {
  backgroundColor: 'hsl(var(--flow-bg))',
  color: 'hsl(var(--flow-fg))',
} as const;

const Index = () => {
  useLenis();

  return (
    <MainLayout>
      <SeoHead />

      <FlowArt>
        <FlowSection
          aria-label="Hero"
          style={{
            backgroundColor: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
          }}
        >
          <Hero />
        </FlowSection>

        <FlowSection aria-label="About" style={FLOW_STYLE}>
          <About />
        </FlowSection>

        <FlowSection aria-label="Tech Stack" style={FLOW_STYLE}>
          <TechStack />
        </FlowSection>

        <FlowSection aria-label="Projects" style={FLOW_STYLE}>
          <Projects />
        </FlowSection>

        <FlowSection aria-label="Contact" style={FLOW_STYLE}>
          <Contact />
        </FlowSection>

        <FlowSection aria-label="Footer" style={FLOW_STYLE}>
          <Footer />
        </FlowSection>
      </FlowArt>
    </MainLayout>
  );
};

export default Index;
