import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { Construction, Drill, HardHat, Layers, Truck, Wrench } from "lucide-react";
import rental from "@/assets/service-rental.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero1 from "@/assets/hero-1.jpg";

export default function AishwaryaRentalPage() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        data={{
          companyName: "Aishwarya Rental",
          accentLabel: "Construction & Contracting",
          tagline: "End-to-end construction, project support and site equipment rental for residential, commercial and institutional work.",
          banner: rental,
          intro:
            "Aishwarya Rental powers builders, contractors and developers with a complete construction ecosystem - from planning and execution to machinery, scaffolding and site support.",
          about: [
            "Our team manages labour, budgeting, billing and detailed execution oversight so projects stay on schedule and on spec.",
            "We provide reliable equipment rental and site support for residential towers, commercial complexes, hospitals, institutions and more.",
          ],
          services: [
            { icon: Construction, title: "Construction Planning", desc: "Pre-build planning, coordination and execution support." },
            { icon: HardHat, title: "Project Management", desc: "Labour, budgeting, billing and schedule oversight." },
            { icon: Truck, title: "Heavy Machinery Rental", desc: "Excavators, loaders, mixers and other site machinery." },
            { icon: Layers, title: "Scaffolding Systems", desc: "Cup-lock, frame and access scaffolding for every project size." },
            { icon: Drill, title: "Tools and Consumables", desc: "Power tools, hand tools and support materials." },
            { icon: Wrench, title: "Flooring & Marble Finishes", desc: "High-end flooring and marble installation support." },
            { icon: Construction, title: "POP & Interior Finishing", desc: "Finishing work, plaster and detail execution." },
            { icon: HardHat, title: "Electrical & HVAC Support", desc: "Electrical systems, AC and HVAC coordination." },
            { icon: Truck, title: "Site Logistics", desc: "Timely delivery and pickup with on-site support." },
          ],
          benefits: [
            "Well-maintained, inspected equipment",
            "On-time delivery and pickup logistics",
            "Flexible daily, weekly and monthly plans",
            "Transparent terms and competitive pricing",
            "Replacement support if equipment fails on site",
            "Single-vendor convenience for diverse needs",
          ],
          process: [
            { step: "01", title: "Share Requirement", desc: "Tell us what equipment, support or construction scope you need." },
            { step: "02", title: "Get a Quote", desc: "Receive a transparent quote and schedule outline." },
            { step: "03", title: "On-Time Delivery", desc: "Equipment and support arrive at your site, ready to work." },
            { step: "04", title: "Ongoing Support", desc: "Maintenance and replacement support continue through the project." },
          ],
          gallery: [rental, hero3, rental, hero1, hero3, rental],
        }}
      />
    </SiteLayout>
  );
}
