import { Header } from "@/components/header";
import { AnimatedBackground } from "@/components/animated-background";
import { Hero } from "@/components/hero";
import { CategoryFilterProvider } from "@/components/category-filter-context";
import { Categories } from "@/components/categories";
import { Products } from "@/components/products";
import { HowItWorks } from "@/components/how-it-works";
import { Campaign } from "@/components/campaign";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { FinalCTA } from "@/components/final-cta";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
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
          <Products />
        </CategoryFilterProvider>
        <HowItWorks />
        <Campaign />
        <Gallery />
        <Testimonials />
        <About />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
