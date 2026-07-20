import { Link } from "@/components/site/AppLink";
import { ActiveBrandsSection } from "@/components/site/ActiveBrandsSection";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/Layout";
import {
  urbanxBrand,
  urbanxContact,
  urbanxServiceAreas,
} from "@/lib/siteContent";
import { ArrowRight, Sparkles } from "lucide-react";
import aboutImg from "@/assets/about-urbanx.jpg";

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="Services"
        subtitle={urbanxBrand.tagline}
        crumbs={[{ label: "Services" }]}
        image={aboutImg}
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              What Urbanx Connects
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              A service ecosystem for modern urban living
            </h2>
            <p className="mt-5 text-muted-foreground">
              The website content brief positions Urbanx as a one-stop solution for everyday living.
              These are the core service areas that sit underneath the brand.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {urbanxServiceAreas.map((service) => (
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
                Urbanx is structured to handle both everyday needs and larger operational
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
                  href={urbanxContact.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  {urbanxContact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
