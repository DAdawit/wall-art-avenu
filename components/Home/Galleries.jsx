"use client";
import React from "react";
import { paintings } from "@/data/data";
import { africanWomens } from "@/data/data";
import { lions } from "@/data/data";
import { realistics } from "@/data/data";
import { mannequins } from "@/data/data";
import FullImageDialog from "@/common/FullImageDialog";
import CollectionsIcon from "@mui/icons-material/Collections";
import { wallArts } from "@/data/data";
import {
  Nunito,
  Rokkitt,
  Open_Sans,
  Poppins,
  Freehand,
  Sirin_Stencil,
} from "next/font/google";
import Link from "next/link";
import Image from "next/image";

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
    <>
      <section className="bg-black  rounded-t-xl">
        <section className="container mx-auto px-5 sm:px-0 py-16 ">
          <div>
            <h1
              className={`text-center text-6xl text-secondary ${poppins.className}`}
            >
              Our Wall Art
              <span className="text-4xl sm:text-6xl">Designes</span>
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
            <section id="paintings">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center mt-10">
                {wallArts.map((item) => (
                  <div key={item} className="w-full ">
                    <div className="relative">
                      <Image
                        src={`${item.image}`}
                        height={1000}
                        width={1000}
                        alt="gallery image"
                        className="h-96 w-full object-cover object-top rounded-xl"
                      />
                      <div className="absolute bottom-3 left-3 ">
                        <FullImageDialog image={item.image} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="flex justify-center my-10">
            <Link
              href="#"
              className="bg-secondary text-white text-lg font-medium px-3 py-2 rounded-lg flex justify-center items-center gap-4"
            >
              <span className={poppins.className}>view our Gallery</span>
              <CollectionsIcon />
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default Galleries;
