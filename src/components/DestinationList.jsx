import React, { useEffect, useState } from 'react';
import { getDestinations } from './services/amadeusService';

const DestinationList = () => {
    const[destinations, setDestinations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDestinations('london');
                setDestinations(data);
            }catch (error) {
                console.error('Error fetching destinations:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div id="destinationCards">
            {destinations.map((destinations, index) => (
                <div key={index} className='card'>
                    <h2>{destination.iataCode}</h2>
                    <p>{destination.name}</p>
                </div>
            ))}
        </div>
    );
};

export default DestinationList;