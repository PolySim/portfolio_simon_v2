import HomePage from "@/components/HomePage/HomePage";
import AboutMe from "@/components/AboutMe/AboutMe";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="flex-1">
      <HomePage />
      <AboutMe />
      <Skills />
    </main>
  );
}
