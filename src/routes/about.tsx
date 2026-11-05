import { Link } from "@/components/site/AppLink";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/Layout";
import { projects } from "@/lib/projects";
import {
  demarvelBrand,
  demarvelContact,
  demarvelServiceAreas,
  demarvelStudio,
  demarvelTeam,
  demarvelVision,
  demarvelMission,
  demarvelWhyChoose,
} from "@/lib/siteContent";
import { ArrowRight, Compass, Mail, Phone, Route, Sparkles, Star } from "lucide-react";
import aboutImg from "@/assets/about-building-enhanced.png";

const focusCards = demarvelServiceAreas.slice(0, 4);
const aboutProjectSlugs = [
  "hungry-scholar",
  "raj-bungalows",
  "aishwarya-realtors",
  "new-royal-services",
  "royal-foods-hospitality-services",
  "guest-house",
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="About De Marvel Infra Solutions"
        subtitle={demarvelBrand.tagline}
        crumbs={[{ label: "About" }]}
        image={aboutImg}
      />

      <section className="py-14 md:py-28">
        <div className="container-x">
          <div className="max-w-4xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Story
            </div>
            <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-5xl">
              Design, infrastructure and execution with one clear point of contact
            </h2>
            <p className="mt-8 mb-5 text-lg text-muted-foreground">
              De Marvel Infra Solutions brings together interior design, architectural planning,
              infrastructure development and landscaping for spaces that need clarity from concept
              through execution.
            </p>
            <p className="mb-5 leading-relaxed text-foreground/80">
              The work is shaped around each client’s brief, combining practical planning,
              thoughtful materials and disciplined execution.
            </p>
            <p className="leading-relaxed text-foreground/80">
              From architectural drawings and interior design to project execution and curated
              design solutions and project execution, De Marvel Infra Solutions brings the complete
              design journey together under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-14 md:py-20">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Architecture & Interior Studio
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              Complete Design, Décor & Execution Solutions
            </h2>
            <p className="mt-5 text-muted-foreground">{demarvelStudio.promise}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {focusCards.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-card-luxe hover-lift"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-white md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Vision & Mission
            </div>
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              The direction behind every De Marvel Infra Solutions service
            </h2>
            <p className="max-w-xl leading-relaxed text-white/75">
              Every vertical works toward the same promise: simplify daily life through reliable,
              connected and professionally managed services.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            <div className="grid gap-5 py-7 md:grid-cols-[4rem_1fr] md:gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold">
                <Compass className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Vision
                </div>
                <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                  A platform that simplifies urban living
                </h3>
                <p className="leading-relaxed text-white/75">{demarvelVision}</p>
              </div>
            </div>

            <div className="grid gap-5 py-7 md:grid-cols-[4rem_1fr] md:gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                <Route className="h-7 w-7 text-gold" />
              </div>
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Mission
                </div>
                <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                  Reliable services, delivered with trust
                </h3>
                <p className="leading-relaxed text-white/75">{demarvelMission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Why De Marvel Infra Solutions
            </div>
            <h2 className="gold-underline mb-8 text-3xl font-bold text-primary md:text-5xl">
              The De Marvel Infra Solutions advantage
            </h2>
            <div className="space-y-4">
              {demarvelWhyChoose.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-3 rounded-xl bg-secondary p-5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
                      <Icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-foreground/90">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl bg-card p-6 shadow-luxe sm:p-8">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Projects Handled
            </div>
            <h3 className="mb-5 text-3xl font-bold text-primary">
              Work that reflects the De Marvel Infra Solutions standard
            </h3>
            <div className="grid gap-3 lg:grid-cols-2">
              {projects
                .filter((project) => aboutProjectSlugs.includes(project.slug))
                .map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary p-4"
                >
                  <Sparkles className="h-5 w-5 text-gold" />
                  <span className="font-semibold text-primary">{project.title}</span>
                </div>
                ))}
            </div>
            <div className="mt-8 rounded-2xl bg-primary p-6 text-white">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Leadership
              </div>
              <p className="leading-relaxed text-white/80">
                {demarvelContact.director} leads the company from {demarvelContact.office}, with a focus
                on reliability, service quality and long-term relationships.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  href={demarvelContact.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  {demarvelContact.phoneDisplay}
                </a>
                <a
                  href={demarvelContact.emailHref}
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  {demarvelContact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-14 md:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Team
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              People behind the complete design journey
            </h2>
            <p className="mt-5 text-muted-foreground">
              A multidisciplinary team supporting architecture, interiors, operations and project
              execution from the first conversation to final handover.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {demarvelTeam.map((member) => (
              <div
                key={`${member.name}-${member.role}`}
                className="rounded-2xl border border-border bg-card p-6 shadow-card-luxe"
              >
                <div className="text-lg font-bold text-primary">{member.name}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-navy to-primary p-6 text-center text-white shadow-luxe sm:p-10 md:p-16">
            <div className="mx-auto max-w-3xl">
              <Star className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                One platform. Multiple services. A better daily experience.
              </h2>
              <p className="mb-8 text-white/80">
                From interiors and architectural planning to infrastructure and landscaping, De Marvel Infra Solutions
                Infra Solutions is designed to keep the project journey connected.
              </p>
              <Link
                to="/services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary hover-lift sm:w-auto"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
