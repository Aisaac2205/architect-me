import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export const SocialLinks = () => {
    return (
        <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
        >
            <motion.a
                href="https://github.com/Aisaac2205"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card transition-all duration-300 glow-on-hover"
                aria-label="GitHub de Isaac Sarceño"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
            >
                <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/isaac-flores-aa2850374"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card transition-all duration-300 glow-on-hover"
                aria-label="LinkedIn de Isaac Sarceño"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
            >
                <Linkedin className="h-5 w-5" />
            </motion.a>
        </motion.div>
    );
};
