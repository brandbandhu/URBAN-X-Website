import { BrandLogo } from "@/components/site/BrandLogo";
import { Link } from "@/components/site/AppLink";
import { demarvelBrand, demarvelBrandCards, demarvelContact } from "@/lib/siteContent";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white/85 pt-20 pb-8 mt-24">
      <div className="container-x grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo
            variant="full"
            className="mb-5 max-w-[11rem] rounded-md bg-white p-3"
            imageClassName="max-h-[7.5rem]"
          />
          <p className="text-sm leading-relaxed text-white/70">
            {demarvelBrand.tagline} - bringing architecture, interiors, automation, furniture,
            décor, landscaping and turnkey execution together under one trusted roof.
          </p>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-5 gold-underline">Quick Links</h4>
          <ul className="space-y-2 text-sm mt-7">
            {[
              ["/", "Home"],
              ["/about", "About De marvel"],
              ["/services", "Services"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-5 gold-underline">Our Brands</h4>
          <ul className="space-y-2 text-sm mt-7">
            {demarvelBrandCards.map((brand) => (
              <li key={brand.to}>
                <Link to={brand.to} className="hover:text-gold transition-colors">
                  {brand.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-5 gold-underline">Get in Touch</h4>
          <ul className="space-y-3 text-sm mt-7">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
              <span>{demarvelContact.office}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0 mt-1" />
              <a href={demarvelContact.phoneHref} className="hover:text-gold">
                {demarvelContact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0 mt-1" />
              <a href={demarvelContact.emailHref} className="hover:text-gold">
                {demarvelContact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
        <div>Copyright {new Date().getFullYear()} De marvel. All rights reserved.</div>
        <div>{demarvelBrand.tagline}</div>
      </div>
    </footer>
  );
}
