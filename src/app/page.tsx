import Projects from "@/app/components/projects/Projects";
import PresentationCard from "@/app/components/presentation/PresentationCard";
import Skills from "@/app/components/skills/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div
        className="md:w-[1280px] pt-10 flex flex-row justify-start
      md:p-10"
      >
        <PresentationCard />
      </div>
      <div>
        <Skills />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between  text-sm lg:flex">
        <Projects />
      </div>
    </main>
  );
}
