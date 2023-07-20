import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import CheckIcon from "@mui/icons-material/Check";
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center pt-16">
            <div className="w-full bg-gray-200 rounded-3xl">
              <div className="bg-gray-100 py-5 rounded-3xl">
                <div className="h-28 flex items-center justify-center ">
                  <h2 className="text-3xl text-green-500">Birr 500</h2>
                </div>
                <h4 className="text-center text-lg font-medium font-sans -mt-3 uppercase">
                  Digital image
                </h4>
              </div>
              <hr />
              <div className="py-10 px-5 h-20">
                <p className="font-sans text-md text-gray-700">
                  Digital version of the artwork without the physical print
                </p>
              </div>
              <ul className="font-sans mt-8 capitalize mb-5 px-5 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  image size : any size
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Resolution : UHD
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  File format : png/jpg
                </li>
              </ul>
              <div className="flex justify-center py-3 bg-slate-300 rounded-xl ">
                <button className="font-medium  text-gray-800 capitalize ">
                  see all feauters
                </button>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-3xl -translate-y-10 translate-x-2">
              <div className="bg-gray-100 py-5 rounded-3xl">
                <div className="h-28 flex items-center justify-center ">
                  <h2 className="text-3xl text-green-500">Birr 3000 </h2>
                </div>
                <h4 className="text-center text-lg font-medium font-sans -mt-3 uppercase">
                  Pre-designed artwork
                </h4>
              </div>
              <hr />
              <div className="py-10 px-5 h-20">
                <p className="font-sans text-md text-gray-700">
                  Ready-made artwork from our collection
                </p>
              </div>
              <ul className="font-sans mt-8 capitalize mb-5 px-5 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Image size : 120/90
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  material : MDF
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Quantity : 1-5
                </li>
              </ul>
              <div className="flex justify-center py-3 bg-slate-300 rounded-xl ">
                <button className="font-medium  text-gray-800 capitalize ">
                  see all feauters
                </button>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-3xl -translate-y-10 -translate-x-2">
              <div className="bg-gray-100 py-5 rounded-3xl">
                <div className="h-28 flex items-center justify-center ">
                  <h2 className="text-3xl text-green-500">Birr 6000</h2>
                </div>
                <h4 className="text-center text-lg font-medium font-sans -mt-3 uppercase">
                  Semi-custom design
                </h4>
              </div>
              <hr />
              <div className="py-10 px-5 h-20">
                <p className="font-sans text-md text-gray-700">
                  Modified version of an existing design
                </p>
              </div>
              <ul className="font-sans mt-8 capitalize mb-5 px-5 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Level of modification : 25-50%
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Size of the artwork : 120/90
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Number of revisions : 5
                </li>
              </ul>
              <div className="flex justify-center py-3 bg-slate-300 rounded-xl ">
                <button className="font-medium  text-gray-800 capitalize ">
                  see all feauters
                </button>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-3xl">
              <div className="bg-gray-100 py-5 rounded-3xl">
                <div className="h-28 flex items-center justify-center ">
                  <h2 className="text-3xl text-green-500">Birr 7000</h2>
                </div>
                <h4 className="text-center text-lg font-medium font-sans -mt-3 uppercase">
                  Custom design
                </h4>
              </div>
              <hr />
              <div className="py-10 px-5 h-20">
                <p className="font-sans text-md text-gray-700">
                  One-of-a-kind, customized wall art design
                </p>
              </div>
              <ul className="font-sans mt-8 capitalize mb-5 px-5 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Size of the artwork : 120/90
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Complexity of the design : ....{" "}
                </li>
                <li>
                  <CheckIcon className="text-secondary brightness-105" /> {"  "}
                  Number of revisions : 10
                </li>
              </ul>
              <div className="flex justify-center py-3 bg-slate-300 rounded-xl ">
                <button className="font-medium  text-gray-800 capitalize ">
                  see all feauters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
