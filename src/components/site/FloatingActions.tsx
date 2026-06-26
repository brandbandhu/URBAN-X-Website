import { urbanxContact } from "@/lib/siteContent";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingActions() {
  return (
    <>
      <a
        href={urbanxContact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-4 right-4 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-110 md:bottom-6 md:right-6 md:flex"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span
          className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-gold"
          aria-hidden="true"
        />
      </a>
      <a
        href={urbanxContact.phoneHref}
        aria-label="Call us"
        className="fixed bottom-4 left-4 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-primary shadow-luxe transition-transform hover:scale-110 md:bottom-6 md:left-6 md:flex"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
}
