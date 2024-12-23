import React from "react";
import { FaSearch } from "react-icons/fa";
import DestinationList from "../components/DestinationList";

const ExploreDestinations = () => {
  return (
    <main>
      <section>
        <h1 className="font-greatVibes font-medium text-center text-seaBlue text-4xl my-4">
          Explore Destinations
        </h1>
        <form>
          <div className="flex justify-center relative px-4 sm:px-11 ">
            <div className="w-2/3 sm:w-[60%] relative">
            <input
              className="rounded-xl w-full sm:w-full px-24 py-2 text-left border-2 pl-10 pr-4"
              type="search"
              id="searchInput"
              placeholder="Search"
            ></input>
            </div>
           <button type="submit" className="absolute left-20 top-3 mx-2 sm:left-72 sm:top-3" ><FaSearch /></button>
          </div>
        </form>
      </section>
      
      <section>
        <DestinationList />
      </section>
    </main>
  );
};

export default ExploreDestinations;
