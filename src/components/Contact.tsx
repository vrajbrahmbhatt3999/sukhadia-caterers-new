import { useState } from "react";
import { cn } from "@/utils/cn";
import { BRAND } from "../content";
import { Button, SectionHeading } from "./common";
import { Reveal } from "./Reveal";
import { Check, Clock, Mail, MapPin, Phone, Sparkles } from "./icons";

const EVENT_TYPES = [
  "Wedding / Sangeet",
  "Corporate Event",
  "Birthday / Private Party",
  "Pooja / Festival",
  "Destination Event",
  "Other",
];

type Fields = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  date: string;
  guests: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  date: "",
  guests: "",
  message: "",
};

const inputCls =
  "w-full rounded-xl border border-wine-900/10 bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 transition focus:border-saffron-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-200";

const INFO = [
  { icon: Phone, label: "Call us", value: BRAND.phone, href: BRAND.phoneHref },
  { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
  { icon: MapPin, label: "Visit", value: BRAND.address },
  { icon: Clock, label: "Open", value: BRAND.hours },
];

export function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Fields> = {};
    if (!fields.name.trim()) next.name = "Please tell us your name";
    if (!fields.phone.trim()) next.phone = "A phone number helps us reach you";
    else if (fields.phone.replace(/\D/g, "").length < 10)
      next.phone = "Enter a valid phone number";
    if (!fields.eventType) next.eventType = "Select an occasion";
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      next.email = "Enter a valid email address";
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <Reveal>
            <SectionHeading
              align="left"
              label="Get in Touch"
              title={
                <>
                  Let's plan your{" "}
                  <span className="text-gradient-gold">perfect feast</span>
                </>
              }
              subtitle="Tell us about your occasion and we'll craft a custom quote within 24 hours. Tastings are complimentary for bookings of 100+ guests."
            />

            <ul className="mt-10 space-y-5">
              {INFO.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-saffron-100 text-saffron-600">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-display text-lg font-semibold text-wine-950 transition hover:text-saffron-600"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-display text-lg font-semibold text-wine-950">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-saffron-50 px-5 py-4 text-sm text-wine-900 ring-1 ring-saffron-200">
              <Sparkles className="h-5 w-5 shrink-0 text-saffron-600" />
              Serving Mumbai · Pune · Goa · Delhi and destinations worldwide.
            </div>
          </Reveal>

          {/* Form card */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-2xl shadow-wine-950/10 ring-1 ring-wine-950/5 sm:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-saffron-100/60 blur-2xl" />

              {submitted ? (
                <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-green-100 text-green-600">
                    <Check className="h-10 w-10" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-semibold text-wine-950">
                    Thank you, {fields.name.split(" ")[0]}!
                  </h3>
                  <p className="mt-3 max-w-sm text-ink-soft">
                    Your enquiry is on its way to our kitchen. A catering
                    specialist will reach out within 24 hours with a tailored
                    quote for your {fields.guests ? `${fields.guests}-guest ` : ""}
                    {fields.eventType.toLowerCase()}.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-7"
                    onClick={() => {
                      setFields(EMPTY);
                      setSubmitted(false);
                    }}
                  >
                    Send another enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <h3 className="font-display text-2xl font-semibold text-wine-950">
                    Request a free quote
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    No obligation — just great food.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={fields.name}
                        onChange={set("name")}
                        placeholder="Your name"
                        className={cn(inputCls, errors.name && "border-red-400 ring-1 ring-red-200")}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div className="sm:col-span-1">
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={fields.phone}
                        onChange={set("phone")}
                        placeholder="+91 00000 00000"
                        className={cn(inputCls, errors.phone && "border-red-400 ring-1 ring-red-200")}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Email
                      </label>
                      <input
                        type="email"
                        value={fields.email}
                        onChange={set("email")}
                        placeholder="you@email.com"
                        className={cn(inputCls, errors.email && "border-red-400 ring-1 ring-red-200")}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div className="sm:col-span-1">
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Occasion *
                      </label>
                      <select
                        value={fields.eventType}
                        onChange={set("eventType")}
                        className={cn(inputCls, errors.eventType && "border-red-400 ring-1 ring-red-200")}
                      >
                        <option value="">Select…</option>
                        {EVENT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.eventType && (
                        <p className="mt-1 text-xs text-red-500">{errors.eventType}</p>
                      )}
                    </div>

                    <div className="sm:col-span-1">
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Event date
                      </label>
                      <input
                        type="date"
                        value={fields.date}
                        onChange={set("date")}
                        className={inputCls}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        No. of guests
                      </label>
                      <input
                        type="number"
                        min={10}
                        value={fields.guests}
                        onChange={set("guests")}
                        placeholder="e.g. 250"
                        className={inputCls}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Tell us more
                      </label>
                      <textarea
                        rows={4}
                        value={fields.message}
                        onChange={set("message")}
                        placeholder="Cuisine preferences, venue, live counters you'd love…"
                        className={cn(inputCls, "resize-none")}
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="gold" className="mt-6 w-full">
                    Send Enquiry
                  </Button>
                  <p className="mt-3 text-center text-xs text-ink-soft">
                    We respect your privacy. Your details stay with our team.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
