import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { CaseStudies } from "@/components/sections/case-studies";
import { DawnClub } from "@/components/sections/dawn-club";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { BlogPlaceholder } from "@/components/sections/blog-placeholder";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <DawnClub />
      <Testimonials />
      <Contact />
      <BlogPlaceholder />
    </>
  );
}
