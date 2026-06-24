import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { scrollToElement } from '@/hooks/use-lenis';

interface FlipLinkProps {
  children: string;
  href: string;
  className?: string;
  ariaLabel: string;
}

const FlipLink = ({ children, href, className = '', ariaLabel }: FlipLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      'group relative block overflow-hidden whitespace-nowrap text-6xl font-black uppercase sm:text-7xl md:text-8xl lg:text-[7.5rem]',
      className
    )}
    style={{ lineHeight: 0.75 }}
    aria-label={ariaLabel}
  >
    <div className="flex">
      {children.split('').map((letter, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
          style={{ transitionDelay: `${i * 25}ms` }}
        >
          {letter}
        </span>
      ))}
    </div>
    <div className="absolute inset-0 flex">
      {children.split('').map((letter, i) => (
        <span
          key={i}
          className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
          style={{ transitionDelay: `${i * 25}ms` }}
        >
          {letter}
        </span>
      ))}
    </div>
  </a>
);

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    scrollToElement(`#${sectionId}`, { offset: -80, duration: 1.5 });
  };

  const socials = [
    { name: 'Github',    href: 'https://github.com/Aisaac2205' },
    { name: 'Linkedin',  href: 'https://www.linkedin.com/in/isaac-sarce%C3%B1o-aa2850374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'Instagram', href: 'https://www.instagram.com/_isaac.webp?igsh=d2N4NWV4YTlyNDll&utm_source=qr' },
    { name: 'Email',     href: 'mailto:isaac.flores.dev@gmail.com' },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 py-8 select-none">
        {socials.map(({ name, href }) => (
          <FlipLink
            key={name}
            href={href}
            ariaLabel={t('footer.visitAriaLabel', { name })}
          >
            {name}
          </FlipLink>
        ))}
      </div>

      <div className="mt-auto border-t border-current/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('sobre-mi')}
            className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
          >
            {t('footer.about')}
          </button>
          <button
            onClick={() => scrollToSection('proyectos')}
            className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
          >
            {t('footer.projects')}
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
          >
            {t('footer.contact')}
          </button>
        </div>
        <p className="text-sm opacity-40 text-center md:text-right">
          {t('footer.copyright', { year: currentYear })}
        </p>
      </div>
    </>
  );
};

export default Footer;
