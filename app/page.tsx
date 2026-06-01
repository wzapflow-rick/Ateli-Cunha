import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Campaign } from "@/components/campaign";
import { Products } from "@/components/products";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Campaign />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
