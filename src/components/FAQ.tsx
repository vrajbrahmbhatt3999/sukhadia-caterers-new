import { useState } from "react";
import { cn } from "@/utils/cn";
import { FAQS } from "../content";
import { Button, SectionHeading } from "./common";
import { Reveal } from "./Reveal";
import { Plus } from "./icons";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Good to Know"
            title={
              <>
                Frequently asked{" "}
                <span className="text-gradient-gold">questions</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl transition-colors duration-300",
                    isOpen
                      ? "bg-cream ring-1 ring-saffron-300/50"
                      : "bg-cream/60 ring-1 ring-wine-950/5 hover:bg-cream",
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        "font-display text-lg font-semibold transition-colors",
                        isOpen ? "text-saffron-700" : "text-wine-950",
                      )}
                    >
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300",
                        isOpen
                          ? "rotate-45 bg-saffron-500 text-white"
                          : "bg-wine-900/5 text-wine-900",
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-ink-soft">Still have a question?</p>
          <Button href="#contact" variant="dark" className="mt-4">
            Talk to our team
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
