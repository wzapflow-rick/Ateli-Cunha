import { Header } from "@/components/header";
import { AnimatedBackground } from "@/components/animated-background";
import { Hero } from "@/components/hero";
import { CategoryFilterProvider } from "@/components/category-filter-context";
import { Categories } from "@/components/categories";
import { Campaign } from "@/components/campaign";
import { Products } from "@/components/products";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryFilterProvider>
          <Categories />
          <Campaign />
          <Products />
        </CategoryFilterProvider>
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
