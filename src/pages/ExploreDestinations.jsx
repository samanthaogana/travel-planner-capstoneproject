import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import DestinationList from "../components/DestinationList";
import { getDestinationByCity } from "../services/amadeusService";
import { useNavigate } from "react-router-dom";

const ExploreDestinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [featuredDestinations, setFeaturedDestinations] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Hardcoded test destinations
    const testDestinations = [
      { iataCode: 'NYC', name: 'New York', address: { countryName: 'United States' }, imageUrl: '/images/pexels-leofallflat-1089194.jpg' },
      { iataCode: 'LON', name: 'London', address: { countryName: 'United Kingdom' }, imageUrl: '/images/pexels-pixabay-460672.jpg' },
      { iataCode: 'TYO', name: 'Tokyo', address: { countryName: 'Japan' }, imageUrl: '/images/pexels-apasaric-2506923.jpg' },
      { iataCode: 'SEL', name: 'Seoul', address: { countryName: 'South Korea' }, imageUrl: '/images/pexels-pixabay-237211.jpg' },
      { iataCode: 'NBO', name: 'Nairobi', address: {countryName: 'Kenya'}, imageUrl: '/images/pexels-amurephotography-9833516.jpg'},
      { iataCode: 'AMS', name: 'Amsterdam', address: {countryName: 'Netherlands'}, imageUrl: '/images/pexels-dewi-madden-355159-967292.jpg'},
      { iataCode: 'ORD', name: 'Chicago', address: {countryName: 'United States'}, imageUrl: '/images/pexels-chaitaastic-1823681.jpg'},
      { iataCode: 'PEK', name: 'Beijing', address: {countryName: 'China'}, imageUrl: '/images/pexels-magda-ehlers-pexels-2846034.jpg'},
      { iataCode: 'KIX', name: 'Osaka', address: {countryName: 'Japan'}, imageUrl: '/images/pexels-bagus41-1440476.jpg'},
      { iataCode: 'YYZ', name: 'Toronto', address: {countryName: 'Canada'}, imageUrl: '/images/pexels-rpnickson-2478248.jpg'},
      { iataCode: 'MUC', name: 'Munich', address: {countryName: 'Germany'}, imageUrl: '/images/pexels-pixabay-163405.jpg'},
      { iataCode: 'CPH', name: 'Copenhagen', address: {countryName: 'Denmark'}, imageUrl: '/images/pexels-daniel-jurin-358265-3117216.jpg'},
    ];

    setFeaturedDestinations(testDestinations); // Set hardcoded destinations
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const data = await getDestinationByCity(searchQuery);
    
    if (data && data.length > 0) {
      const firstDestination = data[0];
      navigate(`/destination/${firstDestination.iataCode}`);
    } else {
      setError(`No results found for "${searchQuery}".Please try another city.`);
    }
  };
  
  return (
    <main className="min-h-52">
      <section>
        <h1 className="font-greatVibes font-medium text-center text-seaBlue text-4xl my-4">
          Explore Destinations
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center relative px-4 sm:px-11">
            <div className="w-2/3 sm:w-[60%] relative">
              <input
                className="rounded-xl w-full sm:w-full px-24 py-2 text-left border-2 pl-10 pr-4"
                type="search"
                id="searchInput"
                placeholder="Search for a city..."
                onChange={(e) => setSearchQuery(e.target.value)}
              ></input>
            </div>
            <button type="submit" className="absolute left-20 top-3 mx-2 sm:left-72 sm:top-3">
              <FaSearch />
            </button>
          </div>
        </form>
      </section>

      <div>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-3">
          {featuredDestinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Link to={`/destination/${destination.iataCode}`}>
              <LazyLoadImage
                src={destination.imageUrl} alt={destination.name} effect="blur" className="w-full h-48 object-cover" /> 
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{destination.name}</h3>
                  <p className="text-gray-600">{destination.address.countryName}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      

     
    </main>
  );
};

export default ExploreDestinations;
