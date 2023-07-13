import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#172121]">
      <Hero />
      <Categories />
      <Services />
    </main>
  );
}
