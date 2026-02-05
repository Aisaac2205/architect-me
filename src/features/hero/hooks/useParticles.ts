import { useEffect, useState, useMemo } from 'react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export const useParticles = () => {
    // Initialize enableParticles immediately for SSR/faster mobile detection
    const enableParticles = useMemo(() => {
        if (typeof window === 'undefined') return false;
        const isMobile = window.innerWidth < 768;
        const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        return !isMobile && !isLowEndDevice && !prefersReducedMotion;
    }, []);

    const [init, setInit] = useState(false);

    useEffect(() => {
        if (enableParticles && !init) {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => {
                setInit(true);
            });
        }
    }, [enableParticles, init]);

    return { enableParticles, init };
};
