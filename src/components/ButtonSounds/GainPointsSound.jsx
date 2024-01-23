import React, { useEffect } from 'react';
import GainPointsSoundFile from '../../sounds/winpoints.mp3';

const GainPointsSound = ({ playSound }) => {
  useEffect(() => {
    if (playSound) {
      const audio = new Audio(GainPointsSoundFile);
      audio.play();
    }
  }, [playSound]);

  return null;
};

export default GainPointsSound;
