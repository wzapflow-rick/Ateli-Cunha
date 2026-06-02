"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";
import {
  CATEGORIES,
  useCategoryFilter,
  type Category,
} from "@/components/category-filter-context";

type Product = {
  id: number;
  name: string;
  description: string;
  category: Category;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Caneca de Cerâmica",
    description:
      "Canecas de cerâmica personalizadas com fotos, nomes e frases especiais.",
    category: "Caneca de Cerâmica",
    image: "/produto-caneca.png",
  },
  {
    id: 2,
    name: "Caneca Térmica",
    description:
      "Canecas térmicas que mantêm sua bebida quentinha por mais tempo.",
    category: "Caneca Térmica",
    image: "/cat-caneca-termica.png",
  },
  {
    id: 3,
    name: "Boné Personalizado",
    description:
      "Bonés de alta qualidade com bordados e estampas personalizadas.",
    category: "Boné",
    image: "/produto-bone.png",
  },
  {
    id: 4,
    name: "Garrafa Personalizada",
    description:
      "Garrafas que mantêm suas bebidas na temperatura ideal, com a sua cara.",
    category: "Garrafa",
    image: "/produto-garrafa.png",
  },
  {
    id: 5,
    name: "Agenda Personalizada",
    description: "Agendas e cadernos personalizados para organizar com estilo.",
    category: "Agenda",
    image: "/produto-agenda.png",
  },
  {
    id: 6,
    name: "Chaveiro Personalizado",
    description:
      "Chaveiros únicos para brindes, lembrancinhas ou presentes especiais.",
    category: "Chaveiro",
    image: "/produto-chaveiro.png",
  },
  {
    id: 7,
    name: "Copo Térmico",
    description:
      "Copos térmicos com canudo, personalizados para o seu dia a dia.",
    category: "Copo Térmico",
    image: "/cat-copo-termico.png",
  },
];

const filters: ("Todos" | Category)[] = ["Todos", ...CATEGORIES];

export function Products() {
  const { selected, setSelected } = useCategoryFilter();

  const visibleProducts =
    selected === "Todos"
      ? products
      : products.filter((product) => product.category === selected);

  return (
    <section id="produtos" className="py-16 sm:py-24 bg-background scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-accent font-medium text-sm mb-4 uppercase tracking-wider">
            Mais Vendidos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Os Favoritos dos Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Os personalizados mais pedidos do Ateliê Cunha. Escolha o seu e faça
            o pedido em segundos pelo WhatsApp.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap items-center justify-center gap-2.5 mb-10 sm:mb-12">
          {filters.map((filter) => {
            const isActive = selected === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelected(filter)}
                aria-pressed={isActive}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-card text-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProducts.map((product, index) => (
            <Reveal
              as="article"
              key={product.id}
              delay={(index % 3) * 120}
              className="bg-card rounded-2xl overflow-hidden border border-border card-lift group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {product.description}
                </p>
                <a
                  href={whatsappLink(
                    `Olá! Tenho interesse no produto "${product.name}". Pode me passar mais informações e valores?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Pedir pelo WhatsApp
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura?
          </p>
          <a
            href={whatsappLink(
              "Olá! Não encontrei o que procuro no site. Vocês fazem outros produtos personalizados?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex items-center justify-center px-6 py-3 rounded-full font-medium hover:scale-105 shadow-lg shadow-primary/20"
          >
            Consulte outros produtos
          </a>
        </div>
      </div>
    </section>
  );
}
