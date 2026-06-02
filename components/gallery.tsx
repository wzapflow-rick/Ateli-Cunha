import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { whatsappLink } from "@/lib/whatsapp";
import { InstagramIcon } from "@/components/icons";

const gallery = [
  { src: "/caneca-v2.png", alt: "Caneca personalizada com foto em coração" },
  { src: "/kit-namorados-v2.png", alt: "Kit presenteável personalizado" },
  { src: "/produto-caneca.png", alt: "Caneca de cerâmica personalizada" },
  { src: "/produto-garrafa.png", alt: "Garrafa térmica personalizada" },
  { src: "/produto-chaveiro.png", alt: "Chaveiros personalizados" },
  { src: "/produto-bone.png", alt: "Boné personalizado" },
  { src: "/produto-agenda.png", alt: "Agenda personalizada" },
  { src: "/produto-ecobag.png", alt: "Ecobag personalizada" },
];

export function Gallery() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-accent font-medium text-sm mb-3 uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Produções Reais
          </h2>
          <a
            href="https://instagram.com/ateliecunhacriativa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            <InstagramIcon className="w-4 h-4" />
            @ateliecunhacriativa
          </a>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {gallery.map((item, index) => (
            <Reveal
              key={item.src}
              delay={(index % 4) * 100}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-secondary"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span
                className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center"
                aria-hidden="true"
              >
                <InstagramIcon className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <a
            href={whatsappLink(
              "Olá! Vi as produções de vocês e quero encomendar um personalizado. Pode me ajudar?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold hover:scale-105"
          >
            Quero algo assim
          </a>
        </Reveal>
      </div>
    </section>
  );
}
