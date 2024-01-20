import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../HomeSection/SubmitButton';
import SaveName from '../GameSections/SaveName';
import { useState } from 'react';

function GambleModal(props) {
    const { score, handleClose, show, gamble } = props;
    const {text, buttonText} = gamble;

    
    return (
        <Modal show={show} onHide={handleClose} className="text-center">
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
            <h4>{text}</h4>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                {buttonText}
            </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default GambleModal;