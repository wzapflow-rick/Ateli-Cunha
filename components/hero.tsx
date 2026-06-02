import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-16 sm:pt-20">
      {/* Decorative gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #fbe4f3 0%, #fdf4fa 40%, #fdf1e3 100%)",
        }}
        aria-hidden="true"
      />
      {/* Glow blobs (pink + yellow) */}
      <div
        className="absolute -top-20 -left-24 w-80 h-80 rounded-full bg-accent/30 blur-3xl -z-10 animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-[-6rem] w-96 h-96 rounded-full bg-gold/30 blur-3xl -z-10 animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      {/* Floating decorative hearts */}
      <Heart
        className="absolute top-32 left-[8%] w-8 h-8 text-accent/40 fill-accent/20 animate-float hidden sm:block"
        aria-hidden="true"
      />
      <Sparkles
        className="absolute top-44 right-[14%] w-7 h-7 text-gold animate-float-slow hidden sm:block"
        aria-hidden="true"
      />
      <Heart
        className="absolute bottom-24 left-[15%] w-6 h-6 text-primary/30 fill-primary/20 animate-float-slow hidden sm:block"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-1 lg:order-1">
            <h1
              className="font-serif text-4xl min-[400px]:text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] text-balance mb-4 animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="shimmer-text animate-gradient text-glow">
                Ateliê Cunha
              </span>
            </h1>
            <p
              className="text-xl sm:text-2xl font-serif text-foreground/90 leading-snug text-pretty mb-6 max-w-lg animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              Um presente feito com amor é inesquecível
            </p>
            <span
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-medium text-sm mb-6 shadow-lg shadow-accent/30 animate-fade-up glow-pink"
              style={{ animationDelay: "0.25s" }}
            >
              <Heart className="w-4 h-4 fill-current animate-pulse-heart" />
              Campanha Dia dos Namorados
            </span>
            <p
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg text-pretty animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Neste Dia dos Namorados, surpreenda quem você ama com itens
              personalizados e exclusivos. Canecas, chaveiros, garrafas e kits
              especiais criados com todo carinho pelo Ateliê Cunha Criativa.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href={whatsappLink(
                  "Olá! Vi a campanha de Dia dos Namorados no site e quero presentear alguém especial. Pode me ajudar?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30 glow-pink"
              >
                Quero presentear
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-6 py-3.5 rounded-full font-medium hover:bg-secondary transition-colors border border-border"
              >
                Ver a coleção
              </Link>
            </div>

            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 text-sm text-muted-foreground animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-accent fill-accent" />
                Feito à mão
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                100% personalizável
              </span>
            </div>
          </div>

          {/* Campaign Image */}
          <div
            className="order-2 lg:order-2 animate-fade-right"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2rem] blur-2xl animate-glow-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(236,72,153,0.45), rgba(251,191,36,0.35))",
                }}
                aria-hidden="true"
              />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/30 border-4 border-card">
                <Image
                  src="/kit-namorados-v2.png"
                  alt="Kit de presentes personalizado para o Dia dos Namorados do Ateliê Cunha Criativa"
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
