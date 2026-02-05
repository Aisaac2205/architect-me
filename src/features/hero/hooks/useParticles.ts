import { useCallback, useState } from 'react';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

export const useParticles = () => {
    // Detect device performance and disable particles on low-end devices
    const [enableParticles] = useState(() => {
        if (typeof window !== 'undefined') {
            const isMobile = window.innerWidth < 768;
            const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            return !isMobile && !isLowEndDevice && !prefersReducedMotion;
        }
        return true;
    });

    const particlesInit = useCallback(async (engine: Engine) => {
        if (enableParticles) {
            await loadSlim(engine);
        }
    }, [enableParticles]);

    return { enableParticles, particlesInit };
};
