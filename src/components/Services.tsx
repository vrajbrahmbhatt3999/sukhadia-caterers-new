import { SERVICES } from "../content";
import { SectionHeading } from "./common";
import { Reveal } from "./Reveal";
import { ArrowRight, IconByName } from "./icons";

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Occasions"
            title={
              <>
                Catering for every{" "}
                <span className="text-gradient-gold">occasion</span>
              </>
            }
            subtitle="Whatever the celebration, we shape the menu, the setup and the service around it. Here are a few of the moments we love being part of."
          />
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-3xl bg-white ring-1 ring-wine-950/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-wine-950/10">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-950/70 via-wine-950/10 to-transparent" />
                  <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-cream/95 text-wine-900 shadow-lg backdrop-blur">
                    <IconByName name={s.icon} className="h-6 w-6" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-wine-950">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {s.text}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-600 transition-colors hover:text-saffron-700"
                  >
                    Enquire
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
