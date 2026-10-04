# Build Prompt — "3D Signs & More" Website (clone of gravupub.com structure)

**Inspiration site (copy layout, sections, effects 1:1):** https://gravupub.com/
**Business:** 3D Signs & More — signage & branding workshop, Accra, Ghana
**Phone / WhatsApp:** 024 638 5810 (intl: +233 24 638 5810)
**Default language:** English (all text, labels, SEO). Optional FR toggle later.
**Stack:** React + Vite + Tailwind CSS + Framer Motion + Swiper. Responsive (mobile-first), SEO meta tags, fast lazy-loaded images.

> Placeholders in `[brackets]` = client must confirm (address, email, socials, figures). Do not invent them.

---

## 1. Brand & Design System

Colors come from the shop signboard (black board, yellow "SIGNS", magenta "3D" with marquee bulbs, white "& MORE"). They replace Gravupub's blue/orange 1:1.

| Token | Hex | Replaces Gravupub | Use |
|---|---|---|---|
| `--primary` | `#111111` (black) | blue `#004A99` | Menu cells, footer, quote box, tiles |
| `--primary-2` | `#1E1E1E` | blue title `#0057A1` | Page titles (on light bg) |
| `--accent` | `#F5C518` (yellow) | orange `#F07F13` | Buttons, stats section, active menu |
| `--accent-2` | `#FFD43B` | orange light `#F38435` | Hover, tiles, copyright bar |
| `--magenta` | `#C2185B` | orange CTA `#FF5E14` | "Read more", "Send" buttons, highlights |
| `--text` | `#565969` | same | Body text |
| `--grey-bg` | `#F2F3F5` | same | Inner page title band |
| `--white` | `#FFFFFF` | same | Background |

**Fonts (Google):** `Yantramanav` 300/400/500/600/800 (main) + `Roboto` 700 (buttons, tiles). Logo/hero accent: `Bungee` or `Titan One` (chunky 3D letters like the sign).

| Element | Size / line-height | Weight |
|---|---|---|
| Body | 18px / 26px | 300–400 |
| Top bar | 14px | 300 |
| Menu | 18px / 23px, UPPERCASE | 500 |
| Section H1 (banners) | 80px / 80px, UPPERCASE | 800 |
| Section H2 | 60px / 57.6px | 600 |
| Tagline | 20px / 30px | 300 |
| Accordion title | 20px | 600 |
| Counter number | 60px | 600 |
| Footer column title | 26px, UPPERCASE | 600 |
| Buttons | Roboto 20px (theme btns 16px/32px) | 700 |

Mobile: H1 → 44px, H2 → 36px.

**Buttons:** Quote (black, radius 3px, pad 12×24) · Service cards (yellow, pad 10×20, radius 0) · "View Catalogue" (yellow, pad 25×100, glow `0 0 20px rgba(245,197,24,.6)`) · Read more / Send (magenta, pad 7×38, radius 2px).

**Layout & motifs:** container 1100px · sections padding 100px · **diagonal hatched pattern** (`repeating-linear-gradient(45deg,#f5f5f5 0 2px,#fff 2px 8px)`) behind About/Values blocks, offset right · **giant ghost text** (white 10% opacity) behind banner titles · soft shadows `0 0 15px rgba(0,0,0,.15)` · scroll fade/slide-in · **marquee-bulb dots** decoration (small glowing yellow circles) on hero title and logo, echoing the sign.

---

## 2. Global Header (all pages)

**Top bar** (white, 40px): left — phone icon `024 638 5810` · mail icon `[email]` · right — Facebook, Instagram, TikTok, WhatsApp icons.

**Main bar** (sticky, 50px, white + shadow on scroll):
- Logo left: "**3D**" magenta with bulb dots + "**SIGNS**" yellow + "**& MORE**" white, on a black rounded block.
- Menu right — each item is a **black cell** separated by a thin white line, white text, active = yellow:
  `HOME` · `ABOUT` · `SERVICES ▾` · `PROJECTS` · `CLIENTS` · `CONTACT`
  - SERVICES dropdown: 3D Signage · Pylon Signs · Printing · Branding · Laser Engraving · Graphic Design · Interior Design · Maintenance
- Search icon (white cell) + **hamburger (yellow cell)** → right slide-in panel (black, 420px): "Information", short company intro, address, phone, WhatsApp, email, close button yellow square.

**Floating elements:**
- **Pro WhatsApp button** (bottom-left): round `#25D366` 60px, WhatsApp icon, pulse ring animation, tooltip "Chat with us", opens a small chat card (avatar/logo, "3D Signs & More — Typically replies within minutes", message "Hello 👋 How can we help with your sign?", green "Start Chat" button) → `https://wa.me/233246385810?text=Hello%203D%20Signs%20%26%20More%2C%20I%20need%20a%20quote`.
- Back-to-top square (yellow, bottom-right, up arrow).

---

## 3. Home Page (12 sections, same order as gravupub.com)

1. **Hero mosaic** (full width, ~100vh): photo grid — 1 tall left, 2 stacked middle, 1 right (signs, pylons, lit 3D letters) — auto-crossfade. Centered black button **"Request a Quote"**.
2. **Service tiles band**: 2 rows × 4 full-width tiles, **checkerboard yellow / black**, Roboto 20px bold centered: 3D Signage · Pylon Signs · Printing · Branding / Laser Engraving · Graphic Design · Interior Design · Shop Fronts & Lightboxes. Each links to its service page.
3. **Intro box** (white, thin border, shadow, justified): "For years, 3D Signs & More has helped businesses in Ghana stand out with custom signage, branding and print. From 3D illuminated letters and pylon signs to laser engraving and interior design, we design, build and install solutions that make your brand impossible to miss."
4. **OUR EXPERTISE** — H2 right-aligned. 4 cards (carousel, 4 visible): image top, centered text, yellow button bottom, card bg white → light grey gradient:
   - Design — "We study your project and design a solution that fits your brand and budget."
   - Fabrication — "We produce your signs in our workshop with modern machines and durable materials."
   - Installation — "Our team installs on site with precision for a clean, professional finish."
   - Maintenance — "We repair and maintain your signs so they stay bright and durable."
5. **OUR PROJECTS banner**: black→charcoal gradient, giant ghost text, H1 white 80px left.
6. **Projects coverflow 3D carousel**: tilted cards, center enlarged, each = photo + black title strip + mirror reflection. Items = 8 services. Button **"View Catalogue"** (yellow, glow) → `/catalogue`.
7. **WHO WE ARE**: hatched bg; image left (workshop/storefront photo), right: tagline "WHO WE ARE?" 12px caps grey, H2 "3D SIGNS & MORE", 4-line text, magenta "Read more…" → `/about`.
8. **OUR VALUES**: left — H2 + tagline "Our work is driven by 5 core values" + **semi-circle infographic** (logo center, 5 petals alternating yellow/black with icons). Right — **accordion** (+/−, open item shows yellow square "−"): Responsiveness · Precision · Creativity · Quality · Reliability (1 sentence each).
9. **OUR NUMBERS**: yellow bg, H1 black 80px. 3 animated **circular counters** (black ring progress, number 60px, small caps label + 26px title): `[X]+ Years` · `[X]+ Clients` · `[X]+ Projects`.
10. **Clients logo wall**: grid 8 cols, color logos, no frame — use client-approved logos only (e.g. signs shown on the board: Pizza Hut pylon, Famous Clothing, Grey Courts Studio Apartments — confirm permission).
11. **Quote form**: 2 cols — left 70%: labels above inputs (Full Name · Phone Number · Email · Company · Subject · Choose a Service [select 8 services] · Message) + magenta **SEND** button; right 30%: black box "REQUEST / A QUOTE" (white 50px/800) + text + bullet list of services. On submit → also offer "Send via WhatsApp" (prefilled message).
12. **Footer** (black): 4 columns, title 26px white caps, text `#9CA5AF`:
    - **WORKSHOP** — `[street / landmark], Accra, Ghana` + Google Maps link
    - **CONTACT** — Tel/WhatsApp 024 638 5810 · `[email]` · Mon–Sat `[hours]`
    - **SERVICES** — 8 service links
    - **FOLLOW US** — social icons + mini map of Ghana
    - Bottom bar **yellow**: left darker block "3D SIGNS & MORE" bold · center "© {current year} 3D Signs & More. All rights reserved." · right social icons + "Follow us".

---

## 4. Inner Pages (shared template)

Header + **grey title band `#F2F3F5` 270px** with H1 80px/800 `#1E1E1E` UPPERCASE left-aligned + content + footer.

| Page | Route | Content |
|---|---|---|
| About | `/about` | H2 "OUR STORY" centered · hatched block: photo + tagline "MORE THAN SIGNS" + H2 + 3 paragraphs · H2 "OUR BEGINNINGS" + 3-col photo gallery · Values section (same as home) |
| Service pages ×8 | `/services/3d-signage`, `/pylon-signs`, `/printing`, `/branding`, `/laser-engraving`, `/graphic-design`, `/interior-design`, `/maintenance` | Title · **3-col photo gallery** (lightbox) · SEO article: yellow bold H3 ("What is…?", "Why choose…?", "How to choose…?"), numbered dark bold subtitles, ✔ lists, materials (acrylic, aluminium, alucobond, LED, stainless steel) · CTA "Get a quote on WhatsApp" |
| Process pages ×4 | `/design`, `/fabrication`, `/installation`, `/maintenance` | 2 cols on hatched bg: image + bold title + text + 4 bullet points |
| Projects | `/projects` | Centered shadowed intro box · **3-col grid**: photo (350×430) + yellow title below · filter tabs by service |
| Clients | `/clients` | H2 "OUR CLIENTS" centered + yellow underline · **6-col logo cards** (grey border, radius 6px) · quote line |
| Contact | `/contact` | 2 cols: form (same as home) + shadowed card "ACCRA, GHANA" with big icons (map, phone, WhatsApp, email, socials) · embedded Google Map full width |
| Catalogue | `/catalogue` | Title + PDF flipbook viewer framed by yellow & black bands + download button |

---

## 5. Technical Requirements
- Components: `Header`, `TopBar`, `SidePanel`, `WhatsAppButton`, `BackToTop`, `PageTitle`, `ServiceTiles`, `CoverflowCarousel`, `Accordion`, `CircleCounter`, `LogoWall`, `QuoteForm`, `Footer`.
- Data in `/src/data/*.json` (services, projects, clients, values) for easy edits.
- Form: validation + EmailJS/Formspree + WhatsApp fallback.
- SEO: title "3D Signs & More | 3D Signage, Pylon Signs & Branding in Accra", meta description, Open Graph, `LocalBusiness` JSON-LD (telephone +233246385810), sitemap, alt text on all images.
- Performance: WebP images, lazy loading, Lighthouse ≥ 90.
- Accessibility: contrast AA (dark text on yellow), focus states, aria labels on icon buttons.
- Fix the inspiration site's flaws: dynamic copyright year, clean URLs, alt on logos, no empty gallery gap.
