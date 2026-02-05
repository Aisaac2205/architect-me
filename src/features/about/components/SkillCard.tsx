import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const SkillCard = ({ icon: Icon, title, description }: SkillCardProps) => {
    return (
        <div className="glass-card rounded-2xl p-6 h-full">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">{title}</h4>
            </div>
            <p className="text-muted-foreground">
                {description}
            </p>
        </div>
    );
};
