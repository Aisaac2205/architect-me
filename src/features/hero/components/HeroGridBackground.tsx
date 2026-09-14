// Static CSS grid background for the hero. Two layers: light theme (#e5e5e5)
// and dark theme (#404040). The site is dark-locked, so the dark layer renders.

const GRID_MASK = `
  repeating-linear-gradient(
    to right,
    black 0px,
    black 3px,
    transparent 3px,
    transparent 8px
  ),
  repeating-linear-gradient(
    to bottom,
    black 0px,
    black 3px,
    transparent 3px,
    transparent 8px
  ),
  radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
`;

export const HeroGridBackground = () => {
    return (
        <div className="absolute -top-20 -bottom-16 sm:-top-24 sm:-bottom-20 lg:-top-28 lg:-bottom-24 left-1/2 -translate-x-1/2 w-screen pointer-events-none z-0 overflow-hidden">
            <div
                className="absolute block dark:hidden inset-0 z-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #e5e5e5 1px, transparent 1px),
            linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
          `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 0',
                    maskImage: GRID_MASK,
                    WebkitMaskImage: GRID_MASK,
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in',
                }}
            />

            <div
                className="absolute hidden dark:block inset-0 z-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #404040 1px, transparent 1px),
            linear-gradient(to bottom, #404040 1px, transparent 1px)
          `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 0',
                    maskImage: GRID_MASK,
                    WebkitMaskImage: GRID_MASK,
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in',
                }}
            />
        </div>
    );
};
