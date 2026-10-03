import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { SectionTitle } from '@/components/SectionTitle';

const features = [
  { key: 'performance', icon: Zap },
  { key: 'async', icon: Cpu },
  { key: 'security', icon: Fingerprint },
  { key: 'design', icon: Pencil },
  { key: 'quality', icon: Settings2 },
  { key: 'ai', icon: Sparkles },
] as const;

type AnimatedContainerProps = {
  delay?: number;
  className?: string;
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="my-auto flex flex-col gap-6 sm:gap-8">
      <SectionTitle>{t('about.headline')}</SectionTitle>

      <AnimatedContainer
        delay={0.4}
        className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
      >
        {features.map(({ key, icon }) => (
          <FeatureCard
            key={key}
            feature={{
              icon,
              title: t(`about.features.${key}.title`),
              description: t(`about.features.${key}.description`),
            }}
          />
        ))}
      </AnimatedContainer>

      <p
        className="max-w-[50ch] font-normal leading-relaxed text-pretty"
        style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
      >
        {t('about.headlineAccent')}
      </p>
    </div>
  );
};

export default About;
