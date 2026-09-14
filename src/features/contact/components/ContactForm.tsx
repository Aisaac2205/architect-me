"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const { formData, handleChange, handleValueChange, handleSubmit, isSubmitting } = useContactForm();

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <h3 className="text-2xl font-bold uppercase tracking-tight text-primary mb-2">
          {t('contact.form.heading')}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 text-pretty">
          {t('contact.form.subheading')}
        </p>

        {/* Quick Connect Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <a
            href="mailto:isaac.flores.dev@gmail.com"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/80 bg-secondary/30 hover:bg-secondary/70 hover:border-primary/40 text-xs font-medium text-foreground transition-all duration-200 active:scale-[0.98]"
            aria-label="Send direct email"
          >
            <Mail className="size-3.5 text-primary" />
            <span>isaac.flores.dev@gmail.com</span>
          </a>
          <a
            href="https://github.com/Aisaac2205"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/80 bg-secondary/30 hover:bg-secondary/70 hover:border-primary/40 text-xs font-medium text-foreground transition-all duration-200 active:scale-[0.98]"
            aria-label="GitHub Profile"
          >
            <svg className="size-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/isaac-sarce%C3%B1o-aa2850374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/80 bg-secondary/30 hover:bg-secondary/70 hover:border-primary/40 text-xs font-medium text-foreground transition-all duration-200 active:scale-[0.98]"
            aria-label="LinkedIn Profile"
          >
            <svg className="size-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-foreground">
                {t('contact.form.name')}
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.form.placeholders.name')}
                className="mt-2 bg-secondary/40 border-border text-base md:text-sm focus:border-primary/60 transition-colors"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                {t('contact.form.email')}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.form.placeholders.email')}
                className="mt-2 bg-secondary/40 border-border text-base md:text-sm focus:border-primary/60 transition-colors"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="opportunityType" className="text-sm font-medium text-foreground">
              {t('contact.form.opportunityType')}
            </Label>
            <Select
              value={formData.opportunityType}
              onValueChange={(value) => handleValueChange("opportunityType", value)}
            >
              <SelectTrigger id="opportunityType" className="mt-2 w-full bg-secondary/40 border-border text-base md:text-sm">
                <SelectValue placeholder={t('contact.form.placeholders.select')} />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border text-foreground">
                <SelectItem value="fulltime" className="hover:bg-accent focus:bg-accent">
                  {t('contact.form.opportunityTypes.fulltime')}
                </SelectItem>
                <SelectItem value="contract" className="hover:bg-accent focus:bg-accent">
                  {t('contact.form.opportunityTypes.contract')}
                </SelectItem>
                <SelectItem value="consulting" className="hover:bg-accent focus:bg-accent">
                  {t('contact.form.opportunityTypes.consulting')}
                </SelectItem>
                <SelectItem value="general" className="hover:bg-accent focus:bg-accent">
                  {t('contact.form.opportunityTypes.general')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              {t('contact.form.message')}
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.form.placeholders.message')}
              rows={4}
              className="mt-2 bg-secondary/40 border-border resize-none text-base md:text-sm focus:border-primary/60 transition-colors"
            />
          </div>
        </div>

        <Separator className="my-6 bg-border/60" />

        <div className="flex items-center justify-end">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto font-semibold px-6 min-h-[44px] active:scale-[0.98] transition-transform"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                <span>{t('contact.form.submitting')}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span>{t('contact.form.submit')}</span>
                <ArrowRight className="size-4" />
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
