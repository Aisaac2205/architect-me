import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const chartData = [
  { month: 'Mes 1', ventas: 50 },
  { month: 'Mes 2', ventas: 90 },
  { month: 'Mes 3', ventas: 140 },
  { month: 'Mes 4', ventas: 200 },
  { month: 'Mes 5', ventas: 240 },
  { month: 'Mes 6', ventas: 300 },
];

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
  const [chartVisible, setChartVisible] = useState(false);
  const multiplier = useCountUp(3, 1600, chartVisible);

  useEffect(() => {
    const timer = setTimeout(() => setChartVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: t('about.stats.projects.value'), label: t('about.stats.projects.label') },
    { value: t('about.stats.uptime.value'),   label: t('about.stats.uptime.label') },
    { value: t('about.stats.speed.value'),    label: t('about.stats.speed.label') },
    { value: t('about.stats.response.value'), label: t('about.stats.response.label') },
  ];

  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — {t('footer.about')}</p>

      <hr className="border-none border-t border-current opacity-30" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center flex-1">
        {/* Left: headline + stats */}
        <div className="flex flex-col gap-8">
          <h2
            className="font-bold leading-[0.85] uppercase tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 10rem)' }}
          >
            {t('about.headline')}
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold tracking-tight">{s.value}</p>
                <p className="text-sm opacity-60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: chart panel */}
        <div className="rounded-xl border border-current/20 overflow-hidden bg-black/10">
          <div className="relative w-full h-[220px] sm:h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="currentColor" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="currentColor" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="ventas"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  fill="url(#salesGradient)"
                  fillOpacity={1}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>

            <div className="hidden sm:flex absolute inset-0 flex-col items-center justify-center text-center pointer-events-none">
              <p className="text-7xl sm:text-8xl font-extrabold leading-none">
                +{multiplier}x
              </p>
              <p className="text-sm opacity-40 font-mono mt-2">{t('about.stats.speed.label')}</p>
            </div>

            <div className="hidden sm:flex absolute right-4 top-4 rounded-xl border border-current/20 bg-black/20 backdrop-blur-md p-4 flex-col gap-4">
              {[
                { value: '20+',   label: t('about.stats.projects.label') },
                { value: '99.9%', label: t('about.stats.uptime.label') },
                { value: '<1.5s', label: t('about.stats.response.label') },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-lg font-semibold leading-none">{s.value}</p>
                  <p className="text-[10px] opacity-40 font-mono mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile strip */}
          <div className="flex sm:hidden border-t border-current/20 divide-x divide-current/20">
            <div className="flex-1 flex flex-col justify-center px-5 py-4">
              <p className="text-5xl font-extrabold leading-none">+{multiplier}x</p>
              <p className="text-[11px] opacity-40 font-mono mt-1.5">{t('about.stats.speed.label')}</p>
            </div>
            <div className="flex flex-col divide-y divide-current/20">
              {[
                { value: '20+',   label: t('about.stats.projects.label') },
                { value: '99.9%', label: t('about.stats.uptime.label') },
                { value: '<1.5s', label: t('about.stats.response.label') },
              ].map((s) => (
                <div key={s.label} className="px-4 py-2.5">
                  <p className="text-base font-semibold leading-none">{s.value}</p>
                  <p className="text-[10px] opacity-40 font-mono mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-none border-t border-current opacity-30" />

      <p
        className="mt-auto max-w-[50ch] font-normal leading-relaxed"
        style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
      >
        {t('about.headlineAccent')}
      </p>
    </>
  );
};

export default About;
