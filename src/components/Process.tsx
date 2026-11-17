import { PROCESS } from "../content";
import { SectionHeading } from "./common";
import { Reveal } from "./Reveal";
import { IconByName } from "./icons";

export function Process() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            label="How It Works"
            title={
              <>
                From first call to{" "}
                <span className="text-gradient-gold">final bite</span>
              </>
            }
            subtitle="A simple, stress-free process designed so you can enjoy your own event."
          />
        </Reveal>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-saffron-200 via-saffron-300 to-saffron-200 lg:left-[12%] lg:right-[12%] lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-cream text-wine-900 ring-2 ring-saffron-400 shadow-lg shadow-saffron-600/10">
                      <IconByName name={p.icon} className="h-7 w-7" />
                    </div>
                    <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-wine-900 text-[11px] font-bold text-cream">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-wine-950">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
