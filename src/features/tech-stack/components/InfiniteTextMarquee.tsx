import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

type InfiniteTextMarqueeProps = {
  fontSize?: string;
  hoverColor?: string;
};

export const InfiniteTextMarquee: React.FC<InfiniteTextMarqueeProps> = ({
  fontSize = "text-4xl md:text-6xl",
  hoverColor = "#3b82f6",
}) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const words = t('about.techKeywords', { returnObjects: true }) as string[] || [];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const threshold = window.innerWidth < 768 ? 90 : 130;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const containerCenter = rect.left + rect.width / 2;
      const wordElements = Array.from(container.querySelectorAll<HTMLElement>('.hoverable-text'));

      const centers = wordElements.map(el => {
        const r = el.getBoundingClientRect();
        return r.left + r.width / 2;
      });

      wordElements.forEach((el, i) => {
        if (Math.abs(centers[i] - containerCenter) < threshold) {
          el.setAttribute('data-active', 'true');
        } else {
          el.removeAttribute('data-active');
        }
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        intervalId = setInterval(update, 50);
      } else {
        if (intervalId !== null) { clearInterval(intervalId); intervalId = null; }
      }
    }, { threshold: 0 });

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (intervalId !== null) clearInterval(intervalId);
    };
  }, []);

  const renderRowItems = (keyPrefix: string) => (
    <span className="flex items-center gap-10">
      {words.map((word, index) => (
        <React.Fragment key={`${keyPrefix}-${index}`}>
          <span className="hoverable-text font-black uppercase tracking-tighter text-white cursor-pointer select-none">
            {word}
          </span>
          <span className="text-foreground/25 font-light text-3xl select-none">/</span>
        </React.Fragment>
      ))}
    </span>
  );

  return (
    <div
      ref={containerRef}
      className="marquee-container relative w-full overflow-hidden py-4 bg-transparent mt-6 select-none"
    >
      <div
        className="flex w-max animate-scroll-slow"
        style={{
          willChange: "transform",
          animationDuration: "var(--marquee-duration)",
        }}
      >
        <div className={`flex items-center gap-10 shrink-0 ${fontSize}`}>
          {renderRowItems("row1")}
        </div>
        <div className={`flex items-center gap-10 shrink-0 ${fontSize}`} aria-hidden>
          {renderRowItems("row2")}
        </div>
      </div>
      <style>{`
        .marquee-container {
          --marquee-duration: 30s;
        }
        @media (min-width: 768px) {
          .marquee-container {
            --marquee-duration: 45s;
          }
        }
        .hoverable-text {
          color: #ffffff;
          transition: color 0.4s ease-out;
        }
        .hoverable-text[data-active="true"] {
          color: ${hoverColor};
          transition: none;
        }
        .hoverable-text:hover {
          color: ${hoverColor} !important;
          transition: none;
        }
      `}</style>
    </div>
  );
};

export default InfiniteTextMarquee;
