import { IMG, STATS } from "../content";
import { Button } from "./common";
import { Check, Flame, Leaf, Sparkles, Star } from "./icons";

const SHOWCASE = [
  { img: IMG.kebabPlatter, label: "Live Tandoor", h: "h-56 sm:h-64 lg:h-72" },
  { img: IMG.thaliClose, label: "Signature Thali", h: "h-64 sm:h-80 lg:h-96" },
  { img: IMG.sweetsBowls, label: "Mithai & Sweets", h: "h-56 sm:h-64 lg:h-72" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-saffron-50 via-cream to-cream"
    >
      {/* decorative texture + glows */}
      <div className="pattern-dots pointer-events-none absolute inset-0 text-saffron-500/15" />
      <div className="pointer-events-none absolute -left-32 -top-24 h-[26rem] w-[26rem] rounded-full bg-saffron-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-24 h-[22rem] w-[22rem] rounded-full bg-wine-200/40 blur-3xl" />

      {/* corner motifs */}
      <Leaf className="pointer-events-none absolute left-8 top-40 hidden h-10 w-10 rotate-12 text-saffron-400/40 lg:block" />
      <Flame className="pointer-events-none absolute right-10 top-56 hidden h-10 w-10 -rotate-12 text-saffron-400/40 lg:block" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered copy — no text over any image */}
        <div className="mx-auto max-w-3xl py-16 text-center lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-saffron-300/60 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-wine-900 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-saffron-600" />
            Est. 1998 · Mumbai · All of India
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.03] tracking-tight text-wine-950 sm:text-6xl lg:text-7xl">
            Grand Indian feasts
            <span className="mt-2 block text-gradient-gold">
              for your biggest moments.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            From live tandoor counters to mithai bars, Zaika brings 25 years of
            culinary tradition to weddings, corporate events and festivals —
            crafted with soul, served with spice.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact" variant="gold">
              Plan Your Event
            </Button>
            <Button href="#cuisines" variant="outline">
              Explore Cuisines
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-ink-soft">
            <span className="flex items-center gap-2">
              <span className="flex text-saffron-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </span>
              <strong className="text-wine-950">5.0</strong> · 480+ reviews
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-saffron-600" /> FSSAI Certified
            </span>
            <span className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-saffron-600" /> Veg · Jain · Non-veg
            </span>
          </div>
        </div>

        {/* Image showcase — imagery sits below the text, captions underneath */}
        <div className="grid items-end gap-5 sm:gap-7 md:grid-cols-3">
          {SHOWCASE.map((s) => (
            <figure key={s.label} className="group text-center">
              <div className="arch overflow-hidden border-2 border-saffron-300/50 shadow-xl shadow-wine-950/10 transition-transform duration-500 group-hover:-translate-y-1.5">
                <img
                  src={s.img}
                  alt={s.label}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${s.h}`}
                />
              </div>
              <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-wine-900">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Stats */}
        <dl className="mt-16 grid grid-cols-2 gap-y-8 rounded-3xl bg-white/70 px-6 py-9 shadow-lg shadow-saffron-900/5 ring-1 ring-wine-950/5 backdrop-blur md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center gap-1 text-center ${
                i !== 0 ? "md:border-l md:border-wine-950/10" : ""
              }`}
            >
              <dt className="font-display text-4xl font-semibold text-wine-950">
                {s.value}
              </dt>
              <dd className="text-xs text-ink-soft sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
