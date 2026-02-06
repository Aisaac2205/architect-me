import { useEffect, useState } from 'react';

const BackgroundGlow = () => {
    // Optimization: Only render on desktop to avoid main thread blocking on mobile
    // The blur-[128px] effect is extremely expensive on mobile GPUs
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const checkRender = () => {
            const isDesktop = window.matchMedia('(min-width: 768px)').matches;
            const canAnimate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            // Only render if it's desktop AND not reduced motion
            setShouldRender(isDesktop && canAnimate);
        };

        checkRender();

        // Optional: Listen for resize, but debounced or just on mount is usually enough for this optimization
        window.addEventListener('resize', checkRender);
        return () => window.removeEventListener('resize', checkRender);
    }, []);

    if (!shouldRender) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[128px] animate-blob" />
            <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-purple-900/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
        </div>
    );
};

export default BackgroundGlow;
