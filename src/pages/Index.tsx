import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Index;
