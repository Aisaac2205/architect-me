import { motion } from 'framer-motion';
import { Project } from '../types/project.types';
import { ProjectCard } from './ProjectCard';

interface ProjectCarouselProps {
    projects: Project[];
    onOpen: (project: Project) => void;
}

export const ProjectCarousel = ({ projects, onOpen }: ProjectCarouselProps) => {
    // Triplicamos los proyectos para asegurar suficiente contenido para el loop perfecto en pantallas anchas
    const duplicatedProjects = [...projects, ...projects, ...projects];

    return (
        <div className="mt-12 relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-10">
            {/* Máscaras de degradado laterales */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
                className="flex w-max animate-scroll-slow"
                style={{
                    width: 'max-content'
                }}
            >
                {/* Primer Set */}
                <div className="flex gap-6 md:gap-10 shrink-0 pr-6 md:pr-10 items-stretch">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={`p1-${project.id}-${index}`}
                            project={project}
                            onOpen={onOpen}
                        />
                    ))}
                </div>

                {/* Segundo Set (Duplicado) */}
                <div className="flex gap-6 md:gap-10 shrink-0 pr-6 md:pr-10 items-stretch">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={`p2-${project.id}-${index}`}
                            project={project}
                            onOpen={onOpen}
                        />
                    ))}
                </div>

                {/* Tercer Set (Triplicado para pantallas muy anchas) */}
                <div className="flex gap-6 md:gap-10 shrink-0 pr-6 md:pr-10 items-stretch">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={`p3-${project.id}-${index}`}
                            project={project}
                            onOpen={onOpen}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
