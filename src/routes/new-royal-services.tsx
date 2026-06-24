import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { Building2, Factory, HardHat, Home, Hotel, ShieldCheck, Sparkles, Sprout, Trees, Wrench } from "lucide-react";
import housekeeping from "@/assets/service-housekeeping.jpg";
import gardening from "@/assets/service-gardening.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero1 from "@/assets/hero-1.jpg";

export default function NewRoyalServicesPage() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        data={{
          companyName: "New Royal Services",
          accentLabel: "Housekeeping & Gardening",
          tagline: "Professional cleaning, maintenance and outdoor care for homes, institutions and workplaces.",
          banner: housekeeping,
          intro:
            "Urbanx Housekeeping Services bring professional cleaning solutions right to your doorstep - from everyday maintenance to deep sanitization and floor care.",
          about: [
            "We serve hospitals, hostels, canteens, corporate offices, residential societies and individual homes with tailored cleaning programmes.",
            "Teams are trained, uniformed and supervised, and we use modern tools and eco-friendly cleaning agents to deliver consistent, dependable results.",
          ],
          services: [
            { icon: Sparkles, title: "Daily Cleaning & Maintenance", desc: "Everyday upkeep for homes, offices and common areas." },
            { icon: Building2, title: "Office & Commercial Cleaning", desc: "Workspaces, reception areas and shared zones kept spotless." },
            { icon: Hotel, title: "Hostel & Institutional Cleaning", desc: "Reliable cleaning for hostels, canteens and educational spaces." },
            { icon: ShieldCheck, title: "Sanitization & Disinfection", desc: "Hygienic treatment for high-contact areas and shared facilities." },
            { icon: Wrench, title: "Floor Scrubbing & Polishing", desc: "Care for tile, stone and marble surfaces with a professional finish." },
            { icon: Home, title: "Glass, Carpet & Sofa Cleaning", desc: "Deep cleaning for furnishings, windows and interiors." },
            { icon: Sprout, title: "Garden Maintenance", desc: "Plant care, watering, pruning and seasonal plantation support." },
            { icon: Trees, title: "Lawn & Landscape Care", desc: "Mowing, trimming and garden presentation for outdoor spaces." },
            { icon: Factory, title: "Waste & Facility Support", desc: "Waste management and maintenance support for larger sites." },
            { icon: HardHat, title: "Special Occasion Cleaning", desc: "Festival and event readiness for a polished finish." },
          ],
          benefits: [
            "Trained, uniformed and background-verified staff",
            "Modern equipment and eco-friendly cleaning agents",
            "Dedicated supervisor for every long-term contract",
            "Transparent SLAs and quality audits",
            "Flexible daily, weekly or one-time plans",
            "Rapid response and 24/7 client support",
          ],
          process: [
            { step: "01", title: "Free Site Survey", desc: "We visit, assess your space and understand the cleaning or garden scope." },
            { step: "02", title: "Custom Plan", desc: "Receive a practical schedule, service list and transparent pricing." },
            { step: "03", title: "Team Deployment", desc: "Trained teams arrive on time, in uniform, with the right equipment." },
            { step: "04", title: "Quality Review", desc: "Supervision and feedback keep standards consistent over time." },
          ],
          gallery: [housekeeping, gardening, hero2, hero1, gardening, housekeeping],
        }}
      />
    </SiteLayout>
  );
}
