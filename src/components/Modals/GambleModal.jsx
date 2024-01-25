import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../HomeSection/SubmitButton';
import SaveName from '../GameSections/SaveName';
import { useState, useEffect, useRef } from 'react';
import Image from 'react-bootstrap/Image';
 

const style = {
  global: {
    backgroundColor: "var(--teal)",
    borderColor: "var(--teal)",
  },
  header: {

  },
  body: {
    fontFamily: "var(--fontFour)",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
  },
  imageCont: {
    maxWidth: '100%',
    maxHeight: '400px',
    overflow: 'hidden',
    border: 'medium solid var(--yellow)',
    backgroundColor: 'var(--orange)',
    borderRadius: '1rem',
  },
  button: {
    backgroundColor: "var(--yellow)",
    borderRadius: "1rem",
    border: "outset 0.5rem var(--yellow)",
    boxShadow: "inset 0 0 1rem var(--shadow), 0 -2px .75rem var(--shadow-teal)",
    color: "black",
    fontFamily: "var(--fontTwo)",
    width: "max-content"
  }

}

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
    <Modal show={show} onHide={handleClose}  >

      <Modal.Header  style={{...style.global, ...style.header}}>
      </Modal.Header>

      <Modal.Body style={{...style.global, ...style.body}} className="text-center">
        <h2>{gamble.text}</h2>
        <h5 className="mb-4">Score: {score}</h5>
        {/* Display fetched content */}
        {fetchedContent && (
          <div style={style.imageCont}>
            <Image fluid
              src={fetchedContent}
              alt="Fetched Gif"
              onLoad={handleImageLoad}
            />
          </div>
        )}
      </Modal.Body>
      
      <Modal.Footer style={{...style.global, ...style.footer}}>
        <Button 
           size="lg"
           className="mb-3"
           onClick={handleClose} 
           disabled={!imageLoaded}
           style={style.button}
        >
          {gamble.buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GambleModal;

// ref={modalRef}