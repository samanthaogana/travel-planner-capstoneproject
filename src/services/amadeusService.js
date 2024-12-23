import amadeus from "amadeus";

const Amadeus = require('amadeus');

const amadeus = new Amadeus({
    clientId: process.env.REACT_APP_AMADEUS_API_KEY,
    clientSecret: process.env.REACT_APP_AMADEUS_API_SECRET
});

const getDestinations = async (keyword) => {
    try{
        const response = await amadeus.referenceData.locations.get({
            subType: 'CITY',
            keyword: keyword
        });
        return response.data;
    }catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
}

export default { getDestinations }


