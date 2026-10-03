import React from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "@/components/SectionTitle";
import { OrbitAnimation } from "./components/OrbitAnimation";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="my-auto flex flex-col gap-6 sm:gap-8">
      <SectionTitle>{t('contact.title')}</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        <p
          className="lg:col-span-7 max-w-[50ch] font-normal leading-relaxed text-pretty"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
        >
          {t('contact.subtitle')}
        </p>
        <div className="flex lg:col-span-5 items-center justify-center min-h-[16rem] sm:min-h-[16rem] lg:min-h-[18rem]">
          <OrbitAnimation />
        </div>
      </div>
    </div>
  );
};

export default Contact;
