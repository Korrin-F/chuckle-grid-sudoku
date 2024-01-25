import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import StartSound from '../ButtonSounds/StartSound';

function SubmitButton(props) {
  const { handleFormSubmit, style } = props;
  const [playSound, setPlaySound] = useState(false);

  const handleButtonClick = () => {
    setPlaySound(true);
  };

  useEffect(() => {
    if (playSound) {
      const soundEnded = () => {
        setPlaySound(false);
        handleFormSubmit();
      };

      const audio = new Audio();
      audio.src = '/src/sounds/lets-go.mp3'; 
      audio.addEventListener('ended', soundEnded);
      audio.play();

      return () => {
        audio.removeEventListener('ended', soundEnded);
      };
    }
  }, [playSound, handleFormSubmit]);

  return (
    <>
      <Button
        className="m-auto mt-2"
        variant="success"
        onClick={handleButtonClick}
        size="lg"
        style={style}
      >
        New Game
      </Button>
    </>
  );
}

export default SubmitButton;
