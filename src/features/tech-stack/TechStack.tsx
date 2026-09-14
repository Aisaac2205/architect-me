import { useTranslation } from 'react-i18next';
import { TechMarquee } from './components/TechMarquee';
import { InfiniteTextMarquee } from './components/InfiniteTextMarquee';

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <>
      <hr className="border-none border-t border-current opacity-30" />

      <div>
        <h2
          className="font-bold leading-[0.88] uppercase tracking-tight text-balance"
          style={{ fontSize: 'clamp(2.75rem, 5.5vw, 8rem)' }}
        >
          {t('about.techTitle')}
        </h2>
      </div>

      <hr className="border-none border-t border-current opacity-30" />

      <p
        className="max-w-[50ch] font-normal leading-relaxed text-pretty"
        style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
      >
        {t('about.techSubtitle')}
      </p>

      <hr className="border-none border-t border-current opacity-30" />

      <div className="flex-1 flex flex-col justify-center gap-6 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-2">
        <TechMarquee />
        <InfiniteTextMarquee />
      </div>
    </>
  );
};

export default TechStack;
