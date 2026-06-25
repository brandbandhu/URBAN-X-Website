import { Link } from "@/components/site/AppLink";
import { SiteLayout } from "@/components/site/Layout";
import {
  urbanxBrand,
  urbanxBrandCards,
  urbanxConstructionDetails,
  urbanxContact,
  urbanxCoreCapabilities,
  urbanxEventsDetails,
  urbanxFoodDetails,
  urbanxGardeningDetails,
  urbanxHousingDetails,
  urbanxInteriorDetails,
  urbanxItDetails,
  urbanxMetrics,
  urbanxMission,
  urbanxHousekeepingDetails,
  urbanxVision,
  urbanxWhyChoose,
} from "@/lib/siteContent";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChefHat,
  Construction,
  Home as HomeIcon,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Sparkles,
  Sofa,
  Star,
  Trees,
  Wrench,
} from "lucide-react";
import { Children, useEffect, useState, type ReactNode } from "react";
import aboutImg from "@/assets/about-urbanx.jpg";
import gardening from "@/assets/service-gardening.jpg";
import housekeeping from "@/assets/service-housekeeping.jpg";
import marble from "@/assets/service-marble.jpg";
import rental from "@/assets/service-rental.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroSlides = [
  {
    img: hero1,
    eyebrow: "Urbanx",
    title: "A place created for your happy living.",
    description:
      "Simplifying life by connecting housing, food, interiors, events, construction, housekeeping, gardening and IT support under one platform.",
  },
  {
    img: hero2,
    eyebrow: "Smart Housing",
    title: "More than 2,000 living spaces every year across Pune.",
    description:
      "Designed for working professionals, boys and girls, students and academic communities with safety, comfort and reliability at the center.",
  },
  {
    img: hero3,
    eyebrow: "Food Delivery",
    title: "Fresh meals, large-scale catering and cloud kitchen support.",
    description:
      "Serving more than 2,000 customers every day with menus built for taste, nutrition, hygiene and timely delivery.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  titleClassName = "text-primary",
  subtitleClassName = "text-muted-foreground",
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  align?: "center" | "left";
}) {
  const alignmentClass = align === "left" ? "max-w-3xl text-left" : "mx-auto max-w-3xl text-center";

  return (
    <div className={alignmentClass}>
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
        {eyebrow}
      </div>
      <h2 className={`text-3xl font-bold md:text-5xl ${titleClassName}`}>{title}</h2>
      {subtitle && <p className={`mt-5 ${subtitleClassName}`}>{subtitle}</p>}
    </div>
  );
}

function BulletGrid({ items, icon: Icon }: { items: string[]; icon: typeof Check }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 rounded-xl bg-secondary p-5">
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
            <Icon className="h-3.5 w-3.5 text-primary" />
          </div>
          <span className="text-foreground/90">{item}</span>
        </div>
      ))}
    </div>
  );
}

function StackRail({ children, className = "" }: { children: ReactNode; className?: string }) {
  const cards = Children.toArray(children);

  return (
    <div className={cn("relative space-y-4 pb-12 md:space-y-0 md:pb-32", className)}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={cn(
            "rounded-[2rem] border border-border bg-background p-5 shadow-luxe md:sticky md:p-6",
            index > 0 && "md:-mt-14",
          )}
          style={{ top: `calc(7rem - ${index * 0.9}rem)`, zIndex: index + 1 }}
        >
          {card}
        </div>
      ))}
    </div>
  );
}

function ServiceMedia({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="self-start lg:sticky lg:top-24">
      <div className="overflow-hidden rounded-[2rem] shadow-luxe">
        <img
          src={src}
          alt={alt}
          className="h-[280px] w-full object-cover sm:h-[360px] md:h-[420px] lg:h-[520px]"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </div>
    </div>
  );
}

type InteriorStackCard = {
  id: string;
  eyebrow: string;
  summary: string;
  items?: string[];
  image?: string;
  imageAlt?: string;
  highlight?: string;
};

export default function HomePage() {
  const [active, setActive] = useState(0);
  const slideDurationMs = 6500;
  const activeSlide = heroSlides[active];
  const interiorStackCards: InteriorStackCard[] = [
    {
      id: "overview",
      eyebrow: "Interior Overview",
      summary: urbanxInteriorDetails.summary,
      image: marble,
      imageAlt: "Urbanx interior furnishing",
      highlight: "10+ years of experience and more than 10 lakh square feet of completed work.",
    },
    {
      id: "residential",
      eyebrow: "Residential",
      summary: "Designer curtains, wallpapers, sofa sets, study chairs and wardrobe planning.",
      items: urbanxInteriorDetails.expertise.residential,
    },
    {
      id: "commercial",
      eyebrow: "Commercial and Healthcare",
      summary: "Office spaces, laboratories, hospitals, clinics and institutional interiors.",
      items: urbanxInteriorDetails.expertise.commercial.concat(
        urbanxInteriorDetails.expertise.healthcare,
      ),
    },
    {
      id: "wall",
      eyebrow: "Wall and Furnishing Solutions",
      summary: "Premium wallpapers, cladding, textures, custom sofas and smart furnishings.",
      items: urbanxInteriorDetails.expertise.wallSurface.concat(
        urbanxInteriorDetails.expertise.furnishings,
      ),
    },
  ];

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, slideDurationMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [active]);

  return (
    <SiteLayout>
      <section className="relative pb-16 md:pb-20">
        <div className="relative min-h-[560px] overflow-hidden sm:min-h-[620px] lg:min-h-[680px]">
          <div key={activeSlide.title} className="absolute inset-0 animate-fade-in">
            <img
              src={activeSlide.img}
              alt=""
              className="h-full w-full scale-105 object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_255/0.94)] via-[oklch(0.18_0.05_255/0.72)] to-[oklch(0.18_0.05_255/0.28)]" />
          </div>

          <div className="absolute inset-0 flex items-center pb-24 md:pb-28">
            <div className="container-x text-white">
              <div key={active} className="max-w-4xl animate-fade-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6">
                  <Sparkles className="h-3.5 w-3.5" />
                  {activeSlide.eyebrow}
                </div>
                <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-[1.02] md:text-6xl lg:text-7xl">
                  {activeSlide.title}
                </h1>
                <p className="mb-9 max-w-2xl text-lg text-white/85 md:text-xl">
                  {activeSlide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary hover-lift"
                  >
                    Contact Urbanx <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                  >
                    View Services <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={urbanxContact.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-3.5 font-semibold text-white hover-lift"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 z-20 w-[min(92vw,44rem)] -translate-x-1/2">
            <div className="rounded-full border border-white/15 bg-navy/70 px-4 py-3 text-white shadow-luxe backdrop-blur-md">
              <div className="flex items-center gap-3">
                {heroSlides.map((slide, index) => {
                  const isActive = index === active;
                  const isComplete = index < active;

                  return (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActive(index)}
                      className="group min-w-0 flex-1 text-left"
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/70">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
                        <div
                          key={isActive ? active : slide.title}
                          className="h-full w-full origin-left rounded-full bg-gradient-gold transition-transform duration-300"
                          style={
                            isActive
                              ? { animation: `hero-progress ${slideDurationMs}ms linear forwards` }
                              : { transform: `scaleX(${isComplete ? 1 : 0})` }
                          }
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 pb-6 md:-mt-14 md:pb-8">
        <div className="container-x">
          <div className="grid gap-4 rounded-[1.75rem] border border-border bg-background/98 p-4 shadow-luxe md:grid-cols-2 xl:grid-cols-4 md:p-6">
            {urbanxMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl bg-secondary/60 p-4 text-center md:p-5"
              >
                <div className="text-2xl font-bold text-primary md:text-4xl">{metric.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-14 pb-20 md:pt-16 md:pb-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Urbanx team and workspace"
              className="h-[280px] w-full rounded-2xl object-cover shadow-luxe sm:h-[380px] md:h-[460px] lg:h-[520px]"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <div className="absolute -bottom-8 -right-6 hidden rounded-2xl bg-gradient-gold p-7 text-primary shadow-luxe md:block">
              <div className="text-5xl font-bold">10+</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em]">
                Years of expertise
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              About Urbanx
            </div>
            <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-5xl">
              {urbanxBrand.tagline}
            </h2>
            <p className="mt-8 mb-5 text-lg text-muted-foreground">
              Urbanx is more than just a service provider. We are a space where you can discover
              your ideal home, design your living environment and build your future.
            </p>
            <p className="mb-8 leading-relaxed text-foreground/80">
              We combine innovation, expertise and professionalism to deliver a seamless lifetime
              experience where every requirement, big or small, is handled with care and precision.
            </p>
            <BulletGrid items={urbanxCoreCapabilities.slice(0, 4)} icon={Check} />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="We combine innovation, expertise and professionalism"
            subtitle="Everything Urbanx brings together sits under one platform so homes, lifestyle, food and business needs can be managed more easily."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {urbanxCoreCapabilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-card p-7 shadow-card-luxe hover-lift"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                  <Sparkles className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ServiceMedia src={hero2} alt="Urbanx housing" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="Smart Housing"
                title="More than 2,000 living spaces every year across Pune"
                subtitle="We create safe, comfortable and well-managed living spaces for working professionals, boys and girls, students and academic communities."
                titleClassName="max-w-2xl text-primary"
                subtitleClassName="max-w-xl text-muted-foreground"
              />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {urbanxHousingDetails.summary}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                Secure living with dependable management and daily comfort for residents and
                parents.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Safety and security
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Built around safety, security and daily convenience for boys and girls alike.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {urbanxHousingDetails.focus.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
              <div className="flex flex-wrap gap-2">
                {[
                  "Working professionals",
                  "Boys and girls",
                  "Students",
                  "Academic communities",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </StackRail>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ServiceMedia src={hero3} alt="Urbanx food delivery" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="Urbanx: Food Delivery Services"
                title="Fresh meals for more than 2,000 customers every day"
                subtitle="Freshly prepared meals, special dietary options and large-scale catering handled with hygiene, taste and timely delivery."
                titleClassName="max-w-2xl text-primary"
                subtitleClassName="max-w-xl text-muted-foreground"
              />
              <div className="mt-6 rounded-2xl bg-secondary/50 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Kitchen scale
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {urbanxFoodDetails.kitchen}
                </p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Menu range
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Fresh menus built for changing tastes, nutrition and everyday convenience.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {urbanxFoodDetails.menu.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <ChefHat className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Catering focus
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Weddings, birthdays, cocktail events, corporate gatherings and social
                  celebrations.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <div className="flex flex-wrap gap-2">
                  {urbanxFoodDetails.catering.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Menus on request
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {urbanxFoodDetails.note}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                We keep the service flexible so changing customer needs and special occasions are
                easy to handle.
              </p>
            </div>
          </StackRail>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ServiceMedia src={marble} alt="Urbanx interior furnishing" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="Urbanx: Interior Experience for All Places"
                title="Modern, functional and aesthetic interiors for every environment"
                subtitle="Transform your space with modern, functional and aesthetic interior solutions designed by professionals with over 10 years of experience."
                titleClassName="max-w-2xl text-primary"
                subtitleClassName="max-w-xl text-muted-foreground"
              />
              <div className="mt-6 rounded-2xl bg-secondary/50 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Completed work
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Over 10 lakh square feet completed across residential, commercial, healthcare and
                  institutional spaces.
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                {urbanxInteriorDetails.note}
              </p>
            </div>

            {interiorStackCards.slice(1).map((card) => (
              <div key={card.id} className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl bg-secondary/40 p-6">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    {card.eyebrow}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.summary}</p>
                </div>
                <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {card.items!.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                        - {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </StackRail>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ServiceMedia src={rental} alt="Urbanx events and construction" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="Urbanx: Events & Management"
                title="Planning, managing and executing memorable events"
                subtitle="Corporate conferences, birthdays, weddings, inaugurations and celebrity management, handled with precision and professionalism."
                titleClassName="max-w-2xl text-primary"
                subtitleClassName="max-w-xl text-muted-foreground"
              />
              <div className="mt-6 rounded-2xl bg-secondary/50 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Event promise
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {urbanxEventsDetails.promise}
                </p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Planning and execution
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We plan every detail, from decor and ambience to the final guest experience.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {urbanxEventsDetails.services.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Guest care
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Guest coordination, hospitality and celebrity handling with a polished,
                  professional approach.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <div className="flex flex-wrap gap-2">
                  {urbanxEventsDetails.services.slice(3).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {urbanxEventsDetails.promise}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                From intimate gatherings to grand celebrations, every event is timed, styled and
                delivered with care.
              </p>
            </div>
          </StackRail>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ServiceMedia src={hero1} alt="Urbanx construction" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="Urbanx Construction and Contracting Services"
                title="Planning to execution and complete project management"
                subtitle="Residential, commercial and institutional projects handled with modern design, structural strength and environmental suitability."
                titleClassName="max-w-2xl text-primary"
                subtitleClassName="max-w-xl text-muted-foreground"
              />
              <div className="mt-6 rounded-2xl bg-secondary/50 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Project focus
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {urbanxConstructionDetails.summary}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                {urbanxConstructionDetails.promise}
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Structural expertise
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  From slab casting and brickwork to marble finishes, automation and HVAC systems.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {urbanxConstructionDetails.services.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <Construction className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Project portfolio
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Aishwarya Heights, Aishwarya Poorva, Aishwarya Hostels, bungalows and more.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {urbanxConstructionDetails.projects.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  More services
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Glass facades, common areas, lift lobbies and other finishing work for
                  future-ready spaces.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {urbanxConstructionDetails.services.slice(4).map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </StackRail>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ServiceMedia src={housekeeping} alt="Urbanx housekeeping" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="Housekeeping and Cleaning Services"
                title="Professional cleaning and maintenance for every kind of space"
                subtitle="Hygienic, reliable support for hospitals, hostels, offices, residential societies and individual homes."
                titleClassName="max-w-2xl text-primary"
                subtitleClassName="max-w-xl text-muted-foreground"
              />
              <div className="mt-6 rounded-2xl bg-secondary/50 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Service promise
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {urbanxHousekeepingDetails.promise}
                </p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Daily and office care
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Daily cleaning, office maintenance, deep cleaning and floor scrubbing that keeps
                  spaces fresh.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {urbanxHousekeepingDetails.services.slice(0, 6).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Specialised care
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Glass facade cleaning, solar panel care, water tank cleaning and corridor
                  maintenance.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {urbanxHousekeepingDetails.services.slice(6).map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </StackRail>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ServiceMedia src={gardening} alt="Urbanx landscaping" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="Urbanx Landscaping"
                title="Creative, functional and sustainable outdoor solutions"
                subtitle="Outdoor spaces designed for long-term value across campuses, offices, homes and public spaces."
                titleClassName="max-w-2xl text-primary"
                subtitleClassName="max-w-xl text-muted-foreground"
              />
              <div className="mt-6 rounded-2xl bg-secondary/50 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Landscaping promise
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {urbanxGardeningDetails.promise}
                </p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Where we work
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Hospitals, corporate offices, educational campuses, industrial facilities and
                  residential communities.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Hospitals and healthcare campuses",
                    "Corporate offices and IT parks",
                    "Educational institutions and university campuses",
                    "Industrial areas and manufacturing facilities",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Garden services
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Garden maintenance, mowing, watering and pruning with seasonal plantation support.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {urbanxGardeningDetails.services.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <Trees className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
              <p className="text-sm leading-relaxed text-muted-foreground">
                From concept design to execution and maintenance, every project is delivered with
                precision, creativity and long-term value.
              </p>
            </div>
          </StackRail>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ServiceMedia src={hero2} alt="Urbanx IT solutions" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="Technology and Media"
                title="Professional, customized and scalable IT solutions"
                subtitle="Supporting social media, digital marketing, software, content, training and automation needs."
                titleClassName="max-w-2xl text-primary"
                subtitleClassName="max-w-xl text-muted-foreground"
              />
              <div className="mt-6 rounded-2xl bg-secondary/50 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  IT support promise
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {urbanxItDetails.promise}
                </p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Content and growth
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Social media content, lead management, campaigns and production support shaped for
                  consistent growth.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {urbanxItDetails.services.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <MonitorSmartphone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Development and operations
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Website content, ERP implementation, mobile apps, team handling and training
                  support.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {urbanxItDetails.services.slice(4, 8).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <MonitorSmartphone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl bg-secondary/40 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Engagement and support
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Chatbot development, customer engagement and scalable support built around your
                  workflow.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {urbanxItDetails.services.slice(8).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <MonitorSmartphone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </StackRail>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Turning your space into vibrant living"
            title="Projects handled"
            subtitle="A few of the project names highlighted in your content brief."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {urbanxInteriorDetails.projectsHandled.map((project) => (
              <div
                key={project}
                className="rounded-xl border border-border bg-card p-6 shadow-card-luxe"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div className="text-lg font-bold text-primary">{project}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {urbanxBrandCards.map((brand) => (
              <Link
                key={brand.to}
                to={brand.to}
                className="group overflow-hidden rounded-2xl bg-card shadow-card-luxe hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-primary" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <brand.icon className="h-12 w-12 text-gold" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                    {brand.tagline}
                  </div>
                  <div className="mt-1 text-2xl font-bold text-primary">{brand.label}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {brand.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Urbanx"
            title="Reliable, customer-first and built around modern urban living"
            subtitle="One platform for multiple services, trusted professionals, affordable pricing and quick, reliable support."
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {urbanxWhyChoose.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-gold hover:bg-white/10"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold">
                  <Star className="h-7 w-7 text-primary" />
                </div>
                <p className="text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 shadow-luxe">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Vision
            </div>
            <h3 className="mb-4 text-3xl font-bold text-primary">
              To become the most trusted and comprehensive service platform
            </h3>
            <p className="leading-relaxed text-muted-foreground">{urbanxVision}</p>
          </div>
          <div className="rounded-3xl bg-primary p-8 text-white shadow-luxe">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Mission
            </div>
            <h3 className="mb-4 text-3xl font-bold">
              Connecting people with reliable services across daily life
            </h3>
            <p className="leading-relaxed text-white/80">{urbanxMission}</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-navy to-primary p-10 text-center text-white shadow-luxe md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,oklch(0.78_0.13_78/0.22),transparent_45%)]" />
            <div className="relative mx-auto max-w-3xl">
              <Check className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Let us handle the details, big and small.
              </h2>
              <p className="mb-8 text-white/80">
                From housing and interiors to catering, events, housekeeping and IT support, Urbanx
                is built to deliver care and precision.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary hover-lift"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={urbanxContact.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {urbanxContact.phoneDisplay}
                </a>
                <a
                  href={urbanxContact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/75">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  {urbanxContact.office}
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  {urbanxContact.director}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
