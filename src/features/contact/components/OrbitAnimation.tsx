import React from "react";
import {
  FaReact, FaAws, FaDocker, FaNodeJs, FaGithub,
  FaLinkedin, FaInstagram, FaApple
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiNextdotjs, SiVercel, SiTypescript, SiFacebook,
  SiTailwindcss, SiFigma, SiAngular
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

const iconConfigs = [
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { Icon: FaDocker, name: "Docker", color: "#2496ED" },
  { Icon: FaAws, name: "AWS", color: "#FF9900" },
  { Icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
  { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
  { Icon: FaLinkedin, name: "LinkedIn", color: "#0077B5" },
  { Icon: FaXTwitter, name: "X", color: "#FFFFFF" },
  { Icon: FaInstagram, name: "Instagram", color: "#E1306C" },
  { Icon: ({ className }: React.SVGProps<SVGSVGElement>) => <SvgIcon src="/assets/claudecode-color.svg" name="Claude Code" className={className} />, name: "Claude Code", color: "transparent" },
  { Icon: ({ className }: React.SVGProps<SVGSVGElement>) => <SvgIcon src="/assets/cloudflare (1).svg" name="Cloudflare" className={className} />, name: "Cloudflare", color: "transparent" },
  { Icon: FaApple, name: "Apple", color: "#FFFFFF" },
  { Icon: SiFacebook, name: "Facebook", color: "#1877F2" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { Icon: SiAngular, name: "Angular", color: "#DD0031" },
  { Icon: ({ className }: React.SVGProps<SVGSVGElement>) => <SvgIcon src="/assets/Java.svg" name="Java" className={className} />, name: "Java", color: "transparent" },
  { Icon: ({ className }: React.SVGProps<SVGSVGElement>) => <SvgIcon src="/assets/PostgresSQL.svg" name="PostgreSQL" className={className} />, name: "PostgreSQL", color: "transparent" },
];

export const OrbitAnimation: React.FC = () => {
  const orbitCount = 3;
  const orbitGap = 5.2; // rem between orbits (5.2 * 3 = 15.6 + 10 = 25.6rem outer orbit, fits perfectly)
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <div className="relative w-full h-[22rem] sm:h-[22rem] lg:h-full flex items-center justify-center overflow-visible select-none">
      {/* Centered in its column space, using overflow-visible and responsive scaling */}
      <div className="relative w-[26rem] h-[26rem] flex items-center justify-center scale-[0.72] min-[380px]:scale-[0.80] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-110">
        {/* Center Circle */}
        <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-secondary border border-border shadow-card flex items-center justify-center z-10 transition-all duration-300 hover:border-primary/40 hover:shadow-glow">
          <img src="/assets/google-icon.svg" alt="Google" className="w-10 h-10 sm:w-11 sm:h-11 animate-pulse" style={{ objectFit: 'contain' }} />
        </div>

        {/* Generate Orbits */}
        {[...Array(orbitCount)].map((_, orbitIdx) => {
          const size = `${10 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
          const angleStep = (2 * Math.PI) / iconsPerOrbit;
          // Vary the spin speed and direction for each orbit
          const spinDuration = 20 + orbitIdx * 10; // seconds
          const direction = orbitIdx % 2 === 0 ? "orbit-spin-cw" : "orbit-spin-ccw";

          return (
            <div
              key={orbitIdx}
              className="absolute rounded-full border border-dashed border-border/40"
              style={{
                width: size,
                height: size,
                animation: `${direction} ${spinDuration}s linear infinite`,
              }}
            >
              {iconConfigs
                .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                .map((cfg, iconIdx) => {
                  const angle = iconIdx * angleStep;
                  const x = 50 + 50 * Math.cos(angle);
                  const y = 50 + 50 * Math.sin(angle);
                  const counterDirection = orbitIdx % 2 === 0 ? "orbit-spin-ccw" : "orbit-spin-cw";

                  return (
                    <div
                      key={iconIdx}
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
                          animation: `${counterDirection} ${spinDuration}s linear infinite`,
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
