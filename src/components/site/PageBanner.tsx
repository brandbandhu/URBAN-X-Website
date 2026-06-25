import { Link } from "@/components/site/AppLink";
import { ChevronRight, Home } from "lucide-react";

interface Props {
  title: string;
  subtitle?: string;
  crumbs: { label: string; to?: string }[];
  image: string;
}

export function PageBanner({ title, subtitle, crumbs, image }: Props) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_255/0.92)] via-[oklch(0.18_0.05_255/0.78)] to-[oklch(0.18_0.05_255/0.5)]" />
      </div>
      <div className="container-x relative z-10 text-white animate-fade-up">
        <nav className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-white/80 sm:text-sm">
          <Link to="/" className="flex items-center gap-1 hover:text-gold">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5" />
              {c.to ? (
                <Link to={c.to} className="hover:text-gold">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gold">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:mt-5 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
