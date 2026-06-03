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
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_255/0.92)] via-[oklch(0.18_0.05_255/0.78)] to-[oklch(0.18_0.05_255/0.5)]" />
      </div>
      <div className="container-x relative z-10 text-white animate-fade-up">
        <nav className="flex items-center gap-2 text-sm text-white/80 mb-5">
          <Link to="/" className="flex items-center gap-1 hover:text-gold"><Home className="w-3.5 h-3.5" /> Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5" />
              {c.to ? (
                <Link to={c.to} className="hover:text-gold">{c.label}</Link>
              ) : (
                <span className="text-gold">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-white/85 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
