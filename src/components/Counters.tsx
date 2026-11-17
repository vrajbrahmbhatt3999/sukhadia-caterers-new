import { COUNTERS } from "../content";
import { SectionHeading } from "./common";
import { Reveal } from "./Reveal";
import { Flame } from "./icons";

export function Counters() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            label="The Experience"
            title={
              <>
                Live counters that{" "}
                <span className="text-gradient-gold">steal the show</span>
              </>
            }
            subtitle="Nothing draws a crowd like food made right in front of them. Add our theatrical live stations to any package."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {COUNTERS.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="group relative h-64 overflow-hidden rounded-3xl shadow-lg shadow-wine-950/10 ring-1 ring-wine-950/5 sm:h-72">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-950/80 via-wine-950/20 to-transparent" />
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-wine-900 shadow">
                  <Flame className="h-3.5 w-3.5 text-saffron-600" />
                  Live
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-cream">
                    {c.title}
                  </h3>
                  <p className="text-sm text-saffron-200">{c.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
