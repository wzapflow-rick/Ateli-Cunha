import { Award, Clock, Heart, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";

const features = [
  {
    icon: Heart,
    title: "Feito com Carinho",
    description:
      "Cada produto é criado com dedicação e atenção aos mínimos detalhes.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description:
      "Utilizamos apenas materiais de alta qualidade em todos os nossos produtos.",
  },
  {
    icon: Clock,
    title: "Entrega no Prazo",
    description:
      "Comprometimento com prazos para que você receba seu pedido quando precisa.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description:
      "Acompanhamento completo desde a ideia até a entrega do produto final.",
  },
];

const stats = [
  { value: "500+", label: "Clientes Satisfeitos" },
  { value: "1000+", label: "Produtos Entregues" },
  { value: "4+", label: "Anos de Experiência" },
  { value: "100%", label: "Dedicação" },
];

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <Reveal>
            <span className="inline-block text-accent font-medium text-sm mb-4 uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
              Somos a Paty e a Prill
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              Duas irmãs apaixonadas por transformar carinho em detalhes
              inesquecíveis. No Ateliê Cunha Criativa, criamos presentes e
              lembranças personalizadas para tornar cada momento ainda mais
              especial.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Trabalhamos com muito amor, dedicação e criatividade para levar
              encanto às festas, datas comemorativas e ocasiões únicas da vida.
              Mais do que personalizados, criamos afeto em forma de presente.
            </p>
          </Reveal>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Reveal
                key={feature.title}
                delay={(index % 2) * 120}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 sm:mt-20">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 100}
              className="text-center p-6 bg-card rounded-2xl border border-border"
            >
              <span className="font-serif text-3xl sm:text-4xl font-bold shimmer-text">
                {stat.value}
              </span>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
