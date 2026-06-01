import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-16 sm:pt-20"
    >
      {/* Decorative gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #fbe4f3 0%, #fdf4fa 40%, #f3e0f6 100%)",
        }}
        aria-hidden="true"
      />
      {/* Floating decorative hearts */}
      <Heart
        className="absolute top-32 left-[8%] w-8 h-8 text-accent/30 fill-accent/20 animate-float hidden sm:block"
        aria-hidden="true"
      />
      <Heart
        className="absolute top-48 right-[12%] w-6 h-6 text-primary/30 fill-primary/20 animate-float-slow hidden sm:block"
        aria-hidden="true"
      />
      <Sparkles
        className="absolute bottom-24 left-[15%] w-7 h-7 text-accent/40 animate-float-slow hidden sm:block"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-medium text-sm mb-6 shadow-lg shadow-accent/20">
              <Heart className="w-4 h-4 fill-current animate-pulse-heart" />
              Campanha Dia dos Namorados
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] text-balance mb-6">
              Um presente{" "}
              <span
                className="bg-clip-text text-transparent animate-gradient"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #9d2b8f, #ec4899, #9d2b8f)",
                  backgroundSize: "200% auto",
                }}
              >
                feito com amor
              </span>{" "}
              é inesquecível
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg text-pretty">
              Neste Dia dos Namorados, surpreenda quem você ama com itens
              personalizados e exclusivos. Canecas, chaveiros, garrafas e kits
              especiais criados com todo carinho pelo Ateliê Cunha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                Quero presentear
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-6 py-3.5 rounded-full font-medium hover:bg-secondary transition-colors border border-border"
              >
                Ver a coleção
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-accent fill-accent" />
                Feito à mão
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                100% personalizável
              </span>
            </div>
          </div>

          {/* Campaign Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-[2rem] blur-2xl" aria-hidden="true" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 border-4 border-card">
                <Image
                  src="/campanha-namorados.png"
                  alt="Kit de presentes personalizados para o Dia dos Namorados do Ateliê Cunha"
                  width={640}
                  height={640}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-3 sm:left-6 bg-card rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 animate-float">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/15">
                  <Heart className="w-5 h-5 text-accent fill-accent" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    Kits do Amor
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Edição especial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
