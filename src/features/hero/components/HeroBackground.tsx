import Particles from '@tsparticles/react';
import heroImage from '@/assets/hero-bg.jpg';
import { particlesOptions } from '../config/particles.config';

interface HeroBackgroundProps {
    enableParticles: boolean;
    init: boolean;
}

export const HeroBackground = ({ enableParticles, init }: HeroBackgroundProps) => {
    return (
        <>
            {/* Animated Particles Background - Only render if enabled and initialized */}
            {enableParticles && init && (
                <Particles
                    id="tsparticles"
                    className="absolute inset-0"
                    options={particlesOptions}
                />
            )}

            {/* Background Image - Always rendered as fallback and base layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: `url(${heroImage})` }}
                role="img"
                aria-label="Imagen de fondo decorativa"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/70" />
        </>
    );
};
