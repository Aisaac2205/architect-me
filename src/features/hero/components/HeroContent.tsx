import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
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
        <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        ¡Hola! Soy Full Stack Developer
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-gradient">Isaac Sarceño</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Especializado en <span className="text-primary font-semibold">tecnologías modernas</span> y desarrollo web completo.
                    Creo experiencias web excepcionales que combinan diseño elegante con funcionalidad robusta.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="hero"
                            size="lg"
                            onClick={redirectToGitHub}
                            className="min-w-[160px]"
                        >
                            Ver Proyectos
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => scrollToSection('contacto')}
                            className="min-w-[160px]"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Contactar
                        </Button>
                    </motion.div>
                </motion.div>

                <SocialLinks />
            </div>
        </div>
    );
};
