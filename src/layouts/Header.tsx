import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageToggle = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentLang = pathname.startsWith('/en') ? 'en' : 'es';

  return (
    <div className="flex items-center gap-1 text-sm font-medium tracking-wider">
      <button
        onClick={() => navigate('/')}
        className={`min-h-[44px] min-w-[36px] px-2 flex items-center justify-center transition-colors ${currentLang === 'es'
          ? 'text-primary font-bold'
          : 'text-muted-foreground hover:text-primary'}`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <span className="text-border select-none">|</span>
      <button
        onClick={() => navigate('/en')}
        className={`min-h-[44px] min-w-[36px] px-2 flex items-center justify-center transition-colors ${currentLang === 'en'
          ? 'text-primary font-bold'
          : 'text-muted-foreground hover:text-primary'}`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
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
