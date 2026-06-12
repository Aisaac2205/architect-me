import { HeroGridBackground } from './components/HeroGridBackground';
import { HeroHeadline } from './components/HeroHeadline';
import { HeroServices } from './components/HeroServices';
import { HeroIntro } from './components/HeroIntro';
import { HeroRecentWork } from './components/HeroRecentWork';

const Hero = () => {
    return (
        <section className="min-h-screen overflow-hidden relative py-20">
            <div className="mx-auto max-w-7xl relative z-20 px-6">
                <HeroHeadline />
                <HeroServices />
                <HeroIntro />
                <HeroRecentWork />
            </div>
            <HeroGridBackground />
        </section>
    );
};

export default Hero;
