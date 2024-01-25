import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../HomeSection/SubmitButton';
import SaveName from '../GameSections/SaveName';
import { useState } from 'react';

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
        <Modal show={show} onHide={handleClose} >
        <Modal.Header style={{...style.global, ...style.header}} >
        </Modal.Header>
        <Modal.Body style={{...style.global, ...style.body}} className="text-center">
            <Form>
                <SaveName handleTextChange={handleTextChange} score={score}/>
            </Form>
        </Modal.Body>
        <Modal.Footer  style={{...style.global, ...style.footer}}>
          <SubmitButton handleFormSubmit={handleSave} name="Save" style={style.button}/>
        </Modal.Footer>
      </Modal>
    )
}

export default EndGameModal;