"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { services } from "@/data/site";

/* ---------- 1. Hero mosaic ---------- */
const heroSlides = [
  { src: "/images/hero-1.jpg", alt: "Illuminated 3D channel letters on building facade at dusk" },
  { src: "/images/hero-2.jpg", alt: "Tall outdoor pylon monument sign for a shopping center" },
  { src: "/images/hero-3.jpg", alt: "Signage production workshop with CNC router and acrylic sheets" },
  { src: "/images/hero-4.jpg", alt: "Glowing 3D illuminated letters logo on storefront at night" },
];

export function HeroSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="home" className="relative w-full overflow-hidden bg-brand-black h-[92vh] min-h-[560px]">
      <div className="relative grid h-full w-full grid-cols-4 grid-rows-2 gap-0">
        {/* Tall left — full-bleed crossfading signage photos */}
        <div className="relative col-span-2 row-span-2 overflow-hidden">
          {heroSlides.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        {/* Two stacked middle */}
        <div className="relative col-span-1 row-span-1 overflow-hidden">
          <img src="/images/proj-pylon.jpg" alt="Pylon sign project" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="relative col-span-1 row-span-1 overflow-hidden">
          <img src="/images/proj-3d-signage.jpg" alt="3D signage project" loading="lazy" className="h-full w-full object-cover" />
        </div>
        {/* Right tall */}
        <div className="relative col-span-2 row-span-2 overflow-hidden">
          <img src="/images/hero-4.jpg" alt="Glowing 3D letters at night" loading="lazy" className="h-full w-full object-cover" />
        </div>

        {/* Centered CTA */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.a
            href="#quote"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pointer-events-auto bg-brand-black px-8 py-4 font-button text-[16px] font-bold uppercase tracking-wider text-white shadow-2xl ring-2 ring-brand-yellow transition hover:bg-brand-charcoal"
          >
            Request a Quote
          </motion.a>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-8 bg-brand-yellow" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------- 2. Service tiles band (checkerboard navy/cyan) ---------- */
export function ServiceTiles() {
  return (
    <section className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
      {services.map((s, i) => {
        const cyan = i % 2 === 0;
        return (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className={`tile-hover flex aspect-[4/3] items-center justify-center px-3 text-center font-button text-[16px] font-bold uppercase leading-tight tracking-wide sm:aspect-[16/10] lg:aspect-[3/2] ${
              cyan
                ? "bg-brand-yellow text-brand-black"
                : "bg-brand-black text-white"
            }`}
          >
            {s.tile}
          </a>
        );
      })}
    </section>
  );
}

/* ---------- 3. Intro box ---------- */
export function IntroBox() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-[940px] border border-gray-200 bg-white p-6 text-justify text-[18px] leading-[30px] text-brand-text shadow-soft sm:p-10">
        For years, <strong className="text-brand-black">sam cre8</strong> has
        helped businesses in Ghana stand out with print, signage and branding
        that gets noticed. From large format print and label cut to CNC cutting,
        3D signage and corporate branding, we design, produce and deliver work
        that makes your brand impossible to miss.
      </div>
    </section>
  );
}
