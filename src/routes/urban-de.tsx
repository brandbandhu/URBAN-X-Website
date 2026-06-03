import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { Sofa, Armchair, Square, Wind, Gem, Lamp } from "lucide-react";
import marble from "@/assets/service-marble.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero1 from "@/assets/hero-1.jpg";

export default function UrbanDePage() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        data={{
          companyName: "URBAN-DE",
          accentLabel: "Marble & Furnishing",
          tagline: "Bespoke marble furniture, drapery and premium decor for interiors that deserve more.",
          banner: marble,
          intro: "URBAN-DE crafts statement marble pieces and curates premium interior furnishing - from sofas and chairs to curtains and accent decor - for homes, hotels and high-end commercial spaces.",
          about: [
            "Each piece is built around fine materials, considered design and meticulous craftsmanship. We work closely with designers, architects and discerning clients to deliver pieces that elevate any space.",
            "Our atelier combines traditional artistry with modern manufacturing - so every order is unique, refined and unmistakably premium.",
          ],
          services: [
            { icon: Sofa, title: "Marble Sofas", desc: "Sculpted marble sofas with custom upholstery options." },
            { icon: Armchair, title: "Marble Chairs", desc: "Statement chairs in solid and veneer marble finishes." },
            { icon: Square, title: "Marble Pillows", desc: "Decorative carved marble pillows for a sculptural accent." },
            { icon: Wind, title: "Curtains & Drapery", desc: "Bespoke curtains, sheers and drapery in premium fabrics." },
            { icon: Gem, title: "Interior Furnishing", desc: "End-to-end furnishing for premium homes and hospitality." },
            { icon: Lamp, title: "Premium Decor", desc: "Accent pieces, lighting and curated decor solutions." },
          ],
          benefits: [
            "Bespoke designs tailored to your space",
            "Premium marble sourcing and finishing",
            "Skilled in-house craftsmen and artisans",
            "Designer collaborations and custom commissions",
            "Pan-region delivery and installation",
            "After-sales care and maintenance guidance",
          ],
          process: [
            { step: "01", title: "Consultation", desc: "Share your space, style and inspiration with our design team." },
            { step: "02", title: "Concept & Quote", desc: "Receive design concepts, material options and detailed pricing." },
            { step: "03", title: "Crafting", desc: "Pieces are crafted in our atelier with regular progress updates." },
            { step: "04", title: "Installation", desc: "Careful delivery and installation in your space." },
          ],
          gallery: [marble, hero3, marble, hero1, hero3, marble],
        }}
      />
    </SiteLayout>
  );
}
