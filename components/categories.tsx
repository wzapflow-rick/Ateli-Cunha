"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  useCategoryFilter,
  type Category,
} from "@/components/category-filter-context";

const categories: { name: Category; image: string }[] = [
  { name: "Caneca de Cerâmica", image: "/cat-caneca-ceramica.png" },
  { name: "Caneca Térmica", image: "/cat-caneca-termica.png" },
  { name: "Boné", image: "/cat-bone.png" },
  { name: "Garrafa", image: "/cat-garrafa.png" },
  { name: "Agenda", image: "/cat-agenda.png" },
  { name: "Chaveiro", image: "/cat-chaveiro.png" },
  { name: "Copo Térmico", image: "/cat-copo-termico.png" },
];

export function Categories() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { selected, selectAndScroll } = useCategoryFilter();

  const scrollByAmount = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8;
    track.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="categorias" className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-accent font-medium text-sm mb-3 uppercase tracking-wider">
            Explore
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Escolha por Categoria
          </h2>
        </Reveal>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            aria-label="Ver categorias anteriores"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-2 sm:-ml-4 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-card border border-border text-foreground shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={trackRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-1 py-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((category) => {
              const isActive = selected === category.name;
              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => selectAndScroll(category.name)}
                  aria-pressed={isActive}
                  className={`group relative flex-shrink-0 snap-center w-44 sm:w-52 rounded-3xl overflow-hidden card-lift text-left border ${
                    isActive
                      ? "border-accent ring-2 ring-accent"
                      : "border-border"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={`Categoria ${category.name}`}
                      fill
                      sizes="(max-width: 640px) 176px, 208px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span
                      className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="block font-semibold text-base text-white text-balance leading-tight">
                        {category.name}
                      </span>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-white/80 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Ver produtos
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            aria-label="Ver mais categorias"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-2 sm:-mr-4 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-card border border-border text-foreground shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="sm:hidden mt-4 text-center text-xs text-muted-foreground">
          Arraste para o lado para ver mais categorias
        </p>
      </div>
    </section>
  );
}
