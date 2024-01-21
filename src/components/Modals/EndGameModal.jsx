import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../HomeSection/SubmitButton';
import SaveName from '../GameSections/SaveName';
import { useState } from 'react';

function EndGameModal(props) {
    const { score, handleClose, show } = props;
    const [name, setName] = useState('Mystery'); //default mystery
    const navigate = useNavigate(); //for navigation
    const handleSave = () => {
        // create new entry
        let newScore = {
            name: name,
            score: score
        }
        // add to highscores
        addHighScoreToLocalstorage(newScore);

        handleClose();
        // navigate to highscores page
        navigate('/highscores');
    }

    // Function to add a new high score to local storage
    const addHighScoreToLocalstorage = (newScore) => {
        try {
        // Step 1: Retrieve existing scores from local storage
        const existingScores = JSON.parse(localStorage.getItem('highScores')) || [];
    
        // Step 2: Add a new high score
        existingScores.push(newScore);
    
        // Step 3: Save the updated scores back to local storage
        localStorage.setItem('highScores', JSON.stringify(existingScores));
        } catch (error) {
        console.error('Error adding high score to local storage:', error);
        }
    };



    const handleTextChange = (event) => {
        setName(event.target.value);
    }
    
    return (
        <Modal show={show} onHide={handleClose} className="text-center">
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
            <Form>
                <SaveName handleTextChange={handleTextChange} score={score}/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <SubmitButton handleFormSubmit={handleSave}/>
        </Modal.Footer>
      </Modal>
    )
}

export default EndGameModal;