import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../HomeSection/SubmitButton';
import SaveName from '../GameSections/SaveName';
import { useState, useEffect, useRef } from 'react';

const GambleModal = ({ show, handleClose, score, gamble, fetchedContent }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    // Reset the imageLoaded state when the modal is shown
    setImageLoaded(false);
  }, [show]);

  const handleImageLoad = () => {
    // Set imageLoaded to true when the image has loaded
    setImageLoaded(true);
  };

  return (
    <Modal show={show} onHide={handleClose} ref={modalRef}>
      <Modal.Header closeButton>
        <Modal.Title>Gamble Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{gamble.text}</p>
        <p>Score: {score}</p>
        {/* Display fetched content */}
        {fetchedContent && (
          <div style={{ maxWidth: '100%', maxHeight: '400px', overflow: 'hidden' }}>
            <img
              src={fetchedContent}
              alt="Fetched Gif"
              style={{ width: '100%', height: 'auto' }}
              onLoad={handleImageLoad}
            />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose} disabled={!imageLoaded}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default GambleModal;
