import axios from 'axios';
const fetchRandomFact = async () => {
    try {
        // Fetch a random fact from the API
        const response = await axios.get('https://catfact.ninja/fact');
        // return the fact from the response
        return response.data.fact;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Failed to fetch fact: ${error.message}`);
        }
        throw new Error('Failed to fetch fact');
    }
};

export default fetchRandomFact;