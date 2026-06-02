import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Aracaju, SE",
    text: "Encomendei uma caneca com a foto do meu namorado e ficou perfeita! A prévia chegou rapidinho e o atendimento pelo WhatsApp foi super atencioso.",
    initial: "M",
  },
  {
    name: "Rafael T.",
    role: "Cliente desde 2023",
    text: "Comprei um kit para presentear minha mãe e ela amou. Qualidade impecável e entrega no prazo. Já virei cliente fiel do Ateliê Cunha!",
    initial: "R",
  },
  {
    name: "Carla M.",
    role: "Aracaju, SE",
    text: "As lembrancinhas do meu casamento foram um sucesso. Cada detalhe feito com tanto carinho. Recomendo de olhos fechados!",
    initial: "C",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-3 uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Quem Compra, Recomenda
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 120}
              className="bg-card rounded-2xl p-7 border border-border card-lift flex flex-col"
            >
              <div className="flex gap-1 mb-4" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 text-pretty flex-1">
                {`"${item.text}"`}
              </p>
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-11 h-11 rounded-full gradient-strong text-white font-semibold">
                  {item.initial}
                </span>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
