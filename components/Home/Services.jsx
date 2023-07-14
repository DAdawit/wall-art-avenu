import React from "react";
import { services } from "@/data/data";
import Image from "next/image";
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
const nunito = Nunito({
  subsets: ["cyrillic-ext"],
  weight: ["400"],
});
const Services = () => {
  return (
    <>
      <section className="bg-[#000] py-10">
        <div className="container mx-auto mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center  px-5 sm:px-0 gap-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-center items-center"
              >
                <div className="h-20 flex items-center">
                  <img
                    src={`${service.image}`}
                    height={1000}
                    width={1000}
                    alt={service.title}
                    className="h-16 w-16 object-cover"
                  />
                </div>
                <div className="flex flex-col items-center mt-3">
                  <h1 className="text-center text-secondary text-lg whitespace-nowrap tracking-wider">
                    <span className={poppins.className}>{service.title}</span>
                  </h1>
                  <p className="mt-2 text-center text-gray-50 max-w-xs tracking-wide">
                    <span className={nunito.className}>
                      {service.description}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
