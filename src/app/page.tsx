import HomePage from "@/components/HomePage/HomePage";
import AboutMe from "@/components/AboutMe/AboutMe";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <HomePage />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
