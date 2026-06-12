import { ArrowRight } from 'lucide-react';
import { Project } from '../types/project.types';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <a
            href={project.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar el sitio de ${project.title}`}
            className="group flex flex-col justify-between"
        >
            <div className="flex aspect-[3/2] overflow-clip rounded-xl border border-border">
                <div className="flex-1">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <picture>
                            <source
                                srcSet={`${project.image.replace('.jpg', '-400w.webp')} 400w`}
                                sizes="452px"
                                type="image/webp"
                            />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover object-top"
                                loading="lazy"
                                decoding="async"
                            />
                        </picture>
                    </div>
                </div>
            </div>

            <div className="mb-2 line-clamp-2 break-words pt-4 text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                {project.title}
            </div>
            <div className="mb-6 line-clamp-2 text-sm text-muted-foreground md:text-base">
                {project.description}
            </div>
            <div className="flex items-center text-sm font-medium">
                Visitar sitio
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </div>
        </a>
    );
};
