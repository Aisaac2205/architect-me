import { techStack } from '../data/techStack.data';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

export const TechStackCarousel = () => {
    return (
        <div className="mt-20">
            <div className="text-center mb-12 px-6 opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
                <h3 className="text-3xl font-bold mb-4">
                    Mi Stack <span className="text-gradient">Tecnológico</span>
                </h3>
                <p className="text-muted-foreground text-lg">
                    Las herramientas que domino para construir soluciones robustas y modernas.
                </p>
            </div>

            <div className="relative w-full overflow-hidden py-4">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        dragFree: true,
                    }}
                    plugins={[
                        AutoScroll({
                            speed: 1,
                            stopOnInteraction: false,
                            stopOnMouseEnter: true,
                        })
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-16">
                        {techStack.map((tech, index) => (
                            <CarouselItem key={index} className="pl-16 basis-auto">
                                <div className="flex flex-col items-center justify-center group w-24 cursor-grab active:cursor-grabbing">
                                    <div
                                        className="relative w-16 h-16 rounded-2xl border border-border/50 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                                        style={{
                                            backgroundColor: tech.bgColor !== 'transparent' ? tech.bgColor : 'rgba(255, 255, 255, 0.05)'
                                        }}
                                    >
                                        <tech.Icon
                                            className={`${tech.sizeClass || 'text-5xl'} transition-transform duration-300 group-hover:rotate-6`}
                                            style={{ color: tech.color }}
                                        />
                                    </div>
                                    <span className="mt-3 text-sm font-medium text-center text-muted-foreground group-hover:text-primary transition-colors duration-200">
                                        {tech.name}
                                    </span>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};
