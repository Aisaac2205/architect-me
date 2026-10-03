import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageToggle = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isEnglish = pathname.startsWith('/en');

  return (
    <button
      onClick={() => navigate(isEnglish ? '/' : '/en')}
      className="group min-h-[44px] px-2 flex items-center gap-2 text-sm font-medium tracking-wider text-muted-foreground hover:text-primary transition-colors"
      aria-label={isEnglish ? 'Cambiar a español' : 'Switch to English'}
    >
      <img
        src="/assets/traducir.png"
        alt=""
        width={18}
        height={18}
        className="size-[18px] invert opacity-70 transition-opacity group-hover:opacity-100"
      />
      {isEnglish ? 'ES' : 'EN'}
    </button>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
        : 'bg-transparent'
        }`}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 py-3 flex justify-end">
        <LanguageToggle />
      </nav>
    </header>
  );
};

export default Header;
