import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import EndGameModal from '../Modals/EndGameModal';

const style = {
  backgroundColor: "var(--green)",
  borderRadius: "1rem",
  border: "outset 0.5rem var(--green)",
  boxShadow: "inset 0 0 1rem var(--shadow), 0 -2px .75rem var(--shadow-teal)",
  color: "black",
  fontFamily: "var(--fontTwo)",
  width: "max-content"
}

function EndGameButton(props) {
  const {score} = props;
  const [show, setShow] = useState(false);
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
      onClick={handleClick}
      size="m"
      style={style}
    >
      End Game
    </Button>
    <EndGameModal show={show} handleClose={handleClose} score={score}/>
    </>
    
  );
}

export default EndGameButton;