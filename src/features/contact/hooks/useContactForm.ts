import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { FORMSPREE_CONFIG, getFormspreeEndpoint } from '@/config/formspree';

export const useContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validación básica
        if (!formData.name || !formData.email || !formData.message) {
            toast({
                title: "Campos requeridos",
                description: "Por favor, completa todos los campos obligatorios.",
                variant: "destructive",
            });
            setIsSubmitting(false);
            return;
        }

        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast({
                title: "Email inválido",
                description: "Por favor, introduce un email válido.",
                variant: "destructive",
            });
            setIsSubmitting(false);
            return;
        }

        // Validación de longitud del mensaje
        if (formData.message.length < 10) {
            toast({
                title: "Mensaje muy corto",
                description: "Por favor, escribe al menos 10 caracteres en tu mensaje.",
                variant: "destructive",
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // Usar Formspree
            const response = await fetch(getFormspreeEndpoint(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || FORMSPREE_CONFIG.settings.subject,
                    message: formData.message,
                    _replyto: formData.email,
                    _subject: `Nuevo mensaje de ${formData.name} - ${formData.subject || 'Contacto desde portfolio'}`,
                }),
            });

            if (response.ok) {
                toast({
                    title: "¡Mensaje enviado!",
                    description: "Gracias por contactarme. Te responderé pronto.",
                });

                // Limpiar formulario
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al enviar mensaje');
            }
        } catch (error) {
            console.error('Error al enviar email:', error);

            // Fallback: usar mailto si Formspree falla
            const mailtoLink = `mailto:isaac.flores.dev@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contacto desde portfolio')}&body=${encodeURIComponent(
                `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
            )}`;

            window.location.href = mailtoLink;

            toast({
                title: "Redirigiendo a email",
                description: "Se abrirá tu cliente de email para enviar el mensaje.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        isSubmitting
    };
};
