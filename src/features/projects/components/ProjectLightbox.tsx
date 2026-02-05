import { Button } from '@/components/ui/button';
import { X, Store, ExternalLink } from 'lucide-react';
import { Project } from '../types/project.types';

interface ProjectLightboxProps {
    project: Project | null;
    onClose: () => void;
}

export const ProjectLightbox = ({ project, onClose }: ProjectLightboxProps) => {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={onClose}
            onKeyDown={(e) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
        >
            <div
                className="relative max-w-6xl w-full bg-card border border-border rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col lg:flex-row max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón Cerrar (Absoluto para estar siempre accesible) */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md"
                    onClick={onClose}
                    aria-label="Cerrar imagen ampliada"
                >
                    <X className="h-5 w-5" />
                </Button>

                {/* Columna Izquierda: Imagen */}
                <div className="bg-black flex items-center justify-center relative overflow-hidden group h-48 sm:h-64 lg:h-auto lg:w-[65%] shrink-0">
                    <img
                        src={project.image}
                        alt={`Vista ampliada del proyecto ${project.title}`}
                        className="w-full h-full object-contain p-4 lg:p-8 transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradiente sutil solo abajo para blending */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent opacity-50" />
                </div>

                {/* Columna Derecha: Información */}
                <div className="flex flex-col p-5 lg:p-8 bg-card border-l border-border overflow-y-auto lg:w-[35%]">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-primary/20">
                            Proyecto Destacado
                        </span>
                        <h2 id="lightbox-title" className="text-xl lg:text-3xl font-bold mb-4 leading-tight">
                            {project.title}
                        </h2>
                        <div className="h-1 w-20 bg-primary/50 rounded-full mb-6" />

                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex-grow">
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                            Tecnologías
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 bg-secondary hover:bg-secondary/80 transition-colors rounded-md text-xs text-secondary-foreground font-medium border border-border"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-border">
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full gap-2 bg-primary hover:bg-primary/90 text-lg py-6 shadow-lg shadow-primary/20"
                            asChild
                        >
                            <a
                                href={project.storeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.id === 2 ? (
                                    <>
                                        <ExternalLink className="h-5 w-5" />
                                        Visitar Sitio Web
                                    </>
                                ) : (project.id === 3 || project.id === 4) ? (
                                    <>
                                        <Store className="h-5 w-5" />
                                        Visitar Restaurante
                                    </>
                                ) : (
                                    <>
                                        <Store className="h-5 w-5" />
                                        Visitar Tienda
                                    </>
                                )}
                            </a>
                        </Button>
                        <p className="text-center text-xs text-muted-foreground mt-3">
                            Abre el proyecto en una nueva pestaña
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
