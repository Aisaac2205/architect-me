import { User, Briefcase, Mail } from 'lucide-react';
import { scrollToElement } from '@/hooks/use-lenis';

interface DockItemProps {
    icon: React.ElementType;
    label: string;
    targetId: string;
}

const DockItem = ({ icon: Icon, label, targetId }: DockItemProps) => (
    <button
        onClick={() => scrollToElement(`#${targetId}`, { offset: -80, duration: 1.5 })}
        className="flex flex-col items-center justify-center p-3 text-muted-foreground hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label={label}
    >
        <div className="relative p-2 rounded-xl bg-white/5 border border-white/5 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
            <Icon className="h-6 w-6" />
        </div>
        <span className="text-[10px] font-medium mt-1 opacity-100 transition-opacity">
            {label}
        </span>
    </button>
);

const FloatingDock = () => {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden animate-in slide-in-from-bottom-10 fade-in duration-500">
            <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-primary/10">
                <DockItem icon={User} label="Sobre mí" targetId="sobre-mi" />
                <DockItem icon={Briefcase} label="Proyectos" targetId="proyectos" />
                <DockItem icon={Mail} label="Contacto" targetId="contacto" />
            </div>
        </div>
    );
};

export default FloatingDock;
