import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageBanner } from "@/components/site/PageBanner";
import { ArrowRight, Sprout, Wrench, Sofa } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import housekeeping from "@/assets/service-housekeeping.jpg";
import rental from "@/assets/service-rental.jpg";
import marble from "@/assets/service-marble.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Companies & Services | URBAN-X" },
      { name: "description", content: "Explore the three URBAN-X companies — New Royal Services, Aishwarya Rental and URBAN-DE." },
      { property: "og:title", content: "Our Companies & Services" },
      { property: "og:description", content: "Three specialised brands. One trusted group." },
    ],
  }),
  component: ServicesPage,
});

const companies = [
  {
    to: "/new-royal-services",
    img: housekeeping,
    title: "New Royal Services",
    tagline: "Housekeeping & Gardening Experts",
    icon: Sprout,
    points: ["Residential & commercial cleaning", "Hotel & hospitality housekeeping", "Industrial & society maintenance", "Garden, lawn & landscaping care"],
  },
  {
    to: "/aishwarya-rental",
    img: rental,
    title: "Aishwarya Rental",
    tagline: "Construction Equipment Rental",
    icon: Wrench,
    points: ["Heavy machinery rental", "Scaffolding & access systems", "Tools & construction support materials", "Project rental & site solutions"],
  },
  {
    to: "/urban-de",
    img: marble,
    title: "URBAN-DE",
    tagline: "Marble & Premium Furnishing",
    icon: Sofa,
    points: ["Marble sofas, chairs & pillows", "Bespoke curtains & drapery", "Interior furnishing solutions", "Premium décor accents"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="Our Companies & Services"
        subtitle="Three specialised brands working under one trusted promise — meet the URBAN-X family."
        crumbs={[{ label: "Services" }]}
        image={hero1}
      />

      <section className="py-20 md:py-28">
        <div className="container-x space-y-20">
          {companies.map((c, i) => (
            <div key={c.to} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""}`}>
              <div className="relative">
                <img src={c.img} alt={c.title} className="rounded-2xl shadow-luxe w-full h-[480px] object-cover" loading="lazy" />
                <div className="absolute top-5 left-5 w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-luxe">
                  <c.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div>
                <div className="text-gold font-semibold uppercase text-xs tracking-[0.3em] mb-3">{c.tagline}</div>
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 gold-underline">{c.title}</h2>
                <ul className="space-y-3 mt-8 mb-8">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-foreground/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {p}
                    </li>
                  ))}
                </ul>
                <Link to={c.to} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-navy transition-colors">
                  Visit {c.title} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
