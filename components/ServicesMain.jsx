import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import { mainServices } from "@/data/data";
const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400"],
});
const ServicesMain = () => {
  return (
    <>
      <section className="container mx-auto px-5 sm:px-0">
        <h1
          className={`text-center text-6xl text-secondary my-10 ${poppins.className}`}
        >
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          {mainServices.map((item, index) => (
            <div key={index}>
              <div className="grid shadow-2xl rounded-xl bg-primary">
                <img
                  src={`${item.image}`}
                  height={1000}
                  width={1000}
                  alt="image"
                  className="h-56 w-full object-cover rounded-t-xl"
                />
                <div className="grid gap-y-2 mt-4 px-3 pb-3">
                  <h1
                    className={`text-center text-white text-2xl font-bold tracking-wider uppercase ${poppins.className}`}
                  >
                    {item.name}
                  </h1>
                  <p className="text-gray-200 h-36 text-sm tracking-wider font-sans">
                    {item.description}
                  </p>
                  <Link
                    href="#"
                    className=" w-max rounded-xl px-4 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesMain;
