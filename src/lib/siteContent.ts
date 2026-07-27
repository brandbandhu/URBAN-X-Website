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

export type UrbanxMetric = {
  target: number;
  label: string;
  unit?: string;
};

export const urbanxBrand = {
  name: "Urbanx",
  tagline: "Simplifying Life. Connecting Services. Delivering Excellence.",
  heroTitle: "A place created for your happy living.",
  heroLead:
    "Urbanx is an emerging destination in Pune, designed to simplify and enhance everyday living. We bring together essential services across homes, lifestyle, property, food and business needs under one trusted platform.",
  heroDetail:
    "From finding the right property and shaping modern interiors to running kitchens, maintaining spaces and managing projects, Urbanx creates a complete ecosystem built around convenience and care.",
};

export const urbanxContact = {
  office: "Shop No 138, The Capital, Hadapsar, Pune",
  highway: "Pune-Solapur Highway, Pune, Maharashtra",
  phoneDisplay: "+91 98220 80115",
  phoneHref: "tel:+919822080115",
  whatsappHref: "https://wa.me/919822080115",
  email: "Urbanx.pune96@gmail.com",
  emailHref: "mailto:Urbanx.pune96@gmail.com",
  director: "Mr. Yash Nagargoje",
};

export const urbanxHeroSlides = [
  {
    eyebrow: "Urbanx One-Stop Living",
    title: "Everything you need for a smoother everyday life.",
    description:
      "Housing, food, interiors, events, housekeeping, landscaping and IT support - all delivered with one point of contact.",
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
      "From daily meals and catering to custom interiors and premium furnishing, Urbanx helps build better routines and better environments.",
  },
];

export const urbanxServiceAreas: IconCard[] = [
  {
    icon: Home,
    title: "Smart Housing & Real Estate Solutions",
    description:
      "Buy, sell or rent spaces with support tailored to working professionals, students and academic communities across Pune.",
  },
  {
    icon: ChefHat,
    title: "Food Delivery Services",
    description:
      "Freshly prepared meals, custom menus and large-scale catering for daily dining, events and institutional needs.",
  },
  {
    icon: Sofa,
    title: "Interior Experience for All Places",
    description:
      "Modern interiors, furnishing and styling for homes, offices, healthcare spaces, schools and colleges.",
  },
  {
    icon: CalendarDays,
    title: "Events & Management",
    description:
      "Corporate conferences, weddings, birthdays, inaugurations and VIP hospitality handled end to end.",
  },
  {
    icon: Construction,
    title: "Construction & Contracting Services",
    description:
      "Planning, execution and project management for residential, commercial and institutional developments.",
  },
  {
    icon: Sparkles,
    title: "Housekeeping Services",
    description:
      "Deep cleaning, sanitisation, floor care and maintenance for homes, offices, institutions and shared spaces.",
  },
  {
    icon: Trees,
    title: "Landscaping & Outdoor Solutions",
    description:
      "Creative outdoor design, plantation, maintenance and sustainable landscape care for every site type.",
  },
  {
    icon: MonitorSmartphone,
    title: "IT Solutions",
    description:
      "Content, digital marketing, ERP, app development, automation and training support for modern businesses.",
  },
];

export const urbanxBrandCards: BrandCard[] = [
  {
    icon: Sprout,
    label: "New Royal Services",
    tagline: "Housekeeping, Gardening & More",
    description:
      "Housekeeping, gardening, landscaping, interior designing, architecture and IT support for homes, societies and businesses.",
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

export const urbanxMetrics: UrbanxMetric[] = [
  { target: 350, label: "Staff" },
  { target: 15, label: "Years of experience", unit: "years" },
  { target: 150, label: "Happy clients" },
  { target: 2000, label: "Students/Guests served per day" },
];

export const urbanxIndustries = [
  { icon: Home, label: "Residential" },
  { icon: Building2, label: "Commercial" },
  { icon: Hotel, label: "Hospitality" },
  { icon: Briefcase, label: "Corporate" },
  { icon: ShieldCheck, label: "Institutional" },
  { icon: Factory, label: "Industrial" },
];

export const urbanxWhyChoose: IconCard[] = [
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

export const urbanxProjectHighlights = [
  "New Royal Services",
  "The Hungry Scholars",
  "De Marvel Furnishings",
  "Aishwarya Realtors",
];

export const urbanxVision =
  "To become the most trusted and comprehensive service platform that simplifies urban living.";

export const urbanxMission =
  "To connect people with reliable services across all daily life segments through innovation, quality and trust.";

export const urbanxCoreCapabilities: IconCard[] = [
  {
    icon: Home,
    title: "Smart housing and real estate solutions",
    description: "",
  },
  {
    icon: Sofa,
    title: "Architectural and interior design services",
    description: "",
  },
  {
    icon: Trees,
    title: "Landscaping and outdoor enhancements",
    description: "",
  },
  {
    icon: CalendarDays,
    title: "Event planning and execution",
    description: "",
  },
  {
    icon: ChefHat,
    title: "Food and lifestyle services",
    description: "",
  },
  {
    icon: Construction,
    title: "Product development and project management",
    description: "",
  },
  {
    icon: Sparkles,
    title: "Housekeeping services",
    description: "",
  },
  {
    icon: Sprout,
    title: "Gardening services",
    description: "",
  },
];

export const urbanxHousingDetails = {
  summary:
    "Urbanx provides more than 2,000 living spaces every year across Pune for working professionals, boys and girls, students and academic communities.",
  focus: [
    "Safety and security for both boys and girls",
    "Essential amenities for daily living",
    "Comfortable and well-maintained spaces",
  ],
  promise:
    "Every space is thoughtfully planned to feel like a true home away from home, giving parents peace of mind and residents a secure, supportive environment.",
};

export const urbanxFoodDetails = {
  summary:
    "Urbanx serves freshly prepared meals to more than 2,000 customers every day with a strong focus on taste, nutrition, hygiene and timely delivery.",
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

export const urbanxInteriorDetails = {
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

export const urbanxEventsDetails = {
  summary:
    "Urbanx provides comprehensive event solutions for corporate conferences, birthdays, weddings, inaugurations and celebrity management.",
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

export const urbanxConstructionDetails = {
  summary:
    "Urbanx offers end-to-end construction and contracting solutions from planning and design to execution and complete project management for residential, commercial and institutional spaces.",
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

export const urbanxHousekeepingDetails = {
  summary:
    "Urbanx offers comprehensive housekeeping and maintenance solutions for hospitals, hostels, canteens, corporate offices, residential societies and individual homes.",
  services: [
    "Daily cleaning and maintenance",
    "Office and commercial cleaning",
    "Deep cleaning services",
    "Floor scrubbing and polishing",
    "Washroom cleaning and sanitization",
    "Waste management support",
    "Sofa, carpet and glass cleaning",
    "Glass facade and window cleaning",
    "Water tank cleaning and maintenance",
    "Solar panel cleaning",
    "Corridor, lobby and high-traffic area cleaning",
    "Special occasion and festival cleaning",
    "High-end marble floor polishing",
  ],
  promise:
    "With Urbanx, there is no need to search for a maid or cleaning service - we bring professional solutions right to your doorstep.",
};

export const urbanxGardeningDetails = {
  summary:
    "Urbanx provides expert landscaping and gardening services for hospitals, corporate offices, educational institutions, industrial areas, residential societies and landmark public spaces.",
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

export const urbanxItDetails = {
  summary:
    "Urbanx provides comprehensive IT and digital solutions to help businesses and individuals grow, engage and operate efficiently.",
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
    "Whether it is digital marketing, software solutions or employee productivity tools, Urbanx delivers professional, customized and scalable IT support.",
};

export const urbanxHousekeepingServices = [
  "Daily Cleaning & Maintenance",
  "Office & Commercial Cleaning",
  "Deep Cleaning Services",
  "Floor Scrubbing & Polishing",
  "Washroom Cleaning & Sanitization",
  "Waste Management Support",
  "Sofa, Carpet & Glass Cleaning",
];

export const urbanxGardeningServices = [
  "Garden Maintenance",
  "Lawn Mowing & Trimming",
  "Plant Care & Watering",
  "Landscaping Support",
  "Tree & Hedge Pruning",
  "Seasonal Plantation Services",
  "Organic Garden Care",
];

export const urbanxInteriorSpecialties = [
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

export const urbanxConstructionSpecialties = [
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

export const urbanxFoodMenuHighlights = [
  "Indian cuisine with authentic Maharashtrian flavors",
  "Continental dishes",
  "Italian, Mexican and Chinese cuisine",
  "Special meals for diabetic and hospital dietary requirements",
  "Dietary foods, salads and sprouts",
];

export const urbanxFoodServiceCategories = [
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
  phones: ["+91 98220 80115", "7057450842"],
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
