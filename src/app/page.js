import HeroComponents from "../components/HeroComponents";
import Image from "next/image";
import { FloatingNav } from "../components/ui/FloatingNav";
import { navItems } from "../data/Index";
import GridComponent from "../components/GridComponent";
import { CommentsCardComponent } from "../components/CommentsCardComponent";
import { CanvasCardComponent } from "../components/CanvasCardComponent";
import { StickyScrollRevealComponent } from "../components/StickyScrollRevealComponent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className=" bg-black-100 flex  flex-col overflow-hidden   ">
      <FloatingNav navItems={navItems} />
      <HeroComponents />
      <GridComponent />
      <CommentsCardComponent />
      <StickyScrollRevealComponent />
      <CanvasCardComponent />
      <Footer />
    </main>
  );
}
