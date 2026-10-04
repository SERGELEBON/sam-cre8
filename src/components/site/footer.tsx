"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { WhatsAppIcon } from "./floating";
import { contact, services } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-brand-black text-white">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* WORKSHOP */}
        <div>
          <h3 className="mb-4 text-[26px] font-semibold uppercase tracking-wide text-white">
            Workshop
          </h3>
          <p className="flex items-start gap-2 text-[15px] leading-relaxed text-[#9CA5AF]">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-yellow" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Spintex+Road+Accra+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-yellow"
            >
              {contact.address}
            </a>
          </p>
          <div className="mt-4 overflow-hidden rounded">
            {/* Mini map of Ghana */}
            <iframe
              title="sam cre8 location map"
              src="https://www.google.com/maps?q=Accra,Ghana&z=11&output=embed"
              className="h-32 w-full grayscale-[0.3]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-4 text-[26px] font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="space-y-3 text-[15px] text-[#9CA5AF]">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-yellow" />
              <a href={`tel:${contact.phoneIntl}`} className="hover:text-brand-yellow">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-yellow" />
              <a href={`tel:${contact.phone2Intl}`} className="hover:text-brand-yellow">
                {contact.phone2}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-brand-whatsapp" />
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-whatsapp"
              >
                WhatsApp {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-yellow" />
              <a href={`mailto:${contact.email}`} className="hover:text-brand-yellow">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-brand-yellow" />
              <span>{contact.hours}</span>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="mb-4 text-[26px] font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="grid grid-cols-1 gap-2 text-[15px] text-[#9CA5AF]">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="flex items-center gap-1 transition hover:text-brand-yellow"
                >
                  <span className="text-brand-yellow">›</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* FOLLOW US */}
        <div>
          <h3 className="mb-4 text-[26px] font-semibold uppercase tracking-wide text-white">
            Follow Us
          </h3>
          <p className="mb-4 text-[15px] leading-relaxed text-[#9CA5AF]">
            Follow our latest signage projects and behind-the-scenes from the
            workshop across our socials.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={contact.socials.facebook}
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-black"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={contact.socials.instagram}
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-black"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={contact.socials.tiktok}
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-black"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.82c-.9-.6-1.5-1.6-1.7-2.7v-.12h-2.9v12.4c0 1.3-1.05 2.35-2.35 2.35s-2.35-1.05-2.35-2.35 1.05-2.35 2.35-2.35c.27 0 .53.04.78.13v-2.97a5.3 5.3 0 0 0-.78-.06A5.32 5.32 0 0 0 3.95 15.4a5.32 5.32 0 0 0 5.32 5.32 5.32 5.32 0 0 0 5.32-5.32V9.45c1.16.83 2.6 1.32 4.16 1.32V7.87c-.84 0-1.63-.23-2.3-.63 1.18-.42 2.06-1.42 2.3-2.62l-1.05.2z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-whatsapp hover:text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-6">
            <Logo size="sm" />
          </div>
        </div>
      </div>

      {/* Bottom bar (yellow) */}
      <div className="bg-brand-yellow text-brand-black">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-3 px-4 py-4 text-[14px] sm:flex-row">
          <div className="bg-brand-charcoal px-4 py-2 font-button font-bold uppercase tracking-wide text-white">
            sam cre8
          </div>
          <p className="text-center">
            © {year} sam cre8. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Follow us</span>
            <a href={contact.socials.facebook} aria-label="Facebook" className="hover:text-brand-magenta">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={contact.socials.instagram} aria-label="Instagram" className="hover:text-brand-magenta">
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-brand-magenta"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
