import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { scrollToElement } from '@/hooks/use-lenis';
import { SocialLinks } from './SocialLinks';

export const HeroContent = () => {
    const scrollToSection = (sectionId: string) => {
        scrollToElement(`#${sectionId}`, { offset: -80, duration: 1.5 });
    };

    const redirectToGitHub = () => {
        window.open('https://github.com/Aisaac2205', '_blank');
    };

    return (
        <div className="container mx-auto px-6 py-20 relative z-10 hero-content-critical">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        ¡Hola! Soy Full Stack Developer
                    </span>
                </div>

                <h1 className="hero-title-critical">
                    <span className="text-gradient">Isaac Sarceño</span>
                </h1>

                <p className="hero-subtitle-critical">
                    Especializado en <span className="text-primary font-semibold">tecnologías modernas</span> y desarrollo web completo.
                    Creo experiencias web excepcionales que combinan diseño elegante con funcionalidad robusta.
                </p>

                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]"
                >
                    <Button
                        variant="hero"
                        size="lg"
                        onClick={redirectToGitHub}
                        className="min-w-[160px]"
                    >
                        Ver Proyectos
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => scrollToSection('contacto')}
                        className="min-w-[160px]"
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        Contactar
                    </Button>
                </div>

                <div className="opacity-0 animate-[fadeIn_0.5s_ease-out_0.4s_forwards]">
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
};
