import Amadeus from 'amadeus';

const amadeus = new Amadeus({
    clientId: import.meta.env.VITE_AMADEUS_API_KEY,
    clientSecret: import.meta.env.VITE_AMADEUS_API_SECRET
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

export { getDestinations };


