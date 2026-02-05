import { useEffect, useState } from 'react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export const useParticles = () => {
    // Detect device performance and disable particles on low-end devices
    // This state will be false initially to avoid blocking hydration/initial paint
    const [init, setInit] = useState(false);
    const [enableParticles, setEnableParticles] = useState(false);

    useEffect(() => {
        // Run checks only on client side
        if (typeof window !== 'undefined') {
            const isMobile = window.innerWidth < 768;
            const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            // Should we enable particles?
            const shouldEnable = !isMobile && !isLowEndDevice && !prefersReducedMotion;
            setEnableParticles(shouldEnable);

            if (shouldEnable) {
                initParticlesEngine(async (engine) => {
                    await loadSlim(engine);
                }).then(() => {
                    setInit(true);
                });
            }
        }
    }, []);

    return { enableParticles, init };
};
