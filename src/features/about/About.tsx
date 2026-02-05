import { Code, Lightbulb, Target, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProfileCard } from './components/ProfileCard';
import { SkillCard } from './components/SkillCard';
import { TechStackCarousel } from './components/TechStackCarousel';

const About = () => {
  return (
    <section
      id="sobre-mi"
      className="py-20 relative"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ingeniero de <span className="text-gradient">Software</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transformo ideas en productos digitales que generan resultados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20 items-start">
            <div className="flex justify-center md:justify-start h-full items-center">
              <ProfileCard />
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Trayectoria y Enfoque
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Desarrollador con una sólida formación en ingeniería y un enfoque práctico en la creación de valor.
                Mi especialidad es el ciclo de vida completo del desarrollo de aplicaciones, desde la concepción de la API hasta la implementación de una interfaz de usuario intuitiva y eficiente.
              </p>

              <ul className="space-y-3 text-muted-foreground list-disc list-inside marker:text-primary">
                <li>Construyo sistemas que <strong>crecen con tu negocio</strong>, usando tecnologías modernas como NestJS y PostgreSQL que garantizan que tu plataforma funcione de manera fluida incluso cuando aumentan los usuarios y las ventas.</li>
                <li>Automatizo procesos que <strong>ahorran tiempo y aumentan ventas</strong>, como integrar WhatsApp para que los clientes hagan pedidos directamente, reduciendo el tiempo de respuesta y mejorando la atención al cliente.</li>
                <li>Creo sitios web <strong>rápidos y optimizados</strong> que cargan en menos de 2 segundos, mejorando la experiencia del usuario y el posicionamiento en buscadores, lo que se traduce en más visitantes y conversiones.</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SkillCard
              icon={Code}
              title="Desarrollo End-to-End"
              description="Construyo aplicaciones completas y funcionales, asegurando una comunicación fluida entre el frontend y el backend para entregar una experiencia de usuario cohesiva."
            />

            <SkillCard
              icon={Lightbulb}
              title="Arquitectura y Calidad"
              description="Me enfoco en escribir código limpio, modular y escalable. Implemento patrones de diseño y buenas prácticas que facilitan el mantenimiento y la futura expansión del proyecto."
            />

            <SkillCard
              icon={Target}
              title="Orientado a Resultados"
              description="Mi objetivo final es entregar software que no solo funcione, sino que también impulse los objetivos del negocio y aporte un valor tangible a los usuarios finales."
            />
          </motion.div>

          <TechStackCarousel />
        </div>
      </div>
    </section>
  );
};

export default About;