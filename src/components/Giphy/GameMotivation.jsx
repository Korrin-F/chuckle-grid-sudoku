import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import MotivationSound from '../ButtonSounds/MotivationSound.jsx'; 
import MotivationModal from '../Modals/MotivationModal.jsx';

const style = {
  backgroundColor: "var(--pink)",
  borderRadius: "1rem",
  border: "outset 0.5rem var(--pink)",
  boxShadow: "inset 0 0 1rem var(--shadow), 0 -2px .75rem var(--shadow-teal)",
  color: "white",
  fontFamily: "var(--fontTwo)",
  width: "max-content"
}



const MotivationButton = ({ setMotivation, motivation }) => {
  const [showModal, setShowModal] = useState(false);
  const [gifUrls, setGifUrls] = useState([]);
  const [quote, setQuote] = useState('');

  const handleMotivateClick = async () => {
    const searchTerm = localStorage.getItem('motivation');
    console.log(searchTerm);

    const APIKey = import.meta.env.VITE_GIPHY_API_KEY;
    console.log(APIKey);

    try {
      //changed this
      // Fetch multiple gifs based on searchTerm
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${APIKey}&limit=5&offset=5&rating=y&lang=en`
      );
      const gifData = response.data.data;
      
      // Extract gif URLs from the response
      //maps through response and shows different one with each click
      const urls = gifData.map((gif) => gif.images.original.url);
      
      // Set the gifUrls state with the array of gif URLs
      setGifUrls(urls);
    } catch (error) {
      console.error('Error fetching gifs:', error);
    }

    // want to fetch an inspirational quote?
    /*
    try {
      const quoteResponse = await axios.get('YOUR_QUOTE_API_ENDPOINT');
      const quoteData = quoteResponse.data.quote;
      setQuote(quoteData);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
    */

    // Show the modal
    setShowModal(true);
  };

  const closeModal = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <>
      <Button 
      className="m-2"
      variant="success"
      onClick={handleMotivateClick}
      size="lg"
      style={style}
      >
        Motivate Me
      </Button>

      {/* renders MotivationModal on showModal state */}
      <MotivationModal
        showModal={showModal}
        closeModal={closeModal}
        gifUrl={gifUrls.length > 0 ? gifUrls[Math.floor(Math.random() * gifUrls.length)] : ''}
        quote={quote}
      />
       {/* adds MotivationSound component */}
       <MotivationSound playSound={showModal} />
    </>
  );
};

const GameMotivation = ({ setMotivation, motivation }) => {
  return (
      <MotivationButton setMotivation={setMotivation} motivation={motivation} />
  );
};

export default GameMotivation;
