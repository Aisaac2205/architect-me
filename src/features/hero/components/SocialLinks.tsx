import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export const SocialLinks = () => {
    return (
        <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
        >
            <a
                href="https://github.com/Aisaac2205"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card transition-all duration-300 glow-on-hover will-change-transform"
                aria-label="GitHub de Isaac Sarceño"
            >
                <Github className="h-5 w-5" />
            </a>
            <a
                href="https://www.linkedin.com/in/isaac-flores-aa2850374"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card transition-all duration-300 glow-on-hover will-change-transform"
                aria-label="LinkedIn de Isaac Sarceño"
            >
                <Linkedin className="h-5 w-5" />
            </a>
        </motion.div>
    );
};
