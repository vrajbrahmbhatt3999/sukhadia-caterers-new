import { useState } from "react";
import { cn } from "@/utils/cn";
import { BRAND, NAV } from "../content";
import { Button, Logo } from "./common";
import { useActiveSection, useScrolled } from "./Reveal";
import { Close, Mail, Menu, Phone, Sparkles } from "./icons";

export function Navbar() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV.map((n) => n.id));

  return (
    <>
      {/* Announcement strip */}
      <div className="hidden bg-wine-950 text-cream-100/85 md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs">
          <p className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-saffron-400" />
            Now booking the 2026 wedding season — limited dates available
          </p>
          <div className="flex items-center gap-6">
            <a
              href={BRAND.phoneHref}
              className="flex items-center gap-1.5 transition hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              {BRAND.phone}
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-1.5 transition hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              {BRAND.email}
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-cream/90 shadow-lg shadow-wine-950/5 backdrop-blur-xl"
            : "bg-cream",
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" aria-label="Zaika home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-saffron-500 after:transition-all after:duration-300",
                  active === item.id
                    ? "text-wine-950 after:w-full"
                    : "text-ink-soft hover:text-wine-900 after:w-0 hover:after:w-full",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={BRAND.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-wine-900/10 px-4 py-2.5 text-sm font-semibold text-wine-900 transition hover:border-saffron-400 hover:bg-saffron-50 sm:inline-flex"
            >
              <Phone className="h-4 w-4 text-saffron-600" />
              Call us
            </a>
            <Button href="#contact" className="hidden sm:inline-flex">
              Get a Quote
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-wine-900/10 text-wine-900 transition hover:bg-wine-900/5 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "overflow-hidden border-wine-950/5 bg-cream/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-in-out lg:hidden",
            open ? "max-h-[80vh] border-t opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition",
                  active === item.id
                    ? "bg-saffron-50 text-wine-950"
                    : "text-ink-soft hover:bg-wine-900/5",
                )}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <Button href="#contact" onClick={() => setOpen(false)}>
                Get a Quote
              </Button>
              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-wine-900/10 px-6 py-3 text-sm font-semibold text-wine-900"
              >
                <Phone className="h-4 w-4 text-saffron-600" />
                {BRAND.phone}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
