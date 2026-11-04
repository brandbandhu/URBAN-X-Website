import { Link } from "@/components/site/AppLink";
import { demarvelBrandCards } from "@/lib/siteContent";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";
import marble from "@/assets/service-marble.jpg";
import gardening from "@/assets/service-gardening.jpg";
import rental from "@/assets/service-rental.jpg";

const brandImages = [gardening, rental, marble, hero2] as const;

type ActiveBrandsSectionProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  ctaLabel?: string;
  ctaTo?: string;
};

export function ActiveBrandsSection({
  eyebrow,
  title,
  subtitle,
  className,
  ctaLabel,
  ctaTo = "/contact",
}: ActiveBrandsSectionProps) {
  return (
    <section className={cn("py-14 md:py-28", className)}>
      <div className="container-x">
        <div className="mb-8 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
          <div className="max-w-3xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {eyebrow}
            </div>
            <h2 className="gold-underline text-3xl font-bold text-primary md:text-5xl">
              {title}
            </h2>
            {subtitle && <p className="mt-5 text-muted-foreground">{subtitle}</p>}
          </div>

          {ctaLabel ? (
            <Link
              to={ctaTo}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold text-primary hover:border-gold hover:text-gold sm:w-auto sm:border-0 sm:px-0 sm:py-0"
            >
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {demarvelBrandCards.map((brand, index) => (
            <Link
              key={brand.to}
              to={brand.to}
              aria-label={`Open ${brand.label} brand details`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-card-luxe hover-lift"
            >
              <div className="relative h-52 overflow-hidden sm:h-60">
                <img
                  src={brandImages[index % brandImages.length]}
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

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {brand.description}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-primary transition-colors group-hover:text-gold">
                  View Details <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
