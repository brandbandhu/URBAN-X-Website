import { urbanxContact } from "@/lib/siteContent";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      <a
        href={urbanxContact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-luxe hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-ping" />
      </a>
      <a
        href={urbanxContact.phoneHref}
        aria-label="Call us"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-gradient-gold text-primary flex items-center justify-center shadow-luxe md:hidden hover:scale-110 transition-transform"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
}
