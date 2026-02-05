import { useParticles } from './hooks/useParticles';
import { HeroBackground } from './components/HeroBackground';
import { HeroContent } from './components/HeroContent';

const Hero = () => {
  const { enableParticles, init } = useParticles();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <HeroBackground
        enableParticles={enableParticles}
        init={init}
      />
      <HeroContent />
    </section>
  );
};

export default Hero;