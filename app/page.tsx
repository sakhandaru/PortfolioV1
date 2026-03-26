
import { About } from "@/components/(main) about";
import { SmoothCursor } from "@/components/ux/smooth-cursor";
import { ScrollProgress } from "@/components/ux/scroll-progress";
import Hero from "@/components/(main) hero";
import Projects from "@/components/(main) project";
import ContactReveal from "@/components/contact-reveal";
import { MarqueeDemo as Experience } from "@/components/experience";
import PageTransition from "@/components/ux/page-transition";

export default function Home() {
  return (
    <>
      <PageTransition />
      <div id="hero"></div>
      <ScrollProgress className="top" />
      <div className="hidden sm:block">
        <SmoothCursor />
      </div>
      <Hero />
      <About />
      <section id="experience" className="bg-gray-100 dark:bg-black pt-16">
        <div className="max-w-6xl mx-auto px-4">
          <Experience />
        </div>
      </section>
      <Projects />
      <ContactReveal />
    </>
  );
}
