import axios from 'axios';

const SadFetch = async () => {
  const searchTerm = 'cry';
  const APIKey = import.meta.env.VITE_GIPHY_API_KEY;

  try {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${APIKey}&limit=5&offset=5&rating=y&lang=en`
    );
    const gifData = response.data.data;
    
    // Extract gif URLs from the response
    const gifUrls = gifData.map((gif) => gif.images.original.url);
    
    // Pick a single random GIF URL
    const randomUrl = gifUrls[Math.floor(Math.random() * gifUrls.length)];

    // Return the selected random GIF URL
    return randomUrl;
  } catch (error) {
    console.error('Error fetching sad gifs:', error);
    return null;
  }
};

export default SadFetch;
