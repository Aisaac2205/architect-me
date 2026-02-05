import { Bot, Glasses, Guitar, Code, Rocket, Zap, Music } from 'lucide-react';

const icons = [
    { Icon: Bot, top: '15%', left: '10%', delay: '0s', size: 'h-12 w-12', rotate: '12deg' },
    { Icon: Glasses, top: '25%', right: '15%', delay: '2s', size: 'h-16 w-16', rotate: '-12deg' },
    { Icon: Guitar, top: '60%', left: '5%', delay: '4s', size: 'h-20 w-20', rotate: '45deg' },
    { Icon: Code, top: '75%', right: '10%', delay: '1s', size: 'h-14 w-14', rotate: '-5deg' },
    { Icon: Rocket, top: '10%', right: '30%', delay: '5s', size: 'h-10 w-10', rotate: '20deg' },
    { Icon: Zap, top: '45%', left: '20%', delay: '3s', size: 'h-8 w-8', rotate: '-15deg' },
    { Icon: Music, bottom: '10%', left: '30%', delay: '6s', size: 'h-12 w-12', rotate: '10deg' },
];

const FloatingIcons = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {icons.map((item, index) => (
                <div
                    key={index}
                    className="absolute text-white/5 animate-float opacity-30"
                    style={{
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        bottom: item.bottom,
                        animationDelay: item.delay,
                        transform: `rotate(${item.rotate})`
                    }}
                >
                    <item.Icon className={item.size} strokeWidth={1.5} />
                </div>
            ))}
        </div>
    );
};

export default FloatingIcons;
