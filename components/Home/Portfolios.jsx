"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import { websites } from "@/data/data";
import { VueIcon } from "@/icons/VueIcon";
import { VuetifyIcon } from "@/icons/VuetifyIcon";
import { TailwindIcon } from "@/icons/TailwindIcon";
import { MuiIcon } from "@/icons/MuiIcon";
import { NextjsIcon } from "@/icons/NextjsIcon";
import { GraphqlIcon } from "@/icons/GraphqlIcon";
import { TypescriptIcon } from "@/icons/Typescript";
import { JavascriptIcon } from "@/icons/JavascriptIcon";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import Image from "next/image";
const roboto = Roboto({
  subsets: ["greek"],
  weight: ["300"],
});
const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400"],
});
const Portfolios = () => {
  const [moreCategories, setMoreCategories] = useState(false);
  return (
    <>
      <section className="bg-[#0F0D0D]  pt-10 pb-5">
        <div className="container mx-auto px-5 sm:px-0">
          <h1
            className={`text-center text-6xl text-secondary my-10 capitalize ${poppins.className}`}
          >
            Our Web{" "}
            <span className="text-4xl sm:text-6xl block sm:inline-block">
              Designes
            </span>
          </h1>
          <div>
            <h1
              className={`text-5xl text-secondary my-10 ${poppins.className}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
                <div className="p-3 grid items-center w-full">
                  <div className="grid sm:flex sm:flex-row justify-evenly mt-5">
                    <div className="group relative w-full">
                      <Image
                        src="/works/foodMenu.png"
                        height={1000}
                        width={1000}
                        alt="image"
                        className="h-64 w-full object-cover rounded-xl object-top brightness-90 hover:brightness-100"
                      />
                      <div className="absolute rounded-xl top-0 left-0  w-full h-0 flex flex-col justify-center items-center bg-primary opacity-0 group-hover:h-full group-hover:opacity-60 duration-500">
                        <div className="grid gap-y-2 mt-4 px-3 pb-3">
                          <div className="flex items-center gap-2  my-2 ">
                            <NextjsIcon />
                            <TailwindIcon />
                            <MuiIcon />
                            <TypescriptIcon />
                          </div>
                        </div>
                        <p className="text-sm text-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eum animi suscipit dignissimos, illo
                          perspiciatis, debitis culpa doloribus, quia esse
                          accusamus at architecto itaque?
                        </p>
                      </div>
                    </div>
                  </div>
                  <h1
                    className={`text-gray-200 font-bold text-2xl tracking-wider uppercase mt-2 ${poppins.className}`}
                  >
                    FOOD MENU
                  </h1>
                  <Link
                    href="https://food-menu-blue.vercel.app/"
                    target="_blank"
                    className=" w-max text-sm rounded-xl px-3 py-2 mt-2 bg-secondary text-white transition-all brightness-105"
                  >
                    Visit website
                  </Link>
                </div>
                <div className="p-3 grid items-center w-full">
                  <div className="grid sm:flex sm:flex-row justify-evenly mt-5">
                    <div className="group relative w-full">
                      <Image
                        src="/works/carRental.png"
                        height={1000}
                        width={1000}
                        alt="image"
                        className="h-64 w-full object-cover rounded-xl object-top brightness-90 hover:brightness-100"
                      />
                      <div className="absolute rounded-xl top-0 left-0  w-full h-0 flex flex-col justify-center items-center bg-primary opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
                        <div className="grid gap-y-2 mt-4 px-3 pb-3">
                          <div className="flex items-center gap-2  my-2 ">
                            <NextjsIcon />
                            <TailwindIcon />
                            <MuiIcon />
                            <TypescriptIcon />
                          </div>
                        </div>
                        <p className="text-sm text-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eum animi suscipit dignissimos, illo
                          perspiciatis, debitis culpa doloribus, quia esse
                          accusamus at architecto itaque?
                        </p>
                      </div>
                    </div>
                  </div>
                  <h1
                    className={`text-gray-200 font-bold text-2xl tracking-wider uppercase mt-2 ${poppins.className}`}
                  >
                    CAR RENTAL
                  </h1>
                  <Link
                    href="https://food-menu-blue.vercel.app/"
                    target="_blank"
                    className=" w-max text-sm rounded-xl px-3 py-2  bg-secondary text-white transition-all brightness-105"
                  >
                    Visit website
                  </Link>
                </div>
                <div className="p-3 grid items-center w-full">
                  <div className="grid sm:flex sm:flex-row justify-evenly mt-5">
                    <div className="group relative w-full">
                      <Image
                        src="/works/blog.png"
                        height={1000}
                        width={1000}
                        alt="image"
                        className="h-64 w-full object-cover rounded-xl object-top brightness-90 hover:brightness-100"
                      />
                      <div className="absolute rounded-xl top-0 left-0  w-full h-0 flex flex-col justify-center items-center bg-primary opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
                        <div className="grid gap-y-2 mt-4 px-3 pb-3">
                          <div className="flex items-center gap-2  my-2 ">
                            <VueIcon />
                            <VuetifyIcon />
                            <JavascriptIcon />
                          </div>
                        </div>
                        <p className="text-sm text-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eum animi suscipit dignissimos, illo
                          perspiciatis, debitis culpa doloribus, quia esse
                          accusamus at architecto itaque?
                        </p>
                      </div>
                    </div>
                  </div>
                  <h1
                    className={`text-gray-200 font-bold text-2xl tracking-wider uppercase mt-2 ${poppins.className}`}
                  >
                    Blog Website
                  </h1>
                  <Link
                    href="https://dablog-e5b94.firebaseapp.com/"
                    target="_blank"
                    className=" w-max text-sm rounded-xl px-3 py-2  bg-secondary text-white transition-all brightness-105"
                  >
                    Visit website
                  </Link>
                </div>

                <div className="p-3 grid items-center w-full">
                  <div className="grid sm:flex sm:flex-row justify-evenly mt-5">
                    <div className="group relative w-full">
                      <Image
                        src="/works/ecommerce.png"
                        height={1000}
                        width={1000}
                        alt="image"
                        className="h-64 w-full object-cover rounded-xl object-top brightness-90 hover:brightness-100"
                      />
                      <div className="absolute rounded-xl top-0 left-0  w-full h-0 flex flex-col justify-center items-center bg-primary opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
                        <div className="grid gap-y-2 mt-4 px-3 pb-3">
                          <div className="flex items-center gap-2  my-2 ">
                            <NextjsIcon />
                            <TailwindIcon />
                            <MuiIcon />
                            <TypescriptIcon />
                          </div>
                        </div>
                        <p className="text-sm text-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eum animi suscipit dignissimos, illo
                          perspiciatis, debitis culpa doloribus, quia esse
                          accusamus at architecto itaque?
                        </p>
                      </div>
                    </div>
                  </div>
                  <h1
                    className={`text-gray-200 font-bold text-2xl tracking-wider uppercase mt-2 ${poppins.className}`}
                  >
                    CAR RENTAL
                  </h1>
                  <Link
                    href="https://awdma-frontend-git-dev-awdema.vercel.app/"
                    target="_blank"
                    className=" w-max text-sm rounded-xl px-3 py-2  bg-secondary text-white transition-all brightness-105"
                  >
                    Ecommerce
                  </Link>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setMoreCategories(!moreCategories)}
                  className="border-2 border-secondary px-5 py-2 flex justify-center items-center gap-3 rounded-xl text-sm text-secondary"
                >
                  <span className={poppins.className}>See More ...</span>
                  <span className="animate-bounce">
                    {moreCategories ? (
                      <ArrowDropDownIcon />
                    ) : (
                      <ArrowDropUpIcon />
                    )}
                  </span>
                </button>
              </div>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolios;
