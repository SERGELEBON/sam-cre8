"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Clock,
  Search,
} from "lucide-react";
import { Logo } from "./logo";
import { WhatsAppIcon } from "./floating";
import { nav, services, contact } from "@/data/site";

function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a href={contact.socials.facebook} aria-label="Facebook" className="text-brand-text transition hover:text-brand-magenta">
        <Facebook className="h-4 w-4" />
      </a>
      <a href={contact.socials.instagram} aria-label="Instagram" className="text-brand-text transition hover:text-brand-magenta">
        <Instagram className="h-4 w-4" />
      </a>
      {/* TikTok glyph */}
      <a href={contact.socials.tiktok} aria-label="TikTok" className="text-brand-text transition hover:text-brand-magenta">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M16.6 5.82c-.9-.6-1.5-1.6-1.7-2.7v-.12h-2.9v12.4c0 1.3-1.05 2.35-2.35 2.35s-2.35-1.05-2.35-2.35 1.05-2.35 2.35-2.35c.27 0 .53.04.78.13v-2.97a5.3 5.3 0 0 0-.78-.06A5.32 5.32 0 0 0 3.95 15.4a5.32 5.32 0 0 0 5.32 5.32 5.32 5.32 0 0 0 5.32-5.32V9.45c1.16.83 2.6 1.32 4.16 1.32V7.87c-.84 0-1.63-.23-2.3-.63 1.18-.42 2.06-1.42 2.3-2.62l-1.05.2z" />
        </svg>
      </a>
      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="text-brand-text transition hover:text-brand-whatsapp"
      >
        <WhatsAppIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

export function TopBar() {
  return (
    <div className="hidden border-b border-gray-200 bg-white text-brand-text md:block">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-2 text-[14px]">
        <div className="flex items-center gap-5">
          <a href={`tel:${contact.phoneIntl}`} className="flex items-center gap-1.5 hover:text-brand-magenta">
            <Phone className="h-3.5 w-3.5" />
            <span>{contact.phone}</span>
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 hover:text-brand-magenta">
            <Mail className="h-3.5 w-3.5" />
            <span>{contact.email}</span>
          </a>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
}

function DesktopMenu() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="hidden items-stretch lg:flex" aria-label="Primary">
      {nav.map((item) =>
        item.dropdown ? (
          <div
            key={item.label}
            className="relative flex"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <a
              href={item.href}
              className="flex items-center gap-1 bg-brand-black px-4 text-[15px] font-medium uppercase tracking-wide text-white ring-1 ring-white/15 transition hover:bg-brand-charcoal"
            >
              {item.label}
              <ChevronDown className="h-3.5 w-3.5 opacity-80" />
            </a>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full z-50 w-60 bg-brand-black py-1 shadow-2xl"
                >
                  {services.map((s) => (
                    <a
                      key={s.slug}
                      href={`#${s.slug}`}
                      className="block px-4 py-2 text-[14px] text-white/85 transition hover:bg-brand-yellow hover:text-brand-black"
                    >
                      {s.title}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <a
            key={item.label}
            href={item.href}
            className="bg-brand-black px-4 text-[15px] font-medium uppercase tracking-wide text-white ring-1 ring-white/15 transition hover:bg-brand-charcoal"
          >
            {item.label}
          </a>
        )
      )}
    </nav>
  );
}

function MobilePanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed right-0 top-0 z-[70] flex h-full w-[88%] max-w-[420px] flex-col bg-brand-black text-white lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <Logo size="sm" />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center bg-brand-yellow text-brand-black transition hover:bg-brand-yellow-light"
              >
                <X className="h-5 w-5" strokeWidth={2.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6 fancy-scroll">
              <p className="text-tiny-caps mb-4 text-brand-yellow">Information</p>
              <p className="mb-6 text-[15px] leading-relaxed text-white/75">
                sam cre8 is a print &amp; signage workshop in Accra, Ghana. We
                deliver Large Format Print, Label Print &amp; Cut, CNC Cutting,
                3D Signage and Corporate Branding — from design to delivery.
              </p>

              <nav className="flex flex-col gap-1" aria-label="Mobile primary">
                {nav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="border-b border-white/10 py-3 text-[16px] font-medium uppercase tracking-wide text-white transition hover:text-brand-yellow"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <p className="text-tiny-caps mt-8 mb-3 text-brand-yellow">Our Services</p>
              <ul className="grid grid-cols-2 gap-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`#${s.slug}`}
                      onClick={onClose}
                      className="block py-1 text-[14px] text-white/80 transition hover:text-brand-yellow"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 px-5 py-5 text-[14px]">
              <p className="mb-2 flex items-start gap-2 text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                {contact.address}
              </p>
              <p className="mb-2 flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4 text-brand-yellow" />
                <span className="flex flex-col">
                  <a href={`tel:${contact.phoneIntl}`}>{contact.phone}</a>
                  <a href={`tel:${contact.phone2Intl}`} className="text-white/70">
                    {contact.phone2}
                  </a>
                </span>
              </p>
              <p className="mb-3 flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4 text-brand-yellow" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <SocialIcons />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <TopBar />
      <div
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-soft" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4">
          <a href="#home" aria-label="sam cre8 home" className="py-2">
            <Logo size="md" />
          </a>

          <DesktopMenu />

          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              className="hidden h-10 w-10 items-center justify-center bg-brand-black text-white transition hover:bg-brand-charcoal md:flex"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 items-center justify-center gap-1.5 bg-brand-yellow px-3 text-brand-black transition hover:bg-brand-yellow-light lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={2.5} />
              <span className="font-button text-[13px] font-bold uppercase">Menu</span>
            </button>
          </div>
        </div>
      </div>
      <MobilePanel open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

export default Header;
