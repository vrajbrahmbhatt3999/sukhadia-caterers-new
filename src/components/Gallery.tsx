import { useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import { GALLERY, GALLERY_FILTERS } from "../content";
import { SectionHeading } from "./common";
import { Reveal } from "./Reveal";

const HEIGHTS = [
  "h-60",
  "h-72",
  "h-64",
  "h-80",
  "h-60",
  "h-72",
  "h-64",
  "h-72",
  "h-64",
];

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const items = useMemo(
    () =>
      filter === "All"
        ? GALLERY
        : GALLERY.filter((g) => g.category === filter),
    [filter],
  );

  return (
    <section id="gallery" className="bg-cream-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Gallery"
            title={
              <>
                Moments we've had the{" "}
                <span className="text-gradient-gold">honour to serve</span>
              </>
            }
            subtitle="A glimpse of the feasts, the setups and the celebrations we've been privileged to be part of."
          />
        </Reveal>

        {/* Filters */}
        <Reveal className="mt-9 flex flex-wrap justify-center gap-2">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300",
                filter === f
                  ? "bg-wine-900 text-cream shadow-lg shadow-wine-950/20"
                  : "border border-wine-900/10 text-ink-soft hover:border-wine-900/30 hover:text-wine-900",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        {/* Masonry */}
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <div
              key={g.image}
              className="group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl shadow-lg shadow-wine-950/10"
            >
              <img
                src={g.image}
                alt={g.caption}
                loading="lazy"
                className={cn(
                  "w-full object-cover transition-transform duration-700 group-hover:scale-110",
                  HEIGHTS[i % HEIGHTS.length],
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-950/85 via-wine-950/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-saffron-300">
                  {g.category}
                </span>
                <p className="font-display text-lg font-semibold text-cream">
                  {g.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
