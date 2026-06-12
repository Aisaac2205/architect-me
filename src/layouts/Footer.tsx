import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { scrollToElement } from '@/hooks/use-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FlipLinkProps {
  children: string;
  href: string;
  className?: string;
}

const FlipLink = ({ children, href, className = '' }: FlipLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group text-primary relative block overflow-hidden whitespace-nowrap text-5xl font-black uppercase sm:text-7xl md:text-8xl lg:text-[7.5rem]",
        className
      )}
      style={{
        lineHeight: 0.75,
      }}
      aria-label={`Visitar mi ${children}`}
    >
      <div className="flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </a>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered entry animation for the giant social links
      gsap.fromTo(
        '.footer-social-link',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    scrollToElement(`#${sectionId}`, { offset: -80, duration: 1.5 });
  };

  return (
    <footer ref={footerRef} className="py-16 border-t border-border/30 bg-background overflow-hidden">
      <div className="w-full px-6 md:px-12">
        <div className="flex flex-col gap-12 md:gap-16">
          
          {/* Main Content Layout - Giant Social Links */}
          <div className="flex flex-col gap-4 py-8 select-none">
            <FlipLink href="https://github.com/Aisaac2205" className="footer-social-link">Github</FlipLink>
            <FlipLink href="https://www.linkedin.com/in/isaac-sarce%C3%B1o-aa2850374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="footer-social-link">Linkedin</FlipLink>
            <FlipLink href="https://www.instagram.com/_isaac.webp?igsh=d2N4NWV4YTlyNDll&utm_source=qr" className="footer-social-link">Instagram</FlipLink>
            <FlipLink href="mailto:isaac.flores.dev@gmail.com" className="footer-social-link">Email</FlipLink>
          </div>

          {/* Footer bottom metadata */}
          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('sobre-mi')} 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre mí
              </button>
              <button 
                onClick={() => scrollToSection('proyectos')} 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Proyectos
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {currentYear} Isaac Sarceño. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;