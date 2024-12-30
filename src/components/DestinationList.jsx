import React, { useEffect, useState } from 'react';

const DestinationList = ({destinations, openDestinationDetails}) => {

  console.log(destinations)

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {destinations && destinations.map((destination, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 w-64 text-center" onClick={()=> openDestinationDetails(destination)}>
          <h2 className="text-xl font-bold">{destination.name}</h2>
          <p className="text-gray-600">Country: {destination.address.countryName}</p>
        </div>
      ))}
    </div>
  );
};

export default DestinationList;

