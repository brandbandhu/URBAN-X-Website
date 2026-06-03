import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { Wrench, HardHat, Layers, Truck, Drill, Construction } from "lucide-react";
import rental from "@/assets/service-rental.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero1 from "@/assets/hero-1.jpg";

export default function AishwaryaRentalPage() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        data={{
          companyName: "Aishwarya Rental",
          accentLabel: "Construction Equipment Rental",
          tagline: "Heavy machinery, scaffolding, tools and project support - delivered on time, every time.",
          banner: rental,
          intro: "Aishwarya Rental powers builders, contractors and developers with a complete fleet of construction equipment, scaffolding systems and supporting materials - backed by reliable logistics and on-site support.",
          about: [
            "Our rental fleet covers everything from heavy machinery to small power tools, allowing project teams to scale capacity without locking up capital in equipment.",
            "Each rental is supported by timely delivery, regular maintenance and on-call assistance, so your project never stops moving forward.",
          ],
          services: [
            { icon: Construction, title: "Heavy Machinery", desc: "Excavators, loaders, mixers and site machinery on flexible rental terms." },
            { icon: Layers, title: "Scaffolding Systems", desc: "Cup-lock, frame and access scaffolding for every project size." },
            { icon: Drill, title: "Power Tools", desc: "Drills, breakers, cutters and a full range of professional power tools." },
            { icon: Wrench, title: "Hand Tools", desc: "Quality hand tools and consumables - available individually or in kits." },
            { icon: Truck, title: "Project Rental", desc: "End-to-end project rental packages with logistics included." },
            { icon: HardHat, title: "Site Support", desc: "Safety gear, signage and construction support materials on demand." },
          ],
          benefits: [
            "Well-maintained, inspected and reliable equipment",
            "On-time delivery and pickup logistics",
            "Flexible daily, weekly and monthly rental plans",
            "Competitive pricing with transparent terms",
            "Replacement support if equipment fails on site",
            "Single-vendor convenience for diverse rental needs",
          ],
          process: [
            { step: "01", title: "Share Requirement", desc: "Tell us what equipment you need and when." },
            { step: "02", title: "Get a Quote", desc: "Receive a fast, transparent quote within hours." },
            { step: "03", title: "On-time Delivery", desc: "Equipment arrives at your site, ready to work." },
            { step: "04", title: "Ongoing Support", desc: "Maintenance and replacement support throughout your rental." },
          ],
          gallery: [rental, hero3, rental, hero1, hero3, rental],
        }}
      />
    </SiteLayout>
  );
}
