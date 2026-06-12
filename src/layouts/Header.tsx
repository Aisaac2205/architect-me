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
      <nav className="mx-auto max-w-7xl px-6 py-4">
      </nav>


    </header>
  );
};

export default Header;