import Particles from 'react-tsparticles';
import heroImage from '@/assets/hero-bg.jpg';
import { particlesOptions } from '../config/particles.config';
import type { Engine } from 'tsparticles-engine';

interface HeroBackgroundProps {
    enableParticles: boolean;
    particlesInit: (engine: Engine) => Promise<void>;
}

export const HeroBackground = ({ enableParticles, particlesInit }: HeroBackgroundProps) => {
    return (
        <>
            {/* Animated Particles Background */}
            {enableParticles && (
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    className="absolute inset-0"
                    options={particlesOptions}
                />
            )}

            {/* Background Image */}
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
