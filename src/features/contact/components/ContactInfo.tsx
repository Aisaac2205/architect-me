import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

export const ContactInfo = () => {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Información de contacto</h3>
                <p className="text-muted-foreground mb-8">
                    Estoy disponible para proyectos freelance, colaboraciones o simplemente
                    para una charla sobre desarrollo web. ¡No dudes en contactarme!
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary border border-border">
                        <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="section-eyebrow mb-1">Email</h4>
                        <a
                            href="mailto:isaac.flores.dev@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            isaac.flores.dev@gmail.com
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary border border-border">
                        <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="section-eyebrow mb-1">Ubicación</h4>
                        <p className="text-muted-foreground">Guatemala, Guatemala</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary border border-border">
                        <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="section-eyebrow mb-1">Disponibilidad</h4>
                        <p className="text-muted-foreground">Lun - Vie, 9:00 - 18:00</p>
                    </div>
                </div>
            </div>

            <div className="pt-6">
                <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                    asChild
                >
                    <a href="mailto:isaac.flores.dev@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Enviar email directo
                    </a>
                </Button>
            </div>
        </div>
    );
};
