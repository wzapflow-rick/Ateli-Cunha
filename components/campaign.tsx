import Image from "next/image";
import { Heart, Gift, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { whatsappLink } from "@/lib/whatsapp";

const highlights = [
  {
    icon: Gift,
    title: "Kits Exclusivos",
    description: "Combinações especiais pensadas para casais apaixonados.",
  },
  {
    icon: Heart,
    title: "Mensagem Personalizada",
    description: "Inclua nomes, datas e frases que marcam a sua história.",
  },
  {
    icon: Clock,
    title: "Encomende com Antecedência",
    description: "Garanta a entrega a tempo da data mais romântica do ano.",
  },
];

export function Campaign() {
  return (
    <section
      id="campanha"
      className="py-16 sm:py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <Heart
        className="absolute -top-6 -right-6 w-40 h-40 text-primary-foreground/5 fill-primary-foreground/5 rotate-12"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 bg-primary-foreground/15 px-4 py-2 rounded-full font-medium text-sm mb-6">
              <Heart className="w-4 h-4 fill-current" />
              Edição Dia dos Namorados
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6 leading-tight">
              Kits do Amor para celebrar momentos únicos
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 text-pretty">
              Monte o presente perfeito combinando canecas, chaveiros, garrafas
              e agendas com personalização exclusiva. Uma surpresa que emociona
              e fica na memória para sempre.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mb-8">
              {highlights.map((item) => (
                <div key={item.title}>
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-foreground/15 mb-3">
                    <item.icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-primary-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink(
                "Olá! Quero montar um Kit do Amor para o Dia dos Namorados. Pode me ajudar com as opções?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-card text-primary px-7 py-3.5 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/10"
            >
              <Heart className="w-4 h-4 fill-current" />
              Montar meu kit
            </a>
          </Reveal>

          <Reveal delay={150} className="order-1 lg:order-2">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2rem] blur-2xl animate-glow-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(251,191,36,0.45), rgba(255,255,255,0.25))",
                }}
                aria-hidden="true"
              />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-primary-foreground/10">
                <Image
                  src="/caneca-v2.png"
                  alt="Caneca personalizada com foto em formato de coração - Você é minha notificação preferida"
                  width={640}
                  height={640}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
