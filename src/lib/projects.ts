import { newRoyalServicesGallery } from "@/lib/newRoyalServicesGallery";
import { comLaboratoriesGallery } from "@/lib/comLaboratoriesGallery";
import { sobProjectGallery } from "@/lib/sobProjectGallery";

export type ProjectStatus = "completed" | "ongoing" | "proposed";
export type ProjectCategory =
  | "interior-design"
  | "residential"
  | "commercial"
  | "educational"
  | "institutional"
  | "infrastructure"
  | "landscaping"
  | "architectural";

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  type: "photo" | "drawing" | "render" | "concept";
  caption?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  primaryCategory: string;
  categories: ProjectCategory[];
  description?: string;
  scopeOfWork?: string[];
  status?: ProjectStatus;
  thumbnail?: string;
  gallery?: ProjectGalleryItem[];
  associatedOrganization?: string;
  confirmationNote?: string;
};

export const portfolioCategories: Record<ProjectCategory, string> = {
  "interior-design": "Interior Design & Execution",
  residential: "Residential Villas & Bungalows",
  commercial: "Commercial Offices & Guest Houses",
  educational: "Educational Institutions & Laboratories",
  institutional: "Hostels & Institutional Buildings",
  infrastructure: "Infrastructure Development",
  landscaping: "Landscaping & Outdoor Design",
  architectural: "Architectural Drawings & Design Solutions",
};

export const portfolioFilters: { value: "all" | ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "interior-design", label: "Interior Design" },
  { value: "residential", label: "Residential Villas & Bungalows" },
  { value: "commercial", label: "Commercial Offices & Guest Houses" },
  { value: "educational", label: "Educational Institutions & Laboratories" },
  { value: "institutional", label: "Hostels & Institutional Buildings" },
  { value: "infrastructure", label: "Infrastructure Development" },
  { value: "landscaping", label: "Landscaping & Outdoor Design" },
  { value: "architectural", label: "Architectural Drawings & Design Solutions" },
];

const projectPhotoGallery = (slug: string, title: string, count: number) =>
  Array.from({ length: count }, (_, index) => ({
    src: `/project-photos/${slug}/${slug}-${String(index + 1).padStart(2, "0")}.jpeg`,
    alt: `${title} project photograph ${index + 1}`,
    type: "photo" as const,
    caption: "Project photograph",
  }));

const newRoyalProjectGallery = newRoyalServicesGallery.map((src, index) => ({
  src,
  alt: `New Royal Services project photograph ${index + 1}`,
  type: "photo" as const,
  caption: "Original New Royal Services photograph",
}));

const comLaboratoriesProjectGallery = comLaboratoriesGallery.map((src, index) => ({
  src,
  alt: `COM Laboratories project photograph ${index + 1}`,
  type: "photo" as const,
  caption: "Original COM Laboratories photograph",
}));

const sobProjectImageGallery = sobProjectGallery.map((src, index) => ({
  src,
  alt: `SOB, COM and SOC project photograph ${index + 1}`,
  type: "photo" as const,
  caption: "Original SOB, COM and SOC project photograph",
}));

const hungryScholarGallery = projectPhotoGallery("hungry-scholar-cafe", "Hungry Scholar Cafe", 12).slice(1);
const rajBungalowGallery = projectPhotoGallery("raj-bungalow", "Raj Bungalow", 9);
const royalFoodsGallery = projectPhotoGallery(
  "royal-foods-hospitality-services",
  "Royal Foods Hospitality Services",
  18,
);
const shreeAnganGallery = projectPhotoGallery("shree-angan-hostel", "Shree Angan Hostel", 7);
const vaishnaviPrideGallery = projectPhotoGallery(
  "vaishnavi-pride-hostel",
  "Vaishnavi Pride Hostel",
  6,
);
const vipEventsGallery = projectPhotoGallery("vip-events", "VIP Events", 7);
const vitthalKrupaGallery = projectPhotoGallery("vitthal-krupa-hostel", "Vitthal Krupa Hostel", 6).slice(1);
const classroomsGallery = projectPhotoGallery("classrooms", "Classrooms", 9);
const guestHouseGallery = projectPhotoGallery("guest-house", "Guest House", 4);
const officeInteriorsGallery = projectPhotoGallery("isbj-studio", "Studio", 4);
const libraryGallery = projectPhotoGallery("library", "Library", 12);
const naliniPrideGallery = projectPhotoGallery("nalini-pride-hostel", "Nalini Pride Hostel", 5);

export const projects: Project[] = [
  {
    id: "hungry-scholar",
    slug: "hungry-scholar",
    title: "Hungry Scholar",
    primaryCategory: portfolioCategories["interior-design"],
    categories: ["interior-design", "institutional"],
    description:
      "Interior design and execution work represented through the available project photographs.",
    scopeOfWork: ["Interior design work", "Interior execution"],
    status: "completed",
    thumbnail: hungryScholarGallery[0]?.src,
    gallery: hungryScholarGallery,
    confirmationNote:
      "Photographs supplied in the project repository are shown as verified project assets.",
  },
  {
    id: "mp-office-sob-com-soc",
    slug: "mp-office-sob-com-soc",
    title: "SOB, COM and SOC Projects",
    primaryCategory: portfolioCategories.commercial,
    categories: ["commercial", "infrastructure"],
    description:
      "Commercial office and infrastructure work listed by the client, including completed interior work and available drawings.",
    scopeOfWork: [
      "Completed interior work",
      "Infrastructure development",
      "Project photographs and design drawings where available",
    ],
    status: "completed",
    thumbnail: sobProjectImageGallery[0]?.src,
    gallery: sobProjectImageGallery,
  },
  {
    id: "raj-bungalows",
    slug: "raj-bungalows",
    title: "Raj Bungalows",
    primaryCategory: portfolioCategories.residential,
    categories: ["residential", "interior-design"],
    description: "Residential interior design work for bungalow spaces.",
    scopeOfWork: ["Residential interior design"],
    status: "completed",
    thumbnail: rajBungalowGallery[0]?.src,
    gallery: rajBungalowGallery,
  },
  {
    id: "shrinivas-building",
    slug: "shrinivas-building",
    title: "Shrinivas Building",
    primaryCategory: portfolioCategories.residential,
    categories: ["residential", "interior-design"],
    description: "Residential building interior work listed by the client.",
    scopeOfWork: ["Completed interior work"],
    status: "completed",
    thumbnail: "/shriniwas/sahyadri.JPG",
    gallery: [
      {
        src: "/shriniwas/sahyadri.JPG",
        alt: "Shrinivas Building exterior view",
        type: "photo",
        caption: "Verified project photograph",
      },
      {
        src: "/shriniwas/sahyadri1.JPG",
        alt: "Shrinivas Building facade view",
        type: "photo",
        caption: "Verified project photograph",
      },
    ],
  },
  {
    id: "aishwarya-realtors",
    slug: "aishwarya-realtors",
    title: "Aishwarya Realtors",
    primaryCategory: portfolioCategories.residential,
    categories: ["residential", "architectural"],
    description:
      "Residential development work including villas, Aishwarya Realtors, guest houses and related design work.",
    scopeOfWork: [
      "Villas",
      "Aishwarya Realtors",
      "Guest houses",
      "Residential development projects",
    ],
    thumbnail: "/aishwarya-realtors/aishwarya-realtors.jpg",
    gallery: [
      {
        src: "/aishwarya-realtors/aishwarya-realtors.jpg",
        alt: "Aishwarya Realtors building site photograph",
        type: "photo",
        caption: "Verified project photograph",
      },
      {
        src: "/aishwarya-height/aishwarya-heights-exterior-01.jpeg",
        alt: "Aishwarya Realtors exterior",
        type: "photo",
        caption: "Verified project photograph",
      },
      {
        src: "/aishwarya-height/aishwarya-heights-exterior-02.jpeg",
        alt: "Aishwarya Realtors entrance exterior",
        type: "photo",
        caption: "Verified project photograph",
      },
    ],
    confirmationNote:
      "The available gallery is limited to the supplied Aishwarya Realtors exterior photographs.",
  },
  {
    id: "com-laboratories",
    slug: "com-laboratories",
    title: "COM Laboratories",
    primaryCategory: "Educational & Laboratory Infrastructure",
    categories: ["educational", "institutional", "commercial", "interior-design"],
    description:
      "Laboratory development and interior execution work for educational infrastructure.",
    scopeOfWork: ["Laboratory development", "Interior execution"],
    status: "completed",
    thumbnail: comLaboratoriesProjectGallery[0]?.src,
    gallery: comLaboratoriesProjectGallery,
  },
  {
    id: "new-royal-services",
    slug: "new-royal-services",
    title: "New Royal Services",
    primaryCategory: portfolioCategories.landscaping,
    categories: ["landscaping", "infrastructure", "architectural"],
    description: "Verified design and execution work undertaken through New Royal Services.",
    scopeOfWork: [
      "Landscaping",
      "Infrastructure development",
      "Outdoor design",
      "Other verified design or execution work",
    ],
    status: "completed",
    thumbnail: newRoyalProjectGallery[0]?.src,
    gallery: newRoyalProjectGallery,
    associatedOrganization: "New Royal Services",
  },
  {
    id: "royal-foods-hospitality-services",
    slug: "royal-foods-hospitality-services",
    title: "Royal Foods Hospitality Services",
    primaryCategory: portfolioCategories.commercial,
    categories: ["commercial", "institutional", "interior-design"],
    description: "Hospitality and food-service spaces documented through the supplied project album.",
    scopeOfWork: ["Hospitality space support", "Food-service environments", "Interior execution"],
    status: "completed",
    thumbnail: royalFoodsGallery[0]?.src,
    gallery: royalFoodsGallery,
  },
  {
    id: "shree-angan-hostel",
    slug: "shree-angan-hostel",
    title: "Shree Angan Hostel",
    primaryCategory: portfolioCategories.institutional,
    categories: ["institutional", "infrastructure", "interior-design"],
    description: "Hostel interiors and institutional facilities represented by the supplied project album.",
    scopeOfWork: ["Hostel interiors", "Institutional facilities", "Project execution"],
    status: "completed",
    thumbnail: shreeAnganGallery[0]?.src,
    gallery: shreeAnganGallery,
  },
  {
    id: "vaishnavi-pride-hostel",
    slug: "vaishnavi-pride-hostel",
    title: "Vaishnavi Pride Hostel",
    primaryCategory: portfolioCategories.institutional,
    categories: ["institutional", "infrastructure", "interior-design"],
    description: "Hostel and institutional work documented through the supplied project album.",
    scopeOfWork: ["Hostel facilities", "Interior execution", "Institutional project support"],
    status: "completed",
    thumbnail: vaishnaviPrideGallery[0]?.src,
    gallery: vaishnaviPrideGallery,
  },
  {
    id: "vip-events",
    slug: "vip-events",
    title: "VIP Events",
    primaryCategory: portfolioCategories.commercial,
    categories: ["commercial", "institutional", "interior-design"],
    description: "Event, hospitality and guest coordination work represented through the supplied album.",
    scopeOfWork: ["Event environments", "Hospitality coordination", "Guest-facing spaces"],
    status: "completed",
    thumbnail: vipEventsGallery[0]?.src,
    gallery: vipEventsGallery,
  },
  {
    id: "vitthal-krupa-hostel",
    slug: "vitthal-krupa-hostel",
    title: "Vitthal Krupa Hostel",
    primaryCategory: portfolioCategories.institutional,
    categories: ["institutional", "infrastructure", "interior-design"],
    description: "Hostel facilities and institutional interiors documented through the supplied album.",
    scopeOfWork: ["Hostel interiors", "Institutional facilities", "Project execution"],
    status: "completed",
    thumbnail: vitthalKrupaGallery[0]?.src,
    gallery: vitthalKrupaGallery,
  },
  {
    id: "classrooms",
    slug: "classrooms",
    title: "Classrooms",
    primaryCategory: portfolioCategories.educational,
    categories: ["educational", "institutional", "interior-design"],
    description: "Learning environments and classroom facilities represented through the supplied album.",
    scopeOfWork: ["Classroom environments", "Educational interiors", "Facility execution"],
    status: "completed",
    thumbnail: classroomsGallery[0]?.src,
    gallery: classroomsGallery,
  },
  {
    id: "guest-house",
    slug: "guest-house",
    title: "Guest House",
    primaryCategory: portfolioCategories.commercial,
    categories: ["commercial", "residential", "interior-design"],
    description: "Guest-house interiors and hospitality spaces documented through the supplied album.",
    scopeOfWork: ["Guest-house interiors", "Hospitality spaces", "Interior execution"],
    status: "completed",
    thumbnail: guestHouseGallery[0]?.src,
    gallery: guestHouseGallery,
  },
  {
    id: "office-interiors",
    slug: "office-interiors",
    title: "Studio",
    primaryCategory: portfolioCategories.commercial,
    categories: ["commercial", "interior-design", "architectural"],
    description: "Interior site photographs showing completed studio and workplace spaces.",
    scopeOfWork: ["Office interiors", "Workplace design", "Interior execution"],
    status: "completed",
    thumbnail: officeInteriorsGallery[0]?.src,
    gallery: officeInteriorsGallery,
  },
  {
    id: "library",
    slug: "library",
    title: "Library",
    primaryCategory: portfolioCategories.educational,
    categories: ["educational", "institutional", "interior-design"],
    description: "Library and study environments documented through the supplied project album.",
    scopeOfWork: ["Library interiors", "Study environments", "Educational facility support"],
    status: "completed",
    thumbnail: libraryGallery[0]?.src,
    gallery: libraryGallery,
  },
  {
    id: "nalini-pride-hostel",
    slug: "nalini-pride-hostel",
    title: "Nalini Pride Hostel",
    primaryCategory: portfolioCategories.institutional,
    categories: ["institutional", "infrastructure", "interior-design"],
    description: "Hostel and institutional facilities documented through the supplied project album.",
    scopeOfWork: ["Hostel facilities", "Interior execution", "Institutional project support"],
    status: "completed",
    thumbnail: naliniPrideGallery[0]?.src,
    gallery: naliniPrideGallery,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectStatusLabel(status?: ProjectStatus) {
  if (status === "completed") return "Completed project";
  if (status === "ongoing") return "Work in progress";
  if (status === "proposed") return "Proposed design";
  return undefined;
}
