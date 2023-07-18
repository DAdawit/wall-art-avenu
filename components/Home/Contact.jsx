"use client";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";
const Contact = () => {
  return (
    <>
      <section>
        <h1 className="text-3xl font-bold text-secondary text-center my-10 capitalize">
          You can find us
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center ">
          {/* {[1, 2, 3, 4].map((item) => ( */}
          <div className="grid justify-items-center animate-pulse">
            <div className="h-20 w-20 rounded-full bg-gray-700  flex justify-center items-center text-white text-xl self-center">
              <FacebookIcon className="text-3xl" />
            </div>
          </div>
          <div className="grid justify-items-center animate-pulse">
            <div className="h-20 w-20 rounded-full bg-gray-700 flex justify-center items-center text-white text-xl self-center">
              <InstagramIcon className="text-3xl" />
            </div>
          </div>
          <div className="grid justify-items-center animate-pulse">
            <div className="h-20 w-20 rounded-full bg-gray-700 flex justify-center items-center text-white text-xl self-center">
              <TelegramIcon className="text-3xl" />
            </div>
          </div>
          <div className="grid justify-items-center animate-pulse">
            <div className="h-20 w-20 rounded-full bg-gray-700 flex justify-center items-center text-white text-xl self-center">
              <PhoneIcon className="text-3xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
