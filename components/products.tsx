import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { whatsappLink } from "@/lib/whatsapp";

const products = [
  {
    id: 1,
    name: "Chaveiros Personalizados",
    description:
      "Chaveiros únicos para brindes corporativos ou lembranças especiais.",
    category: "Acessórios",
    image: "/produto-chaveiro.png",
  },
  {
    id: 2,
    name: "Bonés Bordados",
    description:
      "Bonés de alta qualidade com bordados personalizados para sua marca.",
    category: "Vestuário",
    image: "/produto-bone.png",
  },
  {
    id: 3,
    name: "Garrafas Térmicas",
    description:
      "Garrafas personalizadas que mantêm suas bebidas na temperatura ideal.",
    category: "Utilidades",
    image: "/produto-garrafa.png",
  },
  {
    id: 4,
    name: "Agendas e Cadernos",
    description: "Agendas personalizadas para organizar seu ano com estilo.",
    category: "Papelaria",
    image: "/produto-agenda.png",
  },
  {
    id: 5,
    name: "Canecas Personalizadas",
    description: "Canecas únicas para presentear ou usar no dia a dia.",
    category: "Utilidades",
    image: "/produto-caneca.png",
  },
  {
    id: 6,
    name: "Ecobags",
    description:
      "Sacolas ecológicas personalizadas com a identidade da sua marca.",
    category: "Acessórios",
    image: "/produto-ecobag.png",
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 uppercase tracking-wider">
            Nossos Produtos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            O que personalizamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça nossa linha de produtos personalizáveis. Cada item é
            produzido com atenção aos detalhes e qualidade garantida.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Reveal
              as="article"
              key={product.id}
              delay={(index % 3) * 120}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300 group"
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
              <div className="p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
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
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Consulte outros produtos
          </a>
        </div>
      </div>
    </section>
  );
}
