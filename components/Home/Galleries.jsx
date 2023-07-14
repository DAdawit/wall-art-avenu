"use client";
import React from "react";
import FullImageDialog from "@/common/FullImageDialog";
import {
  Nunito,
  Rokkitt,
  Open_Sans,
  Poppins,
  Freehand,
  Sirin_Stencil,
} from "next/font/google";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center mt-10">
          {[1, 2].map((item) => (
            <div key={item} className="w-full ">
              <div className="relative">
                <img
                  src="/categories/category-1.png"
                  alt="gallery image"
                  className="h-96 w-full object-cover object-top rounded-xl"
                />
                <div className="absolute bottom-3 left-3 ">
                  <FullImageDialog image={image} />
                </div>
              </div>
              <p className="text-white mt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate accusamus quos, id laboriosam, iusto eos cum sunt
                itaque dolores possimus consequatur.
              </p>
              <button className="text-secondary mt-3">Order Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galleries;
