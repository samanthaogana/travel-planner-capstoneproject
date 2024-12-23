import React, { useEffect, useState } from 'react';
import { getDestinations } from '../services/amadeusService';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cities = ['new york', 'london', 'paris']; // Example cities
        const data = await getDestinations(cities);
        console.log('Fetched destinations:', data);
        setDestinations(data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {destinations.map((destination, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 w-64 text-center">
          <h2 className="text-xl font-bold">{destination.name}</h2>
          <p className="text-gray-600">Country: {destination.country}</p>
        </div>
      ))}
    </div>
  );
};

export default DestinationList;

