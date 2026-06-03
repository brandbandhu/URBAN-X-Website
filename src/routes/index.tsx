import { Link } from "@/components/site/AppLink";
import { useEffect, useState } from "react";
import {
  ArrowRight, MessageCircle, Sparkles, Award, Users, Building2, Shield,
  Sprout, Wrench, Sofa, Check, Star, Hotel, Factory, Home as HomeIcon, Briefcase,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import housekeeping from "@/assets/service-housekeeping.jpg";
import gardening from "@/assets/service-gardening.jpg";
import rental from "@/assets/service-rental.jpg";
import marble from "@/assets/service-marble.jpg";
import aboutImg from "@/assets/about-urbanx.jpg";


const slides = [
  {
    img: hero1,
    eyebrow: "URBAN-X GROUP",
    title: "One Brand. Multiple Business Solutions.",
    desc: "Three specialised companies, one trusted promise — service excellence across cleaning, construction rental, and premium interiors.",
  },
  {
    img: hero2,
    eyebrow: "NEW ROYAL SERVICES",
    title: "Housekeeping & Gardening Experts",
    desc: "Residential, commercial, hotel, society and industrial cleaning, with full-spectrum landscaping & garden care.",
  },
  {
    img: hero3,
    eyebrow: "AISHWARYA RENTAL & URBAN-DE",
    title: "Construction Rental & Premium Marble Furnishing",
    desc: "On-time equipment, scaffolding and tool rental — plus bespoke marble sofas, chairs and luxury décor.",
  },
];

export default function HomePage() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <SiteLayout>
      {/* HERO CAROUSEL */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.img} alt="" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_255/0.92)] via-[oklch(0.18_0.05_255/0.7)] to-[oklch(0.18_0.05_255/0.35)]" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center">
          <div className="container-x text-white">
            <div key={active} className="max-w-3xl animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" /> {slides[active].eyebrow}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                {slides[active].title}
              </h1>
              <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-9">{slides[active].desc}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="px-7 py-3.5 bg-gradient-gold text-primary font-semibold rounded-md hover-lift inline-flex items-center gap-2">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="px-7 py-3.5 border-2 border-white/40 text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-colors">
                  Contact Us
                </Link>
                <a href="https://wa.me/919999999999" className="px-7 py-3.5 bg-[#25D366] text-white font-semibold rounded-md hover-lift inline-flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-10 bg-gold" : "w-5 bg-white/40"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative animate-fade-up">
            <img src={aboutImg} alt="URBAN-X headquarters" className="rounded-2xl shadow-luxe w-full h-[520px] object-cover" loading="lazy" />
            <div className="absolute -bottom-8 -right-8 bg-gradient-gold p-7 rounded-2xl shadow-luxe text-primary hidden md:block">
              <div className="text-5xl font-bold">15+</div>
              <div className="text-xs uppercase tracking-wider mt-1 font-semibold">Years of Excellence</div>
            </div>
          </div>
          <div>
            <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">About URBAN-X</div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6 gold-underline">
              A trusted name behind three exceptional brands.
            </h2>
            <p className="text-lg text-muted-foreground mb-5 mt-8">
              URBAN-X is the parent company of three specialised businesses, each leading in its category. From keeping spaces immaculate to powering construction sites and crafting premium marble furnishing — we deliver service that defines standards.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Backed by trained teams, modern processes and uncompromising quality, we serve homes, hotels, societies, offices and industries across the region.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { v: "500+", l: "Happy Clients" },
                { v: "3", l: "Specialised Companies" },
                { v: "24/7", l: "Support" },
              ].map((s) => (
                <div key={s.l} className="text-center p-5 rounded-xl bg-secondary">
                  <div className="text-3xl font-bold text-primary">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THREE COMPANIES */}
      <section className="py-20 bg-secondary/40">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">Our 3 Companies</div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Explore the URBAN-X family</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { to: "/new-royal-services", img: housekeeping, title: "New Royal Services", tag: "Housekeeping & Gardening", icon: Sprout,
                desc: "Trusted cleaning and landscaping for homes, hotels, societies and industries." },
              { to: "/aishwarya-rental", img: rental, title: "Aishwarya Rental", tag: "Construction Equipment", icon: Wrench,
                desc: "Heavy machinery, scaffolding, tools and project rental — when you need it, where you need it." },
              { to: "/urban-de", img: marble, title: "URBAN-DE", tag: "Marble & Furnishing", icon: Sofa,
                desc: "Bespoke marble sofas, pillows, chairs, curtains and luxury interior décor." },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="group block bg-card rounded-2xl overflow-hidden shadow-card-luxe hover-lift">
                <div className="relative h-60 overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute bottom-4 left-5 text-white">
                    <div className="text-xs uppercase tracking-widest text-gold">{c.tag}</div>
                    <div className="text-2xl font-display font-bold">{c.title}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{c.desc}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-gold transition-colors">
                    Discover <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">Why URBAN-X</div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Reasons clients keep coming back</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, t: "Trusted & Insured", d: "Verified teams, transparent processes and fully accountable service delivery." },
              { icon: Award, t: "Premium Quality", d: "We benchmark every job against the highest industry standards." },
              { icon: Users, t: "Trained Professionals", d: "Skilled, uniformed and background-checked staff for every assignment." },
              { icon: Sparkles, t: "End-to-End Solutions", d: "Three companies, one point of contact — saves time and simplifies vendors." },
            ].map((b) => (
              <div key={b.t} className="bg-card border border-border rounded-xl p-7 hover-lift group">
                <div className="w-14 h-14 rounded-xl bg-primary group-hover:bg-gradient-gold flex items-center justify-center mb-5 transition-all">
                  <b.icon className="w-7 h-7 text-gold group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{b.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.78_0.13_78/0.15),transparent_55%)]" />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">Industries We Serve</div>
            <h2 className="text-3xl md:text-5xl font-bold">Tailored solutions across sectors</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: HomeIcon, l: "Residential" },
              { icon: Building2, l: "Commercial" },
              { icon: Hotel, l: "Hotels" },
              { icon: Briefcase, l: "Offices" },
              { icon: Users, l: "Societies" },
              { icon: Factory, l: "Industrial" },
            ].map((i) => (
              <div key={i.l} className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold hover:bg-white/10 transition-all">
                <i.icon className="w-9 h-9 mx-auto text-gold mb-3" />
                <div className="text-sm font-semibold">{i.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">Featured Services</div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary gold-underline">Service highlights</h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-primary hover:text-gold inline-flex items-center gap-2">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: housekeeping, t: "Hotel & Society Cleaning", c: "New Royal Services" },
              { img: gardening, t: "Lawn Care & Landscaping", c: "New Royal Services" },
              { img: rental, t: "Scaffolding & Equipment", c: "Aishwarya Rental" },
              { img: marble, t: "Marble Sofa & Décor", c: "URBAN-DE" },
            ].map((f) => (
              <div key={f.t} className="group rounded-xl overflow-hidden shadow-card-luxe hover-lift bg-card">
                <div className="relative h-52 overflow-hidden">
                  <img src={f.img} alt={f.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-widest text-gold font-semibold">{f.c}</div>
                  <div className="font-bold text-primary mt-1">{f.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / STATS */}
      <section className="py-20 bg-secondary/40">
        <div className="container-x">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { v: "500+", l: "Projects Delivered" },
              { v: "150+", l: "Trusted Partners" },
              { v: "98%", l: "Client Retention" },
              { v: "15+", l: "Years Experience" },
            ].map((s) => (
              <div key={s.l} className="bg-card p-8 rounded-xl shadow-card-luxe">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-1">{s.v}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { n: "Rohan Mehta", r: "Hotel General Manager", t: "URBAN-X handles three of our properties — housekeeping is flawless and the team is always proactive." },
              { n: "Priya Shah", r: "Builder, Aishwarya partner", t: "Aishwarya Rental never lets us down. Equipment is on-site exactly when promised — every single time." },
              { n: "Anita Verma", r: "Interior Designer", t: "URBAN-DE's marble pieces are exquisite. My clients are blown away by the craftsmanship and finish." },
            ].map((tt) => (
              <div key={tt.n} className="bg-card p-7 rounded-xl shadow-card-luxe">
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-foreground/85 leading-relaxed mb-5">"{tt.t}"</p>
                <div>
                  <div className="font-semibold text-primary">{tt.n}</div>
                  <div className="text-xs text-muted-foreground">{tt.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="pb-20">
        <div className="container-x">
          <div className="relative bg-gradient-to-br from-primary via-navy to-primary rounded-3xl p-10 md:p-16 text-white text-center overflow-hidden shadow-luxe">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,oklch(0.78_0.13_78/0.25),transparent_50%)]" />
            <div className="relative max-w-2xl mx-auto">
              <Check className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's build something exceptional together.</h2>
              <p className="text-white/80 mb-8">Whether it's cleaning, equipment rental or premium marble interiors — one call connects you to all three.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="px-7 py-3.5 bg-gradient-gold text-primary font-semibold rounded-md hover-lift inline-flex items-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+919999999999" className="px-7 py-3.5 border-2 border-white/40 text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-colors">
                  Call +91 99999 99999
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
