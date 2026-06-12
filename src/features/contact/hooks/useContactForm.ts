import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { getFormspreeEndpoint } from '@/config/formspree';

export const useContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'landing',
        budget: 'medium',
        planType: 'Team',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleValueChange = (name: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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

        // Mapeos legibles para el envío
        const projectTypes: Record<string, string> = {
            landing: "Landing Page",
            ecommerce: "E-commerce B2B",
            system: "Sistema de Gestión",
            consulting: "Consultoría / Otro"
        };

        const budgetRanges: Record<string, string> = {
            low: "Menos de $1,000 USD",
            medium: "$1,000 - $3,000 USD",
            high: "$3,000 - $5,000 USD",
            premium: "Más de $5,000 USD"
        };

        const planTypes: Record<string, string> = {
            Creator: "Diseño de Interfaz (Creator)",
            Team: "Desarrollo de Sitios y Plataformas (Team)",
            Agency: "Solución Digital Completa (Agency)"
        };

        const displayProjectType = projectTypes[formData.projectType] || formData.projectType;
        const displayBudget = budgetRanges[formData.budget] || formData.budget;
        const displayPlanType = planTypes[formData.planType] || formData.planType;

        const emailMessage = `
Nombre: ${formData.name}
Email: ${formData.email}
Tipo de Proyecto: ${displayProjectType}
Presupuesto Estimado: ${displayBudget}
Modelo de Colaboración: ${displayPlanType}

Mensaje:
${formData.message}
        `.trim();

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
                    projectType: displayProjectType,
                    budget: displayBudget,
                    planType: displayPlanType,
                    message: formData.message,
                    fullMessage: emailMessage,
                    _replyto: formData.email,
                    _subject: `Nuevo contacto de ${formData.name} - Presupuesto: ${displayBudget}`,
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
                    projectType: 'webapp',
                    budget: 'medium',
                    planType: 'Team',
                    message: ''
                });
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al enviar mensaje');
            }
        } catch (error) {
            console.error('Error al enviar email:', error);

            // Fallback: usar mailto si Formspree falla
            const mailtoLink = `mailto:isaac.flores.dev@gmail.com?subject=${encodeURIComponent(
                `Contacto desde portfolio - ${displayProjectType}`
            )}&body=${encodeURIComponent(emailMessage)}`;

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
        handleValueChange,
        handleSubmit,
        isSubmitting
    };
};
