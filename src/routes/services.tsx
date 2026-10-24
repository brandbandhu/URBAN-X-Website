import { Link } from "@/components/site/AppLink";
import { ActiveBrandsSection } from "@/components/site/ActiveBrandsSection";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/Layout";
import {
  demarvelBrand,
  demarvelContact,
  demarvelDetailedServices,
  demarvelProjectHighlights,
  demarvelProductCategories,
  demarvelSofaStyles,
  demarvelServiceAreas,
  demarvelStudio,
} from "@/lib/siteContent";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import aboutImg from "@/assets/about-demarvel.jpg";

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="Services"
        subtitle={demarvelBrand.tagline}
        crumbs={[{ label: "Services" }]}
        image={aboutImg}
      />

      <section id="services" className="py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              What D Marvel Infra Solutions Connects
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              One vision. One partner. Complete solutions.
            </h2>
            <p className="mt-5 text-muted-foreground">
              {demarvelStudio.summary} {demarvelStudio.promise}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {demarvelServiceAreas.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-card-luxe hover-lift"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary transition-all group-hover:bg-gradient-gold">
                  <service.icon className="h-7 w-7 text-gold transition-colors group-hover:text-primary" />
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

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Complete Design, Décor & Execution
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              From the first concept to the final detail
            </h2>
            <p className="mt-5 text-muted-foreground">
              Our integrated approach brings architecture, interiors, furniture, décor, smart-home
              technology, landscaping and execution together through one design studio.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {demarvelDetailedServices.map((service) => (
              <article key={service.title} className="rounded-3xl bg-card p-7 shadow-card-luxe">
                <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 md:py-28">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-primary p-8 text-white shadow-luxe md:p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Sofa Making Studio
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Seating designed around you</h2>
            <p className="mt-4 leading-relaxed text-white/75">
              From compact loveseats to statement pieces, D Marvel creates customised seating that
              responds to room proportions, comfort, upholstery and lifestyle.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {demarvelSofaStyles.map((style) => (
                <span key={style} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white/85">
                  {style}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-card p-8 shadow-luxe md:p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Products & Lifestyle Details
            </div>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              The details that complete a space
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Explore coordinated furniture, soft furnishings, décor and material selections as
              part of a complete design story.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {demarvelProductCategories.map((category) => (
                <li key={category} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-secondary/40 py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Projects & Gallery
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              Selected work and project references
            </h2>
            <p className="mt-5 text-muted-foreground">
              The D Marvel design ecosystem spans residences, offices, laboratories, hostels,
              hospitality spaces and complete project environments.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {demarvelProjectHighlights.map((project) => (
              <span
                key={project}
                className="rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-primary shadow-card-luxe"
              >
                {project}
              </span>
            ))}
          </div>

          <div id="gallery" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["/de-marvel-furnishings/interior-bedroom-01.png", "Bedroom interior"],
              ["/de-marvel-furnishings/interior-study-01.png", "Study and storage interior"],
              ["/de-marvel-furnishings/interior-living-01.png", "Living room interior"],
              ["/de-marvel-furnishings/interior-bedroom-02.png", "Bedroom design"],
              ["/de-marvel-furnishings/interior-living-02.png", "Living and TV unit"],
            ].map(([src, alt]) => (
              <div key={src} className="overflow-hidden rounded-2xl bg-card shadow-card-luxe">
                <img src={src} alt={alt} className="h-64 w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ActiveBrandsSection
        eyebrow="Brands"
        title="Dedicated pages for the active brands"
        ctaLabel="Talk to us"
        ctaTo="/contact"
      />

      <section className="pb-20">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-navy to-primary p-10 text-center text-white shadow-luxe md:p-16">
            <div className="mx-auto max-w-3xl">
              <Sparkles className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Need a service plan that fits your situation?
              </h2>
              <p className="mb-8 text-white/80">
                D Marvel Infra Solutions is structured to handle both everyday needs and larger operational
                requirements with one point of contact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary hover-lift"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={demarvelContact.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  {demarvelContact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
