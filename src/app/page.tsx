import Projects from "@/app/components/projects/Projects";
import PresentationCard from "@/app/components/presentation/PresentationCard";
import Skills from "@/app/components/skills/Skills";
import Tittle from "./components/tittle/Tittle";
import Footer from "./components/footer/Footer";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="flex min-h-screen flex-col items-center justify-between lg:items-start pt-0 md:p-2">
        <NavBar />
        <div className="flex flex-col md:flex-row justify-center gap-6 xl:gap-[40px] px-8 pt-8 ">
          <div className="flex flex-row justify-center md:justify-start">
            <PresentationCard />
          </div>
          <div className="flex flex-col justify-center md:justify-start ">
            <Tittle />
          </div>
        </div>
        <div>
          <Skills />
        </div>
        <div className="z-10 max-w-5xl items-center justify-between text-sm blo lg:flex">
          <Projects />
        </div>
        <div className="flex justify-start xl:w-[1280px]">
          <Footer />
        </div>
      </main>
    </div>
  );
}
