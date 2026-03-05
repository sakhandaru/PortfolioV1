
import { About } from "@/components/(main) about";
import { SmoothCursor } from "@/components/ux/smooth-cursor";
import { ScrollProgress } from "@/components/ux/scroll-progress";
import Hero from "@/components/(main) hero";
import Projects from "@/components/(main) project";
import ContactReveal from "@/components/contact-reveal";

export default function Home() {
  return (
    <>
      <div id="hero"></div>
      <ScrollProgress className="top" />
      <div className="hidden sm:block">
        <SmoothCursor />
      </div>
      <Hero />
      <About />
      <Projects />
      <ContactReveal />
    </>
  );
}


  
