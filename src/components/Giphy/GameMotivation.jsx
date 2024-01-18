import React, { useState } from 'react';
import axios from 'axios';

const MotivationModal = ({ showModal, closeModal, gifUrl, quote }) => (
  <div className={`modal fade ${showModal ? 'show' : ''}`} id="motivationModal" tabIndex={-1} role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Motivation Modal</h5>
          <button type="button" className="close" onClick={closeModal} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {gifUrl && <img src={gifUrl} alt="Motivational Gif" />}
          {quote && <div>{quote}</div>}
        </div>
      </div>
    </div>
  </div>
);

const MotivationButton = ({ setMotivation, motivation }) => {
  // console.log(motivation)
  const [showModal, setShowModal] = useState(false);
  const [gifUrl, setGifUrl] = useState('');
  const [quote, setQuote] = useState('');


  const handleMotivateClick = async () => {
    const searchTerm = localStorage.getItem('motivation');
    console.log(searchTerm);

    const APIKey = import.meta.env.VITE_GIPHY_API_KEY;
    console.log(APIKey);

    try {
      // Fetch gif based on searchTerm
      const response = await axios.get(


        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${APIKey}&limit=1&offset=5&rating=g&lang=en`
      );
      const gifData = response.data.data[0];
      setGifUrl(gifData.images.original.url);
    } catch (error) {
      console.error('Error fetching gif:', error);
    }

    // Uncomment and adjust the code if you want to fetch an inspirational quote
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
      <button type="button" className="btn btn-primary" onClick={handleMotivateClick}>
        Motivate Me
      </button>

      {/* Render MotivationModal based on showModal state */}
      <MotivationModal
        showModal={showModal}
        closeModal={closeModal}
        gifUrl={gifUrl}
        quote={quote}
      />
    </>
  );
};

const GameMotivation = ({ setMotivation, motivation }) => {
  return (
    <div>
      {/* Include MotivationButton and MotivationModal */}
      <MotivationButton setMotivation={setMotivation} motivation={motivation} />
    </div>
  );
};

export default GameMotivation;
