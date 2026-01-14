import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import HowIWork from "@/components/sections/HowIWork";
import Artifacts from "@/components/sections/Artifacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <HowIWork />
      <Artifacts />
    </main>
  );
}
