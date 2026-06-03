import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageBanner } from "@/components/site/PageBanner";
import { Award, Eye, Target, Heart, Check } from "lucide-react";
import aboutImg from "@/assets/about-urbanx.jpg";
import hero1 from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About URBAN-X | Group of Companies" },
      { name: "description", content: "Discover URBAN-X — the parent brand behind New Royal Services, Aishwarya Rental and URBAN-DE." },
      { property: "og:title", content: "About URBAN-X" },
      { property: "og:description", content: "One brand. Three companies. Decades of trusted service." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="About URBAN-X"
        subtitle="A diversified group built on trust, craftsmanship and uncompromising service quality."
        crumbs={[{ label: "About" }]}
        image={aboutImg}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">Our Story</div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 gold-underline">One brand. Three specialised companies.</h2>
            <p className="text-lg text-muted-foreground mb-5 mt-8">
              URBAN-X was founded with a simple belief — that excellence in service is a craft. Today, the URBAN-X Group brings together three specialised brands serving very different industries, united by one shared standard of quality.
            </p>
            <p className="text-foreground/80 mb-3">
              <strong className="text-primary">New Royal Services</strong> delivers premium housekeeping and gardening for residences, societies, hotels, offices and industries.
            </p>
            <p className="text-foreground/80 mb-3">
              <strong className="text-primary">Aishwarya Rental</strong> powers construction sites with reliable equipment, scaffolding, tools and project support.
            </p>
            <p className="text-foreground/80">
              <strong className="text-primary">URBAN-DE</strong> crafts bespoke marble furniture and premium interior furnishing for spaces that deserve more.
            </p>
          </div>
          <img src={hero1} alt="URBAN-X team" className="rounded-2xl shadow-luxe w-full h-[520px] object-cover" loading="lazy" />
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, t: "Our Mission", d: "Deliver exceptional service across every industry we serve — without compromise." },
            { icon: Eye, t: "Our Vision", d: "Be the most trusted multi-service group in the region, defined by quality and reliability." },
            { icon: Heart, t: "Our Values", d: "Integrity, accountability, craftsmanship and a relentless focus on client outcomes." },
          ].map((v) => (
            <div key={v.t} className="bg-card p-8 rounded-xl shadow-card-luxe hover-lift">
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-5">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-2">{v.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">What sets us apart</div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">The URBAN-X advantage</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              "Three specialised businesses, one single point of accountability",
              "Trained, uniformed and background-verified field teams",
              "Modern equipment and standardised quality processes",
              "Transparent pricing and detailed service agreements",
              "Pan-region reach across residential, commercial & industrial clients",
              "Dedicated client managers and 24/7 support response",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3 p-5 rounded-xl bg-secondary">
                <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-foreground/90">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container-x text-center">
          <Award className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">15+ years of trusted service excellence</h2>
          <p className="text-white/80 max-w-xl mx-auto">From a single service to a multi-company group — clients stay with URBAN-X because we deliver, every single time.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
