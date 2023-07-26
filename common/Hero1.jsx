"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { carouselsData } from "@/data/data";
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
  subsets: ["latin-ext"],
  weight: ["400"],
});
export default class Hero1 extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 7000,
    };
    return (
      <>
        <div className="overflow-x-hidden">
          <Slider {...settings}>
            {carouselsData.map((item) => (
              <div key={item.id}>
                <div className="relative brightness-0 ">
                  <img
                    src={`${item.image}`}
                    alt={item.service}
                    height={1000}
                    width={1000}
                    className="w-screen h-[100vh] sm:h-96 object-cover brightness-75"
                    blurDataURL={`${item.image}`}
                  />
                  <div className="absolute top-1/3 w-full">
                    <div className="grid justify-items-center px-5 ">
                      <h1 className="text-6xl text-secondary  whitespace-nowrap tracking-wide capitalize -mt-10">
                        <span className={poppins.className}>
                          {item.service}
                        </span>
                      </h1>
                      <h3
                        className={`text-xl text-white mt-3 tracking-wide text-center ${poppins.className}`}
                      >
                        {item.slogan}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
