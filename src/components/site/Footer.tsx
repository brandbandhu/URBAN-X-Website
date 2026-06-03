import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white/85 pt-20 pb-8 mt-24">
      <div className="container-x grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-gold rounded flex items-center justify-center font-bold text-primary">UX</div>
            <div>
              <div className="font-display font-bold text-xl text-white">URBAN-X</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold">Group</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            One brand, multiple business solutions — cleaning, gardening, construction rental, and premium marble furnishing under a single trusted roof.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-primary hover:border-gold transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-5 gold-underline">Quick Links</h4>
          <ul className="space-y-2 text-sm mt-7">
            {[
              ["/", "Home"], ["/about", "About URBAN-X"], ["/services", "Our Companies"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-5 gold-underline">Our Companies</h4>
          <ul className="space-y-2 text-sm mt-7">
            <li><Link to="/new-royal-services" className="hover:text-gold">New Royal Services</Link></li>
            <li><Link to="/aishwarya-rental" className="hover:text-gold">Aishwarya Rental</Link></li>
            <li><Link to="/urban-de" className="hover:text-gold">URBAN-DE</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-5 gold-underline">Get in Touch</h4>
          <ul className="space-y-3 text-sm mt-7">
            <li className="flex gap-3"><MapPin className="w-4 h-4 text-gold shrink-0 mt-1" /><span>URBAN-X Headquarters, India</span></li>
            <li className="flex gap-3"><Phone className="w-4 h-4 text-gold shrink-0 mt-1" /><a href="tel:+919999999999" className="hover:text-gold">+91 99999 99999</a></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 text-gold shrink-0 mt-1" /><a href="mailto:info@urban-x.com" className="hover:text-gold">info@urban-x.com</a></li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
        <div>© {new Date().getFullYear()} URBAN-X Group. All rights reserved.</div>
        <div>Designed with care · One Brand · Multiple Solutions</div>
      </div>
    </footer>
  );
}
