import { BrandLogo } from "@/components/site/BrandLogo";
import { Link } from "@/components/site/AppLink";
import { urbanxBrandCards } from "@/lib/siteContent";
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
    let rafId = 0;

    const updateScrolled = () => {
      const next = window.scrollY > 20;
      setScrolled((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(updateScrolled);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const chromeClass = scrolled
    ? "border-b border-border/60 bg-white/95 shadow-card-luxe backdrop-blur-md"
    : "border-b border-border/30 bg-white/95 backdrop-blur-md";
  const linkClass = "text-foreground hover:text-gold";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${chromeClass}`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="group flex items-center">
          <BrandLogo
            variant="navbar"
            className="h-[4.35rem] w-[4.35rem] shrink-0 sm:h-[4.75rem] sm:w-[4.75rem]"
            imageClassName={
              scrolled
                ? "drop-shadow-[0_4px_12px_rgba(15,23,42,0.12)]"
                : "drop-shadow-[0_6px_14px_rgba(15,23,42,0.1)]"
            }
          />
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
          <div
            className="relative"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
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
          <Link
            to="/contact"
            className="ml-3 px-5 py-2.5 bg-gradient-gold text-primary font-semibold text-sm rounded-md hover-lift"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-background shadow-card-luxe animate-fade-in">
          <div className="container-x flex flex-col gap-1 py-4">
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
            <div className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground mt-2">
              Brands
            </div>
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
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-md bg-gradient-gold px-5 py-3 text-center font-semibold text-primary"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
