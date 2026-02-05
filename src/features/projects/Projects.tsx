import { useState } from 'react';
import { Project } from './types/project.types';
import { projects } from './data/projects.data';
import { ProjectCarousel } from './components/ProjectCarousel';
import { ProjectLightbox } from './components/ProjectLightbox';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  const openLightbox = (project: Project) => {
    setSelectedProject(project);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="proyectos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mis <span className="text-gradient">Proyectos Destacados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explora una selección de mis proyectos más destacados, donde combino
              tecnologías modernas con diseño intuitivo para crear experiencias digitales excepcionales
            </p>
          </div>

          <ProjectCarousel
            projects={projects}
            onOpen={openLightbox}
          />
        </div>
      </section>

      <ProjectLightbox
        project={selectedProject}
        onClose={closeLightbox}
      />
    </>
  );
};

export default Projects;