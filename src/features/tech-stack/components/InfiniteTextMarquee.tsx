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
    let animationFrameId: number;

    const updateWordHighlight = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerCenter = rect.left + rect.width / 2;
      const wordElements = container.querySelectorAll(".hoverable-text");
      const threshold = window.innerWidth < 768 ? 90 : 130;

      wordElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const elRect = htmlEl.getBoundingClientRect();
        const elCenter = elRect.left + elRect.width / 2;
        const distance = Math.abs(elCenter - containerCenter);

        if (distance < threshold) {
          htmlEl.setAttribute("data-active", "true");
        } else {
          htmlEl.removeAttribute("data-active");
        }
      });

      animationFrameId = requestAnimationFrame(updateWordHighlight);
    };

    animationFrameId = requestAnimationFrame(updateWordHighlight);

    return () => {
      cancelAnimationFrame(animationFrameId);
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
        className="flex w-max gap-10 animate-scroll-slow"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          animationDuration: "var(--marquee-duration)",
        }}
      >
        <div className={`flex items-center gap-10 ${fontSize}`}>
          {renderRowItems("row1")}
          {renderRowItems("row2")}
          {renderRowItems("row3")}
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
