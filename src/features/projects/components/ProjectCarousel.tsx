import { Project } from '../types/project.types';
import { ProjectCard } from './ProjectCard';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

interface ProjectCarouselProps {
    projects: Project[];
    onOpen: (project: Project) => void;
}

export const ProjectCarousel = ({ projects, onOpen }: ProjectCarouselProps) => {
    return (
        <div className="mt-12 relative w-full overflow-hidden py-10">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    dragFree: true,
                }}
                plugins={[
                    AutoScroll({
                        speed: 0.8, // Slightly slower for projects to allow reading card details
                        stopOnInteraction: false,
                        stopOnMouseEnter: true,
                    })
                ]}
                className="w-full"
            >
                <CarouselContent className="-ml-6 md:-ml-10">
                    {projects.map((project, index) => (
                        <CarouselItem key={index} className="pl-6 md:pl-10 basis-auto">
                            <ProjectCard
                                project={project}
                                onOpen={onOpen}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};
