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
    <nav className="bg-green-500 px-4 py-4 ">
      <div className="flex mx-auto">
        <ul>
          <li>Home</li>
          <li>Destinations</li>
        </ul>

        <div onClick={toggleMenu} className="sm:hidden">

          {menu ? <IoIosClose size={30} /> : <GiHamburgerMenu size={30} />}
          <div className="right-0 w-full h-full">
            {menu ? (
              <ul className="flex flex-col">
                <li>Itinerary</li>
                <li>Contact Us</li>
                <p><button>Log in</button></p>
                <p><button>Sign in</button></p>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
