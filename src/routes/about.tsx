import { Link } from "@/components/site/AppLink";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/Layout";
import {
  urbanxBrand,
  urbanxContact,
  urbanxMetrics,
  urbanxProjectHighlights,
  urbanxServiceAreas,
  urbanxVision,
  urbanxMission,
  urbanxWhyChoose,
} from "@/lib/siteContent";
import { ArrowRight, Check, Mail, Phone, Sparkles, Star } from "lucide-react";
import aboutImg from "@/assets/about-urbanx.jpg";
import hero1 from "@/assets/hero-1.jpg";

const focusCards = urbanxServiceAreas.slice(0, 4);

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="About Urbanx"
        subtitle={urbanxBrand.tagline}
        crumbs={[{ label: "About" }]}
        image={aboutImg}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Story</div>
            <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-5xl">
              Urbanx is built to simplify everyday living.
            </h2>
            <p className="mt-8 mb-5 text-lg text-muted-foreground">
              Urbanx is an emerging destination in Pune that connects the services people need most under one platform. We help customers manage homes, food, interiors, projects and daily operations with more confidence and less friction.
            </p>
            <p className="mb-5 leading-relaxed text-foreground/80">
              The goal is simple: make life easier, faster and more convenient by combining real estate support, architectural and interior expertise, landscaping, event management, food services, housekeeping, gardening and IT solutions in one ecosystem.
            </p>
            <p className="leading-relaxed text-foreground/80">
              That means one trusted partner for discovery, planning, delivery and ongoing support across every stage of modern urban living.
            </p>
          </div>

          <div className="relative">
            <img src={hero1} alt="Urbanx team and workspace" className="h-[520px] w-full rounded-2xl object-cover shadow-luxe" loading="lazy" />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-gradient-gold p-6 text-primary shadow-luxe md:block">
              <div className="text-sm font-semibold uppercase tracking-[0.24em]">Based in Pune</div>
              <div className="mt-2 text-2xl font-bold">{urbanxContact.office}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">What We Connect</div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">A complete ecosystem for daily life</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {focusCards.map((service) => (
              <div key={service.title} className="rounded-2xl border border-border bg-card p-7 shadow-card-luxe hover-lift">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-8 lg:grid-cols-4">
          {urbanxMetrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl bg-card p-8 text-center shadow-card-luxe">
              <div className="text-4xl font-bold text-primary md:text-5xl">{metric.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Vision</div>
            <h3 className="mb-4 text-3xl font-bold">A platform that simplifies urban living</h3>
            <p className="leading-relaxed text-white/80">{urbanxVision}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Mission</div>
            <h3 className="mb-4 text-3xl font-bold">Reliable services, delivered with trust</h3>
            <p className="leading-relaxed text-white/80">{urbanxMission}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Urbanx</div>
            <h2 className="gold-underline mb-8 text-3xl font-bold text-primary md:text-5xl">The Urbanx advantage</h2>
            <div className="space-y-4">
              {urbanxWhyChoose.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-secondary p-5">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-card p-8 shadow-luxe">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Projects Handled</div>
            <h3 className="mb-5 text-3xl font-bold text-primary">Work that reflects the Urbanx standard</h3>
            <div className="space-y-4">
              {urbanxProjectHighlights.map((project) => (
                <div key={project} className="flex items-center gap-3 rounded-xl border border-border bg-secondary p-4">
                  <Sparkles className="h-5 w-5 text-gold" />
                  <span className="font-semibold text-primary">{project}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-primary p-6 text-white">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Leadership</div>
              <p className="leading-relaxed text-white/80">
                {urbanxContact.director} leads the company from {urbanxContact.office}, with a focus on reliability, service quality and long-term relationships.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a href={urbanxContact.phoneHref} className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 hover:bg-white/10">
                  <Phone className="h-4 w-4" />
                  {urbanxContact.phoneDisplay}
                </a>
                <a href={urbanxContact.emailHref} className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 hover:bg-white/10">
                  <Mail className="h-4 w-4" />
                  {urbanxContact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-navy to-primary p-10 text-center text-white shadow-luxe md:p-16">
            <div className="mx-auto max-w-3xl">
              <Star className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">One platform. Multiple services. A better daily experience.</h2>
              <p className="mb-8 text-white/80">
                From housing and food to interiors, events, cleaning and support services, Urbanx is designed to keep everything connected.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary hover-lift">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
