import { Heart } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-[2rem] gradient-strong px-6 py-14 sm:px-12 sm:py-20 text-center">
          <Heart
            className="absolute -top-8 -right-8 w-44 h-44 text-white/10 fill-white/10 rotate-12"
            aria-hidden="true"
          />
          <Heart
            className="absolute -bottom-10 -left-6 w-36 h-36 text-white/10 fill-white/10 -rotate-12"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 max-w-2xl mx-auto leading-tight">
              Pronto para criar um presente único?
            </h2>
            <p className="text-white/85 text-lg max-w-xl mx-auto mb-8 text-pretty">
              Fale conosco pelo WhatsApp e monte seu personalizado com a ajuda de
              quem ama o que faz.
            </p>
            <a
              href={whatsappLink(
                "Olá! Quero solicitar um orçamento para um presente personalizado. Pode me ajudar?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Solicitar Orçamento
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
