import React, { useEffect } from 'react';
import StartSoundFile from '../../sounds/lets-go.mp3';

const StartSound = ({ playSound }) => {
  useEffect(() => {
    if (playSound) {
      const audio = new Audio(StartSoundFile);
      audio.play();
    }
  }, [playSound]);

  return null;
};

export default StartSound;
