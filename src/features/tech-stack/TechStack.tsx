import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/SectionTitle';
import { TechMarquee } from './components/TechMarquee';
import { InfiniteTextMarquee } from './components/InfiniteTextMarquee';

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle>{t('about.techTitle')}</SectionTitle>

      <p
        className="max-w-[50ch] font-normal leading-relaxed text-pretty"
        style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
      >
        {t('about.techSubtitle')}
      </p>

      <div className="flex-1 flex flex-col justify-center gap-6 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-2">
        <TechMarquee />
        <InfiniteTextMarquee />
      </div>
    </>
  );
};

export default TechStack;
