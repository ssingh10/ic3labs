import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Ventures } from "@/components/Ventures";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Ventures />
      <Partners />
    </main>
  );
}
