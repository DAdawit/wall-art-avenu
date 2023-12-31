"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { firstCategories } from "@/data/data";
import { secondCategories } from "@/data/data";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
const Categories = () => {
  const styles2 = {
    backgroundImage: `url('/banner2.jpg')`,
    backgroundSize: "cover",
  };

  const [moreCategories, setMoreCategories] = useState(false);

  return (
    <>
      {/* <div className="mt-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
          {firstCategories.map((category, index) => (
            <div key={category.id} className="">
              <div className="p-3 grid items-center w-96">
                <div className="grid sm:flex sm:flex-row justify-evenly mt-5 px-5">
                  <div className="group relative max-w-96">
                    <img
                      src={`${category.image}`}
                      // height={1000}
                      // width={1000}
                      alt="breakfast"
                      className="w-max rounded-lg object-cover h-96"
                    />
                    <div className="absolute top-0 left-0  w-full h-0 flex flex-col justify-center items-center bg-secondary opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
                      <h1 className="flex flex-wrap text-xl w-max font-medium text-white tracking-wide">
                        <span className={poppins.className}>
                          {category.name}
                        </span>
                      </h1>
                      <Link
                        href="#"
                        className="hover:underline underline-offset-2 text-gray-100"
                      >
                        see more
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={
            !moreCategories
              ? `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center`
              : "hidden"
          }
        >
          {secondCategories.map((category, index) => (
            <div key={category.id} className="">
              <div className="p-3 grid items-center w-96">
                <div className="grid sm:flex sm:flex-row justify-evenly mt-5 px-5">
                  <div className="group relative max-w-96">
                    <img
                      src={`${category.image}`}
                      // height={1000}
                      // width={1000}
                      alt="breakfast"
                      className="w-max rounded-lg object-cover h-96"
                    />
                    <div className="absolute top-0 left-0  w-full h-0 flex flex-col justify-center items-center bg-secondary opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
                      <h1 className="flex flex-wrap text-xl w-max font-medium text-white tracking-wide">
                        <span className={poppins.className}>
                          {category.name}
                        </span>
                      </h1>
                      <Link
                        href="#"
                        className="hover:underline underline-offset-2 text-gray-100"
                      >
                        see more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center text-white text-lg font-medium mt-8">
          <button
            onClick={() => setMoreCategories(!moreCategories)}
            className="bg-secondary px-6 py-3 flex justify-center items-center gap-3 rounded-xl"
          >
            <span className={poppins.className}>More Categories</span>
            <span className="animate-bounce">
              {moreCategories ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </span>
          </button>
        </div>
      </div> */}

      <div className="bg-fixed bg-cover bg-center py-5" style={styles2}>
        <h1 className="text-6xl font-bold text-secondary text-center my-10">
          <span className={poppins.className}>Best Categories</span>
        </h1>
        {/* firs category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
          {firstCategories.map((category, index) => (
            <div key={category.id} className="">
              <div className="p-3 grid items-center w-96">
                <div className="grid sm:flex sm:flex-row justify-evenly mt-5 px-5">
                  <div className="group relative max-w-96">
                    <Image
                      src={`${category.image}`}
                      height={1000}
                      width={1000}
                      alt="breakfast"
                      className="w-max rounded-lg object-cover h-96"
                    />
                    <div className="absolute top-0 left-0  w-full h-0 flex flex-col justify-center items-center bg-secondary opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
                      <h1 className="flex flex-wrap text-xl w-max font-medium text-white tracking-wide">
                        <span className={poppins.className}>
                          {category.name}
                        </span>
                      </h1>
                      <Link
                        href="#"
                        className="hover:underline underline-offset-2 text-gray-100"
                      >
                        see more
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* second category */}

        <div
          className={
            !moreCategories
              ? `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center`
              : "hidden"
          }
        >
          {secondCategories.map((category, index) => (
            <div key={category.id} className="">
              <div className="p-3 grid items-center w-96">
                <div className="grid sm:flex sm:flex-row justify-evenly mt-5 px-5">
                  <div className="group relative max-w-96">
                    <img
                      src={`${category.image}`}
                      // height={1000}
                      // width={1000}
                      alt="breakfast"
                      className="w-max rounded-lg object-cover h-96"
                    />
                    <div className="absolute top-0 left-0  w-full h-0 flex flex-col justify-center items-center bg-secondary opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
                      <h1 className="flex flex-wrap text-xl w-max font-medium text-white tracking-wide">
                        <span className={poppins.className}>
                          {category.name}
                        </span>
                      </h1>
                      <Link
                        href="#"
                        className="hover:underline underline-offset-2 text-gray-100"
                      >
                        see more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center text-white text-lg font-medium mt-8">
          <button
            onClick={() => setMoreCategories(!moreCategories)}
            className="border-2 border-secondary px-6 py-3 flex justify-center items-center gap-3 rounded-xl text-sm text-secondary "
          >
            <span className={poppins.className}>See More ...</span>
            <span className="animate-bounce">
              {moreCategories ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Categories;
