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
  demarvelMission,
  demarvelVision,
  demarvelWhyChoose,
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
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import aboutImg from "@/assets/about-building-enhanced.jpg";
import landscapingCampus from "@/assets/landscaping-campus.jpeg";
import marble from "@/assets/service-marble.jpg";
import foodHeroImage from "@/assets/food-banner.jpeg";
import housingHeroImage from "@/assets/new-royal-services/new-royal-services-featured.jpg";
import interiorHeroImage from "@/assets/hero-luxury-living-room.jpg";

const foodDeliveryImage =
  "/project-photos/royal-foods-hospitality-services/royal-foods-hospitality-services-01.jpeg";

const heroSlides = [
  {
    img: interiorHeroImage,
    designedBackground: true,
    eyebrow: "De marvel infra solutions",
    title: "Designing Spaces. Building Possibilities.",
    description:
      "From site development and architectural planning to interiors, automation, landscaping, furniture and turnkey execution - one integrated design studio for the complete journey.",
  },
  {
    img: housingHeroImage,
    designedBackground: false,
    eyebrow: "Smart Housing",
    title: "50+ projects delivered across Pune.",
    description:
      "Thoughtful residential, commercial and institutional spaces shaped around comfort and dependable management.",
  },
  {
    img: foodHeroImage,
    designedBackground: false,
    eyebrow: "Food Delivery",
    title: "Fresh meals, large-scale catering and cloud kitchen support.",
    description:
      "Serving more than 2,500 customers every day with menus built for taste, nutrition, hygiene and timely delivery.",
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
    <div className={cn("relative space-y-6 lg:space-y-0 lg:pb-32", className)}>
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
              "rounded-[1.5rem] border border-border bg-background shadow-luxe sm:p-5 lg:sticky lg:top-[var(--stack-top-md)] lg:rounded-[2rem] lg:p-6",
              index > 0 && "lg:-mt-14",
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
  const [heroPaused, setHeroPaused] = useState(false);
  const slideDurationMs = 6500;
  const activeSlide = heroSlides[active];
  const interiorStackCards: InteriorStackCard[] = [
    {
      id: "overview",
      eyebrow: "Interior Overview",
      summary: demarvelInteriorDetails.summary,
      image: marble,
      imageAlt: "De Marvel Infra Solutions interior furnishing",
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
    if (heroPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeoutId = window.setTimeout(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, slideDurationMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [active, heroPaused]);

  return (
    <SiteLayout>
      <section className="relative pb-4 sm:pb-16 md:pb-20">
        <div
          className="relative min-h-[max(36rem,calc(100svh-4rem))] overflow-hidden sm:min-h-[min(100svh-5rem,760px)]"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured services"
          onMouseEnter={() => setHeroPaused(true)}
          onMouseLeave={() => setHeroPaused(false)}
          onFocusCapture={() => setHeroPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setHeroPaused(false);
          }}
        >
          <div
            key={activeSlide.title}
            className="absolute inset-0 animate-fade-in bg-[oklch(0.18_0.05_255)]"
          >
            {activeSlide.img ? (
              <>
                <img
                  src={activeSlide.img}
                  alt=""
                  className="h-full w-full object-cover object-[68%_center] sm:object-center"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_255/0.94)] via-[oklch(0.18_0.05_255/0.72)] to-[oklch(0.18_0.05_255/0.28)]" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.24_0.07_255)] via-[oklch(0.18_0.05_255)] to-[oklch(0.12_0.04_255)]" />
            )}
          </div>

          <div
            className={cn(
              "relative flex min-h-[max(36rem,calc(100svh-4rem))] items-center pt-12 pb-24 sm:min-h-[min(100svh-5rem,760px)] sm:pt-14 sm:pb-24 lg:pt-10",
              activeSlide.designedBackground && "md:items-end",
            )}
          >
            <div className="container-x text-white">
              <div
                key={active}
                className={cn(
                  "max-w-5xl animate-fade-up",
                  activeSlide.designedBackground &&
                    "max-w-3xl md:max-w-4xl",
                )}
              >
                {activeSlide.designedBackground ? (
                  <>
                    <h1 className="mb-5 max-w-2xl text-[clamp(2rem,9vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em] sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
                      <span className="block">Designing spaces.</span>
                      <span className="block">Building <em className="text-gold not-italic">possibilities.</em></span>
                    </h1>
                    <div className="mb-5 h-1 w-20 rounded-full bg-gradient-gold sm:mb-7" />
                    <p className="mb-6 max-w-xl text-[0.92rem] leading-[1.55] text-white/85 sm:mb-9 sm:text-lg md:text-xl">
                      From site development and architectural planning to interiors, automation,
                      landscaping, furniture and turnkey execution - one integrated design studio
                      for the complete journey.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/15 px-3.5 py-1.5 text-[11px] font-semibold normal-case tracking-[0.25em] text-gold sm:mb-6 sm:px-4 sm:text-xs">
                      <Sparkles className="h-3.5 w-3.5" />
                      {activeSlide.eyebrow}
                    </div>
                    <h1 className="mb-4 max-w-3xl text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.08] sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
                      {activeSlide.title}
                    </h1>
                    <p className="mb-5 max-w-2xl text-[0.9rem] leading-[1.45] text-white/85 sm:mb-9 sm:text-lg md:text-xl">
                      {activeSlide.description}
                    </p>
                  </>
                )}
                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4 md:flex-nowrap">
                  <Link
                    to="/contact"
                    className="col-span-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-gradient-gold px-3 py-3 text-center text-sm font-semibold text-primary hover-lift sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
                  >
                    Contact De Marvel Infra Solutions <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border-2 border-white/40 px-2 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-white hover:text-primary sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
                  >
                    View Services <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                  <a
                    href={demarvelContact.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#25D366] px-2 py-3 text-[13px] font-semibold text-white hover-lift sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-5 flex justify-center gap-1" role="group" aria-label="Choose a featured service">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Show ${slide.eyebrow}`}
                aria-pressed={active === index}
                onClick={() => setActive(index)}
                className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span className={cn("h-2 rounded-full transition-all", active === index ? "w-6 bg-gold" : "w-2 bg-white/60")} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-8 pb-20 sm:pt-14 md:pt-16 md:pb-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="De Marvel Infra Solutions team and workspace"
              className="h-[280px] w-full rounded-2xl object-cover shadow-luxe sm:h-[380px] md:h-[460px] lg:h-[520px]"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <div className="absolute -bottom-8 right-4 hidden rounded-2xl bg-gradient-gold p-7 text-primary shadow-luxe md:block lg:-right-6">
              <div className="text-5xl font-bold">10+</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em]">
                Years of expertise
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              About De Marvel Infra Solutions
            </div>
            <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-5xl">
              {demarvelBrand.tagline}
            </h2>
            <p className="mt-8 mb-5 text-lg text-muted-foreground">
              De Marvel Infra Solutions is an interior and infrastructure partner where you can
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
        eyebrow="De Marvel Infra Solutions"
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
              <Link key={project.id} to={`/projects/${project.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card-luxe transition hover:-translate-y-1 hover:shadow-luxe">
                <div className="relative h-48 overflow-hidden bg-[linear-gradient(135deg,#e9e4d9,#c8bda9)]">
                  {project.thumbnail ? <img src={project.thumbnail} alt={`${project.title} project visual`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" /> : <div className="flex h-full items-center justify-center p-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">Project visual pending</div>}
                </div>
                <div className="flex flex-1 flex-col p-5"><div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">{project.primaryCategory}</div><h3 className="mt-2 min-h-[3.5rem] text-xl font-bold text-primary">{project.title}</h3><span className="mt-auto inline-flex items-center gap-2 whitespace-nowrap pt-4 text-sm font-semibold text-primary group-hover:text-gold">View project <ArrowRight className="h-4 w-4" /></span></div>
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
            subtitle="Everything De Marvel Infra Solutions brings together sits under one platform so residential, commercial and institutional projects can move more easily."
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
          <ServiceMedia src="/project-photos/shree-angan-hostel/shree-angan-hostel-01.jpeg" alt="Shree Angan Hostel residential building project" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="Smart Housing"
                title="50+ projects delivered across Pune"
                subtitle="We create comfortable and well-managed spaces for working professionals, students and academic communities."
                titleClassName="max-w-2xl text-primary"
                subtitleClassName="max-w-xl text-muted-foreground"
              />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {demarvelHousingDetails.summary}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                Thoughtful management and daily comfort for residents and parents.
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
          <ServiceMedia src={foodDeliveryImage} alt="Institutional food service dining hall" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="De Marvel Infra Solutions: Food Delivery Services"
                title="Fresh meals for more than 2,500 customers every day"
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
          <ServiceMedia src={marble} alt="De Marvel Infra Solutions interior furnishing"
          />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="De Marvel Infra Solutions: Interior Experience for All Places"
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
          <ServiceMedia src="/project-photos/vip-events/vip-events-01.jpeg" alt="VIP event from the supplied project album" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="De Marvel Infra Solutions: Events & Management"
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
          <ServiceMedia src="/aishwarya-realtors/aishwarya-realtors.jpg" alt="Aishwarya Realtors building construction project" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="De Marvel Infra Solutions Construction and Contracting Services"
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
          <ServiceMedia src={landscapingCampus} alt="Landscaped campus with lawns, palm trees and a domed building" />

          <StackRail>
            <div className="rounded-[2rem] bg-background p-6 shadow-luxe md:p-8">
              <SectionHeading
                align="left"
                eyebrow="De Marvel Infra Solutions Landscaping"
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

      <section className="bg-navy py-20 text-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose De Marvel Infra Solutions"
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
              De Marvel Infra Solutions is built around one simple idea: connect essential services under a dependable
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
                De Marvel Infra Solutions is built to deliver care and precision.
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
