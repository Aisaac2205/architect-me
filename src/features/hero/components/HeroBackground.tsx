import { lazy, Suspense } from 'react';
import heroImage from '@/assets/hero-bg.jpg';

// Lazy load particles to not block initial render
const Particles = lazy(() => import('@tsparticles/react').then(mod => ({ default: mod.Particles })));

interface HeroBackgroundProps {
    enableParticles: boolean;
    init: boolean;
}

export const HeroBackground = ({ enableParticles, init }: HeroBackgroundProps) => {
    return (
        <>
            {/* Animated Particles Background - Lazy loaded for performance */}
            {enableParticles && init && (
                <Suspense fallback={null}>
                    <Particles
                        id="tsparticles"
                        className="absolute inset-0"
                        options={{
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: { enable: true, mode: "push" },
                                    onHover: { enable: true, mode: "repulse" },
                                    resize: { enable: true, delay: 0.5 }
                                },
                                modes: {
                                    push: { quantity: 4 },
                                    repulse: { distance: 200, duration: 0.4 }
                                }
                            },
                            particles: {
                                color: { value: "#7c3aed" },
                                links: { color: "#7c3aed", distance: 150, enable: true, opacity: 0.3, width: 1 },
                                move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 2, straight: false },
                                number: { density: { enable: true, width: 800, height: 800 }, value: 80 },
                                opacity: { value: 0.5 },
                                shape: { type: "circle" },
                                size: { value: { min: 1, max: 5 } }
                            },
                            detectRetina: true
                        }}
                    />
                </Suspense>
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
