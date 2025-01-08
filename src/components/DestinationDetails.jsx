import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFlightOffers, getHotelByCityCode} from '../services/amadeusService';
import { IoAirplaneOutline } from "react-icons/io5";
import { MdHotel } from "react-icons/md";

const DestinationDetails = () => {
  const { code } = useParams();
  const [flightOffers, setFlightOffers] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [loadingFlights, setLoadingFlights] = useState(false);
  const [loadingHotels, setLoadingHotels] = useState(false);
  const [hotelError, setHotelError] = useState(null);

  const fetchFlightOffers = async () => {
    if (code && code.length === 3) {
      setLoadingFlights(true);
      const offers = await getFlightOffers(code);
      setFlightOffers(offers);
      setLoadingFlights(false);
    } else {
      console.error('Invalid Destination Code:', code);
    }
  };
  
      const fetchHotels = async () => {
        if (code && code.length === 3) {
          setLoadingHotels(true);
          try {
            const hotels = await getHotelByCityCode(code);
            setHotels(hotels);
          } catch (error) {
            console.error('Error fetching hotels:', error);
            setHotelError('Failed to load hotels. Please try again later.');
          }
          setLoadingHotels(false);
        } else {
          console.error('Invalid City Code:', code);
        }
      };
  useEffect(() => {

    fetchFlightOffers();
    fetchHotels();
  }, [code]);

  console.log({hotels})

  return (
    <div className="p-4 font-poppins">
      <h1 className='text-center font-semibold text-2xl mb-3 font-greatVibes text-seaBlue'>Destination Details for {code}</h1>

      <h2 className='text-center font-semibold text-2xl font-greatVibes mb-4'>Flight Offers</h2>
      {loadingFlights ? (
        <p>Loading flight offers...</p>
      ) : (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {flightOffers && flightOffers.length > 0 ? (
            flightOffers.map((offer, index) => (
              <li key={index} className='shadow-md rounded-lg p-6 '>
                <div className='flex gap-4 items-center'>
                <IoAirplaneOutline  />
                Airline: {offer.validatingAirlineCodes[0]}, Price: {offer.price.total} {offer.price.currency}
                </div>
              </li>
              
            ))
          ) : (
            <li>No flight offers available</li>
          )}
        </ul>
      )}

      <h2 className='mt-16 text-center mb-4 font-semibold text-2xl font-greatVibes'>Hotel Accommodations</h2>
      {loadingHotels ? (
        <p>Loading hotel accommodations...</p>
      ) : hotelError ? (
        <p>{hotelError}</p>
      ) : (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {hotels && hotels.length > 0 ? (
            hotels.map((hotel, index) => (
              <li key={index} className='shadow-md rounded-lg p-6'>
                <div className='flex gap-4 items-center'>
                <MdHotel className='w-7 h-7' />
                Name: {hotel.name}, 
                Address: {hotel.address?.lines?.join(', ') || 'N/A'},
                Rating: {hotel.rating || 'N/A'}
                {hotel.media && hotel.media.length > 0 && (
                  <img
                    src={hotel.media[0].uri}
                    alt={hotel.name}
                    style={{ width: '100px', height: '100px' }}
                  />
                )}
                </div>
              </li>
            ))
          ) : (
            <li>No hotel accommodations available</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default DestinationDetails;
