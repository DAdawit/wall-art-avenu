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
            <div className="w-full bg-gray-200 rounded-3xl">
              <div className="bg-gray-100 py-5 rounded-3xl">
                <div className="h-28 flex items-center justify-center ">
                  <h2 className="text-3xl text-green-500">Birr 500</h2>
                </div>
                <h4 className="text-center text-lg font-medium font-sans -mt-3">
                  Digital image only
                </h4>
              </div>
              <hr />
              <div className="py-10 px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                voluptatum quidem magni laboriosam quis quo error, a sed,
                maiores ex sunt expedita consequuntur ullam! Illo aperiam
                voluptates rerum amet harum.
              </div>
            </div>
            <div className="w-full h-96 bg-black">
              <div className="h-52 bg-"></div>
            </div>
            <div className="w-full h-96 bg-black">
              <div className="h-52 bg-primary"></div>
            </div>
            <div className="w-full h-96 bg-black">
              <div className="h-52 bg-primary"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
