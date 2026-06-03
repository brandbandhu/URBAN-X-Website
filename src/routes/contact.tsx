import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { PageBanner } from "@/components/site/PageBanner";
import { Phone, Mail, MapPin, Send, MessageCircle, Check } from "lucide-react";
import aboutImg from "@/assets/about-urbanx.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact URBAN-X | Get in Touch" },
      { name: "description", content: "Contact URBAN-X for cleaning, gardening, construction rental and premium marble furnishing services." },
      { property: "og:title", content: "Contact URBAN-X" },
      { property: "og:description", content: "Talk to our team — one call connects you to all three companies." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) e.name = "Name is required";
    if (!/^[+\d\s()-]{7,20}$/.test(form.phone)) e.phone = "Valid phone required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.service) e.service = "Please select a service";
    if (!form.message.trim() || form.message.length > 1000) e.message = "Message required";
    return e;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    }
  };

  const input = "w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold transition";

  return (
    <SiteLayout>
      <PageBanner
        title="Get in Touch"
        subtitle="Tell us about your project — we'll respond within 24 hours with a personalised quote."
        crumbs={[{ label: "Contact" }]}
        image={aboutImg}
      />

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">Reach Us</div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 gold-underline">Let's start the conversation</h2>
              <p className="text-muted-foreground mt-8">
                Whether it's housekeeping, equipment rental or premium marble interiors — our team is one call, message or email away.
              </p>
            </div>

            {[
              { icon: MapPin, t: "Visit Us", v: "URBAN-X Headquarters, India" },
              { icon: Phone, t: "Call Us", v: "+91 99999 99999", href: "tel:+919999999999" },
              { icon: Mail, t: "Email Us", v: "info@urban-x.com", href: "mailto:info@urban-x.com" },
              { icon: MessageCircle, t: "WhatsApp", v: "Chat with us instantly", href: "https://wa.me/919999999999" },
            ].map((c) => (
              <a
                key={c.t}
                href={c.href || "#"}
                className="flex gap-4 p-5 rounded-xl bg-secondary hover:bg-card hover:shadow-card-luxe transition-all border border-transparent hover:border-gold"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">{c.t}</div>
                  <div className="text-sm text-muted-foreground">{c.v}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-card p-8 md:p-10 rounded-2xl shadow-luxe border border-border">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gradient-gold mx-auto flex items-center justify-center mb-5">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Thank you!</h3>
                <p className="text-muted-foreground mb-6">We've received your enquiry and will get back within 24 hours.</p>
                <button onClick={() => setSent(false)} className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-navy">Send another</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Enquiry Form</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Name *</label>
                    <input className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Phone *</label>
                    <input className={input} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Email *</label>
                  <input type="email" className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Service Required *</label>
                  <select className={input} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                    <option value="">Select a service</option>
                    <option>New Royal Services — Housekeeping</option>
                    <option>New Royal Services — Gardening & Landscaping</option>
                    <option>Aishwarya Rental — Equipment Rental</option>
                    <option>Aishwarya Rental — Scaffolding & Tools</option>
                    <option>URBAN-DE — Marble Furniture</option>
                    <option>URBAN-DE — Curtains & Furnishing</option>
                    <option>General Enquiry</option>
                  </select>
                  {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Message *</label>
                  <textarea rows={5} className={input} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full px-6 py-3.5 bg-gradient-gold text-primary font-semibold rounded-md hover-lift inline-flex items-center justify-center gap-2">
                  Send Enquiry <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
