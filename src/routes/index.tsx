import { Link } from "@/components/site/AppLink";
import { ActiveBrandsSection } from "@/components/site/ActiveBrandsSection";
import { SiteLayout } from "@/components/site/Layout";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import {
  demarvelBrand,
  demarvelConstructionDetails,
  demarvelContact,
  demarvelCoreCapabilities,
  demarvelEventsDetails,
  demarvelFoodDetails,
  demarvelGardeningDetails,
  demarvelHousingDetails,
  demarvelInteriorDetails,
  demarvelItDetails,
  demarvelMetrics,
  demarvelMission,
  demarvelVision,
  demarvelWhyChoose,
  type DeMarvelMetric,
} from "@/lib/siteContent";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChefHat,
  Compass,
  Construction,
  Home as HomeIcon,
  MapPin,
  MonitorSmartphone,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Sofa,
  Trees,
  Wrench,
} from "lucide-react";
import {
  Children,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import aboutImg from "@/assets/about-demarvel.jpg";
import gardening from "@/assets/service-gardening.jpg";
import marble from "@/assets/service-marble.jpg";
import rental from "@/assets/service-rental.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroSlides = [
  {
    img: hero1,
    eyebrow: "D Marvel Infra Solutions",
    title: "Designing Spaces. Building Possibilities.",
    description:
      "From site development and architectural planning to interiors, automation, landscaping, furniture and turnkey execution - one integrated design studio for the complete journey.",
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
    <div className={cn("relative pb-16 md:pb-32", className)}>
      {cards.map((card, index) => {
        const stackStyle = {
          "--stack-top": `calc(5.75rem + ${Math.min(index, 4) * 0.45}rem)`,
          "--stack-top-md": `calc(7rem - ${index * 0.9}rem)`,
          zIndex: index + 1,
        } as CSSProperties;

        return (
          <div
            key={index}
            className={cn(
              "sticky top-[var(--stack-top)] rounded-[1.5rem] border border-border bg-background p-4 shadow-luxe sm:p-5 md:top-[var(--stack-top-md)] md:rounded-[2rem] md:p-6",
              index > 0 && "-mt-6 md:-mt-14",
            )}
            style={stackStyle}
          >
            {card}
          </div>
        );
      })}
    </div>
  );
}

function useCountUp(target: number, active: boolean, delayMs = 0, durationMs = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setValue(target);
      return;
    }

    let rafId = 0;
    let timeoutId = 0;

    const start = () => {
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));

        if (progress < 1) {
          rafId = window.requestAnimationFrame(tick);
        }
      };

      rafId = window.requestAnimationFrame(tick);
    };

    if (delayMs > 0) {
      timeoutId = window.setTimeout(start, delayMs);
    } else {
      start();
    }

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(rafId);
    };
  }, [active, delayMs, durationMs, target]);

  return value;
}

function MetricCard({
  metric,
  active,
  delayMs,
}: {
  metric: DeMarvelMetric;
  active: boolean;
  delayMs: number;
}) {
  const count = useCountUp(metric.target, active, delayMs);
  const valueText = `${count}+${metric.unit ? ` ${metric.unit}` : ""}`;

  return (
    <div className="flex min-h-[120px] flex-col items-center justify-center rounded-2xl bg-secondary/60 p-4 text-center md:min-h-[132px] md:p-5">
      <div
        className="text-2xl font-bold leading-none text-primary md:text-4xl"
        aria-label={valueText}
      >
        {valueText}
      </div>
      <div className="mt-2 max-w-[12rem] text-[11px] uppercase leading-tight tracking-[0.26em] text-muted-foreground">
        {metric.label}
      </div>
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
  const statsRef = useRef<HTMLElement>(null);
  const [statsInView, setStatsInView] = useState(false);
  const slideDurationMs = 6500;
  const activeSlide = heroSlides[active];
  const interiorStackCards: InteriorStackCard[] = [
    {
      id: "overview",
      eyebrow: "Interior Overview",
      summary: demarvelInteriorDetails.summary,
      image: marble,
      imageAlt: "D Marvel interior furnishing",
      highlight: "10+ years of experience and more than 10 lakh square feet of completed work.",
    },
    {
      id: "residential",
      eyebrow: "Residential",
      summary: "Designer curtains, wallpapers, sofa sets, study chairs and wardrobe planning.",
      items: demarvelInteriorDetails.expertise.residential,
    },
    {
      id: "commercial",
      eyebrow: "Commercial and Healthcare",
      summary: "Office spaces, laboratories, hospitals, clinics and institutional interiors.",
      items: demarvelInteriorDetails.expertise.commercial.concat(
        demarvelInteriorDetails.expertise.healthcare,
      ),
    },
    {
      id: "wall",
      eyebrow: "Wall and Furnishing Solutions",
      summary: "Premium wallpapers, cladding, textures, custom sofas and smart furnishings.",
      items: demarvelInteriorDetails.expertise.wallSurface.concat(
        demarvelInteriorDetails.expertise.furnishings,
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

  useEffect(() => {
    const section = statsRef.current;

    if (!section) {
      return;
    }

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || typeof window.IntersectionObserver === "undefined") {
      setStatsInView(true);
      return;
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <SiteLayout>
      <section className="relative pb-4 sm:pb-16 md:pb-20">
        <div className="relative overflow-hidden sm:min-h-[560px] md:min-h-[620px] lg:min-h-[680px]">
          <div key={activeSlide.title} className="absolute inset-0 animate-fade-in">
            <img
              src={activeSlide.img}
              alt=""
              className="h-full w-full scale-105 object-cover object-[68%_center] sm:object-center"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_255/0.94)] via-[oklch(0.18_0.05_255/0.72)] to-[oklch(0.18_0.05_255/0.28)]" />
          </div>

          <div className="relative flex items-start pt-4 pb-8 sm:absolute sm:inset-0 sm:items-center sm:pt-20 sm:pb-20 md:items-center md:pt-0 md:pb-28 lg:items-start lg:pt-28 xl:pt-28">
            <div className="container-x text-white">
              <div key={active} className="max-w-4xl animate-fade-up">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold sm:mb-6 sm:px-4 sm:text-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  {activeSlide.eyebrow}
                </div>
                <h1 className="mb-3 max-w-3xl text-[1.875rem] font-bold leading-[1.04] sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
                  {activeSlide.title}
                </h1>
                <p className="mb-5 max-w-2xl text-[0.9rem] leading-[1.45] text-white/85 sm:mb-9 sm:text-lg md:text-xl">
                  {activeSlide.description}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-gold px-7 py-2.5 font-semibold text-primary hover-lift sm:w-auto sm:py-3.5"
                  >
                    Contact D Marvel <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-white/40 px-7 py-2.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary sm:w-auto sm:py-3.5"
                  >
                    View Services <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={demarvelContact.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-7 py-2.5 font-semibold text-white hover-lift sm:w-auto sm:py-3.5"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="relative z-10 mt-0 pb-3 sm:-mt-10 md:pb-8">
        <div className="container-x">
          <div className="grid gap-3 rounded-[1.5rem] border border-border bg-background/98 p-3 shadow-luxe sm:gap-4 sm:p-4 md:grid-cols-2 xl:grid-cols-4 md:rounded-[1.75rem] md:p-6">
            {demarvelMetrics.map((metric, index) => (
              <MetricCard
                key={metric.label}
                metric={metric}
                active={statsInView}
                delayMs={index * 120}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pt-8 pb-20 sm:pt-14 md:pt-16 md:pb-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="D Marvel Infra Solutions team and workspace"
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
              About D Marvel Infra Solutions
            </div>
            <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-5xl">
              {demarvelBrand.tagline}
            </h2>
            <p className="mt-8 mb-5 text-lg text-muted-foreground">
              D Marvel Infra Solutions is an interior and infrastructure partner where you can
              shape your living, working or institutional environment with clarity and care.
            </p>
            <p className="mb-8 leading-relaxed text-foreground/80">
              We combine innovation, expertise, craftsmanship, technology and professionalism to
              transform ideas into thoughtfully designed and beautifully executed spaces.
            </p>
            <BulletGrid
              items={demarvelCoreCapabilities.slice(0, 4).map((item) => item.title)}
              icon={Check}
            />
          </div>
        </div>
      </section>

      <ActiveBrandsSection
        eyebrow="D Marvel Infra Solutions"
        title="Design, infrastructure and outdoor work under one roof"
        subtitle="Explore the connected services and specialist brands that support residential, commercial and institutional requirements."
        ctaLabel="View all services"
        ctaTo="/services"
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Featured projects</div>
              <h2 className="gold-underline text-3xl font-bold text-primary md:text-5xl">Work that makes the brief visible</h2>
              <p className="mt-5 text-muted-foreground">A first look at the named project groups, supplied photographs and design-stage records in the portfolio.</p>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold">View complete portfolio <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.slice(0, 4).map((project) => (
              <Link key={project.id} to={`/projects/${project.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card-luxe transition hover:-translate-y-1 hover:shadow-luxe">
                <div className="relative h-48 overflow-hidden bg-[linear-gradient(135deg,#e9e4d9,#c8bda9)]">
                  {project.thumbnail ? <img src={project.thumbnail} alt={`${project.title} project visual`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" /> : <div className="flex h-full items-center justify-center p-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">Project visual pending</div>}
                </div>
                <div className="p-5"><div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">{project.primaryCategory}</div><h3 className="mt-2 text-xl font-bold text-primary">{project.title}</h3><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-gold">View project <ArrowRight className="h-4 w-4" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="We combine innovation, expertise and professionalism"
            subtitle="Everything D Marvel Infra Solutions brings together sits under one platform so residential, commercial and institutional projects can move more easily."
          />
          <div className="mt-12 grid items-stretch gap-x-6 gap-y-4 md:grid-cols-2 xl:grid-cols-4">
            {demarvelCoreCapabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex h-full min-h-[11rem] flex-col rounded-2xl border border-border bg-card px-5 py-4 shadow-card-luxe hover-lift"
                >
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                    <Icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="text-balance text-xl font-bold leading-tight text-primary">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ServiceMedia src={hero2} alt="D Marvel residential spaces" />

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
                {demarvelHousingDetails.summary}
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
                  {demarvelHousingDetails.focus.map((item) => (
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
          <ServiceMedia src={hero3} alt="D Marvel institutional food service" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="D Marvel: Food Delivery Services"
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
                  {demarvelFoodDetails.kitchen}
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
                  {demarvelFoodDetails.menu.map((item) => (
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
                  {demarvelFoodDetails.catering.map((item) => (
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
                {demarvelFoodDetails.note}
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
          <ServiceMedia src={marble} alt="D Marvel interior furnishing"
          />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="D Marvel: Interior Experience for All Places"
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
                {demarvelInteriorDetails.note}
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
          <ServiceMedia src={rental} alt="D Marvel events and construction" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="D Marvel: Events & Management"
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
                  {demarvelEventsDetails.promise}
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
                  {demarvelEventsDetails.services.slice(0, 3).map((item) => (
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
                  {demarvelEventsDetails.services.slice(3).map((item) => (
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
                {demarvelEventsDetails.promise}
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
          <ServiceMedia src={hero1} alt="D Marvel construction" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="D Marvel Construction and Contracting Services"
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
                  {demarvelConstructionDetails.summary}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                {demarvelConstructionDetails.promise}
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
                  {demarvelConstructionDetails.services.slice(0, 4).map((item) => (
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
                  Aishwarya Realtors, Aishwarya Poorva, Aishwarya Hostels, bungalows and more.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-card-luxe">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {demarvelConstructionDetails.projects.map((item) => (
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
                  {demarvelConstructionDetails.services.slice(4).map((item) => (
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
          <ServiceMedia src={gardening} alt="D Marvel landscaping" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="D Marvel Landscaping"
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
                  {demarvelGardeningDetails.promise}
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
                  {demarvelGardeningDetails.services.map((item) => (
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
          <ServiceMedia src={hero2} alt="D Marvel IT solutions" />

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
                  {demarvelItDetails.promise}
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
                  {demarvelItDetails.services.slice(0, 4).map((item) => (
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
                  {demarvelItDetails.services.slice(4, 8).map((item) => (
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
                  {demarvelItDetails.services.slice(8).map((item) => (
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

      <section className="bg-navy py-20 text-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose D Marvel"
            title="Reliable, customer-first and built around modern urban living"
            subtitle="One platform for multiple services, trusted professionals, affordable pricing and quick, reliable support."
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {demarvelWhyChoose.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-gold hover:bg-white/10"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Vision & Mission
            </div>
            <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-5xl">
              Clear direction. Reliable execution.
            </h2>
            <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground">
              D Marvel Infra Solutions is built around one simple idea: connect essential services under a dependable
              platform so people can manage everyday needs with more confidence.
            </p>
          </div>

          <div className="border-y border-border">
            <div className="grid gap-5 border-b border-border py-7 md:grid-cols-[4rem_1fr] md:gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold">
                <Compass className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Our Vision
                </div>
                <h3 className="mb-3 text-2xl font-bold text-primary md:text-3xl">
                  To become the most trusted comprehensive service platform
                </h3>
                <p className="leading-relaxed text-muted-foreground">{demarvelVision}</p>
              </div>
            </div>

            <div className="grid gap-5 py-7 md:grid-cols-[4rem_1fr] md:gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                <Route className="h-7 w-7 text-gold" />
              </div>
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Our Mission
                </div>
                <h3 className="mb-3 text-2xl font-bold text-primary md:text-3xl">
                  Connecting people with reliable services across daily life
                </h3>
                <p className="leading-relaxed text-muted-foreground">{demarvelMission}</p>
              </div>
            </div>
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
                From interior design and architectural planning to infrastructure and landscaping,
                D Marvel Infra Solutions is built to deliver care and precision.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary hover-lift"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={demarvelContact.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {demarvelContact.phoneDisplay}
                </a>
                <a
                  href={demarvelContact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/75">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  {demarvelContact.office}
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  {demarvelContact.director}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
