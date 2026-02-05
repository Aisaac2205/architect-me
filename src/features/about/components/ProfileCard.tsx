import { motion } from 'framer-motion';

export const ProfileCard = () => {
    return (
        <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-primary p-1">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                            <img
                                src="/profile.jpg"
                                alt="Isaac Sarceño"
                                className="w-28 h-28 rounded-full object-cover"
                                width="112"
                                height="112"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Isaac Sarceño</h3>
                    <p className="text-primary font-medium">React · NestJS · TypeScript</p>
                </div>
            </div>
        </motion.div>
    );
};
