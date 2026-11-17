import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { TESTIMONIALS } from "../content";
import { SectionHeading } from "./common";
import { Reveal } from "./Reveal";
import { ArrowLeft, ArrowRight, Quote, Star } from "./icons";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % count),
      6500,
    );
    return () => clearInterval(t);
  }, [count]);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + count) % count);
  const t = TESTIMONIALS[index];

  return (
    <section className="relative overflow-hidden bg-wine-950 py-20 lg:py-28">
      <div className="pattern-dots pointer-events-none absolute inset-0 text-white/[0.04]" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[26rem] w-[26rem] rounded-full bg-saffron-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            label="Kind Words"
            title={
              <>
                Loved by hosts across{" "}
                <span className="text-gradient-gold">India</span>
              </>
            }
          />
        </Reveal>

        <Reveal className="relative mt-12">
          <Quote className="pointer-events-none absolute -top-4 left-1/2 h-16 w-16 -translate-x-1/2 text-saffron-400/15" />

          <div
            key={index}
            className="swap-in flex flex-col items-center text-center"
          >
            <div className="flex gap-1 text-saffron-400">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5" />
              ))}
            </div>
            <blockquote className="mt-6 font-display text-2xl font-medium italic leading-relaxed text-cream sm:text-3xl">
              “{t.quote}”
            </blockquote>
            <div className="mt-7">
              <p className="font-semibold text-cream">{t.name}</p>
              <p className="text-sm text-saffron-300">{t.event}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream-100/80 transition hover:border-saffron-400/50 hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-7 bg-saffron-400"
                      : "w-2 bg-white/25 hover:bg-white/40",
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream-100/80 transition hover:border-saffron-400/50 hover:text-white"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
