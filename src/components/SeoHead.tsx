import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const BASE_URL = 'https://isaacsf.dev';
const OG_IMAGE = `${BASE_URL}/is.jpg`;

export const SeoHead = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'es';
  const canonical = lang === 'en' ? `${BASE_URL}/en` : `${BASE_URL}/`;
  const title = t('seo.title');
  const description = t('seo.description');
  const keywords = t('seo.keywords');
  const jobTitle = t('seo.jobTitle');

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'Isaac Sarceño',
        inLanguage: lang === 'en' ? 'en-US' : 'es-GT',
      },
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#person`,
        name: 'Isaac Sarceño',
        url: BASE_URL,
        image: OG_IMAGE,
        jobTitle,
        email: 'mailto:isaac.flores.dev@gmail.com',
        sameAs: [
          'https://github.com/Aisaac2205',
          'https://www.linkedin.com/in/isaac-sarce%C3%B1o-aa2850374',
          'https://www.instagram.com/_isaac.webp',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${BASE_URL}/#service`,
        name:
          lang === 'en'
            ? 'Isaac Sarceño — Freelance Software Engineering & Web Development'
            : 'Isaac Sarceño — Ingeniería de Software y Desarrollo Web Freelance',
        url: canonical,
        image: OG_IMAGE,
        description,
        founder: { '@id': `${BASE_URL}/#person` },
        areaServed: ['Guatemala', 'Worldwide'],
        serviceType:
          lang === 'en'
            ? ['Custom Web Design', 'E-commerce Development', 'Technical SEO', 'Web Applications']
            : ['Diseño Web a Medida', 'Tiendas en Línea', 'SEO Técnico', 'Aplicaciones Web'],
      },
    ],
  };

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <link rel="alternate" hrefLang="es" href={`${BASE_URL}/`} />
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}/en`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Isaac Sarceño" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_ES'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};
