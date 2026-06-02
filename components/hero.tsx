import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Sparkles, Gift, Zap } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

const trustBadges = [
  { icon: Heart, label: "Personalização Exclusiva" },
  { icon: Gift, label: "Feito para Presentear" },
  { icon: Zap, label: "Atendimento Rápido" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 -z-10 gradient-soft" aria-hidden="true" />
      <div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-accent/20 blur-3xl -z-10 animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-[-6rem] w-96 h-96 rounded-full bg-gold/20 blur-3xl -z-10 animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <span
              className="inline-flex items-center gap-2 bg-card text-primary px-4 py-2 rounded-full font-medium text-sm mb-6 shadow-sm border border-border animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              <Sparkles className="w-4 h-4" />
              Presentes Personalizados Exclusivos
            </span>

            <h1
              className="font-serif text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] text-balance mb-5 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              Transformamos fotos e ideias em{" "}
              <span className="shimmer-text animate-gradient">
                presentes inesquecíveis
              </span>
            </h1>

            <p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 text-pretty animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              Canecas, kits, chaveiros e lembranças personalizadas criadas com
              carinho para surpreender quem você ama.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href={whatsappLink(
                  "Olá! Vim pelo site do Ateliê Cunha e quero fazer um pedido personalizado. Pode me ajudar?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-[#25d366]/25 hover:scale-[1.03]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Fazer Pedido pelo WhatsApp
              </a>
              <Link
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-6 py-3.5 rounded-full font-medium hover:bg-secondary transition-colors border border-border"
              >
                Ver Produtos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-3 mt-8 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="flex items-center gap-2 text-sm text-foreground/70"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/10 text-accent">
                    <badge.icon className="w-4 h-4" />
                  </span>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="order-2 lg:order-2 animate-fade-right"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div
                className="absolute -inset-4 rounded-[2rem] blur-2xl animate-glow-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(194,24,143,0.4), rgba(255,122,89,0.35))",
                }}
                aria-hidden="true"
              />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/25 border-4 border-card">
                <Image
                  src="/kit-namorados-v2.png"
                  alt="Composição de presentes personalizados do Ateliê Cunha: caneca com foto, kit presenteável e lembranças"
                  width={640}
                  height={640}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -left-3 sm:left-6 bg-card rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 animate-float">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/15">
                  <Heart className="w-5 h-5 text-accent fill-accent" />
                </span>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    Feito à mão
                  </p>
                  <p className="text-xs text-muted-foreground">
                    100% personalizável
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
