import { cn } from "@/utils/cn";
import { PACKAGES } from "../content";
import { Button, SectionHeading } from "./common";
import { Reveal } from "./Reveal";
import { Check, Sparkles } from "./icons";

export function Packages() {
  return (
    <section id="packages" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Packages"
            title={
              <>
                Transparent pricing,{" "}
                <span className="text-gradient-gold">per plate</span>
              </>
            }
            subtitle="Start with a package, then make it yours. Every menu is customisable — including fully vegetarian, Jain and regional specials."
          />
        </Reveal>

        <div className="mt-16 grid items-stretch gap-7 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500",
                  p.popular
                    ? "bg-gradient-to-b from-wine-950 to-wine-900 text-cream shadow-2xl shadow-wine-950/30 ring-2 ring-saffron-400 lg:-mt-4 lg:mb-4"
                    : "bg-cream text-ink ring-1 ring-wine-950/5 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-wine-950/10",
                )}
              >
                {p.popular && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-saffron-400 to-saffron-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                )}

                <div className="flex items-baseline justify-between">
                  <h3
                    className={cn(
                      "font-display text-2xl font-semibold",
                      p.popular ? "text-cream" : "text-wine-950",
                    )}
                  >
                    {p.name}
                  </h3>
                  <span
                    className={cn(
                      "text-xs font-medium uppercase tracking-wide",
                      p.popular ? "text-saffron-300" : "text-saffron-600",
                    )}
                  >
                    {p.tag}
                  </span>
                </div>

                <div className="mt-6 flex items-end gap-1.5">
                  <span
                    className={cn(
                      "font-display text-5xl font-bold",
                      p.popular ? "text-saffron-400" : "text-wine-950",
                    )}
                  >
                    {p.price}
                  </span>
                  <span
                    className={cn(
                      "mb-1.5 text-sm",
                      p.popular ? "text-cream-100/70" : "text-ink-soft",
                    )}
                  >
                    / {p.unit}
                  </span>
                </div>

                <div
                  className={cn(
                    "my-7 h-px w-full",
                    p.popular ? "bg-white/10" : "bg-wine-950/10",
                  )}
                />

                <ul className="flex-1 space-y-3.5">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          p.popular
                            ? "bg-saffron-400/20 text-saffron-300"
                            : "bg-saffron-100 text-saffron-600",
                        )}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className={p.popular ? "text-cream-100/90" : "text-ink-soft"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={p.popular ? "gold" : "outline"}
                    className="w-full"
                  >
                    Choose {p.name}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-sm text-ink-soft">
            Prices are indicative per plate and exclude taxes. Custom menus,
            destination setups and 1,000+ guest events quoted on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
