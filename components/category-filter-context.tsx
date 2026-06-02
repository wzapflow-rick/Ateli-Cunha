"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

export const CATEGORIES = [
  "Caneca de Cerâmica",
  "Caneca Térmica",
  "Boné",
  "Garrafa",
  "Agenda",
  "Chaveiro",
  "Copo Térmico",
] as const;

export type Category = (typeof CATEGORIES)[number];

type CategoryFilterContextValue = {
  selected: Category | "Todos";
  setSelected: (value: Category | "Todos") => void;
  selectAndScroll: (value: Category | "Todos") => void;
};

const CategoryFilterContext = createContext<CategoryFilterContextValue | null>(
  null
);

export function CategoryFilterProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Category | "Todos">("Todos");

  const selectAndScroll = useCallback((value: Category | "Todos") => {
    setSelected(value);
    const target = document.getElementById("produtos");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <CategoryFilterContext.Provider
      value={{ selected, setSelected, selectAndScroll }}
    >
      {children}
    </CategoryFilterContext.Provider>
  );
}

export function useCategoryFilter() {
  const context = useContext(CategoryFilterContext);
  if (!context) {
    throw new Error(
      "useCategoryFilter deve ser usado dentro de CategoryFilterProvider"
    );
  }
  return context;
}
