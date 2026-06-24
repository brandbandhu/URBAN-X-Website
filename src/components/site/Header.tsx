import { Link } from "@/components/site/AppLink";
import { urbanxBrand, urbanxBrandCards } from "@/lib/siteContent";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const chromeClass = scrolled ? "bg-background/95 backdrop-blur-md shadow-card-luxe" : "bg-transparent";
  const linkClass = scrolled ? "text-foreground hover:text-gold" : "text-white hover:text-gold";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${chromeClass}`}>
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-gold rounded flex items-center justify-center font-bold text-primary text-lg shadow-card-luxe">
            UX
          </div>
          <div className="leading-tight">
            <div className={`font-display font-bold text-xl tracking-wider ${scrolled ? "text-primary" : "text-white"}`}>
              {urbanxBrand.name}
            </div>
            <div className={`text-[10px] tracking-[0.25em] uppercase ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
              {urbanxBrand.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${linkClass}`}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button
              type="button"
              aria-expanded={drop}
              aria-haspopup="menu"
              onClick={() => setDrop((current) => !current)}
              className={`px-4 py-2 text-sm font-medium rounded-md flex items-center gap-1 transition-colors ${linkClass}`}
            >
              Brands <ChevronDown className="w-4 h-4" />
            </button>
            {drop && (
              <div className="absolute top-full right-0 w-72 pt-2">
                <div className="bg-card rounded-lg shadow-luxe border border-border overflow-hidden animate-fade-in">
                  {urbanxBrandCards.map((brand) => (
                    <Link
                      key={brand.to}
                      to={brand.to}
                      onClick={() => setDrop(false)}
                      className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-gold transition-colors border-b border-border last:border-0"
                    >
                      <div className="font-semibold">{brand.label}</div>
                      <div className="text-xs text-muted-foreground">{brand.tagline}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/contact" className="ml-3 px-5 py-2.5 bg-gradient-gold text-primary font-semibold text-sm rounded-md hover-lift">
            Get a Quote
          </Link>
        </nav>

        <button className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-foreground hover:text-gold hover:bg-secondary rounded-md"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground mt-2">Brands</div>
            {urbanxBrandCards.map((brand) => (
              <Link
                key={brand.to}
                to={brand.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-foreground hover:text-gold hover:bg-secondary rounded-md"
              >
                <div className="font-semibold">{brand.label}</div>
                <div className="text-xs text-muted-foreground">{brand.tagline}</div>
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 px-5 py-3 bg-gradient-gold text-primary font-semibold text-center rounded-md">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
