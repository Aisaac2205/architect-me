import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TechMarquee } from './components/TechMarquee';
import { InfiniteTextMarquee } from './components/InfiniteTextMarquee';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Chart data — steep upward trend (3x growth narrative)
const chartData = [
  { month: 'Mes 1', ventas: 50 },
  { month: 'Mes 2', ventas: 90 },
  { month: 'Mes 3', ventas: 140 },
  { month: 'Mes 4', ventas: 200 },
  { month: 'Mes 5', ventas: 240 },
  { month: 'Mes 6', ventas: 300 },
];

/** Count-up hook — animates from 0 to `end` when `active` becomes true */
function useCountUp(end: number, duration = 1600, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, active]);
  return count;
}

const About = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [chartVisible, setChartVisible] = useState(false);
  const multiplier = useCountUp(3, 1600, chartVisible);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left column entrance
      gsap.fromTo(
        '.about-left > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-left',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Chart panel entrance + trigger count-up
      gsap.fromTo(
        '.about-chart-panel',
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-chart-panel',
            start: 'top 80%',
            toggleActions: 'play none none none',
            onEnter: () => setChartVisible(true),
          },
        }
      );

      // Tech Stack entrance
      gsap.fromTo(
        ['.tech-stack-title', '.tech-stack-subtitle', '.tech-stack-marquee'],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: {
            trigger: '.tech-stack-trigger',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="sobre-mi" className="py-20">
      <div className="w-full px-6 md:px-12">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Headline + stats ── */}
          <div className="about-left flex flex-col gap-6">
            <h2 className="section-title opacity-0">
              {t('about.headline')}
            </h2>
            <p className="section-subtitle opacity-0 max-w-lg">
              {t('about.headlineAccent')}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5 pt-2 opacity-0">
              {[
                { value: t('about.stats.projects.value'), label: t('about.stats.projects.label') },
                { value: t('about.stats.uptime.value'),   label: t('about.stats.uptime.label') },
                { value: t('about.stats.speed.value'),    label: t('about.stats.speed.label') },
                { value: t('about.stats.response.value'), label: t('about.stats.response.label') },
              ].map((s) => (
                <div key={s.label} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: RuixenStats-style chart panel ── */}
          <div className="about-chart-panel opacity-0">
            <div className="rounded-xl bg-card border border-border/60 overflow-hidden">

              {/* Chart — shorter on mobile (overlays hidden), full height on sm+ */}
              <div className="relative w-full h-[220px] sm:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%"  stopColor="hsl(var(--foreground))" stopOpacity={0.18} />
                        <stop offset="95%" stopColor="hsl(var(--foreground))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="ventas"
                      stroke="hsl(var(--foreground))"
                      strokeWidth={1.5}
                      fill="url(#salesGradient)"
                      fillOpacity={1}
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>

                {/* Centered hero overlay — sm+ only */}
                <div className="hidden sm:flex absolute inset-0 flex-col items-center justify-center text-center pointer-events-none">
                  <p className="text-7xl sm:text-8xl font-extrabold text-foreground leading-none drop-shadow-lg">
                    +{multiplier}x
                  </p>
                  <p className="text-sm text-foreground/40 font-mono mt-2">
                    {t('about.stats.speed.label')}
                  </p>
                </div>

                {/* Floating side stats — sm+ only */}
                <div className="hidden sm:flex absolute right-4 top-4 rounded-xl border border-border/50 bg-card/80 backdrop-blur-md p-4 flex-col gap-4 shadow-lg">
                  {[
                    { value: '20+',   label: t('about.stats.projects.label') },
                    { value: '99.9%', label: t('about.stats.uptime.label') },
                    { value: '<1.5s', label: t('about.stats.response.label') },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-lg font-semibold text-foreground leading-none">{s.value}</p>
                      <p className="text-[10px] text-foreground/40 font-mono mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom corner label — sm+ only */}
                <div className="hidden sm:block absolute bottom-4 left-5 pointer-events-none">
                  <p className="text-[10px] font-mono text-foreground/20 uppercase tracking-widest">
                    {t('about.chart.after')}
                  </p>
                </div>
              </div>

              {/* Mobile-only: 2-column strip below the chart */}
              <div className="flex sm:hidden border-t border-border/40 divide-x divide-border/40">
                {/* Left: hero stat */}
                <div className="flex-1 flex flex-col justify-center px-5 py-4">
                  <p className="text-5xl font-extrabold text-foreground leading-none">+{multiplier}x</p>
                  <p className="text-[11px] text-foreground/40 font-mono mt-1.5">{t('about.stats.speed.label')}</p>
                </div>
                {/* Right: supporting stats grid */}
                <div className="flex flex-col divide-y divide-border/40">
                  {[
                    { value: '20+',   label: t('about.stats.projects.label') },
                    { value: '99.9%', label: t('about.stats.uptime.label') },
                    { value: '<1.5s', label: t('about.stats.response.label') },
                  ].map((s) => (
                    <div key={s.label} className="px-4 py-2.5">
                      <p className="text-base font-semibold text-foreground leading-none">{s.value}</p>
                      <p className="text-[10px] text-foreground/40 font-mono mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Separator */}
      <div className="w-full h-px bg-border/30 relative my-20">
        <span className="absolute left-6 -top-[9px] text-foreground/20 font-light text-sm font-mono">+</span>
        <span className="absolute right-6 -top-[9px] text-foreground/20 font-light text-sm font-mono">+</span>
      </div>

      <div className="w-full px-6 md:px-12">
        <div>
          <div className="tech-stack-trigger mb-12 max-w-2xl">
            <h3 className="tech-stack-title opacity-0 section-title mb-4">{t('about.techTitle')}</h3>
            <p className="tech-stack-subtitle opacity-0 section-subtitle">
              {t('about.techSubtitle')}
            </p>
          </div>
          <div className="tech-stack-marquee opacity-0">
            <TechMarquee />
            <InfiniteTextMarquee />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
