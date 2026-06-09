import { Hero } from "@/components/sections/hero";
import { Belief } from "@/components/sections/belief";
import { Work } from "@/components/sections/work";
import { FounderBeing } from "@/components/sections/founder-being";
import { Connect } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Belief />
      <Work />
      <FounderBeing />
      <Connect />
    </>
  );
}
