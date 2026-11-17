import { useState } from "react";
import { BRAND, NAV, SERVICES } from "../content";
import { Logo } from "./common";
import { ArrowRight, Check, Facebook, Instagram, Mail, MapPin, Phone, Whatsapp, Youtube } from "./icons";

const SOCIALS = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Whatsapp, href: BRAND.whatsapp, label: "WhatsApp" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-wine-950 text-cream-100/70">
      <div className="pattern-dots pointer-events-none absolute inset-0 text-white/[0.03]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed">
              Royal Indian catering since {BRAND.established}. We bring live
              counters, regional classics and heartfelt hospitality to
              celebrations across India and beyond.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-cream-100/70 transition hover:border-saffron-400/50 hover:bg-saffron-500/10 hover:text-saffron-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="transition hover:text-saffron-300"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Occasions */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream">
              Occasions
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="transition hover:text-saffron-300"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="flex items-center gap-2.5 transition hover:text-saffron-300"
                >
                  <Phone className="h-4 w-4 text-saffron-400" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2.5 transition hover:text-saffron-300"
                >
                  <Mail className="h-4 w-4 text-saffron-400" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-400" />
                {BRAND.address}
              </li>
            </ul>

            <div className="mt-6">
              {joined ? (
                <p className="flex items-center gap-2 rounded-xl bg-saffron-500/10 px-4 py-3 text-sm text-saffron-200 ring-1 ring-saffron-400/30">
                  <Check className="h-4 w-4" /> You're on the list — thank you!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.includes("@")) setJoined(true);
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email for menus & offers"
                    className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream-100/40 focus:border-saffron-400/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-saffron-500 text-white transition hover:bg-saffron-600"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.full}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="transition hover:text-saffron-300">
              Privacy
            </a>
            <a href="#home" className="transition hover:text-saffron-300">
              Terms
            </a>
            <p className="flex items-center gap-1.5">
              Crafted with <span className="text-saffron-400">♥</span> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
