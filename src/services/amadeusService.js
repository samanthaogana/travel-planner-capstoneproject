import axios from 'axios';

const BASE_URL = "https://test.api.amadeus.com/v1/reference-data/locations"

let tokenData = {
  accessToken: null,
  expiryTime: null
};

const getAccessToken = async () => {
  const currentTime = new Date().getTime();

  if (tokenData.accessToken && tokenData.expiryTime && currentTime < tokenData.expiryTime) {
    return tokenData.accessToken;
  }

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', import.meta.env.VITE_AMADEUS_API_KEY);
  params.append('client_secret', import.meta.env.VITE_AMADEUS_API_SECRET);

  const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  tokenData.accessToken = response.data.access_token;
  tokenData.expiryTime = currentTime + (response.data.expires_in * 1000); // expires_in is in seconds

  return tokenData.accessToken;
};


// Function to fetch destination data for multiple cities
const getDestinations = async (keywords) => {
  const accessToken = await getAccessToken();

  const promises = keywords.map(async (keyword) => {
    try {
      const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations', {
        params: {
          subType: 'CITY',
          keyword: keyword
        },
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      console.log('Response data for', keyword, ':', response.data);

      // Filter to ensure primary locations are shown
      const primaryLocations = response.data.data.filter(city => {
        if (keyword.toLowerCase() === 'new york') return city.address.countryCode === 'US';
        if (keyword.toLowerCase() === 'london') return city.address.countryCode === 'GB';
        if (keyword.toLowerCase() === 'paris') return city.address.countryCode === 'FR';
        return false;
      });

      return primaryLocations.map(city => ({
        name: city.name,
        country: city.address.countryName || 'Unknown'
      }));
    } catch (error) {
      console.error('Error fetching data for', keyword, ':', error.response ? error.response.data : error.message);
      return [];
    }
  });

  const results = await Promise.all(promises);
  return results.flat(); // Combine the results into a single array
};

export { getDestinations };



// Function to fetch country name from country code using Restcountries API
const getCountryNameFromCode = async (countryCode) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    return response.data[0].name.common; // Get the country name from the API response
  } catch (error) {
    console.error('Error fetching country name:', error);
    return 'Unknown Country'; // Return a fallback if there is an error
  }
};


export const getDestinationByCity = async (city) => {
  const accessToken = await getAccessToken();

  try {
    const response = await axios.get(`${BASE_URL}/cities`, {
      params: {
        keyword: city
      },
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const cityData = response.data.data;

    if (cityData.length > 0) {
      
      for (let i = 0; i < cityData.length; i++) {
        const countryCode = cityData[i].address.countryCode;
        
        const countryName = await getCountryNameFromCode(countryCode);
    
        
        
        cityData[i].address.countryName = countryName;
        cityData[i].iataCode = cityData[i].iataCode;

      }

      return cityData; // Return the enriched city data array
    } else {
      return []; // Return empty array if no city found
    }

  } catch (error) {
    console.log('ISSUE IN REQUEST', error);
    return []; // Return empty array on error
  }
};



// Function to fetch featured destinations
export const getFeaturedDestinations = async () => {
  const accessToken = await getAccessToken();
  const featuredCities = ['NYC', 'LON', 'TYO', 'SEL']; // Example IATA codes for featured destinations

  const promises = featuredCities.map(async (cityCode) => {
    try {
      const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations/cities', {
        params: {
          keyword: cityCode,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const cityData = response.data.data[0]; 
      return {
        iataCode: cityCode,
        name: cityData.name || 'Unknown City',
        address: {
          countryName: cityData.address?.countryName || 'Unknown Country',
        },
      };
    } catch (error) {
      console.error(`Error fetching data for ${cityCode}:`, error);
      return null;
    }
  });

  const results = await Promise.all(promises);
  return results.filter((city) => city !== null); // Filter out invalid results
};



// Flight Offers Search


// Function to get flight offers
export const getFlightOffers = async (destination) => {
  try {
    const accessToken = await getAccessToken();
    console.log('Access Token:', accessToken);

    const today = new Date();
    const futureDate= new Date (today);
    futureDate.setDate(futureDate.getDate() + 30);
    const returnDate = new Date(futureDate);
    returnDate.setDate(returnDate.getDate() + 10);

    const params = {
      originLocationCode: 'JFK', // Example origin
      destinationLocationCode: destination, // Ensure destination is correctly passed
      departureDate: futureDate.toISOString().split('T')[0], // Example departure date
      returnDate: returnDate.toISOString().split('T')[0], // Example return date
      adults: 1
    };

    console.log('Request Params:', params); // Log request params for debugging

    const response = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
      params,
      headers: {
        'Authorization': `Bearer ${accessToken}` 
      }
    });

    console.log('API Response:', response.data);

    return response.data.data;
  } catch (error) {
    console.error('Error fetching flight offers:', error);
    if (error.response) {
      console.error('Error Response Data:', error.response.data); // Log more details if available
      console.error('Full Error Response:', error.response);
    }
    return [];
  }
};
// Hotel accomodations by city code

export const getHotelByCityCode = async (cityCode) => {
  try {
    const accessToken = await getAccessToken();
    console.log('Access Token:', accessToken);

    
    const params = {
      cityCode
    };

    console.log('Request Params:', params); // Log request params for debugging

    const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city', {
      params,
      headers: {
        'Authorization': `Bearer ${accessToken}` // Ensure correct string interpolation
      }
    });

    console.log('HOTEL Response:', response.data);

    return response.data.data;
  } catch (error) {
    console.error('Error fetching flight offers:', error);
    if (error.response) {
      console.error('Error Response Data:', error.response.data); // Log more details if available
      console.error('Full Error Response:', error.response);
    }
    return [];
  }
};




