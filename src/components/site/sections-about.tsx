"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Zap,
  Ruler,
  Lightbulb,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import { values, numbers, clients, services } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Ruler,
  Lightbulb,
  BadgeCheck,
  ShieldCheck,
};

/* ---------- 7. WHO WE ARE ---------- */
export function WhoWeAre() {
  return (
    <section id="about" className="hatched-bg px-4 py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="/images/workshop.jpg"
            alt="sam cre8 workshop in Accra, Ghana"
            loading="lazy"
            className="h-full max-h-[460px] w-full object-cover shadow-soft"
          />
          <div className="absolute -bottom-4 -right-4 hidden bg-brand-yellow px-5 py-3 font-button text-brand-black sm:block">
            <p className="text-[12px] font-bold uppercase tracking-wide">Accra, Ghana</p>
          </div>
        </motion.div>

        <div>
          <p className="text-tiny-caps mb-2 text-brand-text">Who We Are?</p>
          <h2 className="mb-4 text-[36px] font-semibold leading-tight sm:text-[60px]">
            sam cre8
          </h2>
          <p className="mb-3 text-[18px] leading-relaxed text-brand-text">
            A signage &amp; branding workshop in Accra helping Ghanaian
            businesses stand out — from your first idea to the final install.
          </p>
          <p className="mb-3 text-[18px] leading-relaxed text-brand-text">
            We combine modern machines with skilled craftsmanship to produce
            durable, eye-catching signs, prints and branding built for the
            African climate.
          </p>
          <p className="mb-6 text-[18px] leading-relaxed text-brand-text">
            From large format print and label cut to CNC cutting, 3D signage
            and full corporate branding, we handle design, production and
            delivery under one roof.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-brand-magenta px-7 py-2.5 font-button text-[15px] font-bold uppercase text-brand-black transition hover:brightness-95"
          >
            Read more…
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. OUR VALUES — accordion + semi-circle infographic ---------- */
export function ValuesSection() {
  const [open, setOpen] = useState(0);
  const petals = values; // 5 values
  return (
    <section className="px-4 py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Left: heading + semi-circle infographic */}
        <div>
          <h2 className="mb-3 text-[36px] font-semibold leading-tight sm:text-[60px]">
            Our Values
          </h2>
          <p className="mb-10 text-[20px] leading-relaxed text-brand-text">
            Our work is driven by 5 core values.
          </p>

          {/* Semi-circle infographic */}
          <div className="relative mx-auto h-[280px] w-[300px] sm:h-[320px] sm:w-[360px]">
            {/* center logo */}
            <div className="absolute left-1/2 top-[calc(100%-7rem)] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-black shadow-2xl">
              <div className="text-center">
                <p className="font-button text-[9px] font-bold leading-none text-brand-yellow-light">sam</p>
                <p className="font-display text-sm leading-none text-brand-yellow">
                  cre<span className="text-white">8</span>
                </p>
              </div>
            </div>
            {/* arc background */}
            <div className="absolute bottom-0 left-1/2 h-[150px] w-[300px] -translate-x-1/2 rounded-t-full border-2 border-b-0 border-gray-200 sm:h-[170px] sm:w-[360px]" />
            {/* petals */}
            {petals.map((v, i) => {
              const total = petals.length;
              const half = total - 1; // spread across the half circle
              const angle = -Math.PI + (i / half) * Math.PI;
              const r = 130;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              const Icon = iconMap[v.icon] ?? Zap;
              const yellow = i % 2 === 0;
              return (
                <div
                  key={v.title}
                  className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg ${
                    yellow ? "bg-brand-yellow text-brand-black" : "bg-brand-black text-white"
                  }`}
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                  title={v.title}
                >
                  <Icon className="h-6 w-6" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: accordion */}
        <div className="border-t border-gray-200">
          {values.map((v, i) => {
            const isOpen = open === i;
            const Icon = iconMap[v.icon] ?? Zap;
            return (
              <div key={v.title} className="border-b border-gray-200">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center text-white transition ${
                      isOpen ? "bg-brand-yellow text-brand-black" : "bg-brand-black"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                  <span className="flex flex-1 items-center gap-3 text-[20px] font-semibold">
                    <Icon className="h-5 w-5 text-brand-magenta" />
                    {v.title}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pl-14 pr-4 text-[16px] leading-relaxed text-brand-text">
                        {v.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. OUR NUMBERS — animated circular counters ---------- */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          const dur = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  const pct = Math.round((n / value) * 100);
  const r = 56;
  const circ = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-36 w-36">
        <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
          <circle cx="70" cy="70" r={r} fill="none" stroke="#1E1E1E" strokeOpacity="0.12" strokeWidth="10" />
          <circle
            cx="70"
            cy="70"
            r={r}
            fill="none"
            stroke="#111111"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={circ - (circ * pct) / 100}
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />
        </svg>
        <span
          ref={ref}
          className="absolute inset-0 flex items-center justify-center text-[44px] font-semibold text-brand-black"
        >
          {n}
          {suffix}
        </span>
      </div>
    </div>
  );
}

export function NumbersSection() {
  return (
    <section className="bg-brand-yellow px-4 py-24">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="mb-12 text-center text-[44px] font-extrabold uppercase leading-none text-brand-black sm:text-[80px] sm:leading-[80px]">
          Our Numbers
        </h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {numbers.map((m) => (
            <div key={m.label} className="flex flex-col items-center text-center">
              <Counter value={m.value} suffix={m.suffix} />
              <p className="mt-4 text-tiny-caps text-brand-black/70">{m.label.split(" ")[0]}</p>
              <p className="text-[26px] font-semibold text-brand-black">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 10. Clients logo wall ---------- */
export function ClientsWall() {
  return (
    <section id="clients" className="px-4 py-20">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="mb-10 text-center text-[36px] font-semibold sm:text-[44px]">
          Trusted by brands across Ghana
        </h2>
        <div className="grid grid-cols-2 gap-px bg-gray-200 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((c) => (
            <div
              key={c}
              className="flex h-24 items-center justify-center bg-white px-3 text-center"
            >
              <span className="font-display text-[12px] uppercase leading-tight text-brand-charcoal sm:text-[14px]">
                {c}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[14px] text-brand-text">
          Client logos shown are for illustration. Final logos published with the
          client&apos;s permission.
        </p>
      </div>
    </section>
  );
}
