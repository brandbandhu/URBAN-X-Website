import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { PageBanner } from "@/components/site/PageBanner";
import { urbanxBrand, urbanxContact, royalFoodsContact } from "@/lib/siteContent";
import { Check, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import type { FormEvent } from "react";
import aboutImg from "@/assets/about-urbanx.jpg";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const mapQuery = encodeURIComponent(urbanxContact.office);
  const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&z=17&output=embed`;
  const mapSearchHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) nextErrors.name = "Name is required";
    if (!/^[+\d\s()-]{7,20}$/.test(form.phone)) nextErrors.phone = "Valid phone required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Valid email required";
    if (!form.service) nextErrors.service = "Please select a service";
    if (!form.message.trim() || form.message.length > 1000) nextErrors.message = "Message required";
    return nextErrors;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    }
  };

  const inputClass =
    "w-full rounded-md border border-input bg-background px-4 py-3 text-foreground transition focus:outline-none focus:ring-2 focus:ring-gold";

  return (
    <SiteLayout>
      <PageBanner
        title="Contact Urbanx"
        subtitle="Tell us what you need - housing, food, interiors, cleaning or project support."
        crumbs={[{ label: "Contact" }]}
        image={aboutImg}
      />

      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Reach Us</div>
              <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-4xl">
                {urbanxBrand.tagline}
              </h2>
              <p className="mt-8 text-muted-foreground">
                Urbanx is here to help with everything from city living and interiors to food services and project work. Reach out and we will route you to the right team.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Urbanx Office",
                  lines: [urbanxContact.office, urbanxContact.highway],
                },
                {
                  icon: Phone,
                  title: "Phone",
                  lines: [urbanxContact.phoneDisplay],
                  href: urbanxContact.phoneHref,
                },
                {
                  icon: Mail,
                  title: "Email",
                  lines: [urbanxContact.email],
                  href: urbanxContact.emailHref,
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  lines: ["Chat with us instantly"],
                  href: urbanxContact.whatsappHref,
                },
              ].map((item) => {
                const content = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-gold">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{item.title}</div>
                      {item.lines.map((line) => (
                        <div key={line} className="text-sm text-muted-foreground">
                          {line}
                        </div>
                      ))}
                    </div>
                  </>
                );

                if (!item.href) {
                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-xl border border-transparent bg-secondary p-5 transition-all hover:border-gold hover:bg-card hover:shadow-card-luxe"
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex gap-4 rounded-xl border border-transparent bg-secondary p-5 transition-all hover:border-gold hover:bg-card hover:shadow-card-luxe"
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Royal Foods</div>
              <div className="text-lg font-bold text-primary">Institutional catering contact</div>
              <p className="mt-3 text-sm text-muted-foreground">{royalFoodsContact.venue}</p>
              <p className="mt-2 text-sm text-muted-foreground">Director: {royalFoodsContact.director}</p>
              <div className="mt-4 space-y-2 text-sm">
                {royalFoodsContact.phones.map((phone) => (
                  <div key={phone} className="text-primary">{phone}</div>
                ))}
                <a href={royalFoodsContact.emailHref} className="inline-flex items-center gap-2 font-semibold text-primary hover:text-gold">
                  <Mail className="h-4 w-4" />
                  {royalFoodsContact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-6 lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-luxe md:p-10">
              {sent ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-primary">Thank you!</h3>
                  <p className="mb-6 text-muted-foreground">We have received your enquiry and will get back within 24 hours.</p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="rounded-md bg-primary px-5 py-2.5 text-primary-foreground transition-colors hover:bg-navy"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <h3 className="mb-2 text-2xl font-bold text-primary">Enquiry Form</h3>
                  <p className="text-sm text-muted-foreground">
                    Tell us the service you need and we will connect you with the right Urbanx team.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name *</label>
                      <input className={inputClass} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} maxLength={100} />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone *</label>
                      <input className={inputClass} value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} maxLength={20} />
                      {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email *</label>
                    <input
                      type="email"
                      className={inputClass}
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      maxLength={255}
                    />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service Required *</label>
                    <select className={inputClass} value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })}>
                      <option value="">Select a service</option>
                      <option>Smart Housing & Real Estate Solutions</option>
                      <option>Food Delivery Services</option>
                      <option>Interior Experience for All Places</option>
                      <option>Events & Management</option>
                      <option>Construction & Contracting Services</option>
                      <option>Housekeeping Services</option>
                      <option>Gardening Services</option>
                      <option>Landscaping & Outdoor Solutions</option>
                      <option>IT Solutions</option>
                      <option>Royal Foods - Institutional Catering</option>
                      <option>General Enquiry</option>
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message *</label>
                    <textarea
                      rows={5}
                      className={inputClass}
                      value={form.message}
                      onChange={(event) => setForm({ ...form, message: event.target.value })}
                      maxLength={1000}
                      placeholder="Share your location, quantity, timeline, room count, menu needs or any other detail."
                    />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3.5 font-semibold text-primary hover-lift"
                  >
                    Send Enquiry <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="flex min-h-[320px] flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-luxe">
              <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Location</div>
                  <h3 className="mt-1 text-lg font-bold text-primary">{urbanxContact.office}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{urbanxContact.highway}</p>
                </div>
                <a
                  href={mapSearchHref}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy"
                >
                  Open Map
                </a>
              </div>
              <div className="relative min-h-[260px] flex-1">
                <iframe
                  title="Urbanx location map"
                  src={mapEmbedSrc}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
