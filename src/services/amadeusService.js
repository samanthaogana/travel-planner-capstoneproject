import axios from 'axios';

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

