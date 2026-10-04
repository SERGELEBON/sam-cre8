"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle, X, Send } from "lucide-react";
import { contact } from "@/data/site";

/** Floating WhatsApp button (bottom-left) with pulse + expandable chat card. */
export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    "Hello sam cre8, I need a quote"
  )}`;

  return (
    <>
      {/* Chat card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 left-4 z-50 w-[300px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-lg bg-white shadow-2xl ring-1 ring-black/10"
          >
            {/* header */}
            <div className="flex items-center gap-3 bg-brand-whatsapp px-3 py-3 text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <span className="font-display text-[11px] leading-none text-white">cre8</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">sam cre8</p>
                <p className="text-[11px] leading-tight text-white/85">
                  Typically replies within minutes
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded p-1 hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {/* body */}
            <div className="bg-[#E5DDD5] px-3 py-4">
              <div className="relative max-w-[85%] rounded-lg rounded-tl-none bg-white p-2.5 text-[13px] text-gray-800 shadow">
                <p className="mb-1 font-semibold text-brand-magenta">sam cre8</p>
                Hello 👋 How can we help with your sign?
                <span className="absolute left-0 top-0 -ml-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
              </div>
            </div>
            {/* CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-whatsapp px-3 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              <Send className="h-4 w-4" />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating round button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with us on WhatsApp"
        title="Chat with us"
        className="group fixed bottom-5 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-whatsapp text-white shadow-lg wa-pulse transition hover:scale-105"
      >
        {/* WhatsApp glyph */}
        <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white" aria-hidden="true">
          <path d="M16.04 4C9.93 4 5 8.93 5 15.04c0 2.13.6 4.1 1.64 5.78L4 28l7.36-1.93a11 11 0 0 0 4.68 1.04h.01c6.11 0 11.04-4.93 11.04-11.04C27.09 8.93 22.15 4 16.04 4zm0 1.5c5.28 0 9.55 4.27 9.55 9.54 0 5.28-4.27 9.55-9.55 9.55a9.5 9.5 0 0 1-4.85-1.33l-.35-.2-4.37 1.15 1.17-4.26-.23-.36a9.5 9.5 0 0 1-1.46-5.05c0-5.27 4.27-9.54 9.54-9.54zm-3.13 4.7c-.18 0-.47.06-.72.33-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.12 2.81.14.18 1.92 2.93 4.66 3.99 2.3.9 2.77.72 3.27.68.5-.05 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.52-.32-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.13-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47l-.55-.01z"/>
        </svg>
      </button>
    </>
  );
}

/** Back-to-top square (yellow, bottom-right). */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center bg-brand-yellow text-brand-black shadow-lg transition hover:bg-brand-yellow-light"
        >
          <ArrowUp className="h-6 w-6" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/** Tiny inline WhatsApp icon link used in header/footer. */
export function WhatsAppIconLink({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.04 4C9.93 4 5 8.93 5 15.04c0 2.13.6 4.1 1.64 5.78L4 28l7.36-1.93a11 11 0 0 0 4.68 1.04h.01c6.11 0 11.04-4.93 11.04-11.04C27.09 8.93 22.15 4 16.04 4zm0 1.5c5.28 0 9.55 4.27 9.55 9.54 0 5.28-4.27 9.55-9.55 9.55a9.5 9.5 0 0 1-4.85-1.33l-.35-.2-4.37 1.15 1.17-4.26-.23-.36a9.5 9.5 0 0 1-1.46-5.05c0-5.27 4.27-9.54 9.54-9.54z"
      />
    </svg>
  );
}

/** Reusable WhatsApp circular icon button. */
export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.04 4C9.93 4 5 8.93 5 15.04c0 2.13.6 4.1 1.64 5.78L4 28l7.36-1.93a11 11 0 0 0 4.68 1.04h.01c6.11 0 11.04-4.93 11.04-11.04C27.09 8.93 22.15 4 16.04 4zm-3.13 8.2c-.18 0-.47.06-.72.33-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.12 2.81.14.18 1.92 2.93 4.66 3.99 2.3.9 2.77.72 3.27.68.5-.05 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.52-.32-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.13-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47l-.55-.01z"
      />
    </svg>
  );
}

const FloatingButtons = { WhatsAppButton, BackToTop, WhatsAppIcon, WhatsAppIconLink };
export default FloatingButtons;
