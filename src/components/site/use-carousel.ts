"use client";

import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function useCarousel(options?: Parameters<typeof useEmblaCarousel>[0]) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    ...options,
  });

  useEffect(() => {
    if (emblaApi) {
      // ensure the carousel re-measures on mount
      emblaApi.reInit();
    }
  }, [emblaApi]);

  const prev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const next = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return { emblaRef, emblaApi, prev, next };
}
