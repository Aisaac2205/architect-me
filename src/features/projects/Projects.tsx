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
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — {t('footer.projects')}</p>
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
          className="font-bold leading-[0.85] uppercase tracking-tight"
          style={{ fontSize: 'clamp(3rem, 8vw, 10rem)' }}
        >
          {t('projects.title')}
        </h2>
      </div>

      <hr className="border-none border-t border-current opacity-30" />

      <div className="flex-1 flex flex-col justify-center">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: 'start',
            breakpoints: { '(max-width: 768px)': { align: 'center' } },
          }}
          className="relative -mx-[4vw]"
        >
          <CarouselContent className="ml-0 pl-[4vw]">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="px-3 basis-full md:basis-auto md:max-w-[452px] flex"
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
