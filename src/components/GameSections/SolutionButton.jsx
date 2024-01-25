import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import NewGame from '../../pages/Game/NewGame';


const style = {
  backgroundColor: "var(--yellow)",
  borderRadius: "1rem",
  border: "outset 0.5rem var(--yellow)",
  boxShadow: "inset 0 0 1rem var(--shadow), 0 -2px .75rem var(--shadow-teal)",
  color: "black",
  fontFamily: "var(--fontTwo)",
  width: "max-content"
}

function SolutionButton(props) {
  const {sudokuBoard, updateSudokuBoard, solution} = props;

  const handleClick = () => {

    updateSudokuBoard(solution);

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
    </>
    
  );
}


export default SolutionButton;