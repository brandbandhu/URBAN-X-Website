import { demarvelContact } from "@/lib/siteContent";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingActions() {
  return (
    <>
      <a
        href={demarvelContact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-110 md:bottom-6 md:right-6 md:h-14 md:w-14"
      >
        <WhatsAppIcon className="h-6 w-6 md:h-8 md:w-8" />
        <span
          className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-gold"
          aria-hidden="true"
        />
      </a>
      <a
        href={demarvelContact.phoneHref}
        aria-label="Call us"
        className="fixed bottom-4 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-primary shadow-luxe transition-transform hover:scale-110 md:bottom-6 md:left-6 md:h-14 md:w-14"
      >
        <Phone className="h-5 w-5 md:h-6 md:w-6" />
      </a>
    </>
  );
}
