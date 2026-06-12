"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Check, ArrowRight } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";

const plans = [
  {
    name: "Creator",
    displayName: "Diseño de Interfaz",
    features: [
      { feature: "Propuesta visual interactiva" },
      { feature: "Diseño de interfaz personalizado" },
      { feature: "Estructura y distribución del proyecto" },
      { feature: "Revisiones constantes del diseño" },
    ],
    price: "Custom",
    isRecommended: false,
  },
  {
    name: "Team",
    displayName: "Desarrollo de Sitios y Plataformas",
    features: [
      { feature: "Desarrollo completo y optimizado" },
      { feature: "Rendimiento y velocidad de carga" },
      { feature: "Conexión de funciones e integraciones" },
      { feature: "Despliegue y puesta en marcha en línea" },
    ],
    price: "Custom",
    isRecommended: true,
  },
  {
    name: "Agency",
    displayName: "Solución Digital Completa",
    features: [
      { feature: "Desde la idea inicial hasta el lanzamiento" },
      { feature: "Sistemas de cobro e integración avanzada" },
      { feature: "Soporte de mantenimiento pos-lanzamiento" },
      { feature: "Panel de administración y control a medida" },
    ],
    price: "Custom",
    isRecommended: false,
  },
];

export const ContactForm: React.FC = () => {
  const { formData, handleChange, handleValueChange, handleSubmit, isSubmitting } = useContactForm();

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <h3 className="text-2xl font-bold uppercase tracking-tighter text-primary mb-2">
          Hablemos de tu proyecto
        </h3>
        <p className="text-muted-foreground text-sm mb-8">
          Completa los detalles a continuación y te responderé en menos de 24 horas.
        </p>

        <div className="space-y-6">
          {/* Top row: Project Type & Workspace Name */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5">
              <Label htmlFor="projectType" className="font-medium text-foreground">
                Tipo de Proyecto
              </Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => handleValueChange("projectType", value)}
              >
                <SelectTrigger id="projectType" className="mt-2 w-full bg-secondary/40 border-border">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border text-foreground">
                  <SelectItem value="landing" className="hover:bg-accent focus:bg-accent">Landing Page</SelectItem>
                  <SelectItem value="ecommerce" className="hover:bg-accent focus:bg-accent">E-commerce B2B</SelectItem>
                  <SelectItem value="system" className="hover:bg-accent focus:bg-accent">Sistema de Gestión</SelectItem>
                  <SelectItem value="consulting" className="hover:bg-accent focus:bg-accent">Consultoría / Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-7">
              <Label htmlFor="name" className="font-medium text-foreground">
                Tu nombre o Empresa *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez / Acme Inc."
                className="mt-2 bg-secondary/40 border-border"
              />
            </div>
          </div>

          {/* Email & Budget */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7">
              <Label htmlFor="email" className="font-medium text-foreground">
                Correo electrónico *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="mt-2 bg-secondary/40 border-border"
              />
            </div>

            <div className="md:col-span-5">
              <Label htmlFor="budget" className="font-medium text-foreground">
                Presupuesto Estimado
              </Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => handleValueChange("budget", value)}
              >
                <SelectTrigger id="budget" className="mt-2 w-full bg-secondary/40 border-border">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border text-foreground">
                  <SelectItem value="low" className="hover:bg-accent focus:bg-accent">&lt; $1,000 USD</SelectItem>
                  <SelectItem value="medium" className="hover:bg-accent focus:bg-accent">$1,000 - $3,000 USD</SelectItem>
                  <SelectItem value="high" className="hover:bg-accent focus:bg-accent">$3,000 - $5,000 USD</SelectItem>
                  <SelectItem value="premium" className="hover:bg-accent focus:bg-accent">&gt; $5,000 USD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Textarea Description */}
          <div className="space-y-2">
            <Label htmlFor="message" className="font-medium text-foreground">
              Detalles o requerimientos del proyecto *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntame un poco más sobre la idea, objetivos y tiempos..."
              rows={4}
              className="mt-2 bg-secondary/40 border-border resize-none"
            />
          </div>

          {/* Radio group for Plan Type */}
          <div className="space-y-4 pt-2">
            <Label className="font-medium text-foreground">
              Modelo de Colaboración Requerido <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={formData.planType}
              onValueChange={(value) => handleValueChange("planType", value)}
              className="mt-2 space-y-3"
            >
              {plans.map((plan) => (
                <label
                  key={plan.name}
                  htmlFor={plan.name}
                  className={cn(
                    "relative block cursor-pointer rounded-lg border bg-secondary/20 p-4 transition-all duration-300",
                    formData.planType === plan.name
                      ? "border-primary/40 ring-1 ring-primary/40 bg-secondary/40"
                      : "border-border hover:border-border/80 hover:bg-secondary/30"
                  )}
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                      <RadioGroupItem value={plan.name} id={plan.name} />
                    </div>
                    <div className="w-full">
                      <div className="text-sm font-semibold text-foreground flex items-center gap-2">
                        {plan.displayName}
                        {plan.isRecommended && (
                          <Badge variant="secondary" className="px-1.5 py-0 text-[10px] uppercase font-bold tracking-wider">
                            Recomendado
                          </Badge>
                        )}
                      </div>
                      <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                        {plan.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Check className="h-3 w-3 text-primary shrink-0" />
                            <span className="truncate">{feature.feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex items-center justify-end space-x-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto font-semibold"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                Enviar propuesta <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};
