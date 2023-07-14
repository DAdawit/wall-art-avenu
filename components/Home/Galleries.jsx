"use client";
import React from "react";
import { paintings } from "@/data/data";
import { africanWomens } from "@/data/data";
import { lions } from "@/data/data";
import { realistics } from "@/data/data";
import { mannequins } from "@/data/data";
import FullImageDialog from "@/common/FullImageDialog";
import CollectionsIcon from "@mui/icons-material/Collections";
import {
  Nunito,
  Rokkitt,
  Open_Sans,
  Poppins,
  Freehand,
  Sirin_Stencil,
} from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
const sirinStencil = Sirin_Stencil({
  subsets: ["latin"],
  weight: ["400"],
});
const Galleries = () => {
  let image = "/categories/category-4.png";
  return (
    <section className="container mx-auto px-5 sm:px-0 py-16">
      <div>
        <h1
          className={`text-center text-6xl text-secondary ${poppins.className}`}
        >
          Our Gallery
        </h1>
        <section id="paintings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center mt-10">
            {paintings.map((item) => (
              <div key={item} className="w-full ">
                <div className="relative">
                  <img
                    src={`${item.image}`}
                    alt="gallery image"
                    className="h-96 w-full object-cover object-top rounded-xl"
                  />
                  <div className="absolute bottom-3 left-3 ">
                    <FullImageDialog image={item.image} />
                  </div>
                </div>

                {/* <button className="text-secondary mt-3">Order Now</button> */}
              </div>
            ))}
          </div>
        </section>
        <section id="lions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center mt-10">
            {lions.map((item) => (
              <div key={item} className="w-full ">
                <div className="relative">
                  <img
                    src={`${item.image}`}
                    alt="gallery image"
                    className="h-96 w-full object-cover object-top rounded-xl"
                  />
                  <div className="absolute bottom-3 left-3 ">
                    <FullImageDialog image={item.image} />
                  </div>
                </div>

                {/* <button className="text-secondary mt-3">Order Now</button> */}
              </div>
            ))}
          </div>
        </section>
        <section id="mannequins">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center mt-10">
            {mannequins.map((item) => (
              <div key={item} className="w-full ">
                <div className="relative">
                  <img
                    src={`${item.image}`}
                    alt="gallery image"
                    className="h-96 w-full object-cover object-top rounded-xl"
                  />
                  <div className="absolute bottom-3 left-3 ">
                    <FullImageDialog image={item.image} />
                  </div>
                </div>

                {/* <button className="text-secondary mt-3">Order Now</button> */}
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex justify-center my-10">
        <Link
          href="#"
          className="bg-secondary text-white text-xl font-medium px-5 py-3 rounded-lg flex justify-center items-center gap-4"
        >
          <span className={poppins.className}>view our Gallery</span>
          <CollectionsIcon />
        </Link>
      </div>
    </section>
  );
};

export default Galleries;
