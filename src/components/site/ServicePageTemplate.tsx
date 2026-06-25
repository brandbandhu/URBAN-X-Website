import { Link } from "@/components/site/AppLink";
import { PageBanner } from "./PageBanner";
import { useRef, useState } from "react";
import { Check, ArrowRight, Sparkles, Send, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { FormEvent } from "react";

export interface ServicePageData {
  companyName: string;
  tagline: string;
  banner: string;
  intro: string;
  about: string[];
  services: { icon: LucideIcon; title: string; desc: string }[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  gallery: string[];
  accentLabel: string;
}

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const enquiryRef = useRef<HTMLElement>(null);
  const defaultService = data.services[0]?.title ?? data.companyName;
  const [selectedService, setSelectedService] = useState(defaultService);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputClass =
    "w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold transition";

  const selectService = (service: string) => {
    setSent(false);
    setSelectedService(service);
    enquiryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) nextErrors.name = "Name is required";
    if (!/^[+\d\s()-]{7,20}$/.test(form.phone)) nextErrors.phone = "Valid phone required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Valid email required";
    if (!form.message.trim() || form.message.length > 1000) nextErrors.message = "Message required";
    return nextErrors;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setForm({ name: "", phone: "", email: "", message: "" });
    }
  };

  return (
    <>
      <PageBanner
        title={data.companyName}
        subtitle={data.tagline}
        crumbs={[{ label: "Companies", to: "/services" }, { label: data.companyName }]}
        image={data.banner}
      />

      {/* About */}
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> {data.accentLabel}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 gold-underline">
              About {data.companyName}
            </h2>
            <p className="text-lg text-muted-foreground mb-4 mt-8">{data.intro}</p>
            {data.about.map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </div>
          <div className="relative">
            <img
              src={data.banner}
              alt={data.companyName}
              className="h-[280px] w-full rounded-xl object-cover shadow-luxe sm:h-[360px] md:h-[420px] lg:h-[480px]"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-gold p-6 rounded-xl shadow-luxe text-primary max-w-[220px] hidden md:block">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-xs uppercase tracking-wider mt-1">
                Years of trusted service excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/40">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Our Service Portfolio</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((s) => (
              <div
                key={s.title}
                className="group bg-card rounded-xl p-7 border border-border hover-lift"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <button
                  type="button"
                  onClick={() => selectService(s.title)}
                  className="mt-5 text-sm font-semibold text-gold inline-flex items-center gap-1 hover:text-primary transition-colors"
                >
                  Enquire <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-14">
          <div>
            <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">
              Benefits
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 gold-underline">
              Why clients choose us
            </h2>
            <ul className="space-y-4 mt-10">
              {data.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy rounded-2xl p-10 text-white shadow-luxe relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gold/20 blur-3xl" />
            <h3 className="font-display text-3xl mb-2 relative">Our Process</h3>
            <p className="text-white/70 mb-8 relative">Simple, transparent, and result-driven.</p>
            <div className="space-y-5 relative">
              {data.process.map((p) => (
                <div key={p.step} className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-gold text-primary font-bold flex items-center justify-center shrink-0">
                    {p.step}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{p.title}</div>
                    <div className="text-sm text-white/70">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-secondary/40">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">
              Gallery
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Our Work in Action</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.gallery.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-card-luxe"
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section ref={enquiryRef} className="py-20 scroll-mt-24">
        <div className="container-x grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">
              Service Enquiry
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 gold-underline">
              Request a quote for {data.companyName}
            </h2>
            <p className="text-muted-foreground mt-8 leading-relaxed">
              Choose the exact service you need, share your site or project details, and our team
              will respond with the next steps.
            </p>
            <div className="mt-8 space-y-3">
              {data.services.map((service) => (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => selectService(service.title)}
                  className={`w-full text-left px-4 py-3 rounded-md border transition-colors ${
                    selectedService === service.title
                      ? "border-gold bg-gold/10 text-primary"
                      : "border-border bg-secondary hover:border-gold hover:bg-card"
                  }`}
                >
                  <span className="font-semibold">{service.title}</span>
                  <span className="block text-xs text-muted-foreground mt-1">{service.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-card p-8 md:p-10 rounded-2xl shadow-luxe border border-border">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gradient-gold mx-auto flex items-center justify-center mb-5">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Thank you!</h3>
                <p className="text-muted-foreground mb-6">
                  We've received your enquiry and will get back within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-navy transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary">Enquiry Form</h3>
                  <div className="mt-3 rounded-md border border-gold/40 bg-gold/10 px-4 py-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Service
                    </div>
                    <div className="font-semibold text-primary">
                      {data.companyName} - {selectedService}
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                      Name *
                    </label>
                    <input
                      className={inputClass}
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      maxLength={100}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                      Phone *
                    </label>
                    <input
                      className={inputClass}
                      value={form.phone}
                      onChange={(event) => setForm({ ...form, phone: event.target.value })}
                      maxLength={20}
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    className={inputClass}
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    maxLength={255}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    className={inputClass}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    maxLength={1000}
                    placeholder="Share location, quantity, preferred dates, area size or any specific requirement."
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1">{errors.message}</p>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-gradient-gold text-primary font-semibold rounded-md hover-lift inline-flex items-center justify-center gap-2"
                  >
                    Send Enquiry <Send className="w-4 h-4" />
                  </button>
                  <a
                    href="https://wa.me/919999999999"
                    className="px-6 py-3.5 border border-border text-primary font-semibold rounded-md hover:border-gold hover:text-gold transition-colors inline-flex items-center justify-center gap-2"
                  >
                    WhatsApp <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/40">
        <div className="container-x">
          <div className="bg-gradient-to-br from-primary to-navy rounded-3xl p-10 md:p-16 text-center text-white shadow-luxe relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.13_78/0.2),transparent_50%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to get started?</h2>
              <p className="mx-auto mb-8 max-w-xl text-white/80">
                Tell us about your project - our team will get back with a personalized quote within
                24 hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 bg-gradient-gold text-primary font-semibold rounded-md hover-lift inline-flex items-center gap-2"
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919999999999"
                  className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
