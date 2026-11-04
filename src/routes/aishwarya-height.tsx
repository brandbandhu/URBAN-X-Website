import { Link } from "@/components/site/AppLink";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, Check, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import buildingExterior from "@/assets/aishwarya-heights/building-exterior.jpeg";
import diningRoom from "@/assets/aishwarya-heights/dining-room.jpeg";
import livingRoom from "@/assets/aishwarya-heights/living-room.jpeg";
import locationMap from "@/assets/aishwarya-heights/location-map.png";
import tvUnit from "@/assets/aishwarya-heights/tv-unit.jpeg";
import unitPlans from "@/assets/aishwarya-heights/unit-plans.png";

const quickFacts = [
  { label: "Location", value: "Kothrud, Pune" },
  { label: "3 BHK", value: "1,042 sq.ft. carpet" },
  { label: "3 BHK built-up", value: "1,405 sq.ft." },
  { label: "2 BHK", value: "850 / 873 sq.ft. carpet" },
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
    label: "3 BHK homes",
    title: "1,405 sq.ft. built-up",
    description:
      "3 BHK flats 201, 301, 401, 501 and 601 carry a 1,042 sq.ft. carpet area and 1,405 sq.ft. built-up area.",
    accent: "bg-secondary/40",
  },
  {
    label: "2 BHK homes",
    title: "Two area options",
    description:
      "2 BHK flats are offered in two configurations: 873 sq.ft. carpet with 1,179 sq.ft. built-up, and 850 sq.ft. carpet with 1,148 sq.ft. built-up.",
    accent: "bg-background",
  },
  {
    label: "Promoters & developer",
    title: "Marvel Holdings LLP",
    description:
      "Project by Dr. Mangesh Karad Sir at CTS No. 714, Survey No. 163, Sutar Hospital Road, Azad Nagar, Kothrud, Pune.",
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

const projectPhotos = [
  {
    src: buildingExterior,
    alt: "Aishwarya Realtors residential building exterior",
  },
  {
    src: livingRoom,
    alt: "Aishwarya Realtors living room from the brochure",
  },
  {
    src: diningRoom,
    alt: "Aishwarya Realtors dining room from the brochure",
  },
  {
    src: tvUnit,
    alt: "Aishwarya Realtors TV unit from the brochure",
  },
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
        image={buildingExterior}
      />

      <section className="py-14 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <Sparkles className="h-4 w-4" />
              Project by Dr. Mangesh Karad Sir
            </div>
            <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-5xl">
              Inspired living, perfectly placed in Kothrud
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              At Aishwarya Realtors, you're not just buying a flat - you're stepping into a smarter
              way of city living. These thoughtfully designed 2 BHK and 3 BHK homes are made for
              urban families and professionals who want to stay connected to the city's pulse
              without compromising on privacy and lifestyle.
            </p>
            <p className="mt-5 leading-relaxed text-foreground/80">
              The project is promoted by Marvel Holdings LLP and is located at CTS No. 714, Survey
              No. 163, Sutar Hospital Road, Azad Nagar, Kothrud, Pune, Maharashtra - 411038.
            </p>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              {quickFacts.map((fact) => (
                <FactCard key={fact.label} label={fact.label} value={fact.value} />
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-primary p-6 text-white shadow-luxe sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Inspired quote
              </div>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                "Inspired Living, Perfectly Placed in Kothrud" is the project’s brochure promise.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <img
              src={buildingExterior}
              alt="Aishwarya Realtors building exterior from the brochure"
              className="h-56 w-full rounded-3xl object-cover shadow-luxe sm:col-span-2 sm:h-80"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <img
              src={livingRoom}
              alt="Aishwarya Realtors living room from the brochure"
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

      <section className="bg-secondary/40 py-14 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Brochure Gallery"
            title="Aishwarya Realtors in Kothrud"
            subtitle="Actual project and interior visuals taken from the Aishwarya Realtors brochure."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projectPhotos.map((photo) => (
              <div
                key={photo.src}
                className="group overflow-hidden rounded-3xl bg-card shadow-luxe"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-[28rem] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 md:h-[36rem]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Unit Plans"
            title="Typical 2nd to 6th floor plan"
            subtitle="The brochure shows the 2 BHK and 3 BHK layouts together with their carpet and built-up area statements."
          />
          <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl bg-card shadow-luxe">
            <img
              src={unitPlans}
              alt="Aishwarya Realtors unit plans and area statements from the brochure"
              className="h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-14 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Accessories"
            title="Comforts and fittings highlighted in the brochure"
            subtitle="The brochure highlights security, elevators, sanitaryware, windows, generator backup and living-room furnishings."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={livingRoom}
                alt="Aishwarya Realtors living room from the brochure"
                className="h-64 w-full rounded-3xl object-cover shadow-luxe sm:col-span-2"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
              <img
                src={diningRoom}
                alt="Aishwarya Realtors dining room from the brochure"
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

      <section className="py-14 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Aishwarya Realtors"
            title="What people should know about the company"
            subtitle="Aishwarya Realtors combines practical layouts, everyday amenities and a connected Kothrud location for comfortable residential living."
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

      <section className="bg-secondary/40 py-14 md:py-20">
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

      <section className="py-14 md:py-28">
        <div className="container-x">
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
              <div className="rounded-3xl bg-card p-6 shadow-luxe sm:p-8">
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

              <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/10 p-4 sm:p-5">
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
                alt="Aishwarya Realtors location map from the brochure"
                className="aspect-[16/7] w-full object-cover object-center"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-navy to-primary p-6 text-center text-white shadow-luxe sm:p-10 md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.13_78/0.2),transparent_45%)]" />
            <div className="relative mx-auto max-w-3xl">
              <Sparkles className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Ready to explore Aishwarya Realtors?
              </h2>
              <p className="mb-8 text-white/80">
                Reach out for availability, unit plans and a walk-through of the brochure details.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="tel:+919637672233"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary hover-lift sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  Call Developer
                </a>
                <a
                  href="mailto:Suneel.gilda@live.com"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary sm:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  Email Team
                </a>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-primary sm:w-auto"
                >
                  De Marvel Infra Solutions Contact <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
