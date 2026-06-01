import { Award, Clock, Heart, Users } from "lucide-react";

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

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-medium text-sm mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
              Dedicados à criatividade e personalização
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              O Ateliê Cunha nasceu da paixão por criar produtos únicos que
              contam histórias. Acreditamos que cada item personalizado carrega
              um significado especial, seja para presentear alguém querido ou
              fortalecer a identidade da sua marca.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Nossa missão é transformar suas ideias em realidade, oferecendo
              qualidade, criatividade e um atendimento que faz a diferença.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-secondary rounded-2xl p-6 hover:bg-muted transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 sm:mt-20">
          <div className="text-center p-6 bg-secondary rounded-2xl">
            <span className="text-3xl sm:text-4xl font-bold text-primary">
              500+
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              Clientes Satisfeitos
            </p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-2xl">
            <span className="text-3xl sm:text-4xl font-bold text-primary">
              1000+
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              Produtos Entregues
            </p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-2xl">
            <span className="text-3xl sm:text-4xl font-bold text-primary">
              4+
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              Anos de Experiência
            </p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-2xl">
            <span className="text-3xl sm:text-4xl font-bold text-primary">
              100%
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              Dedicação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
