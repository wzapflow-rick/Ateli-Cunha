import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="btn-whatsapp fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl hover:scale-110"
    >
      <span
        className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30"
        aria-hidden="true"
      />
      <WhatsAppIcon className="relative w-7 h-7 sm:w-8 sm:h-8" />
    </a>
  );
}
