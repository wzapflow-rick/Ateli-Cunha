import { MousePointerClick, ImageUp, Eye, Gift } from "lucide-react";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    icon: MousePointerClick,
    title: "Escolha seu produto",
    description: "Selecione entre canecas, kits, chaveiros e muito mais.",
  },
  {
    icon: ImageUp,
    title: "Envie sua foto ou ideia",
    description: "Mande pelo WhatsApp a foto, o nome ou a frase especial.",
  },
  {
    icon: Eye,
    title: "Receba a prévia",
    description: "Criamos uma prévia da arte para você aprovar com calma.",
  },
  {
    icon: Gift,
    title: "Surpreenda alguém especial",
    description: "Produzimos com carinho e seu presente fica pronto.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-3 uppercase tracking-wider">
            Simples e Rápido
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Personalizar é Fácil
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 120}
              className="relative bg-card rounded-2xl p-6 border border-border card-lift"
            >
              <span className="absolute top-5 right-6 font-serif text-5xl font-bold text-accent/10">
                {index + 1}
              </span>
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl gradient-strong text-white mb-5 shadow-lg shadow-primary/20">
                <step.icon className="w-6 h-6" />
              </span>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
