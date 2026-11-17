import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

function S({ children, ...props }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Phone = (p: P) => (
  <S {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </S>
);

export const Mail = (p: P) => (
  <S {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </S>
);

export const MapPin = (p: P) => (
  <S {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </S>
);

export const Clock = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </S>
);

export const Check = (p: P) => (
  <S {...p} strokeWidth={2.4}>
    <path d="M20 6 9 17l-5-5" />
  </S>
);

export const ArrowRight = (p: P) => (
  <S {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </S>
);

export const ArrowLeft = (p: P) => (
  <S {...p}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </S>
);

export const ChevronDown = (p: P) => (
  <S {...p}>
    <path d="m6 9 6 6 6-6" />
  </S>
);

export const Close = (p: P) => (
  <S {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </S>
);

export const Menu = (p: P) => (
  <S {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </S>
);

export const Plus = (p: P) => (
  <S {...p}>
    <path d="M12 5v14M5 12h14" />
  </S>
);

export const Quote = (p: P) => (
  <S {...p} fill="currentColor" stroke="none">
    <path d="M9.5 5C6.5 6.2 5 8.6 5 12v7h6v-8H7.6c.1-1.9.9-3.3 2.7-4.2L9.5 5Zm9 0C15.5 6.2 14 8.6 14 12v7h6v-8h-3.4c.1-1.9.9-3.3 2.7-4.2L18.5 5Z" />
  </S>
);

export const Leaf = (p: P) => (
  <S {...p}>
    <path d="M11 20A7 7 0 0 1 4 13c0-6 5-9 16-9 0 11-3 16-9 16Z" />
    <path d="M4 21c3-4 6-7 11-9" />
  </S>
);

export const Flame = (p: P) => (
  <S {...p}>
    <path d="M12 2c1.5 3 4 4.2 4 7a4 4 0 0 1-8 0c0-1.2.4-2.2 1-3-.3 2 1 3 1.6 2C11.6 6 11.4 4 12 2Z" />
    <path d="M6.5 13.5C5 15 4 16.8 4 19a8 8 0 0 0 16 0c0-3-1.7-5.4-4-7" />
  </S>
);

export const ChefHat = (p: P) => (
  <S {...p}>
    <path d="M6 17h12a4 4 0 0 0 0-8c-.4-2.6-2.7-4.5-5.4-4.5A5.6 5.6 0 0 0 5.4 9 4.6 4.6 0 0 0 6 17Z" />
    <path d="M6 17v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" />
    <path d="M9 6.5V4.5M15 6.5V4.5" />
  </S>
);

export const Utensils = (p: P) => (
  <S {...p}>
    <path d="M7 3v8a2 2 0 0 0 2 2v8M7 3v4M10 3v4M17 3c2 1.5 2.5 4 1.5 6-.6 1.2-1.5 1.7-1.5 3v9" />
  </S>
);

export const Users = (p: P) => (
  <S {...p}>
    <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" />
    <circle cx="9.5" cy="7" r="3.5" />
    <path d="M21 20v-1.5a4 4 0 0 0-3-3.87M15.5 3.6a3.5 3.5 0 0 1 0 6.8" />
  </S>
);

export const Calendar = (p: P) => (
  <S {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </S>
);

export const Sparkles = (p: P) => (
  <S {...p}>
    <path d="M12 3l1.6 4.2L18 9l-4.4 1.8L12 15l-1.6-4.2L6 9l4.4-1.8L12 3Z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
  </S>
);

export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.4l-5.8 3 1.1-6.45L2.6 9.35l6.5-.95L12 2.5Z" />
  </svg>
);

export const Facebook = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.6-1.5H16.5V5.1C16.2 5.1 15.2 5 14.1 5c-2.1 0-3.6 1.3-3.6 3.8V11H8v3h2.5v7h3Z" />
  </svg>
);

export const Instagram = (p: P) => (
  <S {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <path d="M17.6 6.5h.01" />
  </S>
);

export const Youtube = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2C2 9 2 12 2 12s0 3 .4 4.8a2.6 2.6 0 0 0 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
  </svg>
);

export const Whatsapp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.1 14c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4.3-2.7 9.5 9.5 0 0 1-2-3.1c-.2-.6-.2-1.2 0-1.7.2-.4.6-.9 1-1.1.3-.2.7-.2.9-.2h.6c.2 0 .5 0 .7.5l.9 2.1c.1.3 0 .5-.1.7l-.4.5c-.2.2-.3.3-.1.6.4.7.9 1.2 1.6 1.7.3.2.6.2.8 0l.6-.6c.2-.2.4-.2.7-.1l2 1c.4.2.4.4.4.6v.5c0 .3 0 .5-.2.7Z" />
  </svg>
);

/** Resolve an icon component by a short string name. */
const ICON_MAP = {
  sparkles: Sparkles,
  users: Users,
  flame: Flame,
  leaf: Leaf,
  map: MapPin,
  chef: ChefHat,
  phone: Phone,
  mail: Mail,
  clock: Clock,
  utensils: Utensils,
  calendar: Calendar,
  star: Star,
};

export function IconByName({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICON_MAP[name as keyof typeof ICON_MAP] ?? Sparkles;
  return <Cmp className={className} />;
}
