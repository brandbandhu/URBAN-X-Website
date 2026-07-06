import type { ServicePageData } from "@/components/site/ServicePageTemplate";
import {
  ChefHat,
  Building2,
  Layers,
  Construction,
  Drill,
  Factory,
  HardHat,
  Home,
  Hotel,
  Lamp,
  ShieldCheck,
  Sofa,
  Sparkles,
  Sprout,
  Trees,
  Wrench,
  Truck,
  Square,
  Armchair,
  Gem,
  Wind,
  MonitorSmartphone,
} from "lucide-react";
import gardening from "@/assets/service-gardening.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import housekeeping from "@/assets/service-housekeeping.jpg";
import marble from "@/assets/service-marble.jpg";
import rental from "@/assets/service-rental.jpg";
import {
  theHungryScholarsDirectorMessage,
  theHungryScholarsOperationalStrength,
  theHungryScholarsServices,
  theHungryScholarsStrengths,
} from "@/lib/siteContent";

export const newRoyalServicesData = {
  companyName: "New Royal Services",
  accentLabel: "Housekeeping, Gardening & More",
  tagline:
    "Housekeeping, gardening, landscaping, interior designing, architecture and IT support for homes and businesses.",
  detailBasePath: "/new-royal-services",
  banner: housekeeping,
  intro:
    "New Royal Services brings multi-discipline support for homes, institutions and workplaces - from housekeeping and gardening to landscaping, interiors, architecture and IT solutions.",
  about: [
    "We serve homes, societies, offices and institutions with practical services tailored to each site and project scope.",
    "Our team handles upkeep, outdoor care, design support and digital solutions through one reliable point of contact.",
  ],
  services: [
    {
      icon: Sparkles,
      title: "Housekeeping",
      desc: "Daily cleaning, upkeep and sanitization for homes, offices and shared spaces.",
    },
    {
      icon: Sprout,
      title: "Gardening",
      desc: "Plant care, watering, pruning and seasonal garden maintenance.",
    },
    {
      icon: Trees,
      title: "Landscaping",
      desc: "Outdoor design, lawn care and green-space presentation.",
    },
    {
      icon: Sofa,
      title: "Interior Designing",
      desc: "Functional and stylish interior planning for homes and workplaces.",
    },
    {
      icon: Building2,
      title: "Architecture",
      desc: "Concept planning, design coordination and build-ready guidance.",
    },
    {
      icon: MonitorSmartphone,
      title: "IT Solutions",
      desc: "Digital support, web, software and technology services for growing teams.",
    },
  ],
  benefits: [
    "Trained professionals and reliable execution",
    "Flexible plans for recurring work or project-based needs",
    "Transparent pricing and clear scope from the start",
    "Timely delivery with responsive coordination",
    "Quality checks to keep work standards consistent",
    "One team for multiple service needs",
  ],
  process: [
    {
      step: "01",
      title: "Discovery Visit",
      desc: "We visit, assess your space and understand the service or project scope.",
    },
    {
      step: "02",
      title: "Custom Plan",
      desc: "Receive a practical schedule, service list and transparent pricing.",
    },
    {
      step: "03",
      title: "Team Deployment",
      desc: "The right team arrives on time with the right tools and coordination.",
    },
    {
      step: "04",
      title: "Quality Review",
      desc: "Supervision and feedback keep standards consistent over time.",
    },
  ],
  gallery: [housekeeping, gardening, hero2, hero1, gardening, housekeeping],
} satisfies ServicePageData;

export const aishwaryaHeightData = {
  companyName: "Aishwarya Heights",
  accentLabel: "Construction & Contracting",
  tagline:
    "End-to-end construction, project support and site equipment rental for residential, commercial and institutional work.",
  detailBasePath: "/aishwarya-height",
  banner: rental,
  intro:
    "Aishwarya Height powers builders, contractors and developers with a complete construction ecosystem - from planning and execution to machinery, scaffolding and site support.",
  about: [
    "Our team manages labour, budgeting, billing and detailed execution oversight so projects stay on schedule and on spec.",
    "We provide reliable equipment rental and site support for residential towers, commercial complexes, hospitals, institutions and more.",
  ],
  services: [
    {
      icon: Construction,
      title: "Construction Planning",
      desc: "Pre-build planning, coordination and execution support.",
    },
    {
      icon: HardHat,
      title: "Project Management",
      desc: "Labour, budgeting, billing and schedule oversight.",
    },
    {
      icon: Truck,
      title: "Heavy Machinery Rental",
      desc: "Excavators, loaders, mixers and other site machinery.",
    },
    {
      icon: Layers,
      title: "Scaffolding Systems",
      desc: "Cup-lock, frame and access scaffolding for every project size.",
    },
    {
      icon: Drill,
      title: "Tools and Consumables",
      desc: "Power tools, hand tools and support materials.",
    },
    {
      icon: Wrench,
      title: "Flooring & Marble Finishes",
      desc: "High-end flooring and marble installation support.",
    },
    {
      icon: Construction,
      title: "POP & Interior Finishing",
      desc: "Finishing work, plaster and detail execution.",
    },
    {
      icon: HardHat,
      title: "Electrical & HVAC Support",
      desc: "Electrical systems, AC and HVAC coordination.",
    },
    {
      icon: Truck,
      title: "Site Logistics",
      desc: "Timely delivery and pickup with on-site support.",
    },
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
    {
      step: "01",
      title: "Share Requirement",
      desc: "Tell us what equipment, support or construction scope you need.",
    },
    { step: "02", title: "Get a Quote", desc: "Receive a transparent quote and schedule outline." },
    {
      step: "03",
      title: "On-Time Delivery",
      desc: "Equipment and support arrive at your site, ready to work.",
    },
    {
      step: "04",
      title: "Ongoing Support",
      desc: "Maintenance and replacement support continue through the project.",
    },
  ],
  gallery: [rental, hero3, rental, hero1, hero3, rental],
} satisfies ServicePageData;

export const deMarvelFurnishingsData = {
  companyName: "De Marvel Furnishings",
  accentLabel: "Interior Experience for All Places",
  tagline:
    "Modern, functional and aesthetic interior solutions for homes, offices, healthcare spaces, schools and colleges.",
  detailBasePath: "/de-marvel-furnishings",
  banner: marble,
  intro:
    "De Marvel Furnishings transforms spaces with modern, functional and beautifully resolved interiors designed by professionals with more than 10 years of experience and over 10 lakh square feet of completed work.",
  about: [
    "We combine creativity with practical planning to deliver spaces that reflect your personality, purpose and budget.",
    "Our work spans homes, offices, healthcare spaces and institutions, with a strong focus on mood boards, colour themes and complete furnishing solutions.",
  ],
  services: [
    {
      icon: Sofa,
      title: "Residential Interiors",
      desc: "Homes, apartments and living spaces planned for comfort and style.",
    },
    {
      icon: Armchair,
      title: "Designer Curtains & Fabrics",
      desc: "Customized fabrics, curtains and soft furnishing details.",
    },
    {
      icon: Square,
      title: "Wallpapers & Wall Decor",
      desc: "Premium wallpapers, cladding and decorative wall finishes.",
    },
    {
      icon: Wind,
      title: "Sofa Sets and Study Chairs",
      desc: "Functional seating, study chairs and custom furniture pieces.",
    },
    {
      icon: Gem,
      title: "Wardrobes & Space Planning",
      desc: "Storage solutions, layout optimisation and built-in furniture.",
    },
    {
      icon: Lamp,
      title: "Smart Controls & Automation",
      desc: "Lighting integration and modern living controls.",
    },
    {
      icon: Sofa,
      title: "Commercial Interiors",
      desc: "Office design, furniture and functional workspace layouts.",
    },
    {
      icon: Armchair,
      title: "Healthcare Interiors",
      desc: "Hospitals and clinics designed for hygiene and efficiency.",
    },
    {
      icon: Square,
      title: "Institutional Spaces",
      desc: "Schools, colleges, studios, auditoriums and amphitheatres.",
    },
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
    {
      step: "01",
      title: "Consultation",
      desc: "Share your space, style and inspiration with our design team.",
    },
    {
      step: "02",
      title: "Concept & Quote",
      desc: "Receive concepts, material options and detailed pricing.",
    },
    {
      step: "03",
      title: "Crafting",
      desc: "Pieces are built with regular progress updates and quality checks.",
    },
    { step: "04", title: "Installation", desc: "Careful delivery and installation in your space." },
  ],
  gallery: [marble, hero3, marble, hero1, hero3, marble],
} satisfies ServicePageData;

export const theHungryScholarsData = {
  companyName: "The Hungry Scholars",
  accentLabel: "Institutional Catering",
  tagline: "Trusted food service partner for educational institutions",
  detailBasePath: "/the-hungry-scholars",
  banner: hero2,
  intro: theHungryScholarsDirectorMessage,
  about: [
    "The Hungry Scholars is a professionally managed food service company with more than 25 years of experience in institutional catering and large-scale food operations.",
    "We currently serve approximately 2,200 to 2,500 students at MIT ADT University and are known for reliable service, hygienic kitchens, balanced menus and consistent quality.",
  ],
  services: theHungryScholarsServices.map((service) => ({
    icon: ChefHat,
    title: service,
    desc: "Dedicated food service planning and execution for institutional operations.",
  })),
  benefits: theHungryScholarsStrengths,
  process: theHungryScholarsOperationalStrength.map((row, index) => ({
    step: String(index + 1).padStart(2, "0"),
    title: row.category,
    desc: row.details,
  })),
  gallery: [hero2, hero1, hero3, hero2, hero1, hero3],
} satisfies ServicePageData;
