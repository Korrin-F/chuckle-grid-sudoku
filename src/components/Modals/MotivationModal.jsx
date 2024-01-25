import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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

const MotivationModal = ({ showModal, closeModal, gifUrl, quote }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        // Reset the imageLoaded state when the modal is shown
        setImageLoaded(false);
      }, [showModal]);
    
      const handleImageLoad = () => {
        // Set imageLoaded to true when the image has loaded
        setImageLoaded(true);
      };

    return (
        <Modal show={showModal} onHide={closeModal} ref={modalRef} >
            <Modal.Header  style={{...style.global, ...style.header}}>
            </Modal.Header>

            <Modal.Body style={{...style.global, ...style.body}} className="text-center">
                {/* <h2>{gamble.text}</h2>
                <h5 className="mb-4">Score: {score}</h5> */}
                {/* Display fetched content */}
                {gifUrl && (
                <div style={style.imageCont}>
                    <Image fluid
                    src={gifUrl}
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
                onClick={closeModal} 
                disabled={!imageLoaded}
                style={style.button}
                >
                    I'm Ready!
                </Button>
            </Modal.Footer>
        </Modal>
    )
};
export default MotivationModal;

//   <div className={`modal fade ${showModal ? 'show' : ''}`} id="motivationModal" tabIndex={-1} role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
//   <div className="modal-dialog" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title">Motivation Modal</h5>
//         <button type="button" className="close btn" onClick={closeModal} aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div className="modal-body">
//         {gifUrl && <img style={{ maxWidth: '100%', height: 'auto' }} src={gifUrl} alt="Motivational Gif" />}
//         {quote && <div>{quote}</div>}
//       </div>
//     </div>
//   </div>
// </div>