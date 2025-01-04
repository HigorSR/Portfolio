import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <div className="container mx-auto px-12">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
      </div>
    </main>
  );
}
