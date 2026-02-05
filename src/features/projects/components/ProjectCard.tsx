import { Button } from '@/components/ui/button';
import { Store, Eye } from 'lucide-react';
import { Project } from '../types/project.types';

interface ProjectCardProps {
    project: Project;
    onOpen: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
    return (
        <div
            className="bg-card border border-border rounded-2xl overflow-hidden min-w-[300px] w-[350px] md:w-[450px] snap-center group transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 flex flex-col h-full"
        >
            {/* Imagen del proyecto con Overlay activo */}
            <div
                className="relative cursor-pointer bg-black overflow-hidden h-64"
                onClick={() => onOpen(project)}
            >
                <img
                    src={project.image}
                    alt={`Screenshot del proyecto ${project.title}`}
                    className="w-full h-full object-contain p-2 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="450"
                    height="256"
                />

                {/* Overlay al Hover */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-5 h-5" />
                        Ver Detalles
                    </button>
                </div>
            </div>

            {/* Contenido del proyecto */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-primary font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 4 && (
                        <span className="px-2 py-1 bg-muted border border-border rounded-md text-xs text-muted-foreground font-medium">
                            +{project.tags.length - 4}
                        </span>
                    )}
                </div>

                <div className="mt-auto">
                    <Button
                        variant="default"
                        className="w-full bg-primary hover:bg-primary/90"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                    >
                        <a
                            href={project.storeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={
                                project.id === 2
                                    ? `Visitar sitio web ${project.title}`
                                    : (project.id === 3 || project.id === 4)
                                        ? `Visitar restaurante ${project.title}`
                                        : `Visitar tienda oficial de ${project.title}`
                            }
                        >
                            <Store className="h-4 w-4 mr-2" />
                            {project.id === 2 ? 'Visitar Sitio' : (project.id === 3 || project.id === 4) ? 'Visitar Restaurante' : 'Visitar Tienda'}
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
};
