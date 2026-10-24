import { Link } from "@/components/site/AppLink";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/Layout";
import { getProjectBySlug, getProjectStatusLabel, projects } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ImageOff, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function ProjectPage({ projectSlug }: { projectSlug: string }) {
  const project = getProjectBySlug(projectSlug);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const relatedProjects = useMemo(() => {
    if (!project) return [];
    return projects
      .filter(
        (candidate) =>
          candidate.id !== project.id &&
          candidate.categories.some((category) => project.categories.includes(category)),
      )
      .slice(0, 3);
  }, [project]);

  useEffect(() => {
    if (activeIndex === null || !project?.gallery?.length) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % (project.gallery?.length ?? 1),
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? 0
            : (current - 1 + (project.gallery?.length ?? 1)) % (project.gallery?.length ?? 1),
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, project]);

  if (!project) {
    return (
      <SiteLayout>
        <section className="container-x flex min-h-[60vh] items-center justify-center py-20">
          <div className="max-w-lg text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Projects</p>
            <h1 className="mt-3 text-4xl font-bold text-primary">Project not found</h1>
            <p className="mt-4 text-muted-foreground">
              The requested project record is not available.
            </p>
            <Link
              to="/portfolio"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  const gallery = project.gallery ?? [];
  const status = getProjectStatusLabel(project.status);

  return (
    <SiteLayout
      seo={{
        title: `${project.title} | D Marvel Infra Solutions`,
        description:
          project.description ?? `${project.title} project record by D Marvel Infra Solutions.`,
      }}
    >
      <PageBanner
        title={project.title}
        subtitle={project.primaryCategory}
        crumbs={[{ label: "Projects & Portfolio", to: "/portfolio" }, { label: project.title }]}
        image={project.thumbnail}
      />

      <section className="py-16 md:py-24">
        <div className="container-x">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all projects
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {project.primaryCategory}
                </span>
                {status && (
                  <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-primary">
                    {status}
                  </span>
                )}
              </div>
              <h2 className="mt-5 text-4xl font-bold text-primary md:text-6xl">{project.title}</h2>
              {project.description && (
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              )}
              {project.associatedOrganization && (
                <p className="mt-5 text-sm text-muted-foreground">
                  Associated organization:{" "}
                  <span className="font-semibold text-primary">
                    {project.associatedOrganization}
                  </span>
                </p>
              )}
            </div>

            <div className="rounded-[1.5rem] border border-border bg-secondary/60 p-6 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Project record
              </div>
              {project.scopeOfWork?.length ? (
                <>
                  <h3 className="mt-3 text-2xl font-bold text-primary">Scope of work</h3>
                  <ul className="mt-5 space-y-3">
                    {project.scopeOfWork.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Scope details will be added after client confirmation.
                </p>
              )}
            </div>
          </div>

          <div className="mt-16">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Project gallery
                </div>
                <h3 className="mt-2 text-3xl font-bold text-primary">
                  Photographs, drawings and design material
                </h3>
              </div>
              {gallery.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  Select an image to expand. Use arrow keys to navigate.
                </p>
              )}
            </div>

            {gallery.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((item, index) => (
                  <button
                    key={`${item.src}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group relative overflow-hidden rounded-2xl bg-secondary text-left shadow-card-luxe focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent px-4 pb-4 pt-12 text-sm font-semibold text-white">
                      {item.caption ??
                        (item.type === "drawing"
                          ? "Architectural drawing"
                          : item.type === "render"
                            ? "Proposed design"
                            : "Project photograph")}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex min-h-72 flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-border bg-secondary/50 p-8 text-center">
                <ImageOff className="h-10 w-10 text-muted-foreground" />
                <h4 className="mt-4 text-xl font-bold text-primary">Images and drawings pending</h4>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  No verified project photographs or drawings for this record are currently
                  available in the repository. The project remains listed without an illustrative
                  image.
                </p>
              </div>
            )}
            {project.confirmationNote && (
              <p className="mt-5 text-sm text-muted-foreground">{project.confirmationNote}</p>
            )}
          </div>

          {relatedProjects.length > 0 && (
            <div className="mt-20 border-t border-border pt-12">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Continue exploring
              </div>
              <h3 className="mt-2 text-3xl font-bold text-primary">Related project records</h3>
              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.id}
                    to={`/projects/${related.slug}`}
                    className="group rounded-2xl border border-border bg-card p-5 shadow-card-luxe transition hover:-translate-y-1 hover:border-gold"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                      {related.primaryCategory}
                    </div>
                    <h4 className="mt-3 text-xl font-bold text-primary">{related.title}</h4>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-gold">
                      View record <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {activeIndex !== null && gallery[activeIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} gallery lightbox`}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((activeIndex - 1 + gallery.length) % gallery.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gold sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="flex max-h-full max-w-6xl flex-col items-center">
            <img
              src={gallery[activeIndex].src}
              alt={gallery[activeIndex].alt}
              className="max-h-[78vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {gallery[activeIndex].caption ?? gallery[activeIndex].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={() => setActiveIndex((activeIndex + 1) % gallery.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gold sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </SiteLayout>
  );
}
