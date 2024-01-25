import React, { useEffect } from 'react';
import EndGameSoundFile from '../../sounds/oh-no.mp3';

const EndGameSound = ({ playSound }) => {
  useEffect(() => {
    if (playSound) {
      const audio = new Audio(EndGameSoundFile);
      audio.play();
    }
  }, [playSound]);

  return null;
};

export default EndGameSound;
