import { techStack } from '../data/techStack.data';

type Tech = (typeof techStack)[number];

const TechCircle = ({ tech }: { tech: Tech }) => (
    <div
        className="h-16 w-16 shrink-0 rounded-full border border-border flex items-center justify-center"
        style={{
            backgroundColor:
                tech.bgColor !== 'transparent' ? tech.bgColor : 'rgba(255, 255, 255, 0.06)',
        }}
    >
        <tech.Icon
            className="text-3xl"
            style={{ color: tech.color }}
            aria-label={tech.name}
        />
    </div>
);

const MarqueeRow = ({ items, reverse = false }: { items: Tech[]; reverse?: boolean }) => (
    <div
        className={`flex w-max animate-scroll ${reverse ? '[animation-direction:reverse]' : ''}`}
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
        <div className="flex gap-10 pr-10 shrink-0">
            {items.map((tech, i) => (
                <TechCircle key={`a-${i}`} tech={tech} />
            ))}
        </div>
        <div className="flex gap-10 pr-10 shrink-0" aria-hidden>
            {items.map((tech, i) => (
                <TechCircle key={`b-${i}`} tech={tech} />
            ))}
        </div>
    </div>
);

export const TechMarquee = () => {
    const rowTwo = [...techStack].reverse();

    return (
        <div className="relative w-full overflow-hidden py-4">
            <MarqueeRow items={techStack} />
            <div className="mt-6">
                <MarqueeRow items={rowTwo} reverse />
            </div>

            {/* Fade overlays */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
    );
};
