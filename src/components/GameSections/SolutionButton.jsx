import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import NewGame from '../../pages/Game/NewGame';

function SolutionButton(props) {
    // const {handleClick} = props;

    const { sudokuBoard, updateSudokuBoard, solution} = props
  const [show, setShow] = useState(false);
  const score = 100; //get this from local storage
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
   
  updateSudokuBoard(solution);

  handleShow();
  };

  return (
    <>
    <Button
      className=""
      variant="warning"
      onClick={handleClick}
      size="m"
    >
      Solution
    </Button>
    </>
    
  );
}

export default SolutionButton;