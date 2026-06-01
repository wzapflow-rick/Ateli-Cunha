import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Ateliê Cunha</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Transformando ideias em produtos únicos desde 2020. Especialistas
              em personalização de alta qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#inicio"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#produtos"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Chaveiros</li>
              <li>Bonés</li>
              <li>Garrafas</li>
              <li>Agendas</li>
              <li>E muito mais</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="w-4 h-4" />
                <span>contato@ateliecunha.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Instagram className="w-4 h-4" />
                <span>@ateliecunha</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-8 text-center">
          <p className="text-sm text-background/60">
            2024 Ateliê Cunha. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
