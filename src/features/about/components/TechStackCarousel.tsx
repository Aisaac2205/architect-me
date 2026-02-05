import { motion } from 'framer-motion';
import { techStack } from '../data/techStack.data';

export const TechStackCarousel = () => {
    return (
        <div className="mt-20">
            <motion.div
                className="text-center mb-12 px-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h3 className="text-3xl font-bold mb-4">
                    Mi Stack <span className="text-gradient">Tecnológico</span>
                </h3>
                <p className="text-muted-foreground text-lg">
                    Las herramientas que domino para construir soluciones robustas y modernas.
                </p>
            </motion.div>
            {/* Contenedor del Carrusel - Full Width */}
            <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-4">
                {/* Máscaras de degradado */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div
                    className="flex w-max animate-scroll"
                    style={{
                        width: 'max-content'
                    }}
                >
                    {/* Primer Set de Iconos */}
                    <div className="flex gap-16 shrink-0 pr-16 items-center">
                        {techStack.map((tech, index) => (
                            <div
                                key={`original-${tech.name}-${index}`}
                                className="flex flex-col items-center justify-center group shrink-0 w-24"
                            >
                                <div
                                    className="relative w-16 h-16 rounded-2xl border border-border/50 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 bg-white/5"
                                >
                                    <tech.Icon
                                        className="text-3xl transition-transform duration-300 group-hover:rotate-6 sm:grayscale sm:group-hover:grayscale-0"
                                        style={{ color: tech.color }}
                                    />
                                </div>
                                <span className="mt-3 text-sm font-medium text-center text-muted-foreground group-hover:text-primary transition-colors duration-200">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Segundo Set de Iconos (Duplicado exacto) */}
                    <div className="flex gap-16 shrink-0 pr-16 items-center">
                        {techStack.map((tech, index) => (
                            <div
                                key={`duplicated-${tech.name}-${index}`}
                                className="flex flex-col items-center justify-center group shrink-0 w-24"
                            >
                                <div
                                    className="relative w-16 h-16 rounded-2xl border border-border/50 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 bg-white/5"
                                >
                                    <tech.Icon
                                        className="text-3xl transition-transform duration-300 group-hover:rotate-6 sm:grayscale sm:group-hover:grayscale-0"
                                        style={{ color: tech.color }}
                                    />
                                </div>
                                <span className="mt-3 text-sm font-medium text-center text-muted-foreground group-hover:text-primary transition-colors duration-200">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
