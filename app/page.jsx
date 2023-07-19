import Categories from "@/components/Home/Categories";
import Contact from "@/components/Home/Contact";
import Galleries from "@/components/Home/Galleries";
// import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Image from "next/image";
import Hero1 from "@/common/Hero1";
import ServicesMain from "@/components/ServicesMain";
export default function Home() {
  return (
    <main className="bg-[#172121]">
      {/* <Hero /> */}
      <Hero1 />
      <ServicesMain />
      <Galleries />
      <Categories />
      <Services />
      <Contact />
    </main>
  );
}
