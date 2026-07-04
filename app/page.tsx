import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ToolGrid from "@/components/home/ToolGrid";
import Categories from "@/components/home/Categories";
import Stats from "@/components/home/Stats";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />
      <Hero />
      <ToolGrid />
      <Categories />
      <Stats />
      <Footer />
    </main>
  );
}