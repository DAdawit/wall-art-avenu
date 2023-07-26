import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="px-16 py-3 flex justify-between items-center">
        <div>
          <Image
            src="/logoOnly.png"
            height={1000}
            width={1000}
            alt="logo image"
            className="h-14 w-14 object-contain self-center text-orange-800"
          />
        </div>
        <div className="flex justify-center items-center space-x-2 text-white ">
          <Link href="/" className="hidden sm:flex">
            HOME
          </Link>
          <Link href="#about" className="hidden sm:flex">
            ABOUT US
          </Link>
          <Link href="#testimonial" className="hidden sm:flex">
            TESTIMONIAL
          </Link>
          <Link href="#news" className="hidden sm:flex">
            NEWS
          </Link>
          <Link href="#contact" className="hidden sm:flex">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
