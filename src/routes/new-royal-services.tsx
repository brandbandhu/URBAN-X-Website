import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { Home, Building2, Hotel, Factory, Sprout, Trees } from "lucide-react";
import housekeeping from "@/assets/service-housekeeping.jpg";
import gardening from "@/assets/service-gardening.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero1 from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/new-royal-services")({
  head: () => ({
    meta: [
      { title: "New Royal Services | Housekeeping & Gardening — URBAN-X" },
      { name: "description", content: "Residential, commercial, society, office, hotel and industrial cleaning, plus full-spectrum garden and landscaping care." },
      { property: "og:title", content: "New Royal Services" },
      { property: "og:description", content: "Housekeeping and gardening experts under the URBAN-X group." },
      { property: "og:image", content: housekeeping },
    ],
  }),
  component: () => (
    <SiteLayout>
      <ServicePageTemplate
        data={{
          companyName: "New Royal Services",
          accentLabel: "Housekeeping & Gardening",
          tagline: "Professional cleaning and landscaping for homes, hotels, societies, offices and industries.",
          banner: housekeeping,
          intro: "From everyday housekeeping to seasonal landscaping, New Royal Services delivers spotless, beautifully kept spaces — backed by trained teams and proven processes.",
          about: [
            "We serve residential apartments, gated societies, hotels, commercial offices and industrial facilities with tailored cleaning and grounds-care programmes.",
            "Every team is uniformed, supervised and equipped with modern tools and eco-friendly cleaning agents to deliver consistent, premium results.",
          ],
          services: [
            { icon: Home, title: "Residential Cleaning", desc: "Deep cleaning, regular housekeeping and post-construction cleaning for homes & apartments." },
            { icon: Building2, title: "Commercial Cleaning", desc: "Daily office cleaning, sanitisation and façade care for businesses of every size." },
            { icon: Hotel, title: "Hotel Housekeeping", desc: "Hospitality-grade housekeeping crews trained to international service standards." },
            { icon: Factory, title: "Industrial Cleaning", desc: "Heavy-duty cleaning for warehouses, factories and industrial complexes." },
            { icon: Sprout, title: "Garden Maintenance", desc: "Regular pruning, watering, fertilising and pest care for thriving gardens." },
            { icon: Trees, title: "Landscaping Support", desc: "Lawn care, plant installation and landscape design assistance." },
          ],
          benefits: [
            "Trained, uniformed and background-verified staff",
            "Modern equipment and eco-friendly cleaning agents",
            "Dedicated supervisor for every long-term contract",
            "Transparent SLAs and quality audits",
            "Flexible daily, weekly or one-time service plans",
            "Rapid response and 24/7 client support",
          ],
          process: [
            { step: "01", title: "Free Site Survey", desc: "We visit, assess your space and understand your specific requirements." },
            { step: "02", title: "Custom Proposal", desc: "Receive a detailed scope, schedule and transparent pricing." },
            { step: "03", title: "Team Deployment", desc: "Trained teams arrive on time, in uniform, with the right equipment." },
            { step: "04", title: "Quality Audit", desc: "Regular supervisor checks and feedback loop to keep standards high." },
          ],
          gallery: [housekeeping, gardening, hero2, hero1, gardening, housekeeping],
        }}
      />
    </SiteLayout>
  ),
});
