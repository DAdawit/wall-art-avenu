// import NavDrawer from "@/common/NavDrawer";
// import NavBar from "@/common/NavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Poppins, Sirin_Stencil } from "next/font/google";

const sirinStencil = Sirin_Stencil({
  subsets: ["latin"],
  weight: ["400"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
const Hero = () => {
  return (
    <div className="overflow-hidden pb-28">
      <div className="h-[100vh] w-screen relative ">
        <Image
          src="/banner2.png"
          alt="spector"
          fill
          className="w-screen h-[100vh] object-cover brightness-95 "
          blurDataURL="/banner1.jpg"
        />
        <div className="absolute top-1/3 w-full grid">
          <div className="grid items-start w-max px-5">
            <div className="text-orange-500">
              <Image
                src="/logo.svg"
                height={1000}
                width={1000}
                alt="logo image"
                className="h-40 md:h-56 w-max object-contain self-start mt-10"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h1 className="text-center text-6xl text-white font-black capitalize">
          <span className={`text-[#DB9D47] ${sirinStencil.className}`}>
            Wall Art Avenue
          </span>
        </h1>
        <div className="flex justify-center">
          <Image
            src="/logoOnly.png"
            height={1000}
            width={1000}
            alt="logo image"
            className="h-14 w-14 object-contain self-center text-orange-800 my-2"
          />
        </div>
        <p
          className={`container mx-auto text-center font-medium max-w-4xl text-gray-50 mt-5 px-5 ${poppins.className} `}
        >
          where we specialize in creating stunning, AI-generated images. We
          print and deliver high-quality, archival-grade prints to your door and
          offer digital image delivery for those who prefer to display their
          artwork digitally.
        </p>
      </section>
    </div>
  );
};

export default Hero;
