import React from "react";
import { FaSearch } from "react-icons/fa";

const ExploreDestinations = () => {
  return (
    <main>
      <section>
        <h1 className="font-greatVibes font-medium text-center text-seaBlue text-4xl my-4">
          Explore Destinations
        </h1>
        <form>
          <div className="flex justify-center relative">
            <input
              className="rounded-md w-2/3 px-2 py-2 text-left border-2 pl-10 pr-4"
              type="search"
              id="searchInput"
              placeholder="Search"
            ></input>
           <button type="submit" className="absolute left-20 top-3 mx-2" ><FaSearch /></button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ExploreDestinations;
