import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function SolutionButton(props) {
    // const {handleClick} = props;
  const [show, setShow] = useState(false);
  const score = 100; //get this from local storage
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    handleShow();
    // display solution
  }

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