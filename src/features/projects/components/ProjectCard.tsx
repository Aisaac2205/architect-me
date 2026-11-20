import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { Project } from '../types/project.types';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const { t } = useTranslation();
    const title = t(`projects.items.${project.key}.title`);
    const description = t(`projects.items.${project.key}.description`);

    return (
        <a
            href={project.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.storeUrl ? t('projects.visitAriaLabel', { title }) : undefined}
            className={`${project.storeUrl ? 'group ' : ''}flex flex-col h-full`}
        >
            <div className="flex flex-col flex-1">
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-secondary">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-[1.02]">
                        <img
                            src={project.image}
                            alt={title}
                            width={1920}
                            height={1080}
                            className="h-full w-full object-cover object-top"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>

                <div className="mb-2 line-clamp-2 break-words pt-4 text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                    {title}
                </div>
                <div className="mb-6 text-sm text-muted-foreground md:text-base">
                    {description}
                </div>
            </div>

            {project.storeUrl && (
                <div className="flex items-center text-sm font-medium mt-auto">
                    {t('projects.visit')}
                    <ChevronRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                </div>
            )}
        </a>
    );
};
