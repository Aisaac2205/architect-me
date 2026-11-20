import React from "react";
import {
  FaReact, FaDocker, FaNodeJs, FaGithub,
  FaLinkedin, FaInstagram, FaApple
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiNextdotjs, SiTypescript, SiFacebook,
  SiTailwindcss, SiAngular, SiNestjs
} from "react-icons/si";

// Custom SVG icon components
const SvgIcon = ({ src, name, className }: { src: string; name: string; className?: string }) => (
  <img
    src={src}
    alt={name}
    className={className}
    style={{ width: '100%', height: '100%', objectFit: 'contain', maxWidth: '1.5rem', maxHeight: '1.5rem' }}
  />
);

type OrbitIconConfig = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  color: string;
};

// Hierarchical rings from inner core to outer ecosystem
const orbits: Array<{ icons: OrbitIconConfig[]; duration: number; direction: "orbit-spin-cw" | "orbit-spin-ccw" }> = [
  {
    // Inner orbit: Frontend & UI core
    duration: 22,
    direction: "orbit-spin-cw",
    icons: [
      { Icon: FaReact, name: "React", color: "#61DAFB" },
      { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
      {
        Icon: ({ className }: React.SVGProps<SVGSVGElement>) => (
          <div className="flex items-center justify-center rounded-full bg-white p-0.5">
            <SvgIcon src="/assets/icons/Astro.svg" name="Astro" className={className} />
          </div>
        ),
        name: "Astro",
        color: "transparent",
      },
      { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    ],
  },
  {
    // Middle orbit: Backend, databases & infrastructure
    duration: 32,
    direction: "orbit-spin-ccw",
    icons: [
      { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
      { Icon: SiNestjs, name: "NestJS", color: "#E0234E" },
      { Icon: SiAngular, name: "Angular", color: "#DD0031" },
      { Icon: ({ className }: React.SVGProps<SVGSVGElement>) => <SvgIcon src="/assets/icons/PostgresSQL.svg" name="PostgreSQL" className={className} />, name: "PostgreSQL", color: "transparent" },
      { Icon: FaDocker, name: "Docker", color: "#2496ED" },
      { Icon: ({ className }: React.SVGProps<SVGSVGElement>) => <SvgIcon src="/assets/icons/cloudflare.svg" name="Cloudflare" className={className} />, name: "Cloudflare", color: "transparent" },
    ],
  },
  {
    // Outer orbit: AI workflow, code & distribution channels
    duration: 44,
    direction: "orbit-spin-cw",
    icons: [
      { Icon: ({ className }: React.SVGProps<SVGSVGElement>) => <SvgIcon src="/assets/icons/claudecode-color.svg" name="Claude Code" className={className} />, name: "Claude Code", color: "transparent" },
      { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
      { Icon: FaLinkedin, name: "LinkedIn", color: "#0077B5" },
      { Icon: FaInstagram, name: "Instagram", color: "#E1306C" },
      { Icon: FaXTwitter, name: "X", color: "#FFFFFF" },
      { Icon: SiFacebook, name: "Facebook", color: "#1877F2" },
      { Icon: FaApple, name: "Apple", color: "#FFFFFF" },
    ],
  },
];

export const OrbitAnimation: React.FC = () => {
  const orbitGap = 5.2; // rem between orbits

  return (
    <div className="relative w-full h-[22rem] sm:h-[22rem] lg:h-full flex items-center justify-center overflow-visible select-none">
      {/* Centered in its column space, using overflow-visible and responsive scaling */}
      <div className="relative w-[26rem] h-[26rem] flex items-center justify-center scale-[0.72] min-[380px]:scale-[0.80] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-110">
        {/* Center Circle */}
        <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-secondary border border-border shadow-card flex items-center justify-center z-10 transition-all duration-300 hover:border-primary/40 hover:shadow-glow">
          <img src="/assets/icons/google-icon.svg" alt="Google" className="w-10 h-10 sm:w-11 sm:h-11 animate-pulse" style={{ objectFit: 'contain' }} />
        </div>

        {/* Generate Orbits */}
        {orbits.map((orbit, orbitIdx) => {
          const size = `${10 + orbitGap * (orbitIdx + 1)}rem`;
          const angleStep = (2 * Math.PI) / orbit.icons.length;
          const counterDirection = orbit.direction === "orbit-spin-cw" ? "orbit-spin-ccw" : "orbit-spin-cw";

          return (
            <div
              key={orbitIdx}
              className="absolute rounded-full border border-dashed border-border/40"
              style={{
                width: size,
                height: size,
                animation: `${orbit.direction} ${orbit.duration}s linear infinite`,
              }}
            >
              {orbit.icons.map((cfg, iconIdx) => {
                const angle = iconIdx * angleStep;
                const x = 50 + 50 * Math.cos(angle);
                const y = 50 + 50 * Math.sin(angle);

                return (
                  <div
                    key={cfg.name}
                    title={cfg.name}
                    className="absolute bg-card border border-border rounded-full p-2 shadow-card hover:border-primary/50 transition-all duration-300 hover:scale-110 group cursor-pointer"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Counter-rotation to keep the icon upright */}
                    <div
                      style={{
                        animation: `${counterDirection} ${orbit.duration}s linear infinite`,
                      }}
                      className="flex items-center justify-center w-5.5 h-5.5 sm:w-6.5 sm:h-6.5"
                    >
                      <cfg.Icon
                        className="w-full h-full transition-all duration-300 filter drop-shadow-[0_0_2px_rgba(255,255,255,0.1)] group-hover:scale-110"
                        style={{ color: cfg.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Animation keyframes injected dynamically */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbit-spin-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-spin-ccw {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}} />
    </div>
  );
};
