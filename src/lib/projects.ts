import { theHungryScholarsGalleryItems } from "@/lib/theHungryScholarsGallery";

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

const hungryScholarGallery = theHungryScholarsGalleryItems.slice(0, 8).map((item, index) => ({
  src: item.src,
  alt: item.label
    ? `Hungry Scholar ${item.label}`
    : `Hungry Scholar institutional project photograph ${index + 1}`,
  type: "photo" as const,
  caption: item.label ?? "Verified project photograph",
}));

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
    title: "MP Office and SOB, COM and SOC Projects",
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
  },
  {
    id: "suryajyoti-services",
    slug: "suryajyoti-services",
    title: "Suryajyoti Services",
    primaryCategory: portfolioCategories.infrastructure,
    categories: ["infrastructure", "institutional"],
    description:
      "Canteen development and mess facilities represented as facilities infrastructure work.",
    scopeOfWork: ["Canteen development", "Mess facilities"],
    status: "completed",
    thumbnail: "/suryajyoti-services/DSC_4709.JPG",
    gallery: [
      {
        src: "/suryajyoti-services/DSC_4659.JPG",
        alt: "Suryajyoti Services institutional campus classroom",
        type: "photo",
        caption: "Verified project photograph",
      },
      {
        src: "/suryajyoti-services/DSC_4680.JPG",
        alt: "Suryajyoti Services institutional building",
        type: "photo",
        caption: "Verified project photograph",
      },
      {
        src: "/suryajyoti-services/DSC_4709.JPG",
        alt: "Suryajyoti Services mess dining hall",
        type: "photo",
        caption: "Verified mess facility photograph",
      },
      {
        src: "/suryajyoti-services/DSC_4711 copy.jpg",
        alt: "Suryajyoti Services mess seating area",
        type: "photo",
        caption: "Verified mess facility photograph",
      },
      {
        src: "/suryajyoti-services/DSC_4768.JPG",
        alt: "Suryajyoti Services food serving counter",
        type: "photo",
        caption: "Verified mess facility photograph",
      },
    ],
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
    id: "agm-hostel-other-buildings",
    slug: "agm-hostel-other-buildings",
    title: "AGM Hostel and Other Buildings",
    primaryCategory: portfolioCategories.institutional,
    categories: ["institutional", "infrastructure", "interior-design"],
    description:
      "Hostel and institutional building work covering interior execution and infrastructure.",
    scopeOfWork: ["Interior execution", "Building infrastructure"],
    status: "completed",
  },
  {
    id: "aishwarya-realtors",
    slug: "aishwarya-realtors",
    title: "Aishwarya Realtors",
    primaryCategory: portfolioCategories.residential,
    categories: ["residential", "architectural"],
    description:
      "Residential development work including villas, Aishwarya Heights, guest houses and related design work.",
    scopeOfWork: [
      "Villas",
      "Aishwarya Heights",
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
        alt: "Aishwarya Heights exterior",
        type: "photo",
        caption: "Verified project photograph",
      },
      {
        src: "/aishwarya-height/aishwarya-heights-exterior-02.jpeg",
        alt: "Aishwarya Heights entrance exterior",
        type: "photo",
        caption: "Verified project photograph",
      },
    ],
    confirmationNote:
      "The available gallery is limited to the supplied Aishwarya Heights exterior photographs.",
  },
  {
    id: "sgm-services",
    slug: "sgm-services",
    title: "SGM Services",
    primaryCategory: portfolioCategories.commercial,
    categories: ["commercial", "interior-design"],
    description:
      "Commercial interior work represented as a named project group in the client brief.",
    scopeOfWork: ["Relevant completed project work where verified"],
    confirmationNote:
      "Project photographs and further scope require client confirmation before publication.",
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
    thumbnail: "/library/DSC_6863.jpg",
    gallery: [
      {
        src: "/library/DSC_6863.jpg",
        alt: "Educational library interior with book shelves and study desks",
        type: "photo",
        caption: "Verified library facility photograph",
      },
      {
        src: "/library/DSC_4145.jpg",
        alt: "Educational library reading hall with students",
        type: "photo",
        caption: "Verified library facility photograph",
      },
      {
        src: "/library/DSC_4123.jpg",
        alt: "Library book stacks and shelving system",
        type: "photo",
        caption: "Verified library facility photograph",
      },
      {
        src: "/library/DSC_4086.jpg",
        alt: "Library reading area with students at study tables",
        type: "photo",
        caption: "Verified library facility photograph",
      },
      {
        src: "/library/DSC_3889.jpg",
        alt: "Library book shelves and student reading area",
        type: "photo",
        caption: "Verified library facility photograph",
      },
    ],
  },
  {
    id: "new-hostel-building",
    slug: "new-hostel-building",
    title: "New Hostel Building",
    primaryCategory: portfolioCategories.institutional,
    categories: ["institutional", "infrastructure", "architectural"],
    description:
      "Hostel building development represented through the available design and planning material.",
    scopeOfWork: [
      "Architectural drawings",
      "Design images",
      "Proposed layouts",
      "Project development details",
    ],
    status: "proposed",
    confirmationNote:
      "Current stage is presented as proposed/design material; completion has not been claimed.",
  },
  {
    id: "it-tower",
    slug: "it-tower",
    title: "IT Tower",
    primaryCategory: portfolioCategories.architectural,
    categories: ["commercial", "architectural", "infrastructure"],
    description:
      "Commercial architectural development represented through the confirmed third-floor and fifth-floor drawings.",
    scopeOfWork: [
      "Third-floor drawings",
      "Fifth-floor drawings",
      "Architectural designs",
      "Design and infrastructure work",
    ],
    status: "proposed",
    confirmationNote:
      "Execution is incomplete or unconfirmed; this record does not present the tower as completed.",
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
    associatedOrganization: "New Royal Services",
    confirmationNote:
      "Project credits are retained as an association and require permission/asset confirmation for each case study.",
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
