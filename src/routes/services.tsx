import { Link } from "@/components/site/AppLink";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/Layout";
import {
  urbanxBrand,
  urbanxBrandCards,
  urbanxContact,
  urbanxMetrics,
  urbanxServiceAreas,
} from "@/lib/siteContent";
import { ArrowRight, Sparkles } from "lucide-react";
import aboutImg from "@/assets/about-urbanx.jpg";
import housekeeping from "@/assets/service-housekeeping.jpg";
import rental from "@/assets/service-rental.jpg";
import marble from "@/assets/service-marble.jpg";
import hero2 from "@/assets/hero-2.jpg";

const brandImages = [housekeeping, rental, marble, hero2];

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

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              At a Glance
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              Numbers that show the scale of the brief
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {urbanxMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl bg-card p-8 text-center shadow-card-luxe"
              >
                <div className="text-4xl font-bold text-primary md:text-5xl">{metric.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Brands
              </div>
              <h2 className="gold-underline text-3xl font-bold text-primary md:text-5xl">
                Dedicated pages for the active brands
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold"
            >
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {urbanxBrandCards.map((brand, index) => (
              <Link
                key={brand.to}
                to={brand.to}
                className="group overflow-hidden rounded-2xl bg-card shadow-card-luxe hover-lift"
              >
                <div className="relative h-52 overflow-hidden sm:h-60">
                  <img
                    src={brandImages[index]}
                    alt={brand.label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold">
                    <brand.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute bottom-4 left-5 text-white">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                      {brand.tagline}
                    </div>
                    <div className="text-2xl font-bold">{brand.label}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {brand.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-gold">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
