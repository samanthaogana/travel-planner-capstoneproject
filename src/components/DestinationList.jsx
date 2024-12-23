import React, { useState, useEffect } from 'react';
import { getDestinations } from './api'; // Import your Amadeus SDK helper function

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(''); // For search query
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDestinations = async () => {
      setLoading(true);
      const result = await getDestinations(query);
      if (result) {
        setDestinations(result);
      } else {
        setError('Failed to fetch destinations');
      }
      setLoading(false);
    };

    if (query) {
      fetchDestinations();
    } else {
      setDestinations([]); // Clear results when there's no query
    }
  }, [query]); // Trigger on query change

  return (
    <div>
      <h1>Destinations</h1>

      {/* Search input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a city"
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {destinations.length > 0 ? (
          destinations.map((destination) => (
            <li key={destination.iataCode}>
              {destination.name} ({destination.countryCode})
            </li>
          ))
        ) : (
          <p>No destinations found</p>
        )}
      </ul>
    </div>
  );
};

export default DestinationList;

