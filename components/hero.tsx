import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-16 sm:pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-primary font-medium text-sm mb-4">
              Personalização com qualidade
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
              Transforme suas ideias em{" "}
              <span className="text-primary">produtos únicos</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg text-pretty">
              No Ateliê Cunha, criamos itens personalizados para tornar momentos
              especiais ainda mais memoráveis. Chaveiros, bonés, garrafas,
              agendas e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3.5 rounded-full font-medium hover:bg-muted transition-colors"
              >
                Ver Produtos
              </Link>
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-muted rounded-2xl aspect-square flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-4xl sm:text-5xl">🎁</span>
                    <p className="text-sm text-muted-foreground mt-2">
                      Chaveiros
                    </p>
                  </div>
                </div>
                <div className="bg-primary/10 rounded-2xl aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-4xl sm:text-5xl">🧢</span>
                    <p className="text-sm text-muted-foreground mt-2">Bonés</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-accent/20 rounded-2xl aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-4xl sm:text-5xl">🍶</span>
                    <p className="text-sm text-muted-foreground mt-2">
                      Garrafas
                    </p>
                  </div>
                </div>
                <div className="bg-secondary rounded-2xl aspect-square flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-4xl sm:text-5xl">📒</span>
                    <p className="text-sm text-muted-foreground mt-2">
                      Agendas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
