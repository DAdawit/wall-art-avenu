// import NavDrawer from "@/common/NavDrawer";
// import NavBar from "@/common/NavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Nunito,
  Rokkitt,
  Open_Sans,
  Poppins,
  Freehand,
  Sirin_Stencil,
} from "next/font/google";

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
    <div className="overflow-hidden">
      <div className="h-[100vh] w-screen relative ">
        <Image
          src="/banner2.png"
          alt="spector"
          fill
          className="w-screen h-[100vh] object-cover brightness-95 "
          blurDataURL="/banner1.jpg"
        />
        {/* <div className="absolute top-0  w-full z-10 px-16 py-3 border-b-[0.5px] border-gray-200">
          <div className="w-full flex justify-between items-center">
            <div>
              <Image
                src="/logoOnly.png"
                height={1000}
                width={1000}
                alt="logo image"
                className="h-14 w-14 object-contain self-center text-orange-800"
              />
            </div>
            <div className="flex justify-center items-center space-x-2 text-white ">
              <Link href="/" className="hidden sm:flex">
                HOME
              </Link>
              <Link href="#about" className="hidden sm:flex">
                ABOUT US
              </Link>
              <Link href="#testimonial" className="hidden sm:flex">
                TESTIMONIAL
              </Link>
              <Link href="#news" className="hidden sm:flex">
                NEWS
              </Link>
              <Link href="#contact" className="hidden sm:flex">
                CONTACT
              </Link>
            </div>
          </div>
        </div> */}
        <div className="absolute top-1/3 w-full grid">
          {/* <div className=""> */}
          {/* <div className=""> */}

          {/* </div> */}
          <div className="grid items-start w-max px-5">
            {/* <h2
              className={`text-start text-secondary text-4xl md:text-6xl font-extrabold tracking-widest  mt-2 ${sirinStencil.className}`}
            >
              Elevate your decor with our
            </h2>
            <h2
              className={`text-start first-letter:sm:text-center text-secondary font-serif text-3xl md:text-5xl font-extrabold tracking-widest mt-3 ${sirinStencil.className}`}
            >
              stunning wall art
            </h2> */}
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
          {/* </div> */}
        </div>
      </div>

      <section className="mt-20">
        <h1 className="text-center text-6xl text-white font-black capitalize">
          <span className={poppins.className}>
            Wellcome to our{" "}
            <span className={`text-[#DB9D47] ${sirinStencil.className}`}>
              website
            </span>
          </span>
        </h1>
        <p
          className={`container mx-auto text-center font-medium max-w-4xl text-gray-50 mt-8 px-5 ${poppins.className} `}
        >
          We a curated selection of wall art designed to inspire and uplift any
          space. From modern to traditional styles, each piece is chosen for its
          ability to create a unique and inspiring atmosphere. Discover the art
          that inspires, for spaces that inspire you to be your best self.
        </p>
      </section>
    </div>
  );
};

export default Hero;
