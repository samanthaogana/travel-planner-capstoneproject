import axios from 'axios';

const BASE_URL = "https://test.api.amadeus.com/v1/reference-data/locations"

// Function to get access token
const getAccessToken = async () => {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', import.meta.env.VITE_AMADEUS_API_KEY);
  params.append('client_secret', import.meta.env.VITE_AMADEUS_API_SECRET);

  const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  return response.data.access_token;
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

// function to get points of interest
// const getPointsOfInterest = async (latitude, longitude) => {
//   const accessToken = await getAccessToken()
//   try{
//     const response = await axios.get(`${BASE_URL}/pois`,{
//       params:{
//         latitude,
//         longitude
//       },
//       headers:{
//         'Authorization': `Bearer ${accessToken}`
//       }
//     });
    
//     const poi_names = response.data.data.map(location => {
//       const poiName = location.name
      
//       return poiName
//     })
    
//     return poi_names
//   }catch(error){
//     console.log('FAILED TO FETCH POINTS OF INTEREST', error)
//   }
// }

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
      // For each city, we need to fetch the country name
      for (let i = 0; i < cityData.length; i++) {
        const countryCode = cityData[i].address.countryCode;
//         const latitude = cityData[i].geoCode.latitude
//         const longitude = cityData[i].geoCode.longitude


        const countryName = await getCountryNameFromCode(countryCode);
//         const pointsOfInterest =  await getPointsOfInterest(latitude, longitude);
        
        // Enrich the city data with the country name
        cityData[i].address.countryName = countryName;

//         //enrich the city data with points of interes
//         cityData[i].pointsOfInterest = pointsOfInterest
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

// Flight Offers Search

// Function to get access token
const getFlightOffers = async (destination) => {
  try{
 const accessToken = await getAccessToken();
 const response = await axios.get("https:// test.api.amadeus.com/v2/shopping/flight-offers", {
  params: {
    originLocationCode: 'YOUR_ORIGIN',
    destinationLocationCode: destination,
    departureDate: 'YYYY-MM-DD',
    adults: 1
  },
  headers: {
    'Authorization': 'Bearer ${accessToken}'
  }
 });
 return response.data.data;
}catch (error) {
  console.error('Error fetching flight offers:', error)
  return [];
}
};


