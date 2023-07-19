import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
// 0941326088
const Pricing = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-16 sm:px-0">
          <h1 className="text-center text-6xl text-white font-black capitalize mt-10">
            <span className={`text-[#DB9D47] ${poppins.className}`}>
              Pricing
            </span>
          </h1>
          <div className="flex justify-center my-5">
            <Image
              src="/logoOnly.png"
              height={1000}
              width={1000}
              alt="logo image"
              className="h-14 w-14 object-contain self-center text-orange-800 "
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            <div className="w-full bg-black">
              <div className="h-52 bg-blue-500"></div>
            </div>
            <div className="w-full h-96 bg-black">
              <div className="h-52 bg-blue-500"></div>
            </div>
            <div className="w-full h-96 bg-black">
              <div className="h-52 bg-blue-500"></div>
            </div>
            <div className="w-full h-96 bg-black">
              <div className="h-52 bg-blue-500"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
