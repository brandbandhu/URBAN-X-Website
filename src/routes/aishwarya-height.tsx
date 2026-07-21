import { Link } from "@/components/site/AppLink";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, Check, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import locationMap from "@/assets/aishwarya-location-map.png";
import rental from "@/assets/service-rental.jpg";

const quickFacts = [
  { label: "Location", value: "Kothrud, Pune" },
  { label: "Homes", value: "2 BHK & 3 BHK" },
];

const amenityGroups = [
  {
    title: "Safety and access",
    items: [
      "State-of-the-art security system",
      "CCTV surveillance and intercom facility",
      "Generator backup for common areas",
      "Premium elevator interiors from OTIS, Kone, Schindler or ThyssenKrupp",
    ],
  },
  {
    title: "Fixtures and finishes",
    items: [
      "Stylish sanitaryware from Jaquar or Kohler",
      "High-quality aluminium or UPVC windows",
      "Mosquito mesh in windows",
      "Designed for everyday durability and comfort",
    ],
  },
  {
    title: "Living room comforts",
    items: [
      "Provision for inverters in apartments",
      "TV unit, dining table and sofa set in the living room",
      "Practical layouts for urban families and professionals",
      "City-connected living with privacy and ease",
    ],
  },
];

const companyHighlights = [
  {
    label: "Residential focus",
    title: "Thoughtful home planning",
    description:
      "Aishwarya Realtors focuses on residential developments designed around comfort, practical layouts and day-to-day ease for families and professionals.",
    accent: "bg-secondary/40",
  },
  {
    label: "Location approach",
    title: "Well-connected living",
    description:
      "The company emphasizes projects in accessible urban locations so residents can stay close to city essentials while enjoying a more comfortable lifestyle.",
    accent: "bg-background",
  },
  {
    label: "Project philosophy",
    title: "Quality with convenience",
    description:
      "Across projects, the aim is to combine dependable execution, useful amenities and a living experience that feels practical, modern and welcoming.",
    accent: "bg-secondary/40",
  },
];

const specifications = [
  {
    title: "Structure and walls",
    items: [
      "Earthquake-resistant RCC frame structure.",
      "External and internal partition walls with quality cement blocks or clay bricks.",
    ],
  },
  {
    title: "Flooring and finishes",
    items: [
      "800 x 800 mm vitrified, ceramic or porcelain tiles in living, dining, kitchen and bedrooms.",
      "600 x 600 mm tiles in bathrooms and kitchen dado.",
      "Anti-skid tiles for balcony and utility areas.",
      "Granite, marble or engineered stone in the entrance lobby, with 600 x 600 mm lobby tiles above the first floor.",
      "Berger, Asian, ICI Dulux, Nerolac or Surfa Coats equivalent for internal and external paint systems.",
    ],
  },
  {
    title: "Doors and windows",
    items: [
      "Main door with wooden frame and polished veneer finish, or equivalent engineered door system.",
      "Internal flush doors with laminate and wooden frames.",
      "Bathroom doors with laminate and wooden or granite frames.",
      "Standard hardware from Ozone, Dorset, Kich or equivalent.",
      "Heavy-duty aluminium powder-coated or UPVC windows with mosquito mesh and stone sill.",
    ],
  },
  {
    title: "Kitchen and plumbing",
    items: [
      "Kitchen and basin counters in polished granite or equivalent stone.",
      "CP fittings and accessories from Jaquar or Cera.",
      "Wall or floor mounted sanitary ware from Jaquar, Cera or equivalent.",
      "Mild steel balcony railing with wooden planks.",
    ],
  },
  {
    title: "Electrical",
    items: [
      "Television point in the living room and master bedroom.",
      "Telephone point in the living room.",
      "AC points in the master bedroom and living room.",
      "Power points for refrigerator, microwave, washing machine and geysers.",
      "Switchgear from Legrand, Schindler, Havells, ABB, Anchor or equivalent.",
      "Internal wiring from Finolex, Havells, Anchor, Polycab or Avocab or equivalent.",
    ],
  },
  {
    title: "Elevators and common areas",
    items: [
      "Otis, Kone, Schindler or ThyssenKrupp or equivalent elevators.",
      "Secure common areas with practical circulation and access planning.",
    ],
  },
];

const nearbyPlaces = [
  "Paud Road",
  "Shastri Road",
  "Vanaj Metro Station",
  "Sahyadri Hospital",
  "Paranjape School",
  "Karve Road",
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
        {eyebrow}
      </div>
      <h2 className="gold-underline text-3xl font-bold text-primary md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
            <Check className="h-3.5 w-3.5 text-primary" />
          </div>
          <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-card-luxe">
      <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
        {label}
      </div>
      <div className="mt-3 text-lg font-bold text-primary">{value}</div>
    </div>
  );
}

export default function AishwaryaHeightPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="Aishwarya Realtors"
        subtitle="Inspired Living, Perfectly Placed in Kothrud"
        crumbs={[{ label: "Brands", to: "/services" }, { label: "Aishwarya Realtors" }]}
        image={rental}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <Sparkles className="h-4 w-4" />
              Project by Dr. Mangesh Karad Sir
            </div>
            <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-5xl">
              A smarter way of city living
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              At Aishwarya Realtors, you are not just buying a flat. You are stepping into a more
              thoughtful way of living, with 2 BHK and 3 BHK homes designed for urban families and
              professionals who want city access without giving up privacy, comfort or lifestyle.
            </p>
            <p className="mt-5 leading-relaxed text-foreground/80">
              The brochure presents the project as a refined residential offering in Kothrud, with
              clear area statements, practical amenities and a strong focus on everyday ease.
            </p>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              {quickFacts.map((fact) => (
                <FactCard key={fact.label} label={fact.label} value={fact.value} />
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-primary p-8 text-white shadow-luxe">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Inspired quote
              </div>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                "Inspired Living, Perfectly Placed in Kothrud" is the guiding idea behind the
                brochure and the planning of the homes.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <img
              src={hero1}
              alt="Aishwarya Realtors living interior"
              className="h-64 w-full rounded-3xl object-cover shadow-luxe sm:col-span-2 sm:h-80"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <img
              src={hero2}
              alt="Aishwarya Realtors residential ambience"
              className="h-56 w-full rounded-3xl object-cover shadow-card-luxe"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <div className="rounded-3xl bg-card p-6 shadow-luxe">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Promoters and developer
              </div>
              <div className="mt-3 text-2xl font-bold text-destructive">Marvel Holdings LLP</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                CTS No. 714, Serve No. 163, Sutar Hospital Road, Azad Nagar, Kothrud, Pune,
                Maharashtra - 411038.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+919637672233"
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-primary hover-lift"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
                <a
                  href="mailto:Suneel.gilda@live.com"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-gold hover:text-gold"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Accessories"
            title="Comforts and fittings highlighted in the brochure"
            subtitle="Security, access control, branded fixtures and living-room furnishings come together to shape the project's everyday experience."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={hero1}
                alt="Interior living room"
                className="h-64 w-full rounded-3xl object-cover shadow-luxe sm:col-span-2"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
              <img
                src={hero2}
                alt="Styled residential room"
                className="h-56 w-full rounded-3xl object-cover shadow-card-luxe"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
              <div className="rounded-3xl bg-primary p-6 text-white shadow-luxe">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Living room package
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  The brochure specifically calls out a TV unit, dining table and sofa set for the
                  living room.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {amenityGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl bg-card p-6 shadow-card-luxe hover-lift"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    {group.title}
                  </div>
                  <BulletList items={group.items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Aishwarya Realtors"
            title="What people should know about the company"
            subtitle="Project layouts and specifications may vary, but Aishwarya Realtors is consistently centered on thoughtful planning, city convenience and comfortable residential living."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {companyHighlights.map((item) => (
              <div
                key={item.title}
                className={`rounded-3xl border border-border ${item.accent} p-7 shadow-card-luxe`}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  {item.label}
                </div>
                <h3 className="mt-3 text-3xl font-bold text-primary">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Specifications"
            title="Materials and finishes that define the build quality"
            subtitle="From structure and flooring to electricals and elevators, the brochure spells out the project's planned standards."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {specifications.map((section) => (
              <div key={section.title} className="rounded-3xl bg-card p-7 shadow-card-luxe">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  {section.title}
                </div>
                <BulletList items={section.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            <div className="rounded-3xl bg-card p-8 shadow-luxe">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                <MapPin className="h-4 w-4" />
                Location map
              </div>
              <h3 className="mt-4 text-3xl font-bold text-primary">Kothrud, Pune</h3>
              <p className="mt-4 text-muted-foreground">
                CTS No. 714, Serve No. 163, Sutar Hospital Road, Azad Nagar, Kothrud, Pune,
                Maharashtra - 411038.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {nearbyPlaces.map((place) => (
                  <span
                    key={place}
                    className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground/80"
                  >
                    {place}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/10 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Brochure note
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  The brochure states that Maha RERA registration is not required because the plot
                  is below 5R.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-luxe">
              <img
                src={locationMap}
                alt="Aishwarya Realtors location map"
                className="aspect-[16/7] w-full object-cover object-center"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-navy to-primary p-10 text-center text-white shadow-luxe md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.13_78/0.2),transparent_45%)]" />
            <div className="relative mx-auto max-w-3xl">
              <Sparkles className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Ready to explore Aishwarya Realtors?
              </h2>
              <p className="mb-8 text-white/80">
                Reach out for availability, unit plans and a walk-through of the brochure details.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+919637672233"
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary hover-lift"
                >
                  <Phone className="h-4 w-4" />
                  Call Developer
                </a>
                <a
                  href="mailto:Suneel.gilda@live.com"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  Email Team
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  Urbanx Contact <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
