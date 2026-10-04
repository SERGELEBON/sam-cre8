"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Check, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { services, contact } from "@/data/site";

/* ---------- 11. Quote form ---------- */
export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    service: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const waText = encodeURIComponent(
    `Hello sam cre8,\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nSubject: ${form.subject}\nMessage: ${form.message}`
  );
  const waLink = `https://wa.me/${contact.whatsapp}?text=${waText}`;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("ok");
      setForm({ name: "", phone: "", email: "", company: "", subject: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full border border-gray-300 bg-white px-3 py-2.5 text-[15px] text-brand-black outline-none transition focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/30";
  const labelCls = "mb-1 block text-[13px] font-semibold uppercase tracking-wide text-brand-charcoal";

  return (
    <section id="quote" className="bg-brand-grey-bg px-4 py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 lg:grid-cols-[70%_30%]">
        {/* Form */}
        <div className="bg-white p-6 shadow-soft sm:p-8">
          <h2 className="mb-6 text-[32px] font-semibold sm:text-[40px]">
            Request a Quote
          </h2>

          {status === "ok" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-3 border border-green-200 bg-green-50 p-4 text-[15px] text-green-800"
            >
              <Check className="h-5 w-5 text-green-600" />
              <span>Thank you! Your request has been received. We&apos;ll reply shortly.</span>
            </motion.div>
          )}
          {status === "error" && (
            <div className="mb-6 border border-red-200 bg-red-50 p-4 text-[15px] text-red-800">
              Something went wrong. Please use the WhatsApp button or call us.
            </div>
          )}

          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="name">Full Name *</label>
              <input id="name" required value={form.name} onChange={set("name")} className={inputCls} placeholder="Your full name" />
            </div>
            <div>
              <label className={labelCls} htmlFor="phone">Phone Number *</label>
              <input id="phone" required value={form.phone} onChange={set("phone")} className={inputCls} placeholder="024 000 0000" />
            </div>
            <div>
              <label className={labelCls} htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="you@email.com" />
            </div>
            <div>
              <label className={labelCls} htmlFor="company">Company</label>
              <input id="company" value={form.company} onChange={set("company")} className={inputCls} placeholder="Your business" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="subject">Subject</label>
              <input id="subject" value={form.subject} onChange={set("subject")} className={inputCls} placeholder="What do you need?" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="service">Choose a Service</label>
              <select id="service" value={form.service} onChange={set("service")} className={inputCls}>
                <option value="">— Select a service —</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="message">Message *</label>
              <textarea id="message" required rows={5} value={form.message} onChange={set("message")} className={inputCls} placeholder="Tell us about your project, sizes, deadline, location…" />
            </div>
            <div className="flex flex-wrap gap-3 sm:col-span-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 bg-brand-magenta px-9 py-3 font-button text-[16px] font-bold uppercase text-brand-black transition hover:brightness-95 disabled:opacity-60"
              >
                {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-4 w-4" />}
                {status === "loading" ? "Sending…" : "Send"}
              </button>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-whatsapp px-6 py-3 font-button text-[15px] font-bold uppercase text-white transition hover:brightness-95"
              >
                <MessageCircle className="h-4 w-4" />
                Send via WhatsApp
              </a>
            </div>
          </form>
        </div>

        {/* Black side box */}
        <div className="bg-brand-black p-6 text-white sm:p-8">
          <h3 className="mb-3 font-display text-[40px] leading-[0.95] sm:text-[50px]">
            Request<br />A Quote
          </h3>
          <p className="mb-6 text-[15px] leading-relaxed text-white/70">
            Tell us about your project and we&apos;ll prepare a clear, no-obligation
            quote — usually within the same day.
          </p>
          <ul className="space-y-2 text-[15px] text-white/85">
            {services.map((s) => (
              <li key={s.slug} className="flex items-start gap-2">
                <span className="text-brand-yellow">›</span>
                {s.title}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-[14px]">
            <p className="flex items-center gap-2 text-white/80">
              <MapPin className="h-4 w-4 text-brand-yellow" /> {contact.address}
            </p>
            <p className="flex items-center gap-2 text-white/80">
              <Phone className="h-4 w-4 text-brand-yellow" />
              <a href={`tel:${contact.phoneIntl}`}>{contact.phone}</a>
            </p>
            <p className="flex items-center gap-2 text-white/80">
              <Mail className="h-4 w-4 text-brand-yellow" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services detail blocks (single-page inner content) ---------- */
export function ServicesDetail() {
  return (
    <section id="services" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 text-center">
          <p className="text-tiny-caps mb-2 text-brand-text">What we do</p>
          <h2 className="text-[36px] font-semibold sm:text-[60px]">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="border-t-4 border-brand-yellow bg-white p-6 shadow-soft"
            >
              <div className="mb-4 overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="aspect-[16/9] w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <h3 className="mb-2 text-[24px] font-semibold">{s.title}</h3>
              <p className="mb-4 text-[16px] leading-relaxed text-brand-text">{s.blurb}</p>
              <ul className="mb-4 grid grid-cols-1 gap-1.5 text-[15px] text-brand-charcoal sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-magenta" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {s.materials.map((m) => (
                  <span key={m} className="bg-brand-grey-bg px-2 py-1 text-[12px] font-medium uppercase text-brand-charcoal">
                    {m}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                {s.seo.map((qa) => (
                  <div key={qa.h3} className="border-l-2 border-brand-yellow pl-3">
                    <p className="font-button text-[15px] font-bold text-brand-charcoal">{qa.h3}</p>
                    <p className="text-[14px] leading-relaxed text-brand-text">{qa.body}</p>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  `Hello sam cre8, I'd like a quote for ${s.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-brand-magenta px-6 py-2.5 font-button text-[14px] font-bold uppercase text-brand-black transition hover:brightness-95"
              >
                <MessageCircle className="h-4 w-4" /> Get a quote on WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
