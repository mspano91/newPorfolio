import Projects from "@/app/components/projects/Projects";
import PresentationCard from "@/app/components/presentation/PresentationCard";
import Skills from "@/app/components/skills/Skills";
import Tittle from "./components/tittle/Tittle";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between pt-6 md:p-24">
      <div className="flex flex-col lg:flex-row justify-center gap-6 xl:gap-[89px] pt-10 md:pr-7 lg:px-7">
        <div className="flex flex-row justify-center md:justify-start">
          <PresentationCard />
        </div>
        <Tittle />
      </div>
      <div>
        <Skills />
      </div>
      <div className="z-10 max-w-5xl items-center justify-between text-sm blo lg:flex">
        <Projects />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
