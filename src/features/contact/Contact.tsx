import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¡Hablemos de tu <span className="text-gradient">proyecto</span>!
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes una idea en mente? Me encantaría conocerla y ayudarte a hacerla realidad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;