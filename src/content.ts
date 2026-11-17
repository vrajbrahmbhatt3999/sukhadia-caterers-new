/** Central content + imagery for the Zaika caterers site. */

export const BRAND = {
  name: "Zaika",
  full: "Zaika Caterers",
  tagline: "Royal Indian Caterers & Events",
  established: 1998,
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "https://wa.me/919876543210",
  email: "hello@zaikacaterers.in",
  address: "12 Spice Lane, Bandra West, Mumbai 400050",
  hours: "Mon – Sun · 9:00 am – 10:00 pm",
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Occasions" },
  { id: "cuisines", label: "Cuisines" },
  { id: "packages", label: "Packages" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/*  Imagery (Pexels CDN)                                              */
/* ------------------------------------------------------------------ */
const px = (id: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}`;

export const IMG = {
  heroBanquet: px("36766881", 1400),
  thaliClose: px("29148133", 1200),
  thaliFestive: px("8818657", 900),
  thaliTray: px("5775684", 1000),
  tandooriSpread: px("9792458", 1200),
  curriesDark: px("10508207", 1200),
  lambBrass: px("28674566", 900),
  feast: px("29850004", 1000),
  curryCopper: px("2474661", 800),
  kebabPlatter: px("36701471", 900),
  tandooriSkewers: px("9646846", 900),
  seekhKebab: px("6522658", 800),
  paneerRolls: px("29173093", 800),
  samosasTray: px("37068875", 900),
  chaat: px("39025942", 900),
  chefToss: px("36870973", 1200),
  chefThumb: px("30660319", 800),
  sweetsCelebration: px("8887065", 900),
  biryaniPlate: px("9738983", 900),
  biryaniBowl: px("35287413", 800),
  dosaMeal: px("20422123", 800),
  masalaDosa: px("20422138", 800),
  idli: px("20422128", 800),
  gulabJamun: px("37294501", 800),
  sweetsBowls: px("8887011", 800),
  banquetFloral: px("36766850", 1000),
  banquetChandelier: px("12688995", 900),
  weddingBuffet: px("18980077", 1000),
  maharashtraThali: px("17223838", 800),
  skewersGrill: px("36879455", 800),
};

/* ------------------------------------------------------------------ */
/*  Hero stats                                                        */
/* ------------------------------------------------------------------ */
export const STATS = [
  { value: "25+", label: "Years of hospitality" },
  { value: "5,000+", label: "Events catered" },
  { value: "1,200+", label: "Weddings celebrated" },
  { value: "40+", label: "Live counters & stations" },
];

/* ------------------------------------------------------------------ */
/*  Occasions / services                                              */
/* ------------------------------------------------------------------ */
export const SERVICES = [
  {
    icon: "sparkles",
    title: "Weddings & Sangeet",
    text: "Multi-cuisine feasts, live counters and elegant buffets crafted for your big days — from Mehendi to Reception.",
    image: IMG.weddingBuffet,
  },
  {
    icon: "users",
    title: "Corporate Events",
    text: "Conferences, offsites and annual days with punctual service, packed lunches and refined buffet spreads.",
    image: IMG.banquetChandelier,
  },
  {
    icon: "flame",
    title: "Private Parties",
    text: "Birthdays, anniversaries and intimate dinners with custom menus, tandoor stations and dessert bars.",
    image: IMG.paneerRolls,
  },
  {
    icon: "leaf",
    title: "Pooja & Festivals",
    text: "Satvik, Jain and pure-veg spreads for Ganesh Chaturthi, Diwali, Navratri and every sacred occasion.",
    image: IMG.sweetsCelebration,
  },
  {
    icon: "map",
    title: "Destination Events",
    text: "Beach weddings, palace venues and hill getaways — full kitchen setups wherever your celebration travels.",
    image: IMG.banquetFloral,
  },
  {
    icon: "chef",
    title: "Outdoor & College",
    text: "Large-format outdoor catering for festivals, campus fests and community gatherings up to 5,000 guests.",
    image: IMG.samosasTray,
  },
];

/* ------------------------------------------------------------------ */
/*  Cuisines (tabbed)                                                 */
/* ------------------------------------------------------------------ */
export const CUISINES = [
  {
    id: "north",
    label: "North Indian",
    tagline: "Rich, buttery & aromatic",
    image: IMG.curriesDark,
    description:
      "Slow-simmered gravies, tandoor-fresh breads and the comforting classics that define a North Indian celebration table.",
    dishes: [
      { name: "Paneer Butter Masala", veg: true },
      { name: "Dal Makhani", veg: true },
      { name: "Shahi Paneer", veg: true },
      { name: "Butter Naan & Lachha Paratha", veg: true },
      { name: "Kadai Chicken", veg: false },
      { name: "Rogan Josh", veg: false },
    ],
  },
  {
    id: "mughlai",
    label: "Mughlai",
    tagline: "Royal & regal",
    image: IMG.lambBrass,
    description:
      "Nawabi recipes passed through generations — fragrant biryanis, rich kormas and kebabs fit for a royal dastarkhwan.",
    dishes: [
      { name: "Lucknowi Mutton Biryani", veg: false },
      { name: "Chicken Korma", veg: false },
      { name: "Galouti Kebab", veg: false },
      { name: "Sheermal", veg: true },
      { name: "Subz Dum Biryani", veg: true },
      { name: "Malai Kofta", veg: true },
    ],
  },
  {
    id: "south",
    label: "South Indian",
    tagline: "Crisp, coconut & tangy",
    image: IMG.masalaDosa,
    description:
      "Live dosa counters, steaming idlis and sambar-bar spreads that bring the warmth of the South to your table.",
    dishes: [
      { name: "Live Masala Dosa", veg: true },
      { name: "Idli & Medu Vada", veg: true },
      { name: "Sambar & Coconut Chutney", veg: true },
      { name: "Rasam & Curd Rice", veg: true },
      { name: "Chettinad Chicken", veg: false },
      { name: "Appam & Stew", veg: true },
    ],
  },
  {
    id: "tandoor",
    label: "Tandoor & BBQ",
    tagline: "Smoky & char-grilled",
    image: IMG.kebabPlatter,
    description:
      "Open flame theatre from our clay tandoors — sizzling skewers marinated for 24 hours and basted to perfection.",
    dishes: [
      { name: "Paneer Tikka", veg: true },
      { name: "Malai Broccoli", veg: true },
      { name: "Tandoori Chicken", veg: false },
      { name: "Seekh Kebab", veg: false },
      { name: "Mutton Chaap", veg: false },
      { name: "Tandoori Aloo", veg: true },
    ],
  },
  {
    id: "street",
    label: "Street & Chaat",
    tagline: "Tangy, crunchy & nostalgic",
    image: IMG.chaat,
    description:
      "The beloved lanes of India, plated at your event — chaat counters that keep guests coming back for one more.",
    dishes: [
      { name: "Pani Puri & Sev Puri", veg: true },
      { name: "Dahi Bhalla", veg: true },
      { name: "Aloo Tikki Chaat", veg: true },
      { name: "Pav Bhaji", veg: true },
      { name: "Samosa & Chutney", veg: true },
      { name: "Kulfi Falooda", veg: true },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    tagline: "Sweet finales",
    image: IMG.gulabJamun,
    description:
      "A mithai bar of classics and modern indulgences — warm, syrupy, chilled and everything in between.",
    dishes: [
      { name: "Warm Gulab Jamun", veg: true },
      { name: "Gajar Ka Halwa", veg: true },
      { name: "Rasmalai", veg: true },
      { name: "Moong Dal Halwa", veg: true },
      { name: "Kulfi & Ice Cream Bar", veg: true },
      { name: "Live Jalebi & Rabdi", veg: true },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Live counters showcase                                            */
/* ------------------------------------------------------------------ */
export const COUNTERS = [
  { title: "Chaat & Chuski", image: IMG.chaat, note: "6 varieties" },
  { title: "Tandoor Grill", image: IMG.tandooriSkewers, note: "Live flame" },
  { title: "Dosa & Idli", image: IMG.dosaMeal, note: "Made to order" },
  { title: "Mithai & Kulfi", image: IMG.sweetsBowls, note: "Dessert bar" },
];

/* ------------------------------------------------------------------ */
/*  Packages                                                          */
/* ------------------------------------------------------------------ */
export const PACKAGES = [
  {
    name: "Silver",
    price: "₹649",
    unit: "per plate",
    tag: "Intimate gatherings",
    popular: false,
    includes: [
      "2 starters + 4 main courses",
      "2 breads, rice & dal",
      "1 dessert + 1 beverage",
      "Staff & basic buffet setup",
      "Up to 60 guests",
    ],
  },
  {
    name: "Gold",
    price: "₹1,049",
    unit: "per plate",
    tag: "Our most-loved menu",
    popular: true,
    includes: [
      "3 starters + 6 main courses",
      "Tandoor & live chaat counter",
      "4 breads, biryani & raita",
      "3 desserts + welcome drink",
      "Full service staff & crockery",
      "Up to 400 guests",
    ],
  },
  {
    name: "Platinum",
    price: "₹1,699",
    unit: "per plate",
    tag: "Grand celebrations",
    popular: false,
    includes: [
      "Unlimited multi-cuisine menu",
      "4 live counters of your choice",
      "Premium mithai & kulfi bar",
      "Themed décor & uniformed hosts",
      "Dedicated event captain",
      "Unlimited guests · Destination ready",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Gallery                                                           */
/* ------------------------------------------------------------------ */
export const GALLERY = [
  { image: IMG.thaliClose, category: "Food", caption: "Signature Royal Thali" },
  { image: IMG.weddingBuffet, category: "Weddings", caption: "Reception buffet, Udaipur" },
  { image: IMG.kebabPlatter, category: "Food", caption: "Tandoor kebab platter" },
  { image: IMG.banquetChandelier, category: "Events", caption: "Corporate annual night" },
  { image: IMG.chaat, category: "Food", caption: "Live chaat counter" },
  { image: IMG.banquetFloral, category: "Weddings", caption: "Floral dastarkhwan setup" },
  { image: IMG.biryaniPlate, category: "Food", caption: "Lucknowi biryani" },
  { image: IMG.sweetsCelebration, category: "Events", caption: "Festival mithai prep" },
  { image: IMG.chefToss, category: "Events", caption: "Our chefs in action" },
];

export const GALLERY_FILTERS = ["All", "Food", "Weddings", "Events"];

/* ------------------------------------------------------------------ */
/*  Testimonials                                                      */
/* ------------------------------------------------------------------ */
export const TESTIMONIALS = [
  {
    name: "Ananya & Rohit Sharma",
    event: "Wedding · Jaipur",
    quote:
      "Zaika turned our wedding into a feast people still talk about. The live chaat counter was the star of the night — every single guest had seconds.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    event: "Sangeet Night · Goa",
    quote:
      "Flawless service for 600 guests. The South Indian spread felt just like home and the team handled our last-minute menu changes without a hiccup.",
    rating: 5,
  },
  {
    name: "Vikram Nair",
    event: "Corporate Offsite · Bengaluru",
    quote:
      "Punctual, professional and delicious. We host 30+ events a year and Zaika is now our default. The packed lunches were a big hit with the team.",
    rating: 5,
  },
  {
    name: "Sunita Agarwal",
    event: "Ganesh Chaturthi · Mumbai",
    quote:
      "Pure-veg, satvik and made with such care. The prasad thali was beautifully presented and the staff were warm and respectful throughout.",
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  Process                                                           */
/* ------------------------------------------------------------------ */
export const PROCESS = [
  {
    step: "01",
    title: "Consult & Tasting",
    text: "We listen to your vision, guest count and cuisine preferences — then invite you for a complimentary tasting.",
    icon: "users",
  },
  {
    step: "02",
    title: "Custom Menu",
    text: "Our chefs craft a bespoke menu with veg, Jain and allergen-friendly options tailored to your occasion.",
    icon: "chef",
  },
  {
    step: "03",
    title: "On-site Kitchen",
    text: "We arrive early to set up live counters, tandoor and a spotless kitchen right at your venue.",
    icon: "flame",
  },
  {
    step: "04",
    title: "Serve & Sparkle",
    text: "Uniformed staff serve with warmth while we handle every detail — right down to the final clean-up.",
    icon: "sparkles",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */
export const FAQS = [
  {
    q: "What is the minimum number of guests you cater for?",
    a: "We cater from intimate gatherings of 30 guests up to grand celebrations of 5,000+. Our Silver package is designed for smaller functions, while Platinum scales effortlessly.",
  },
  {
    q: "Do you offer pure vegetarian, Jain and satvik menus?",
    a: "Absolutely. A dedicated vegetarian kitchen, Jain (no root vegetables) and satvik options are available on request. We maintain separate prep areas to prevent any cross-contact.",
  },
  {
    q: "How far in advance should we book?",
    a: "For weddings we recommend booking 3–6 months ahead, especially during the November–February season. That said, we do accommodate last-minute requests whenever our calendar allows.",
  },
  {
    q: "Do you travel for destination weddings?",
    a: "Yes — we regularly cater across India and internationally. Our team transports equipment, sets up a full kitchen on-site and adapts to any venue, from palaces to beaches.",
  },
  {
    q: "Can we taste the food before booking?",
    a: "We offer a complimentary tasting for bookings above 100 guests. It's a chance to fine-tune spice levels and finalise your menu with our head chef.",
  },
  {
    q: "What is your cancellation policy?",
    a: "The booking amount is adjustable against other dates within 6 months. Full terms are shared in your catering agreement so everything is transparent from day one.",
  },
];
