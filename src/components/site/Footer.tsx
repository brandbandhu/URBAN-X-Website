import { BrandLogo } from "@/components/site/BrandLogo";
import { Link } from "@/components/site/AppLink";
import { demarvelBrand, demarvelBrandCards, demarvelContact } from "@/lib/siteContent";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy pt-20 pb-8 text-white/85">
      <div className="container-x grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo variant="full" className="mb-5 max-w-[11rem] rounded-md bg-white p-3" imageClassName="max-h-[7.5rem]" />
          <p className="text-sm leading-relaxed text-white/70">
            {demarvelBrand.tagline} — bringing interior design, architectural planning,
            infrastructure, landscaping and turnkey execution together under one trusted roof.
          </p>
        </div>

        <div>
          <h4 className="gold-underline mb-5 font-display text-lg text-white">Quick Links</h4>
          <ul className="mt-7 space-y-2 text-sm">
            {[["/", "Home"], ["/about", "About D Marvel"], ["/services", "Services"], ["/portfolio", "Projects & Portfolio"], ["/contact", "Contact"]].map(([to, label]) => (
              <li key={to}><Link to={to} className="transition-colors hover:text-gold">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="gold-underline mb-5 font-display text-lg text-white">Our Brands</h4>
          <ul className="mt-7 space-y-2 text-sm">
            {demarvelBrandCards.map((brand) => (
              <li key={brand.to}><Link to={brand.to} className="transition-colors hover:text-gold">{brand.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="gold-underline mb-5 font-display text-lg text-white">Get in Touch</h4>
          <ul className="mt-7 space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" /><span>{demarvelContact.office}</span></li>
            <li className="flex gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-gold" /><a href={demarvelContact.phoneHref} className="hover:text-gold">{demarvelContact.phoneDisplay}</a></li>
            {demarvelContact.email && demarvelContact.emailHref && <li className="flex gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-gold" /><a href={demarvelContact.emailHref} className="hover:text-gold">{demarvelContact.email}</a></li>}
          </ul>
        </div>
      </div>

      <div className="container-x mt-14 flex justify-center border-t border-white/10 pt-6 text-center text-xs text-white/60">
        <div>© 2026 D Marvel Infra Solutions. All Rights Reserved. Developed by{" "}<a href="https://webakoof.com/" target="_blank" rel="noreferrer" className="font-semibold text-white transition-colors hover:text-gold">Webakoof</a></div>
      </div>
    </footer>
  );
}
