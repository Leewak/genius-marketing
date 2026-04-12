"use client";

import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const contactInfo = [
  {
    label: "WhatsApp",
    value: "+212 675 754 651",
    href: "https://wa.me/212675754651",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "contact@geniusmarketing.ma",
    href: "mailto:contact@geniusmarketing.ma",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "Adresse",
    value: "Marrakech, Maroc",
    href: "https://maps.google.com/?q=Marrakech,Morocco",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

const serviceOptions = [
  "Création Site Web",
  "SEO & Marketing Digital",
  "Design Web & UX",
  "Stratégie Marketing",
  "Autre",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="bg-brand-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Info */}
          <div className="lg:col-span-2">
            <AnimateOnScroll>
              <h2 className="text-2xl font-bold text-brand-offwhite mb-8"
                style={{ fontFamily: "var(--font-syne)" }}>
                Nos coordonnées
              </h2>
            </AnimateOnScroll>

            <div className="space-y-4 mb-12">
              {contactInfo.map((info, i) => (
                <AnimateOnScroll key={info.label} delay={i * 0.08}>
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-brand-border bg-brand-black hover:border-brand-gold/30 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-brand-gray text-xs mb-0.5">{info.label}</div>
                      <div className="text-brand-offwhite text-sm font-medium group-hover:text-brand-gold transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.3}>
              <div className="p-6 rounded-2xl border border-brand-gold/20 bg-brand-gold/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-brand-gold text-sm font-medium"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    Disponible maintenant
                  </span>
                </div>
                <p className="text-brand-gray text-sm leading-relaxed">
                  Notre équipe est disponible du lundi au vendredi, 9h–18h.
                  Réponse WhatsApp en moins d&apos;une heure en moyenne.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <AnimateOnScroll delay={0.1}>
              <div className="p-8 lg:p-10 rounded-2xl border border-brand-border bg-brand-black">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3 className="text-brand-offwhite text-2xl font-bold mb-3"
                      style={{ fontFamily: "var(--font-syne)" }}>
                      Message envoyé !
                    </h3>
                    <p className="text-brand-gray mb-6">
                      Merci pour votre message. Nous vous répondrons dans les 24 heures.
                    </p>
                    <a
                      href="https://wa.me/212675754651"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-gold text-sm font-medium hover:underline"
                    >
                      Ou discutez directement sur WhatsApp →
                    </a>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-brand-offwhite mb-8"
                      style={{ fontFamily: "var(--font-syne)" }}>
                      Demander un devis gratuit
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-brand-offwhite/70 text-xs font-medium mb-2 uppercase tracking-wide">
                            Nom complet *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Votre nom"
                            className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-brand-offwhite text-sm placeholder-brand-gray focus:outline-none focus:border-brand-gold/50 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-brand-offwhite/70 text-xs font-medium mb-2 uppercase tracking-wide">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="votre@email.com"
                            className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-brand-offwhite text-sm placeholder-brand-gray focus:outline-none focus:border-brand-gold/50 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-brand-offwhite/70 text-xs font-medium mb-2 uppercase tracking-wide">
                          Téléphone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+212 6XX XXX XXX"
                          className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-brand-offwhite text-sm placeholder-brand-gray focus:outline-none focus:border-brand-gold/50 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-brand-offwhite/70 text-xs font-medium mb-2 uppercase tracking-wide">
                          Service souhaité
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-brand-offwhite text-sm focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none"
                        >
                          <option value="" className="bg-brand-dark">Choisir un service...</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s} className="bg-brand-dark">{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-brand-offwhite/70 text-xs font-medium mb-2 uppercase tracking-wide">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Décrivez votre projet, vos objectifs et votre budget approximatif..."
                          className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-brand-offwhite text-sm placeholder-brand-gray focus:outline-none focus:border-brand-gold/50 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 bg-brand-gold text-brand-black font-semibold py-4 rounded-xl hover:bg-brand-gold-light transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-brand-black/30 border-t-brand-black rounded-full animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer ma demande
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </>
                        )}
                      </button>

                      <p className="text-center text-brand-gray text-xs">
                        Ou contactez-nous directement sur{" "}
                        <a href="https://wa.me/212675754651" target="_blank" rel="noopener noreferrer"
                          className="text-brand-gold hover:underline">
                          WhatsApp
                        </a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
