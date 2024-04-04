import Projects from "@/app/components/projects/Projects";
import PresentationCard from "@/app/components/presentation/PresentationCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div
        className="border border-red-400 md:w-[1280px] pt-10 flex flex-row justify-start
      md:p-10"
      >
        <PresentationCard />
      </div>

      <div className="z-10 max-w-5xl w-full items-center border border-yellow-400 justify-between font-mono text-sm lg:flex">
        <Projects />
      </div>
    </main>
  );
}
