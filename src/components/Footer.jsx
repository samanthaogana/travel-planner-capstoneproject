import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-mintBlue py-2 w-full">
  <div className="flex flex-col md:flex-row items-center justify-between">
    {/* <!-- Left side (H1 Text) --> */}
    <h1 className="font-greatVibes text-xl md:text-2xl font-black px-3 md:px-4 mb-2 md:mb-0">Travelscapes</h1>

    {/* <!-- Right side (Social media icons) --> */}
    <div className="flex gap-4 px-3 md:px-4 items-center mb-2 md:mb-0">
      <FaInstagram className="h-3 w-3 md:h-5 md:w-5"/>
      <FaXTwitter className="h-3 w-3 md:h-5 md:w-5" />
      <FaTiktok className="h-3 w-3 md:h-5 md:w-5" />
    </div>
  </div>
  <div className="text-center font-semibold text-xs mt-2 md:mt-4">
    <p>&copy; 2024</p>
  </div>
</footer>

  );
};

export default Footer;
