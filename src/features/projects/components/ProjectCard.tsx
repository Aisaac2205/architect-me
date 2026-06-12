import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
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
            aria-label={t('projects.visitAriaLabel', { title })}
            className="group flex flex-col h-full"
        >
            <div className="flex flex-col flex-1">
                <div className="flex aspect-[3/2] overflow-clip rounded-xl border border-border bg-[#d9d9d9]">
                    <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-[1.02]">
                            <picture>
                                <source
                                    srcSet={`${project.image.replace('.webp', '-400w.webp')} 400w`}
                                    sizes="452px"
                                    type="image/webp"
                                />
                                <img
                                    src={project.image}
                                    alt={title}
                                    className="h-full w-full object-contain object-top"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                    </div>
                </div>

                <div className="mb-2 line-clamp-2 break-words pt-4 text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                    {title}
                </div>
                <div className="mb-6 text-sm text-muted-foreground md:text-base">
                    {description}
                </div>
            </div>

            <div className="flex items-center text-sm font-medium mt-auto">
                {t('projects.visit')}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </div>
        </a>
    );
};
