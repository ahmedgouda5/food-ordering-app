import Featuers from "@/components/Featuers";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Pizza";

export default function Home() {
  return (
    <main className="mx-auto w-[90%] px-4 pt-5 pb-2">
      <Hero />
      <Featuers />
      <Menu />
      <Footer/>
    </main>
  );
}
