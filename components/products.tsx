const products = [
  {
    id: 1,
    name: "Chaveiros Personalizados",
    description:
      "Chaveiros únicos para brindes corporativos ou lembranças especiais.",
    category: "Acessórios",
    emoji: "🔑",
  },
  {
    id: 2,
    name: "Bonés Bordados",
    description:
      "Bonés de alta qualidade com bordados personalizados para sua marca.",
    category: "Vestuário",
    emoji: "🧢",
  },
  {
    id: 3,
    name: "Garrafas Térmicas",
    description:
      "Garrafas personalizadas que mantêm suas bebidas na temperatura ideal.",
    category: "Utilidades",
    emoji: "🍶",
  },
  {
    id: 4,
    name: "Agendas e Cadernos",
    description:
      "Agendas personalizadas para organizar seu ano com estilo.",
    category: "Papelaria",
    emoji: "📒",
  },
  {
    id: 5,
    name: "Canecas Personalizadas",
    description:
      "Canecas únicas para presentear ou usar no dia a dia.",
    category: "Utilidades",
    emoji: "☕",
  },
  {
    id: 6,
    name: "Ecobags",
    description:
      "Sacolas ecológicas personalizadas com a identidade da sua marca.",
    category: "Acessórios",
    emoji: "🛍️",
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-16 sm:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-primary font-medium text-sm mb-4">
            Nossos Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            O que personalizamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça nossa linha de produtos personalizáveis. Cada item é
            produzido com atenção aos detalhes e qualidade garantida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-card rounded-2xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="bg-muted rounded-xl aspect-video flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <span className="text-5xl">{product.emoji}</span>
              </div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {product.category}
              </span>
              <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Consulte outros produtos
          </a>
        </div>
      </div>
    </section>
  );
}
