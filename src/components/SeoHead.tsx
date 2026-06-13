import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://isaacsf-dev.vercel.app';

export const SeoHead = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const lang = i18n.language === 'en' ? 'en' : 'es';
  const canonical = lang === 'en' ? `${BASE_URL}/en` : `${BASE_URL}/`;
  const title = t('seo.title');
  const description = t('seo.description');

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <link rel="alternate" hreflang="es" href={`${BASE_URL}/`} />
      <link rel="alternate" hreflang="en" href={`${BASE_URL}/en`} />
      <link rel="alternate" hreflang="x-default" href={`${BASE_URL}/`} />

      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_ES'} />

      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
