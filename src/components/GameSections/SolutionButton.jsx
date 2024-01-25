import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import NewGame from '../../pages/Game/NewGame';
import EndGameSound from '../ButtonSounds/EndGameSound';

function SolutionButton(props) {
  const { sudokuBoard, updateSudokuBoard, solution } = props;
  const [show, setShow] = useState(false);
  const [playSound, setPlaySound] = useState(false);  // State to manage sound playing

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    updateSudokuBoard(solution);
    setPlaySound(true);  // Trigger sound to play
    handleShow();
  };

  const style = {
    backgroundColor: "var(--yellow)",
    borderRadius: "1rem",
    border: "outset 0.5rem var(--yellow)",
    boxShadow: "inset 0 0 1rem var(--shadow), 0 -2px .75rem var(--shadow-teal)",
    color: "black",
    fontFamily: "var(--fontThree)",
    width: "max-content"
  }

  return (
    <>
      <Button
        className=""
        onClick={handleClick}
        size="m"
        style={style}
      >
        Solution
      </Button>
      <EndGameSound playSound={playSound} />
    </>
  );
}

export default SolutionButton;
