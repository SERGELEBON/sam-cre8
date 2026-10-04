"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { expertise, services } from "@/data/site";
import { useCarousel } from "@/components/site/use-carousel";

/* ---------- 4. OUR EXPERTISE carousel ---------- */
export function ExpertiseSection() {
  const { emblaRef, prev, next } = useCarousel();
  return (
    <section id="expertise" className="px-4 py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-[36px] font-semibold leading-tight sm:text-[60px]">
            OUR EXPERTISE
          </h2>
          <div className="hidden gap-2 sm:flex">
            <button onClick={prev} aria-label="Previous" className="flex h-10 w-10 items-center justify-center bg-brand-black text-white transition hover:bg-brand-charcoal">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} aria-label="Next" className="flex h-10 w-10 items-center justify-center bg-brand-yellow text-brand-black transition hover:bg-brand-yellow-light">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {expertise.map((e) => (
              <div key={e.title} className="min-w-[85%] px-2 sm:min-w-[25%]">
                <article className="group bg-gradient-to-b from-white to-gray-100 text-center shadow-soft">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-[22px] font-semibold uppercase tracking-wide">
                      {e.title}
                    </h3>
                    <p className="mb-4 text-[15px] leading-relaxed text-brand-text">
                      {e.text}
                    </p>
                    <a
                      href="#quote"
                      className="inline-block bg-brand-yellow px-5 py-2.5 font-button text-[14px] font-bold uppercase text-brand-black transition hover:bg-brand-yellow-light"
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. OUR PROJECTS banner ---------- */
export function ProjectsBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-black to-brand-charcoal py-24">
      <span className="ghost-text absolute inset-y-0 left-2 flex items-center text-[18vw] leading-none">
        PROJECTS
      </span>
      <div className="relative mx-auto max-w-[1180px] px-4">
        <h1 className="text-[44px] font-extrabold uppercase leading-none text-white sm:text-[80px] sm:leading-[80px]">
          Our Projects
        </h1>
        <p className="mt-4 max-w-xl text-[18px] leading-relaxed text-white/70">
          A look at the signs, pylons and brands we&apos;ve built across Ghana.
        </p>
      </div>
    </section>
  );
}

/* ---------- 6. Projects coverflow 3D carousel ---------- */
export function CoverflowCarousel() {
  const [active, setActive] = useCoverflow(services.length);
  return (
    <section id="projects" className="relative overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="relative flex h-[420px] items-center justify-center [perspective:1400px] sm:h-[480px]">
          {services.map((s, i) => {
            const offset = i - active;
            const abs = Math.abs(offset);
            const isActive = offset === 0;
            return (
              <button
                key={s.slug}
                onClick={() => setActive(i)}
                aria-label={`View ${s.title} project`}
                className="coverflow-card absolute h-[300px] w-[230px] origin-center text-left sm:h-[360px] sm:w-[290px]"
                style={{
                  transform: `translateX(${offset * 220}px) translateZ(${
                    isActive ? 0 : -Math.min(abs, 3) * 120
                  }px) rotateY(${offset * -28}deg) scale(${isActive ? 1.12 : 0.9 - abs * 0.06})`,
                  zIndex: 30 - abs * 5,
                  opacity: abs > 3 ? 0 : 1,
                }}
              >
                <div className="h-full w-full overflow-hidden shadow-2xl ring-1 ring-black/10">
                  <div className="relative h-[78%] w-full overflow-hidden bg-gray-100">
                    <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex h-[22%] items-center justify-center bg-brand-black px-2 text-center">
                    <span className="font-button text-[13px] font-bold uppercase tracking-wide text-white sm:text-[15px]">
                      {s.title}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mirror reflection */}
        <div className="pointer-events-none mx-auto mt-1 hidden h-16 max-w-[300px] items-start justify-center sm:flex">
          <div className="reflect h-16 w-full bg-gradient-to-b from-black/10 to-transparent" />
        </div>

        <div className="mt-8 text-center">
          <a
            href="#clients"
            className="btn-glow-yellow inline-block bg-brand-yellow px-[25px] py-3 font-button text-[15px] font-bold uppercase tracking-wider text-brand-black transition hover:bg-brand-yellow-light"
          >
            View Catalogue
          </a>
        </div>
      </div>
    </section>
  );
}

/* small hook for coverflow state */
function useCoverflow(len: number): [number, (i: number) => void] {
  const [active, setActiveState] = useState(0);
  const go = (i: number) => setActiveState((i + len) % len);
  return [active, go];
}
