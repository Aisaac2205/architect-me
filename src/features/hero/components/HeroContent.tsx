import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToElement } from '@/hooks/use-lenis';
import { SocialLinks } from './SocialLinks';
import { useMemo } from 'react';

// Simple fade animation for mobile - no layout shifts
const simpleFade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
};

// Full animation for desktop
const fullAnimation = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
});

export const HeroContent = () => {
    const isMobile = useMemo(() => {
        if (typeof window === 'undefined') return false;
        return window.innerWidth < 768;
    }, []);

    const scrollToSection = (sectionId: string) => {
        scrollToElement(`#${sectionId}`, { offset: -80, duration: 1.5 });
    };

    const redirectToGitHub = () => {
        window.open('https://github.com/Aisaac2205', '_blank');
    };

    // Use simpler animations on mobile to prevent forced reflows
    const anim1 = isMobile ? simpleFade : fullAnimation(0);
    const anim2 = isMobile ? simpleFade : fullAnimation(0.15);
    const anim3 = isMobile ? simpleFade : fullAnimation(0.3);

    return (
        <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    className="mb-6"
                    {...anim1}
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        ¡Hola! Soy Full Stack Developer
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    {...anim2}
                >
                    <span className="text-gradient">Isaac Sarceño</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
                    {...anim3}
                >
                    Especializado en <span className="text-primary font-semibold">tecnologías modernas</span> y desarrollo web completo.
                    Creo experiencias web excepcionales que combinan diseño elegante con funcionalidad robusta.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: isMobile ? 0.1 : 0.4 }}
                >
                    <Button
                        variant="hero"
                        size="lg"
                        onClick={redirectToGitHub}
                        className="min-w-[160px] will-change-transform"
                    >
                        Ver Proyectos
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => scrollToSection('contacto')}
                        className="min-w-[160px] will-change-transform"
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        Contactar
                    </Button>
                </motion.div>

                <SocialLinks />
            </div>
        </div>
    );
};
