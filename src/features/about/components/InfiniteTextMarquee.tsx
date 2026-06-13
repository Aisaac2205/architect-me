import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type InfiniteTextMarqueeProps = {
  text?: string;
  speed?: number;
  showTooltip?: boolean;
  tooltipText?: string;
  fontSize?: string;
  hoverColor?: string;
};

export const InfiniteTextMarquee: React.FC<InfiniteTextMarqueeProps> = ({
  text = "ARQUITECTURA DE SOFTWARE - CÓDIGO LIMPIO - ALTA PERFORMANCE - ESCALABILIDAD - UX FLUIDA",
  speed = 25,
  showTooltip = true,
  tooltipText = "CONSTRUYENDO EL FUTURO ⚡",
  fontSize = "text-5xl md:text-7xl",
  hoverColor = "#3b82f6", // Azul moderno
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const maxRotation = 6;

  useEffect(() => {
    if (!showTooltip) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      const midpoint = window.innerWidth / 2;
      const distanceFromMidpoint = Math.abs(e.clientX - midpoint);
      const rot = (distanceFromMidpoint / midpoint) * maxRotation;
      setRotation(e.clientX > midpoint ? rot : -rot);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showTooltip]);

  const repeatedText = Array(4).fill(text).join(" - ") + " -";

  return (
    <>
      {showTooltip && (
        <div
          className={`following-tooltip fixed z-[99] pointer-events-none transition-opacity duration-300 font-mono text-xs font-bold px-4 py-2 rounded-full border border-border
            ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"}
            bg-background text-foreground shadow-lg
          `}
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
            transform: `rotateZ(${rotation}deg) translate(-50%, -140%)`,
          }}
        >
          <p>{tooltipText}</p>
        </div>
      )}

      <div className="relative w-full overflow-hidden py-12 border-t border-b border-border/30 bg-muted/5 mt-10">
        <motion.div
          className="whitespace-nowrap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            x: [0, -1000],
          }}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: "linear",
          }}
        >
          <span
            className={`font-black uppercase tracking-tighter m-0 transition-colors duration-300 select-none text-foreground/45 ${fontSize}`}
          >
            <span className="hoverable-text">{repeatedText}</span>
            <style>{`
              .hoverable-text {
                transition: color 0.3s ease;
              }
              .hoverable-text:hover {
                color: ${hoverColor};
              }
            `}</style>
          </span>
        </motion.div>
      </div>
    </>
  );
};
