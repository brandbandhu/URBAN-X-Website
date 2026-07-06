import { Link } from "@/components/site/AppLink";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/Layout";
import {
  theHungryScholarsContact,
  theHungryScholarsDirectorMessage,
  theHungryScholarsMetrics,
  theHungryScholarsOperationalStrength,
  theHungryScholarsQualityCommitments,
  theHungryScholarsServices,
  theHungryScholarsStrengths,
  theHungryScholarsMenuFocus,
} from "@/lib/siteContent";
import { slugify } from "@/lib/utils";
import { ArrowRight, Check, ChefHat, Mail, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

export default function TheHungryScholarsPage() {
  return (
    <SiteLayout>
      <PageBanner
        title="The Hungry Scholars"
        subtitle="Trusted Food Service Partner for Educational Institutions"
        crumbs={[{ label: "Brands", to: "/services" }, { label: "The Hungry Scholars" }]}
        image={hero2}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              About Us
            </div>
            <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-5xl">
              Safe, hygienic and nutritious food service at scale.
            </h2>
            <p className="mt-8 mb-5 text-lg text-muted-foreground">
              The Hungry Scholars is a professionally managed food service company with more than
              25 years of experience in institutional catering and large-scale food operations.
            </p>
            <p className="mb-5 leading-relaxed text-foreground/80">
              We currently serve approximately 2,200 to 2,500 students at MIT ADT University and are
              known for reliable service, hygienic kitchens, balanced menus and consistent quality.
            </p>
            <p className="leading-relaxed text-foreground/80">
              The focus is simple: nutritious meals, disciplined operations and dependable service
              for educational institutions and other high-volume food service needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {theHungryScholarsMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl bg-card p-7 text-center shadow-card-luxe"
              >
                <div className="text-4xl font-bold text-primary">{metric.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Why Choose The Hungry Scholars
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              Experience, hygiene and consistency
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {theHungryScholarsStrengths.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-card p-7 shadow-card-luxe hover-lift"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                  <Star className="h-7 w-7 text-gold" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Services
            </div>
            <h2 className="gold-underline mb-6 text-3xl font-bold text-primary md:text-5xl">
              Built for institutional food service
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {theHungryScholarsServices.map((service) => (
                <Link
                  key={service}
                  to={`/the-hungry-scholars/${slugify(service)}`}
                  aria-label={`Open ${service} details`}
                  className="group block rounded-xl bg-secondary p-5 transition-colors hover:bg-secondary/80"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-foreground/90 transition-colors group-hover:text-gold">
                      {service}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-card p-8 shadow-luxe">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Food and Menu Focus
            </div>
            <h3 className="mb-5 text-3xl font-bold text-primary">
              Meals designed for health and satisfaction
            </h3>
            <ul className="space-y-4">
              {[
                "Indian cuisine, including authentic Maharashtrian flavors",
                "Continental, Italian, Mexican and Chinese dishes",
                "Specialized meals for diabetic and hospital dietary requirements",
                "Dietary foods, salads and sprouts for balanced nutrition",
                "Large-scale catering for weddings, birthdays, cocktail events and corporate gatherings",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ChefHat className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-primary p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Kitchen Scale
              </div>
              <p className="mt-2 text-sm text-white/80">
                Our cloud kitchen and institutional food operations are supported by hygienic
                systems and more than 1000 square feet of kitchen space.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <div className="mb-12">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Operational Strength
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              How the service is structured
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card-luxe">
            <div className="grid bg-secondary/60 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:grid-cols-2">
              <div>Category</div>
              <div>Details</div>
            </div>
            <div className="divide-y divide-border">
              {theHungryScholarsOperationalStrength.map((row) => (
                <div key={row.category} className="grid gap-2 px-6 py-5 sm:grid-cols-2 sm:gap-6">
                  <div className="font-semibold text-primary">{row.category}</div>
                  <div className="text-muted-foreground">{row.details}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 shadow-luxe">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Director's Message
            </div>
            <h3 className="mb-4 text-3xl font-bold text-primary">
              Quality food is the foundation of student well-being
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {theHungryScholarsDirectorMessage}
            </p>
            <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/10 p-5 text-sm text-foreground/90">
              Continuous improvement, operational excellence and customer satisfaction remain at the
              center of our work.
            </div>
          </div>

          <div className="rounded-3xl bg-primary p-8 text-white shadow-luxe">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Quality Commitment
            </div>
            <h3 className="mb-5 text-3xl font-bold">
              Every meal is served with discipline and care
            </h3>
            <ul className="space-y-4">
              {theHungryScholarsQualityCommitments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-white/85">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/75">
              {theHungryScholarsMenuFocus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Contact
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              Talk to The Hungry Scholars team
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl bg-card p-7 shadow-card-luxe">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary">Location</h3>
              <p className="text-muted-foreground">{theHungryScholarsContact.venue}</p>
            </div>
            <div className="rounded-2xl bg-card p-7 shadow-card-luxe">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary">Phone</h3>
              <div className="space-y-2 text-muted-foreground">
                {theHungryScholarsContact.phones.map((phone) => (
                  <div key={phone}>{phone}</div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-card p-7 shadow-card-luxe">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary">Email</h3>
              <a
                href={theHungryScholarsContact.emailHref}
                className="text-muted-foreground hover:text-gold"
              >
                {theHungryScholarsContact.email}
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Director: {theHungryScholarsContact.director}
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 font-semibold text-primary hover-lift"
            >
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
