const WORDS = [
  "Live Tandoor",
  "Paneer Tikka",
  "Royal Biryani",
  "Chaat Counters",
  "South Indian",
  "Mithai Bar",
  "Dal Makhani",
  "Seekh Kebabs",
  "Gulab Jamun",
  "Crisp Dosa",
];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden bg-gradient-to-r from-saffron-600 via-saffron-500 to-saffron-600 py-4">
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {row.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-10 pr-10 font-display text-lg font-semibold uppercase tracking-wide text-cream/95 sm:text-xl"
          >
            {w}
            <span aria-hidden className="text-wine-950/40">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
