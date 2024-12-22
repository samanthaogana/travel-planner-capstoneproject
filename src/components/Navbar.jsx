import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="fixed bg-white top-0 left-0 w-full z-20">
      <div className="flex justify-between py-3 px-4 w-full">
        <div className="font-greatVibes text-4xl text-black font-medium">
          <h1>Travelscapes</h1>          
        </div>

          {/* Desktop view */}
          <ul className="hidden sm:flex items-center mx-4 gap-7 font-medium font-poppins">
          <li>Home</li>
          <li>Destinations</li>
          <li>Itinerary</li>
          <li>Contact Us</li>
          <li><button className="font-semibold">Log in</button></li>
          <li><button className="font-bold border rounded-md px-2 py-2 bg-yellowOrange text-white">Sign up</button></li>
        </ul>

        <div onClick={toggleMenu} className="sm:hidden relative">
          {menu ? <IoIosClose size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
      </div>
      
      {/* Mobile view */}
      {menu ? (
        <div className="sm:hidden bg-mintBlue  absolute top-16 right-0 w-full z-30 px-4 py-4">
          <ul className="flex flex-col items-end gap-5 font-poppins text-white font-medium">
            <li>Home</li>
            <li>Itinerary</li>
            <li>Contact Us</li>
            <li>
            <button className="font-semibold">Log in</button>
            </li>
            <li>
            <button className="font-bold border rounded-md px-2 py-2 bg-yellowOrange">Sign in</button>
            </li>
          </ul>
        </div>
      ): null}

    
    </nav>

    
  );
};

export default Navbar;
