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
    <nav>
      <div className="flex justify-between py-4 px-4">
        <div>
            <h1 className="font-greatVibes text-4xl">Travelscapes</h1> 
        </div>

        

        <div onClick={toggleMenu} className="sm:hidden">
          {menu ? <IoIosClose size={30} /> : <GiHamburgerMenu size={30} />}

          <div>
            {menu ? (
              <ul className="flex flex-col gap-5 font-poppins">
                <li>Home</li>
                <li>Destinations</li>
                <li>Itinerary</li>
                <li>Contact Us</li>
                <p className="font-semibold">
                  <button>Log in</button>
                </p>
                <p className="font-bold">
                  <button>Sign in</button>
                </p>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


