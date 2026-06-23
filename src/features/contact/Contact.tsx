import React from "react";
import { useTranslation } from "react-i18next";
import { OrbitAnimation } from "./components/OrbitAnimation";
import { ContactForm } from "./components/ContactForm";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — {t('footer.contact')}</p>

      <hr className="border-none border-t border-current opacity-30" />

      <div>
        <h2
          className="font-bold leading-[0.85] uppercase tracking-tight"
          style={{ fontSize: 'clamp(3rem, 8vw, 10rem)' }}
        >
          {t('contact.title')}
        </h2>
      </div>

      <hr className="border-none border-t border-current opacity-30" />

      <p
        className="max-w-[50ch] font-normal leading-relaxed"
        style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
      >
        {t('contact.subtitle')}
      </p>

      <hr className="border-none border-t border-current opacity-30" />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex items-center justify-center min-h-[18rem]">
          <OrbitAnimation />
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
