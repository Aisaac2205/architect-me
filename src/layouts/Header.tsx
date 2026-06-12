import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageToggle = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentLang = pathname.startsWith('/en') ? 'en' : 'es';

  return (
    <div className="flex items-center gap-2 text-sm font-medium tracking-wider">
      <button
        onClick={() => navigate('/')}
        className={currentLang === 'es'
          ? 'text-primary'
          : 'text-muted-foreground hover:text-primary transition-colors'}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <span className="text-border select-none">|</span>
      <button
        onClick={() => navigate('/en')}
        className={currentLang === 'en'
          ? 'text-primary'
          : 'text-muted-foreground hover:text-primary transition-colors'}
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
      <nav className="mx-auto max-w-7xl px-6 py-4 flex justify-end">
        <LanguageToggle />
      </nav>
    </header>
  );
};

export default Header;
