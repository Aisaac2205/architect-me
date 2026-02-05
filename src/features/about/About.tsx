import { Rocket, TrendingUp, Users, Clock, Shield, Smartphone } from 'lucide-react';
import { ProfileCard } from './components/ProfileCard';
import { TechStackCarousel } from './components/TechStackCarousel';

const About = () => {
  return (
    <section
      id="sobre-mi"
      className="py-20 relative"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className="text-center mb-16 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              De la Idea a <span className="text-gradient">Resultados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No solo escribo código. Diseño soluciones digitales que hacen crecer tu negocio, automatizan procesos y convierten visitantes en clientes.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-start">
            {/* Left Column: Profile + Benefits */}
            <div className="space-y-6">
              <div className="flex justify-center md:justify-start">
                <ProfileCard />
              </div>
              
              {/* Benefits Grid - Compact 2x3 layout */}
              <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards]">
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">¿Qué ofrezco?</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">Escalabilidad garantizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">Automatización</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">UX que convierte</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">Alto rendimiento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">Diseño responsive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">Código mantenible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div
              className="space-y-6 opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Impulsando Negocios con Tecnología
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Como <strong>desarrollador de software</strong>, he colaborado con startups y empresas establecidas para transformar sus operaciones manualmente intensivas en sistemas digitales eficientes. Mi experiencia abarca desde el diseño de arquitecturas escalables hasta la implementación de interfaces que los usuarios realmente disfrutan usar.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                <strong>Mi diferencia:</strong> Combino pensamiento analítico con visión de negocio. No solo construyo lo que me piden; identifico oportunidades de mejora, anticipo problemas de escalabilidad y propongo soluciones que maximizan el retorno de inversión. Trabajo con metodologías ágiles, mantengo código limpio y documentado, y priorizo la comunicación constante para asegurar que cada entrega supere expectativas.
              </p>
            </div>
          </div>

          {/* Value Proposition Cards */}
          <div
            className="grid md:grid-cols-3 gap-6 mb-12 opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]"
          >
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <h4 className="font-semibold mb-2">Proyectos Entregados</h4>
              <p className="text-muted-foreground text-sm">Compromiso total desde la planificación hasta el despliegue.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">&lt;2s</div>
              <h4 className="font-semibold mb-2">Tiempo de Carga</h4>
              <p className="text-muted-foreground text-sm">Optimización extrema para mejorar SEO y experiencia de usuario.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <h4 className="font-semibold mb-2">Sistemas Robustos</h4>
              <p className="text-muted-foreground text-sm">Infraestructura confiable que trabaja ininterrumpidamente.</p>
            </div>
          </div>

          <TechStackCarousel />
        </div>
      </div>
    </section>
  );
};

export default About;