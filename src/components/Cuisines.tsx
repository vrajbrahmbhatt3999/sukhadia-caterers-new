import { useState } from "react";
import { cn } from "@/utils/cn";
import { CUISINES } from "../content";
import { Button, SectionHeading } from "./common";
import { Reveal } from "./Reveal";
import { ArrowRight } from "./icons";

function VegMark({ veg }: { veg: boolean }) {
  return (
    <span
      className={cn(
        "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-[3px] border-2",
        veg ? "border-green-500" : "border-red-500",
      )}
      title={veg ? "Vegetarian" : "Non-vegetarian"}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          veg ? "bg-green-500" : "bg-red-500",
        )}
      />
    </span>
  );
}

export function Cuisines() {
  const [activeId, setActiveId] = useState(CUISINES[0].id);
  const active = CUISINES.find((c) => c.id === activeId) ?? CUISINES[0];

  return (
    <section
      id="cuisines"
      className="relative overflow-hidden bg-wine-950 py-20 lg:py-28"
    >
      <div className="pattern-dots pointer-events-none absolute inset-0 text-white/[0.04]" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-saffron-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            label="Our Kitchens"
            title={
              <>
                A tour of India on{" "}
                <span className="text-gradient-gold">your plate</span>
              </>
            }
            subtitle="Six signature kitchens, one table. Mix and match to build a menu that travels the length of the subcontinent."
          />
        </Reveal>

        {/* Tabs */}
        <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2 sm:justify-center">
          {CUISINES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              aria-selected={c.id === activeId}
              role="tab"
              className={cn(
                "shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                c.id === activeId
                  ? "bg-gradient-to-r from-saffron-400 to-saffron-600 text-white shadow-lg shadow-saffron-600/30"
                  : "border border-white/15 text-cream-100/70 hover:border-saffron-400/40 hover:text-cream",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          key={active.id}
          className="swap-in mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="arch overflow-hidden border-4 border-saffron-400/25 shadow-2xl shadow-wine-950/50">
              <img
                src={active.image}
                alt={active.label}
                className="h-[22rem] w-full object-cover sm:h-[28rem] lg:h-[32rem]"
                loading="lazy"
              />
            </div>
            <div className="arch pointer-events-none absolute inset-0 -z-10 translate-x-5 translate-y-5 border-2 border-saffron-400/40" />
          </div>

          <div className="text-cream">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-saffron-300">
              {active.tagline}
            </span>
            <h3 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
              {active.label}
            </h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-cream-100/75">
              {active.description}
            </p>

            <ul className="mt-7 grid max-w-lg gap-x-6 gap-y-3 sm:grid-cols-2">
              {active.dishes.map((d) => (
                <li
                  key={d.name}
                  className="flex items-start gap-2.5 text-sm text-cream-100/90"
                >
                  <VegMark veg={d.veg} />
                  {d.name}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="#contact" variant="gold">
                Request this menu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
