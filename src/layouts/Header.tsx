import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/hooks/use-lenis';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    scrollToElement(`#${sectionId}`, { offset: -80, duration: 1.5 });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
        : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('contacto')}
              className="ml-4"
            >
              Hablemos
            </Button>
          </div>


        </div>
      </nav>


    </header>
  );
};

export default Header;