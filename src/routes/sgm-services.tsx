import { Link } from "@/components/site/AppLink";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/Layout";
import { demarvelContact } from "@/lib/siteContent";
import { projects } from "@/lib/projects";
import { ArrowRight, Building2, Check, Phone } from "lucide-react";
import sgmServices from "@/assets/sgm-services.jpeg";

const hostelProjects = projects.filter(
  (project) =>
    project.categories.includes("institutional") && project.title.toLowerCase().includes("hostel"),
);

export default function SgmServicesPage() {
  return (
    <SiteLayout
      seo={{
        title: "SGM Services | De Marvel Infra Solutions",
        description:
          "Commercial offices, guest houses and hostel project work delivered through SGM Services.",
      }}
    >
      <PageBanner
        title="SGM Services"
        subtitle="Commercial Offices & Guest Houses"
        crumbs={[{ label: "Services", to: "/services" }, { label: "SGM Services" }]}
        image={sgmServices}
      />

      <section className="py-14 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <Building2 className="h-4 w-4" />
              Commercial & Institutional Work
            </div>
            <h2 className="gold-underline text-3xl font-bold text-primary md:text-5xl">
              Offices, guest houses and hostel projects
            </h2>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              SGM Services covers commercial interior work and institutional building requirements,
              including the hostel projects documented in the De Marvel Infra Solutions portfolio.
            </p>
          </div>

          <div className="rounded-3xl bg-primary p-6 text-white shadow-luxe sm:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Service scope
            </div>
            <h3 className="mt-3 text-2xl font-bold">Practical project support</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Commercial interiors", "Guest-house spaces", "Hostel facilities", "Institutional execution"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-14 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Project portfolio
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">Hostel projects</h2>
            <p className="mt-5 text-muted-foreground">
              Explore the completed hostel and institutional projects included in this service group.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {hostelProjects.map((project) => (
              <article
                key={project.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card-luxe"
              >
                {project.thumbnail && (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} project`}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {project.primaryCategory}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-primary">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary hover:text-gold"
                  >
                    View project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 pt-14 md:pb-20 md:pt-24">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-navy to-primary p-6 text-center text-white shadow-luxe sm:p-10 md:p-16">
            <Phone className="mx-auto mb-4 h-12 w-12 text-gold" />
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">Planning a hostel or office project?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/80">
              Share your requirements with De Marvel Infra Solutions and we will help define the right scope.
            </p>
            <div className="flex justify-center">
              <a
                href={demarvelContact.phoneHref}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary hover-lift"
              >
                {demarvelContact.phoneDisplay} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
