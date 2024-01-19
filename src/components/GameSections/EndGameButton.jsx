import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import EndGameModal from '../Modals/EndGameModal';

function EndGameButton(props) {
    // const {handleClick} = props;
  const [show, setShow] = useState(false);
  const score = 100;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    handleShow();
    // display solution
  }

  return (
    <>
    <Button
      className="mx-2"
      variant="danger"
      onClick={handleClick}
      size="m"
    >
      End Game
    </Button>
    <EndGameModal show={show} handleClose={handleClose} score={score}/>
    </>
    
  );
}

export default EndGameButton;