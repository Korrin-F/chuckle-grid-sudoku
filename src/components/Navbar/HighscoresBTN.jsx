import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import HighScoresSound from '../ButtonSounds/HighScoresSound';

function SubmitButton(props) {
  const { style } = props;
  const navigate = useNavigate();
  const [playSound, setPlaySound] = useState(false);

  const handleNavigation = () => {
    // Toggle the playSound state to trigger the sound
    setPlaySound(true);
    navigate('/highscores');
  };

  return (
    <>
      <Button style={style} onClick={handleNavigation}>
        Highscores
      </Button>
      {playSound && (
        <HighScoresSound
          playSound={true}
          onSoundEnd={() => setPlaySound(false)} // Reset playSound after sound ends
        />
      )}
    </>
  );
}

export default SubmitButton;
