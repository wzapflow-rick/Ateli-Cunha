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
    <section id="categorias" className="py-16 sm:py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="flex items-center gap-4 mb-10 sm:mb-14">
          <span className="hidden sm:block h-px flex-1 bg-border" />
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-center text-balance">
            Escolha por Categoria
          </h2>
          <span className="hidden sm:block h-px flex-1 bg-border" />
        </Reveal>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            aria-label="Ver categorias anteriores"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-2 sm:-ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border text-foreground shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth px-2 py-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((category) => {
              const isActive = selected === category.name;
              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => selectAndScroll(category.name)}
                  aria-pressed={isActive}
                  className="group flex-shrink-0 snap-center flex flex-col items-center gap-4 w-32 sm:w-40"
                >
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent via-primary to-gold blur-[2px] transition-opacity ${
                        isActive
                          ? "opacity-100 animate-glow-pulse"
                          : "opacity-70 group-hover:opacity-100 group-hover:animate-glow-pulse"
                      }`}
                    />
                    <div
                      className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-card ring-2 transition-all duration-300 ${
                        isActive
                          ? "ring-accent scale-105"
                          : "ring-card group-hover:scale-105"
                      }`}
                    >
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={`Categoria ${category.name}`}
                        fill
                        sizes="(max-width: 640px) 112px, 144px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <span
                    className={`text-sm sm:text-base font-semibold text-center transition-colors text-balance ${
                      isActive
                        ? "text-accent"
                        : "text-foreground group-hover:text-accent"
                    }`}
                  >
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            aria-label="Ver mais categorias"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-2 sm:-mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border text-foreground shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
