import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import NewGame from '../../pages/Game/NewGame';


const style = {
  backgroundColor: "var(--yellow)",
  borderRadius: "1rem",
  border: "outset 0.5rem var(--yellow)",
  boxShadow: "inset 0 0 1rem var(--shadow), 0 -2px .75rem var(--shadow-teal)",
  color: "black",
  fontFamily: "var(--fontThree)",
  width: "max-content"
}

function SolutionButton(props) {
  const {sudokuBoard, updateSudokuBoard, solution} = props;
  // const [show, setShow] = useState(false);
  // const score = 100; //get this from local storage
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const handleClick = () => {
    //update the board with the solution
    updateSudokuBoard(solution);
    // handleShow();
    // display solution
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