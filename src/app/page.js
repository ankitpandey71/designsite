import HeroComponents from "../components/HeroComponents";
import Image from "next/image";
import { FloatingNav } from "../components/ui/FloatingNav";
import { navItems } from "../data/Index";
import GridComponent from "../components/GridComponent";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <HeroComponents />
        <GridComponent />
      </div>
    </main>
  );
}
