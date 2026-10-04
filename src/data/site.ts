export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string; // lucide icon name
  tile: string; // tile label
  blurb: string;
  materials: string[];
  image: string;
  bullets: string[];
  seo: { h3: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "large-format-print",
    title: "Large Format Print",
    short: "Large Format Print",
    icon: "Printer",
    tile: "Large Format Print",
    blurb:
      "Big, vivid prints that stop traffic — banners, roll-ups, vehicle wraps and posters built for the Ghanaian climate.",
    materials: ["Vinyl", "Canvas", "Photo paper", "Vehicle wrap film", "Mesh"],
    image: "/images/proj-printing.jpg",
    bullets: [
      "UV-stable outdoor inks",
      "Vehicle & fleet wraps",
      "Roll-up banners and standees",
      "Posters, flex and mesh banners",
    ],
    seo: [
      { h3: "What is large-format printing?", body: "Large-format printing produces wide graphics — banners, vehicle wraps, posters and stickers — using wide inkjet printers with durable, UV-stable inks." },
      { h3: "Why choose large-format print?", body: "Big prints grab attention on busy streets, last years outdoors and turn any wall or vehicle into advertising space." },
      { h3: "How to choose print materials", body: "Match the substrate to the use: vinyl for outdoor banners, cast film for vehicle wraps, photo paper for indoor posters, mesh for building wraps." },
    ],
  },
  {
    slug: "label-print-cut",
    title: "Label Print & Cut",
    short: "Label Print & Cut",
    icon: "Scissors",
    tile: "Label Print & Cut",
    blurb:
      "Custom labels and stickers, print-and-cut in any shape — product labels, bottle seals, decals and floor graphics.",
    materials: ["Vinyl stickers", "Paper labels", "Clear film", "Foil"],
    image: "/images/proj-laser.jpg",
    bullets: [
      "Kiss-cut stickers in any shape",
      "Product and bottle labels",
      "Durable outdoor decals",
      "Foil and clear-film finishes",
    ],
    seo: [
      { h3: "What is label print & cut?", body: "Print-and-cut labels combine full-colour printing with a contour cut, so every sticker or label comes out in its exact custom shape, ready to apply." },
      { h3: "Why choose print-and-cut labels?", body: "They give products a polished, professional look with custom shapes, durable adhesives and vivid brand colours." },
      { h3: "How to choose label materials", body: "Vinyl for waterproof product labels, paper for retail, clear film for a no-label look, foil for premium packaging." },
    ],
  },
  {
    slug: "cnc-cutting",
    title: "CNC Cutting",
    short: "CNC Cutting",
    icon: "Cog",
    tile: "CNC Cutting",
    blurb:
      "Precision CNC routing and cutting of acrylic, wood, MDF and aluminium for letters, shapes and signage components.",
    materials: ["Acrylic", "MDF", "Wood", "Aluminium composite", "PVC foam"],
    image: "/images/proj-3d-signage.jpg",
    bullets: [
      "Millimetre-accurate cuts",
      "Custom letters and logos",
      "Acrylic and aluminium composite",
      "Repeatable production runs",
    ],
    seo: [
      { h3: "What is CNC cutting?", body: "CNC cutting uses a computer-controlled router to cut and shape materials like acrylic, wood and aluminium with millimetre precision." },
      { h3: "Why choose CNC cutting?", body: "It delivers clean, repeatable, complex shapes that are impossible by hand — perfect for signage letters, logos and components." },
      { h3: "How to choose CNC materials", body: "Acrylic for glossy letters, MDF for painted signs, aluminium composite for outdoor durability, PVC foam for lightweight panels." },
    ],
  },
  {
    slug: "3d-signage",
    title: "3D Signage",
    short: "3D Signage",
    icon: "Box",
    tile: "3D Signage",
    blurb:
      "Raised, illuminated 3D channel letters and logos that make your brand impossible to miss, day or night.",
    materials: ["Acrylic", "Aluminium", "Alucobond", "LED modules", "Stainless steel"],
    image: "/images/proj-3d-signage.jpg",
    bullets: [
      "Front-lit, back-lit and halo-lit options",
      "Custom fonts, logos and brand colours",
      "Weatherproof outdoor-grade materials",
      "Energy-efficient LED illumination",
    ],
    seo: [
      { h3: "What is 3D signage?", body: "3D signage refers to raised, dimensional letters and logos — usually built from acrylic, aluminium or stainless steel and lit with LED modules — that give your brand real depth and visibility." },
      { h3: "Why choose 3D signs?", body: "Dimensional signs catch the eye from further away, read clearly at night when illuminated, and communicate a premium, established brand image." },
      { h3: "How to choose the right 3D sign", body: "Consider visibility distance, lighting conditions, indoor vs outdoor use, and your brand colours. Our team advises on the best materials and illumination for your budget." },
    ],
  },
  {
    slug: "corporate-branding",
    title: "Corporate Branding",
    short: "Corporate Branding",
    icon: "Palette",
    tile: "Corporate Branding",
    blurb:
      "Logos, stationery, brand guidelines and full corporate identity systems that give your business a consistent, memorable look.",
    materials: ["Logo suite", "Brand guidelines", "Stationery", "Social kit"],
    image: "/images/proj-branding.jpg",
    bullets: [
      "Logo design and refinements",
      "Brand colour & type guidelines",
      "Business cards and letterhead",
      "Social media and brand templates",
    ],
    seo: [
      { h3: "What is corporate branding?", body: "Corporate branding is the visual identity of your business — logo, colours, typography and the consistent system that ties every touchpoint together." },
      { h3: "Why invest in branding?", body: "A consistent brand builds trust, recognition and loyalty, making every sign, print and post work harder for you." },
      { h3: "How to build a corporate brand", body: "Start with strategy and audience, design a flexible logo, then document colours, type and usage in a brand guideline." },
    ],
  },
];

export const expertise = [
  {
    title: "Design",
    image: "/images/expertise-design.jpg",
    text: "We study your project and design a solution that fits your brand and budget.",
  },
  {
    title: "Printing",
    image: "/images/expertise-fabrication.jpg",
    text: "We print and produce your job on modern machines with durable, vivid materials.",
  },
  {
    title: "Cutting",
    image: "/images/expertise-installation.jpg",
    text: "We CNC-cut and finish every piece with millimetre precision for a clean result.",
  },
  {
    title: "Delivery",
    image: "/images/expertise-maintenance.jpg",
    text: "We package, deliver and support your project so it stays looking sharp.",
  },
];

export const values = [
  { title: "Responsiveness", icon: "Zap", text: "We reply fast and keep every deadline we commit to." },
  { title: "Precision", icon: "Ruler", text: "Millimetre-accurate cutting and printing, every time." },
  { title: "Creativity", icon: "Lightbulb", text: "Original design solutions tailored to your brand and space." },
  { title: "Quality", icon: "BadgeCheck", text: "Durable materials and clean finishes that last for years." },
  { title: "Reliability", icon: "ShieldCheck", text: "A trusted Ghana partner you can count on, project after project." },
];

export const numbers = [
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 350, suffix: "+", label: "Clients served" },
  { value: 900, suffix: "+", label: "Projects delivered" },
];

export const clients = [
  "Accra Mall",
  "Koforidua Stores",
  "Kumasi Plaza",
  "Tema Bay",
  "Catering Services",
  "African Wear",
  "Kaftans & More",
  "FM Monogram",
];

export const nav = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services", dropdown: true },
  { label: "PROJECTS", href: "#projects" },
  { label: "CLIENTS", href: "#clients" },
  { label: "CONTACT", href: "#contact" },
];

export const contact = {
  phone: "053 420 0106",
  phoneIntl: "+233 53 420 0106",
  phone2: "053 419 6098",
  phone2Intl: "+233 53 419 6098",
  whatsapp: "233534200106",
  email: "hello@samcre8.gh",
  address: "Accra, Ghana",
  hours: "Mon – Sat: 8:00 – 18:00",
  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },
};
