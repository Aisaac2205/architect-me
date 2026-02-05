import { motion } from 'framer-motion';
import { techStack } from '../data/techStack.data';

interface TechStackGridProps {
    shouldReduceMotion: boolean | null;
}

export const TechStackGrid = ({ shouldReduceMotion }: TechStackGridProps) => {
    return (
        <motion.div
            className="mt-20"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">
                    Mi Stack <span className="text-gradient">Tecnológico</span>
                </h3>
                <p className="text-muted-foreground text-lg">
                    Las herramientas que domino para construir soluciones robustas y modernas.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        className="group flex flex-col items-center space-y-3 w-full"
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: shouldReduceMotion ? 0 : index * 0.05,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={shouldReduceMotion ? {} : { y: -5 }}
                    >
                        <motion.div
                            className="relative w-16 h-16 rounded-2xl border border-border/50 backdrop-blur-sm shadow-lg flex items-center justify-center"
                            style={{
                                '--tech-color': tech.color,
                                backgroundColor: tech.bgColor === 'transparent' ? 'rgba(255, 255, 255, 0.05)' : tech.bgColor,
                                willChange: 'transform',
                            } as React.CSSProperties}
                            whileHover={shouldReduceMotion ? {} : {
                                scale: 1.08,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
                        >
                            <motion.div
                                whileHover={shouldReduceMotion ? {} : {
                                    rotate: [0, -5, 5, 0],
                                    scale: 1.1,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                            >
                                <tech.Icon
                                    className="text-3xl flex-shrink-0"
                                    style={{ color: tech.color }}
                                />
                            </motion.div>
                            <motion.div
                                className="absolute inset-0 rounded-2xl"
                                style={{ backgroundColor: tech.color }}
                                initial={{ opacity: 0 }}
                                whileHover={shouldReduceMotion ? {} : { opacity: 0.15 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.div>
                        <span className="text-sm font-medium text-center transition-colors duration-200 group-hover:text-primary">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
