import React, { useEffect } from 'react';
import LosePointsSoundFile from '../../sounds/LosePointsSound.mp3';

const LosePointsSound = ({ playSound }) => {
  useEffect(() => {
    if (playSound) {
      const audio = new Audio(LosePointsSoundFile);
      audio.play();
    }
  }, [playSound]);

  return null;
};

export default LosePointsSound;
