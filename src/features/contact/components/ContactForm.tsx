import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useContactForm } from '../hooks/useContactForm';

export const ContactForm = () => {
    const { formData, handleChange, handleSubmit, isSubmitting } = useContactForm();

    return (
        <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Envíame un mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Nombre *
                        </label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            className="bg-background/50"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@gmail.com"
                            className="bg-background/50"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Asunto
                    </label>
                    <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Asunto del mensaje"
                        className="bg-background/50"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensaje *
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntame sobre tu proyecto..."
                        rows={5}
                        className="bg-background/50 resize-none"
                    />
                </div>

                <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Enviando mensaje...
                        </div>
                    ) : (
                        'Enviar mensaje'
                    )}
                </Button>
            </form>
        </div>
    );
};
