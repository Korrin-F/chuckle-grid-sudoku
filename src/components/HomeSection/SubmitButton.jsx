import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import StartSound from '../ButtonSounds/StartSound';

function SubmitButton(props) {
  const { handleFormSubmit, style, name, playSound, handleSoundPlayed  } = props;
  // const [playSound, setPlaySound] = useState(false);

  
  // const handleButtonClick = () => {
  //   setPlaySound(true);
  // };

  useEffect(() => {
    if (playSound) {
      // const soundEnded = () => {
      //   // handleSound(false);
      //   handleSoundPlayed();
      //   handleFormSubmit();
      // };

      const audio = new Audio();
      audio.src = '/src/sounds/lets-go.mp3'; 
      audio.addEventListener('ended', handleSoundPlayed);
      audio.play();

      return () => {
        audio.removeEventListener('ended', handleSoundPlayed);
      };
    }
  }, [playSound, handleFormSubmit]);

  return (
    <>
      <Button
        className="m-auto mt-2 mb-4"
        onClick={handleFormSubmit}
        size="lg"
        style={style}
      >
       {name} 
      </Button>
    </>
  );

}

export default SubmitButton;
