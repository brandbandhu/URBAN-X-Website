import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { Armchair, Gem, Lamp, Sofa, Square, Wind } from "lucide-react";
import marble from "@/assets/service-marble.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero1 from "@/assets/hero-1.jpg";

export default function UrbanDePage() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        data={{
          companyName: "De Marvel Furnishings",
          accentLabel: "Interior Experience for All Places",
          tagline:
            "Modern, functional and aesthetic interior solutions for homes, offices, healthcare spaces, schools and colleges.",
          banner: marble,
          intro:
            "De Marvel Furnishings transforms spaces with modern, functional and beautifully resolved interiors designed by professionals with more than 10 years of experience and over 10 lakh square feet of completed work.",
          about: [
            "We combine creativity with practical planning to deliver spaces that reflect your personality, purpose and budget.",
            "Our work spans homes, offices, healthcare spaces and institutions, with a strong focus on mood boards, colour themes and complete furnishing solutions.",
          ],
          services: [
            { icon: Sofa, title: "Residential Interiors", desc: "Homes, apartments and living spaces planned for comfort and style." },
            { icon: Armchair, title: "Designer Curtains & Fabrics", desc: "Customized fabrics, curtains and soft furnishing details." },
            { icon: Square, title: "Wallpapers & Wall Decor", desc: "Premium wallpapers, cladding and decorative wall finishes." },
            { icon: Wind, title: "Sofa Sets and Study Chairs", desc: "Functional seating, study chairs and custom furniture pieces." },
            { icon: Gem, title: "Wardrobes & Space Planning", desc: "Storage solutions, layout optimisation and built-in furniture." },
            { icon: Lamp, title: "Smart Controls & Automation", desc: "Lighting integration and modern living controls." },
            { icon: Sofa, title: "Commercial Interiors", desc: "Office design, furniture and functional workspace layouts." },
            { icon: Armchair, title: "Healthcare Interiors", desc: "Hospitals and clinics designed for hygiene and efficiency." },
            { icon: Square, title: "Institutional Spaces", desc: "Schools, colleges, studios, auditoriums and amphitheatres." },
          ],
          benefits: [
            "Bespoke designs tailored to your space",
            "Premium material selection and finishing",
            "Skilled craftsmen and attentive execution",
            "Designer collaboration and custom commissions",
            "Pan-region delivery and installation support",
            "After-sales care and practical maintenance guidance",
          ],
          process: [
            { step: "01", title: "Consultation", desc: "Share your space, style and inspiration with our design team." },
            { step: "02", title: "Concept & Quote", desc: "Receive concepts, material options and detailed pricing." },
            { step: "03", title: "Crafting", desc: "Pieces are built with regular progress updates and quality checks." },
            { step: "04", title: "Installation", desc: "Careful delivery and installation in your space." },
          ],
          gallery: [marble, hero3, marble, hero1, hero3, marble],
        }}
      />
    </SiteLayout>
  );
}
