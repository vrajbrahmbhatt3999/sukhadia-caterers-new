import { BRAND } from "../content";
import { useScrolled } from "./Reveal";
import { ArrowRight, Whatsapp } from "./icons";

export function FloatingActions() {
  const show = useScrolled(500);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`grid h-11 w-11 place-items-center rounded-full bg-wine-900 text-cream shadow-lg shadow-wine-950/30 ring-1 ring-white/10 transition-all duration-300 hover:bg-wine-800 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowRight className="h-5 w-5 -rotate-90" />
      </button>

      <a
        href={BRAND.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-600/30 transition hover:scale-105"
      >
        <Whatsapp className="h-7 w-7" />
      </a>
    </div>
  );
}
