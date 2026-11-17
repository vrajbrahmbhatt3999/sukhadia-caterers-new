import { IMG } from "../content";
import { Button, SectionHeading } from "./common";
import { Reveal } from "./Reveal";
import { ArrowRight, Check } from "./icons";

const PROMISES = [
  "Customisable menus for every palate & budget",
  "Hygienic, FSSAI-certified kitchen practices",
  "On-time setup & elegant presentation",
  "Veg, Jain and allergen-friendly options",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image collage */}
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="arch overflow-hidden shadow-2xl shadow-wine-950/15">
              <img
                src={IMG.thaliClose}
                alt="Traditional Indian thali with naan and paneer"
                className="h-[24rem] w-full object-cover sm:h-[30rem]"
                loading="lazy"
              />
            </div>
            <div className="arch pointer-events-none absolute inset-0 -z-10 translate-x-5 translate-y-5 border-2 border-saffron-400/40" />

            <img
              src={IMG.chefToss}
              alt="Zaika chef tossing vegetables in the kitchen"
              className="absolute -bottom-8 -right-4 h-40 w-40 rounded-3xl border-4 border-white object-cover shadow-xl sm:h-48 sm:w-48"
              loading="lazy"
            />

            <div className="absolute -left-3 top-6 grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-saffron-400 to-saffron-600 text-center text-cream shadow-xl shadow-saffron-600/30 sm:-left-6">
              <div>
                <p className="font-display text-2xl font-bold leading-none">25</p>
                <p className="text-[10px] font-semibold uppercase tracking-wide">
                  Years
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              label="Our Story"
              title={
                <>
                  Rooted in tradition,
                  <br />
                  crafted for{" "}
                  <span className="text-gradient-gold">celebration.</span>
                </>
              }
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Zaika began in 1998 as a small family kitchen in Bandra with one
                simple belief — that food is the heart of every Indian
                celebration. Three generations later, we still cook the way our
                grandparents did: fresh spices ground daily, gravies simmered for
                hours, and every dish finished by hand.
              </p>
              <p>
                Today, our team of 120+ chefs and hospitality staff brings that
                same warmth to over 300 events a year — from intimate poojas to
                5,000-guest weddings — with menus that honour every region,
                tradition and taste.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {PROMISES.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-saffron-100 text-saffron-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Button href="#cuisines" variant="dark">
                Explore the Menu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <div>
                <p className="font-display text-lg italic text-wine-900">
                  Rajesh Kumar
                </p>
                <p className="text-xs uppercase tracking-wide text-ink-soft">
                  Founder &amp; Head Chef
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
