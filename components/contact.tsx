"use client";

import { Phone, MapPin } from "lucide-react";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

function Instagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contato" className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Vamos conversar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tem uma ideia em mente? Fale com a gente pelo WhatsApp e receba seu
            orçamento personalizado em minutos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md hover:border-accent/40 transition-all"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">
                    Telefone / WhatsApp
                  </span>
                  <span className="font-medium text-foreground">
                    {WHATSAPP_DISPLAY}
                  </span>
                </div>
              </a>

              <a
                href="https://instagram.com/ateliecunhacriativa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md hover:border-accent/40 transition-all"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">
                    Instagram
                  </span>
                  <span className="font-medium text-foreground">
                    @ateliecunhacriativa
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">
                    Localização
                  </span>
                  <span className="font-medium text-foreground">
                    Aracaju, SE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--whatsapp)]/10 flex items-center justify-center mb-5">
              <WhatsAppIcon className="w-8 h-8 text-[var(--whatsapp)]" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3 text-balance">
              Faça seu pedido pelo WhatsApp
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm text-pretty">
              Atendimento rápido e direto. Conte sua ideia, envie suas fotos e
              receba seu orçamento sem compromisso.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
