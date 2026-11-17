import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Leaf } from "./icons";

/* ------------------------------ Logo ------------------------------- */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center">
        <svg viewBox="0 0 48 56" className="h-11 w-11 drop-shadow-sm" aria-hidden>
          <defs>
            <linearGradient id="zaika-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#f3bb69" />
              <stop offset="0.5" stopColor="#e5821c" />
              <stop offset="1" stopColor="#a54c12" />
            </linearGradient>
          </defs>
          <path
            d="M3 56V25A21 21 0 0 1 45 25V56Z"
            fill="url(#zaika-grad)"
          />
          <path
            d="M24 15c2.4 4 4.6 5.4 4.6 8.6a4.6 4.6 0 0 1-9.2 0c0-1.6.6-2.9 1.5-4-.3 2.3.6 3.1 1.6 1.9C23.4 19.9 23.3 17.5 24 15Z"
            fill="#fff"
          />
          <path
            d="M15 40c1.6-2.4 3.6-4 6.4-5"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity=".5"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-2xl font-semibold tracking-tight",
            tone === "dark" ? "text-wine-950" : "text-cream",
          )}
        >
          Zaika
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-medium uppercase tracking-[0.3em]",
            tone === "dark" ? "text-saffron-600" : "text-saffron-300",
          )}
        >
          Indian Caterers
        </span>
      </span>
    </span>
  );
}

/* -------------------------- Section bits --------------------------- */
export function SectionLabel({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]",
        tone === "dark" ? "text-saffron-600" : "text-saffron-300",
        className,
      )}
    >
      <Leaf className="h-4 w-4" />
      {children}
    </span>
  );
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
}: {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {label && <SectionLabel tone={tone}>{label}</SectionLabel>}
      <h2
        className={cn(
          "mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl",
          tone === "dark" ? "text-wine-950" : "text-cream",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-soft" : "text-cream-100/80",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ----------------------------- Button ------------------------------ */
type Variant = "primary" | "gold" | "dark" | "outline" | "ghost";

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-60";

const buttonVariants: Record<Variant, string> = {
  primary:
    "bg-saffron-500 px-6 py-3.5 text-white shadow-lg shadow-saffron-600/25 hover:bg-saffron-600 hover:shadow-xl hover:shadow-saffron-600/30 hover:-translate-y-0.5",
  gold: "bg-gradient-to-r from-saffron-400 via-saffron-500 to-saffron-600 px-6 py-3.5 text-white shadow-lg shadow-saffron-600/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-saffron-600/40",
  dark: "bg-wine-900 px-6 py-3.5 text-cream shadow-lg shadow-wine-950/20 hover:bg-wine-800 hover:-translate-y-0.5",
  outline:
    "border border-wine-900/20 px-6 py-3.5 text-wine-900 hover:border-wine-900/40 hover:bg-wine-900/5",
  ghost:
    "border border-white/25 px-6 py-3.5 text-white/90 hover:bg-white/10 hover:text-white",
};

export function Button({
  children,
  className,
  variant = "primary",
  href,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = cn(buttonBase, buttonVariants[variant], className);
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

/* --------------------------- Decorative ---------------------------- */
export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-saffron-400/70" />
      <span className="text-saffron-500">❁</span>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-saffron-400/70" />
    </div>
  );
}
