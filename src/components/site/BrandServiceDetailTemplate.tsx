import { Link } from "@/components/site/AppLink";
import { PageBanner } from "./PageBanner";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { urbanxContact } from "@/lib/siteContent";
import { ArrowRight, Check, ChevronRight, Mail, Phone, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface BrandServiceSummary {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
}

export interface BrandServiceDetailData {
  brandName: string;
  brandTagline: string;
  brandAccentLabel: string;
  brandBanner: string;
  brandIntro: string;
  brandAbout: string[];
  brandBenefits: string[];
  brandProcess: { step: string; title: string; desc: string }[];
  brandBasePath: string;
  service: { icon: LucideIcon; title: string; desc: string };
  serviceHighlights: string[];
  relatedServices: BrandServiceSummary[];
}

export function BrandServiceDetailTemplate({ data }: { data: BrandServiceDetailData }) {
  const ServiceIcon = data.service.icon;

  return (
    <>
      <PageBanner
        title={data.service.title}
        subtitle={data.service.desc}
        crumbs={[
          { label: "Brands", to: "/services" },
          { label: data.brandName, to: data.brandBasePath },
          { label: data.service.title },
        ]}
        image={data.brandBanner}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <Sparkles className="h-4 w-4" />
              {data.brandAccentLabel}
            </div>
            <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-5xl">
              About this service
            </h2>
            <p className="mt-8 text-lg text-muted-foreground">{data.service.desc}</p>
            <p className="mt-5 leading-relaxed text-foreground/80">{data.brandIntro}</p>
            {data.brandAbout.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-foreground/80">
                {paragraph}
              </p>
            ))}

            <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-card-luxe">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Service focus
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This service is handled with clear scope, practical planning and the same dependable
                delivery approach that defines {data.brandName}.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">{data.service.desc}</p>
            </div>
          </div>

          <div className="rounded-3xl bg-card p-8 shadow-luxe">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold">
              <ServiceIcon className="h-7 w-7 text-primary" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Service snapshot
            </div>
            <h3 className="mt-3 text-3xl font-bold text-primary">{data.service.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {data.service.desc}
            </p>

            <div className="mt-8 space-y-4">
              {data.serviceHighlights.map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-secondary/40 p-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-sm leading-relaxed text-foreground/80">{item}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={data.brandBasePath}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-5 py-3 font-semibold text-primary hover-lift"
              >
                Back to Brand <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-semibold text-primary transition-colors hover:border-gold hover:text-gold"
              >
                Contact Us <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Why Choose {data.brandName}
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              Reliable service delivery with a practical plan
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.brandBenefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              How it works
            </div>
            <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-5xl">
              A simple, dependable process
            </h2>
            <p className="mt-8 leading-relaxed text-muted-foreground">{data.brandTagline}</p>
          </div>

          <div className="rounded-3xl bg-primary p-8 text-white shadow-luxe">
            <div className="space-y-5">
              {data.brandProcess.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-primary font-bold">
                    {step.step}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{step.title}</div>
                    <div className="text-sm text-white/75">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Related Services
              </div>
              <h2 className="gold-underline text-3xl font-bold text-primary md:text-5xl">
                Explore more from {data.brandName}
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {data.relatedServices.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="group block h-full rounded-2xl bg-card p-6 shadow-card-luxe hover-lift"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-gold">
                  View Details <ArrowRight className="h-4 w-4" />
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
              <Phone className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Ready to discuss this service?
              </h2>
              <p className="mb-8 text-white/80">
                Call, WhatsApp or contact us and we'll help you choose the right scope for your
                requirement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={urbanxContact.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary hover-lift"
                >
                  {urbanxContact.phoneDisplay} <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href={urbanxContact.whatsappHref}
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  WhatsApp <WhatsAppIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
