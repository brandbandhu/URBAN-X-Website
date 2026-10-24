import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  Building2,
  CalendarDays,
  ChefHat,
  Construction,
  Factory,
  HardHat,
  Hotel,
  Home,
  MonitorSmartphone,
  ShieldCheck,
  Sofa,
  Sparkles,
  Sprout,
  Star,
  Trees,
  Wrench,
} from "lucide-react";

export type IconCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

export type BrandCard = {
  icon: LucideIcon;
  label: string;
  tagline: string;
  description: string;
  to: string;
};

export type DeMarvelMetric = {
  target: number;
  label: string;
  unit?: string;
};

export const demarvelBrand = {
  name: "D Marvel Infra Solutions",
  tagline: "Designing Spaces. Building Possibilities.",
  heroTitle: "D Marvel Infra Solutions – Interior, Infrastructure & Design",
  heroLead:
    "D Marvel Infra Solutions brings interior design, architectural planning, infrastructure development and landscaping together through one coordinated team.",
  heroDetail:
    "From architectural drawings and interior execution to infrastructure development and outdoor design, the work is shaped around the purpose of each space.",
};

export const demarvelContact = {
  office: "Shop No 138, The Capital, Hadapsar, Pune",
  highway: "Pune-Solapur Highway, Pune, Maharashtra",
  phoneDisplay: "+91 8983630096",
  phoneHref: "tel:+918983630096",
  whatsappHref: "https://wa.me/918983630096",
  email: undefined,
  emailHref: undefined,
  director: "Raghvendra Chate",
  studioSize: "1,500 sq. ft. design studio",
};

export const demarvelStudio = {
  headline: "Designing Spaces. Building Possibilities.",
  summary:
    "D Marvel Infra Solutions is an interior and infrastructure partner where architecture, interiors, landscaping and execution come together under one roof.",
  promise:
    "We combine innovation, expertise, craftsmanship, technology and professionalism to transform ideas into thoughtfully designed and beautifully executed spaces.",
};

export const demarvelTeam = [
  { name: "Rajeshwari Karad", role: "De marvel Team" },
  { name: "Raghvendra Chate", role: "Director" },
  { name: "Virendra Pratap Karad", role: "Deputy Director" },
  { name: "Krishna Yadav", role: "Special Duty Officer" },
  { name: "Bhosale", role: "Operations Manager" },
  { name: "Alefia", role: "Interior Designer" },
  { name: "Sahil", role: "Interior Design Team" },
  { name: "Rahul Singh", role: "Interior Design Team" },
  { name: "Anil Karad", role: "De marvel Team" },
];

export const demarvelHeroSlides = [
  {
    eyebrow: "D Marvel Infra Solutions",
    title: "Everything you need for a smoother everyday life.",
    description:
      "Interior design, infrastructure development, architectural solutions and landscaping for residential, commercial and institutional spaces.",
  },
  {
    eyebrow: "Smart Housing",
    title: "Living spaces designed for students, professionals and families.",
    description:
      "We provide more than 2,000 living spaces every year across Pune with a strong focus on safety, comfort and dependable management.",
  },
  {
    eyebrow: "Food and Interiors",
    title: "Fresh meals and beautiful spaces, planned with care.",
    description:
      "From daily meals and catering to custom interiors and premium furnishing, D Marvel helps build better routines and better environments.",
  },
];

export const demarvelServiceAreas: IconCard[] = [
  {
    icon: Building2,
    title: "Site Development & Architectural Planning",
    description:
      "Site analysis, development planning, architectural concepts, floor plans, elevations, 3D visualisation and coordination with building services.",
  },
  {
    icon: Sofa,
    title: "Architectural & Interior Design",
    description:
      "Personalised spaces shaped through brief mapping, space planning, mood boards, material palettes, furniture layouts, lighting and execution drawings.",
  },
  {
    icon: MonitorSmartphone,
    title: "Smart Home & Space Automation",
    description:
      "Connected environments with smart lighting, security, audio-video, home theatre, climate control, motorised curtains and app-based control.",
  },
  {
    icon: Trees,
    title: "Landscaping & Outdoor Enhancements",
    description:
      "Landscape planning, entrance and driveway enhancement, terrace gardens, outdoor seating, water features, green walls and lighting.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Lifestyle, Furniture & Décor",
    description:
      "Custom sofas, furniture, wardrobes, wall units, curtains, upholstery, wallpapers, rugs and décor coordinated to complete the design vision.",
  },
  {
    icon: Wrench,
    title: "Renovation, Refurbishment & Restoration",
    description:
      "Home, office, hospitality, healthcare and institutional upgrades, including reconfiguration, adaptive reuse and sensitive restoration.",
  },
  {
    icon: Construction,
    title: "Turnkey Design & Execution",
    description:
      "One coordinated partner from concept, materials and furniture through civil work, services, styling, installation and final handover.",
  },
];

export const demarvelDetailedServices = [
  {
    title: "Site Development & Architectural Planning",
    description:
      "From developing the site to creating the architectural vision, we shape functional, contemporary and inspiring spaces.",
    items: [
      "Site analysis and development planning",
      "Architectural planning and space utilisation",
      "Concept development and architectural design",
      "Floor plans, elevations and sections",
      "Façade and elevation design",
      "Residential, commercial and institutional architecture",
      "Renovation, remodelling and adaptive reuse",
      "Structural and building-services coordination",
      "3D architectural visualisation and walkthroughs",
      "Landscape integration and outdoor planning",
    ],
  },
  {
    title: "Architectural & Interior Design",
    description:
      "Personalised environments that balance beauty, functionality, comfort and individual lifestyle.",
    items: [
      "Client brief and requirement mapping",
      "Space planning and zoning",
      "Concept development and mood boards",
      "Colour, texture and material palettes",
      "Furniture and lighting layouts",
      "False-ceiling, flooring and wall-treatment concepts",
      "2D working and execution drawings",
      "Detailed furniture and joinery drawings",
      "3D visualisation and walkthroughs",
      "Material selection and design coordination",
    ],
  },
  {
    title: "Smart Home & Space Automation",
    description:
      "Future-ready environments where technology is seamlessly integrated into the architecture and interiors.",
    items: [
      "Smart lighting and scene control",
      "Home automation and smart access",
      "Security and surveillance integration",
      "Audio-video and home theatre systems",
      "Climate and comfort control",
      "Motorised curtains and blinds",
      "Energy management",
      "Voice and app-based control",
    ],
  },
  {
    title: "Landscaping & Outdoor Enhancements",
    description:
      "Outdoor environments planned to be beautiful, functional and connected to the architecture.",
    items: [
      "Landscape planning and garden design",
      "Entrance and driveway enhancement",
      "Terrace and balcony gardens",
      "Outdoor seating areas",
      "Courtyards and recreational spaces",
      "Pergolas and shaded outdoor areas",
      "Outdoor lighting and water features",
      "Green walls and vertical gardens",
      "Landscape décor and customised outdoor solutions",
    ],
  },
  {
    title: "Bespoke Lifestyle, Furniture & Décor",
    description:
      "Customised elements that complete the design vision and make each space feel personal.",
    items: [
      "Customised sofa sets and sectional sofas",
      "Single chairs, lounge chairs and study chairs",
      "Dining, bedroom, office and institutional furniture",
      "Wardrobes, storage and modular furniture",
      "Wall units and customised joinery",
      "Premium upholstery and designer curtains",
      "Cushions, throws and coordinated décor",
      "Wallpapers, rugs, carpets, art and mirrors",
      "Complete colour, texture and material coordination",
    ],
  },
  {
    title: "Renovation, Refurbishment & Restoration",
    description:
      "We transform existing spaces while respecting their character, purpose and future needs.",
    items: [
      "Residential renovation and complete home makeovers",
      "Office and commercial refurbishment",
      "Hospitality and restaurant renovation",
      "Hospital and institutional renovation",
      "Government-office renovation projects",
      "Space reconfiguration and modernisation",
      "Lighting, finishes, furniture and services upgrades",
      "Adaptive reuse of existing spaces",
      "Restoration of iconic, heritage and old properties",
    ],
  },
  {
    title: "Turnkey Design & Execution",
    description:
      "One coordinated partner from the initial concept to final styling and handover.",
    items: [
      "Design and planning",
      "3D visualisation",
      "Material and finish selection",
      "Furniture selection and customisation",
      "Lighting and décor",
      "Civil and interior works",
      "Electrical, plumbing and service coordination",
      "Modular solutions and storage",
      "Soft furnishings and upholstery",
      "Landscaping, site coordination and execution",
      "Final styling and handover",
    ],
  },
];

export const demarvelSofaStyles = [
  "L-shaped sofa",
  "Sectional sofa",
  "3-seater sofa",
  "2-seater sofa / loveseat",
  "Sofa cum bed",
  "Recliner sofa",
  "Chesterfield sofa",
  "Modular sofa",
  "Curved sofa",
  "Chaise lounge sofa",
  "U-shaped sofa",
  "Accent sofa",
  "Tuxedo sofa",
  "Camelback sofa",
  "Lawson sofa",
  "Barrel sofa",
  "Daybed sofa",
  "Low-profile sofa",
];

export const demarvelProductCategories = [
  "Sofas and customised seating",
  "Designer curtains and blinds",
  "Premium upholstery and fabric samples",
  "Dining and bedroom furniture",
  "Custom beds and side tables",
  "Modular wardrobes and kitchen furniture",
  "Display units and TV units",
  "Wallpapers and wall décor",
  "Rugs and carpets",
  "Cushions, throws and lifestyle accessories",
];

export const demarvelBrandCards: BrandCard[] = [
  {
    icon: Sprout,
    label: "New Royal Services",
    tagline: "Landscaping & Outdoor Design",
    description:
      "Landscaping, outdoor design, interior design and architectural support through New Royal Services.",
    to: "/new-royal-services",
  },
  {
    icon: Construction,
    label: "Aishwarya Realtors",
    tagline: "2 BHK & 3 BHK Homes",
    description:
      "Inspired living in Kothrud with thoughtfully designed homes, modern amenities and project support from Marvel Holdings LLP.",
    to: "/aishwarya-height",
  },
  {
    icon: Sofa,
    label: "De Marvel Furnishings",
    tagline: "Interior Experience",
    description:
      "Custom interiors, furnishing, mood boards and aesthetic solutions for homes, offices and specialist spaces.",
    to: "/de-marvel-furnishings",
  },
  {
    icon: ChefHat,
    label: "The Hungry Scholars",
    tagline: "Institutional Catering",
    description:
      "Trusted food service for educational institutions, large-scale daily operations and hygienic kitchen management.",
    to: "/the-hungry-scholars",
  },
];

export const demarvelMetrics: DeMarvelMetric[] = [
  { target: 350, label: "Staff" },
  { target: 15, label: "Years of experience", unit: "years" },
  { target: 150, label: "Happy clients" },
  { target: 2000, label: "Students/Guests served per day" },
];

export const demarvelIndustries = [
  { icon: Home, label: "Residential" },
  { icon: Building2, label: "Commercial" },
  { icon: Hotel, label: "Hospitality" },
  { icon: Briefcase, label: "Corporate" },
  { icon: ShieldCheck, label: "Institutional" },
  { icon: Factory, label: "Industrial" },
];

export const demarvelWhyChoose: IconCard[] = [
  {
    icon: Building2,
    title: "One platform for multiple services",
    description: "",
  },
  {
    icon: ShieldCheck,
    title: "Trusted professionals and verified vendors",
    description: "",
  },
  {
    icon: Award,
    title: "Affordable pricing",
    description: "",
  },
  {
    icon: Wrench,
    title: "Quick and reliable service",
    description: "",
  },
  {
    icon: Star,
    title: "Customer-first approach",
    description: "",
  },
];

export const demarvelProjectHighlights = [
  "Aishwarya Purva",
  "Aishwarya Heights",
  "New Hostel Tower - Aishwarya Realtors",
  "SRM Services",
  "Surya Jyoti Services",
  "Royal Foods",
  "SGM Services",
  "Sahara Properties",
  "SSPL",
];

export const demarvelVision =
  "To become the most trusted and comprehensive service platform that simplifies urban living.";

export const demarvelMission =
  "To connect people with reliable services across all daily life segments through innovation, quality and trust.";

export const demarvelCoreCapabilities: IconCard[] = [
  {
    icon: Building2,
    title: "Site development and architectural planning",
    description: "From site analysis and planning to drawings, elevations, visualisation and coordination.",
  },
  {
    icon: Sofa,
    title: "Architectural and interior design",
    description: "Personalised spaces shaped through mood boards, materials, layouts, lighting and execution drawings.",
  },
  {
    icon: MonitorSmartphone,
    title: "Smart home and space automation",
    description: "Connected lighting, access, security, audio-video, climate control and motorised solutions.",
  },
  {
    icon: Trees,
    title: "Landscaping and outdoor enhancements",
    description: "Landscape planning, gardens, outdoor seating, water features, green walls and lighting.",
  },
  {
    icon: Sparkles,
    title: "Bespoke furniture and décor",
    description: "Custom furniture, sofas, wardrobes, wall units, curtains, upholstery, wallpapers and styling.",
  },
  {
    icon: Wrench,
    title: "Renovation and restoration",
    description: "Residential, commercial, hospitality, healthcare and institutional refurbishment and adaptive reuse.",
  },
  {
    icon: Construction,
    title: "Turnkey design and execution",
    description: "One coordinated partner from concept and materials through services, installation and handover.",
  },
];

export const demarvelHousingDetails = {
  summary:
    "D Marvel provides more than 2,000 living spaces every year across Pune for working professionals, boys and girls, students and academic communities.",
  focus: [
    "Safety and security for both boys and girls",
    "Essential amenities for daily living",
    "Comfortable and well-maintained spaces",
  ],
  promise:
    "Every space is thoughtfully planned to feel like a true home away from home, giving parents peace of mind and residents a secure, supportive environment.",
};

export const demarvelFoodDetails = {
  summary:
    "D Marvel serves freshly prepared meals to more than 2,000 customers every day with a strong focus on taste, nutrition, hygiene and timely delivery.",
  menu: [
    "Indian cuisine, including authentic Maharashtrian flavours",
    "Continental dishes",
    "Italian, Mexican and Chinese cuisines",
    "Specialized meals for diabetic patients and hospital dietary requirements",
    "Dietary foods, salads and sprouts",
  ],
  catering: [
    "Weddings",
    "Birthday parties",
    "Cocktail events",
    "Corporate gatherings",
    "Social celebrations",
  ],
  kitchen:
    "Our kitchen spaces are more than 1000 square feet, supporting both daily meals and large-scale catering operations.",
  note: "Add different menus to suit changing customer needs and special occasions.",
};

export const demarvelInteriorDetails = {
  summary:
    "Transform your space with modern, functional and aesthetic interior solutions designed by professionals with over 10 years of experience and more than 10 lakh square feet of completed work.",
  expertise: {
    residential: [
      "Designer curtains and customized fabrics",
      "Stylish wallpapers and wall decor",
      "Sofa sets, single chairs and study chairs",
      "Wardrobe design and space optimization",
    ],
    commercial: [
      "Office design and workspace solutions",
      "Functional and modern layouts",
      "Customized furniture and storage",
      "IT office spaces and laboratories design",
      "Institutional design, hospital design, auditoriums, studios and amphitheatres",
    ],
    healthcare: [
      "Hospitals and clinic interior solutions",
      "Hygienic, efficient and patient-friendly designs",
    ],
    wallSurface: [
      "Premium wallpapers",
      "Wall cladding designs",
      "Modern textures and finishes",
      "Furniture crafted for suitable environments",
    ],
    furnishings: [
      "Custom sofas",
      "Ergonomic study chairs",
      "Designer single chairs and footrest",
      "Functional and stylish furniture collections",
      "Customized curtains with lighting automation",
      "Smart controls and modern living integration",
      "Bold furnishing that enhances the experience of living",
    ],
  },
  projectsHandled: [
    "New Royal Services",
    "The Hungry Scholars",
    "De Marvel Furnishings",
    "Aishwarya Realtors",
  ],
  note: "Our specialty lies in mood board design and colour theme development, ranging from contemporary and modern to neoclassical interiors.",
};

export const demarvelEventsDetails = {
  summary:
    "D Marvel provides comprehensive event solutions for corporate conferences, birthdays, weddings, inaugurations and celebrity management.",
  services: [
    "Event planning and execution",
    "Decor and ambience design",
    "Customized food and menu planning",
    "Guest coordination and hospitality",
    "Celebrity and VIP management",
  ],
  promise:
    "From intimate gatherings to grand celebrations, we plan, manage and execute memorable events that are elegant, organized and truly unforgettable.",
};

export const demarvelConstructionDetails = {
  summary:
    "D Marvel offers end-to-end construction and contracting solutions from planning and design to execution and complete project management for residential, commercial and institutional spaces.",
  expertise: [
    "Residential buildings and high-rise towers",
    "Commercial complexes and corporate IT spaces",
    "Hospitals and institutional infrastructure",
    "Swimming pools and water treatment facilities",
  ],
  services: [
    "Structural work including slab casting and brickwork",
    "Flooring solutions and high-end marble finishes",
    "POP, plaster of Paris and interior finishing",
    "Electrical systems and smart automation controls",
    "Air conditioning and HVAC systems",
    "Lift lobbies and common area development",
    "Modern glass facade and cladding for corporate spaces",
  ],
  projects: [
    "Aishwarya Realtors",
    "Aishwarya Poorva",
    "Aishwarya Hostels",
    "Bungalows and many others",
  ],
  promise:
    "Every project is built with a focus on modern design, structural strength, functionality and environmental suitability.",
};

export const demarvelGardeningDetails = {
  summary:
    "D Marvel provides expert landscaping and gardening services for hospitals, corporate offices, educational institutions, industrial areas, residential societies and landmark public spaces.",
  services: [
    "Garden maintenance",
    "Lawn mowing and trimming",
    "Plant care and watering",
    "Landscaping support",
    "Tree and hedge pruning",
    "Seasonal plantation services",
    "Organic garden care",
  ],
  promise:
    "From concept design to execution and maintenance, every landscaping project is delivered with precision, creativity and long-term value.",
};

export const demarvelItDetails = {
  summary:
    "D Marvel provides comprehensive IT and digital solutions to help businesses and individuals grow, engage and operate efficiently.",
  services: [
    "Social media content development and management",
    "Social media lead management to generation",
    "Advertising strategy and campaign planning",
    "Video production, shooting, recording and studio solutions",
    "Product development support and digital content creation",
    "Website content creation and curriculum content development",
    "ERP implementation and business process solutions",
    "Custom mobile app development tailored to your needs",
    "IT call centre management, team handling and performance tracking",
    "Employee training and onboarding, including induction for new hires",
    "Chatbot development for enhanced customer engagement",
  ],
  promise:
    "Whether it is digital marketing, software solutions or employee productivity tools, D Marvel delivers professional, customized and scalable IT support.",
};

export const demarvelGardeningServices = [
  "Garden Maintenance",
  "Lawn Mowing & Trimming",
  "Plant Care & Watering",
  "Landscaping Support",
  "Tree & Hedge Pruning",
  "Seasonal Plantation Services",
  "Organic Garden Care",
];

export const demarvelInteriorSpecialties = [
  "Residential interiors",
  "Designer curtains and customized fabrics",
  "Stylish wallpapers and wall decor",
  "Sofa sets, single chairs and study chairs",
  "Wardrobe design and space optimization",
  "Office design and workspace solutions",
  "Functional layouts and customized furniture",
  "IT office spaces, laboratories and institutional interiors",
  "Hospitals, clinics, auditoriums, studios and amphitheatres",
  "Premium wallpapers, wall cladding and modern textures",
  "Custom sofas, ergonomic chairs and bold furnishing",
  "Curtains with lighting automation and smart controls",
];

export const demarvelConstructionSpecialties = [
  "Residential buildings and high-rise towers",
  "Commercial complexes and corporate IT spaces",
  "Hospitals and institutional infrastructure",
  "Swimming pools and water treatment facilities",
  "Slab casting and brickwork",
  "Flooring and high-end marble finishes",
  "POP and interior finishing",
  "Electrical systems and smart automation controls",
  "Air conditioning and HVAC systems",
  "Lift lobbies and common area development",
  "Glass facades and cladding for corporate spaces",
];

export const demarvelFoodMenuHighlights = [
  "Indian cuisine with authentic Maharashtrian flavors",
  "Continental dishes",
  "Italian, Mexican and Chinese cuisine",
  "Special meals for diabetic and hospital dietary requirements",
  "Dietary foods, salads and sprouts",
];

export const demarvelFoodServiceCategories = [
  "Weddings",
  "Birthday parties",
  "Cocktail events",
  "Corporate gatherings",
  "Social celebrations",
];

export const theHungryScholarsMetrics = [
  { value: "25+ Years", label: "industry experience" },
  { value: "2,200-2,500", label: "students served daily" },
  { value: "8", label: "service specialities" },
  { value: "1000+ sq ft", label: "kitchen space" },
];

export const theHungryScholarsStrengths = [
  "25+ years of experience in institutional catering",
  "Trusted by educational institutions",
  "Large-scale daily operations",
  "Strict hygiene and food safety controls",
  "Nutritious and balanced meals",
  "Experienced and professional team",
  "Timely and reliable service",
  "Customer satisfaction focus",
];

export const theHungryScholarsServices = [
  "Hostel Mess Management",
  "College and University Catering",
  "Breakfast, Lunch and Dinner Services",
  "Institutional Food Services",
  "Event and Seminar Catering",
  "Bulk Food Supply",
  "Hygienic Kitchen Operations",
  "Customized Meal Planning",
];

export const theHungryScholarsQualityCommitments = [
  "Fresh and quality ingredients",
  "Clean and hygienic cooking environment",
  "Balanced and nutritious meal planning",
  "Regular quality checks and supervision",
  "Consistent taste and food standards",
  "Professional staff training and discipline",
];

export const theHungryScholarsOperationalStrength = [
  { category: "Industry Experience", details: "25+ Years" },
  { category: "Daily Serving Capacity", details: "2,200-2,500 Students" },
  { category: "Core Specialization", details: "Institutional Catering" },
  { category: "Focus Areas", details: "Hygiene, Nutrition and Quality" },
  { category: "Service Commitment", details: "Timely and Professional" },
  { category: "Client Segment", details: "Educational Institutions" },
];

export const theHungryScholarsDirectorMessage =
  "At The Hungry Scholars, our mission is to provide safe, hygienic, nutritious and quality food with complete dedication and professionalism. For more than 25 years, we have focused on high standards, operational discipline and long-term trust.";

export const theHungryScholarsContact = {
  venue: "MIT ADT University, Loni Kalbhor, Pune, Maharashtra 412201",
  director: "Dr. Rajeshwari M Karad",
  phones: ["+91 8983630096"],
  email: "thehungryscholars8@gmail.com",
  emailHref: "mailto:thehungryscholars8@gmail.com",
};

export const theHungryScholarsWhyChoose = [
  "Decades of institutional catering experience",
  "Consistent quality for large student communities",
  "Balanced nutrition built into every menu plan",
  "Reliable daily operations at scale",
  "Food safety and hygiene led by disciplined processes",
  "Responsive service and long-term relationship focus",
];

export const theHungryScholarsMenuFocus = [
  "Healthy daily meals",
  "Hostel dining support",
  "Special diet meal plans",
  "Event and seminar catering",
  "Bulk food production",
];

export const sharedSocialIcons = [Award, Star, Wrench, HardHat];
