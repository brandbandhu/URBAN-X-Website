import { Link } from "@/components/site/AppLink";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/Layout";
import {
  getProjectStatusLabel,
  portfolioCategories,
  portfolioFilters,
  projects,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";
import { ArrowRight, ImageOff, Layers3 } from "lucide-react";
import { useMemo, useState } from "react";
import hero3 from "@/assets/hero-3.jpg";

const portfolioCategoryDetails: Array<{
  value: ProjectCategory;
  description: string;
}> = [
  {
    value: "interior-design",
    description: "Interior spaces planned, coordinated and delivered through execution.",
  },
  {
    value: "residential",
    description: "Villas, bungalows and residential development work.",
  },
  {
    value: "commercial",
    description: "Commercial offices, guest houses and workplace environments.",
  },
  {
    value: "educational",
    description: "Educational institutions, laboratories and learning environments.",
  },
  {
    value: "institutional",
    description: "Hostels and institutional buildings supported by practical planning.",
  },
  {
    value: "infrastructure",
    description: "Building infrastructure, facilities and site development work.",
  },
  {
    value: "landscaping",
    description: "Landscaping and outdoor design that completes the setting.",
  },
  {
    value: "architectural",
    description: "Architectural drawings, design studies and proposed solutions.",
  },
];

function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.thumbnail) {
    return (
      <img
        src={project.thumbnail}
        alt={`${project.title} project visual`}
        className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${compact ? "" : ""}`}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div className="flex h-full min-h-56 flex-col items-center justify-center bg-[linear-gradient(135deg,#e9e4d9,#c8bda9)] p-6 text-center text-primary">
      <ImageOff className="mb-4 h-9 w-9 opacity-70" />
      <span className="text-xs font-bold uppercase tracking-[0.22em]">Visual asset pending</span>
      <span className="mt-2 max-w-[15rem] text-sm text-primary/70">
        Project photographs or drawings require client confirmation.
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const status = getProjectStatusLabel(project.status);

  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-card-luxe transition duration-500 hover:-translate-y-1 hover:shadow-luxe">
      <Link
        to={`/projects/${project.slug}`}
        className="block"
        aria-label={`View ${project.title} project`}
      >
        <div className="relative h-64 overflow-hidden bg-secondary">
          <ProjectVisual project={project} />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent px-5 pb-5 pt-14 text-white">
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
              {project.primaryCategory}
            </div>
            <h2 className="mt-2 text-2xl font-bold">{project.title}</h2>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {status && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {status}
            </span>
          )}
          {!project.gallery?.length && (
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
              Assets pending
            </span>
          )}
        </div>
        {project.description && (
          <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        )}
        <Link
          to={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold"
        >
          View project <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const visibleProjects = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );

  return (
    <SiteLayout
      seo={{
        title: "Projects & Portfolio | D Marvel Infra Solutions",
        description:
          "Explore D Marvel Infra Solutions project records across interior design, residential, commercial, institutional, infrastructure, landscaping and architectural design.",
      }}
    >
      <PageBanner
        title="Our Work. Our Expertise. Our Commitment."
        subtitle="Explore our portfolio of interior design, architectural planning, infrastructure development and landscaping projects."
        crumbs={[{ label: "Projects & Portfolio" }]}
        image={hero3}
      />

      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-8 rounded-[1.5rem] border border-border bg-secondary/60 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-9">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                D Marvel Infra Solutions
              </div>
              <h2 className="max-w-3xl text-3xl font-bold text-primary md:text-5xl">
                A portfolio organised by the work we undertake.
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                Explore D Marvel Infra Solutions through eight clear categories, from interior
                execution and residential work to infrastructure, landscaping and architectural
                design solutions. Each project record identifies its current stage and available
                visual assets.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 self-end sm:grid-cols-3 md:grid-cols-2">
              <div className="rounded-xl bg-card p-4 shadow-card-luxe">
                <div className="text-3xl font-bold text-primary">{projects.length}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Named project groups
                </div>
              </div>
              <div className="rounded-xl bg-card p-4 shadow-card-luxe">
                <div className="text-3xl font-bold text-primary">
                  {Object.keys(portfolioCategories).length}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Portfolio disciplines
                </div>
              </div>
              <div className="col-span-2 rounded-xl bg-primary p-4 text-white shadow-card-luxe sm:col-span-1 md:col-span-2">
                <Layers3 className="mb-2 h-5 w-5 text-gold" />
                <div className="text-sm leading-relaxed text-white/80">
                  Photographs, drawings and proposed designs are labelled by stage.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16" id="portfolio-categories">
            <div className="mb-7 max-w-2xl">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Portfolio structure
              </div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">
                Explore work by category
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                A clear index for the services and project types represented in our portfolio.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {portfolioCategoryDetails.map((category, index) => {
                const count = projects.filter((project) =>
                  project.categories.includes(category.value),
                ).length;

                return (
                  <a
                    key={category.value}
                    href="#project-records"
                    onClick={() => setFilter(category.value)}
                    className="group rounded-2xl border border-border bg-card p-5 shadow-card-luxe transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-luxe focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-gold">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{count} {count === 1 ? "group" : "groups"}</span>
                    </div>
                    <h3 className="mt-7 text-lg font-bold leading-snug text-primary">
                      {portfolioCategories[category.value]}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-gold">
                      View category <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-16" id="project-records">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Project records
                </div>
                <h2 className="text-3xl font-bold text-primary md:text-4xl">
                  {filter === "all" ? "Selected work" : portfolioCategories[filter]}
                </h2>
              </div>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter projects by category"
              >
                {portfolioFilters.map((item) => {
                  const active = filter === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setFilter(item.value)}
                      className={`rounded-full border px-3 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gold ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-gold hover:text-primary"}`}
                    >
                      {item.value === "all" ? "All Projects" : portfolioCategories[item.value]}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container-x flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Start a conversation
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Have a space, site or institution to plan?
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3.5 font-semibold text-primary hover-lift"
          >
            Contact D Marvel <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
