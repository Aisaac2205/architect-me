import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { projects } from './data/projects.data';
import { ProjectCard } from './components/ProjectCard';

const Projects = () => {
  const { t } = useTranslation();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => { carouselApi.off('select', updateSelection); };
  }, [carouselApi]);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex shrink-0 items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="border-current/30 hover:bg-current/10 disabled:pointer-events-auto"
            aria-label={t('projects.prevAriaLabel')}
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="border-current/30 hover:bg-current/10 disabled:pointer-events-auto"
            aria-label={t('projects.nextAriaLabel')}
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>

      <hr className="border-none border-t border-current opacity-30" />

      <div>
        <h2
          className="font-bold leading-[0.88] uppercase tracking-tight text-balance"
          style={{ fontSize: 'clamp(2.75rem, 5.5vw, 8rem)' }}
        >
          {t('projects.title')}
        </h2>
      </div>

      <hr className="border-none border-t border-current opacity-30" />

      <div className="flex-1 flex flex-col justify-center -mr-6 sm:-mr-8 md:-mr-12 lg:-mr-16 xl:-mr-20">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: 'start',
          }}
          className="relative w-full"
        >
          <CarouselContent className="-ml-4 pr-6 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 basis-[86%] sm:basis-[80%] md:basis-[420px] lg:basis-[452px] flex"
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Projects;
