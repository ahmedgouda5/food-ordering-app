import Featuers from "@/components/Featuers";
import Hero from "@/components/Hero";
import Menu from "@/components/Pizza";

export default function Home() {
  return (
    <main className="mx-auto w-[90%] px-4 py-5">
      <Hero />
      <Featuers />
      <Menu />
    </main>
  );
}
