import React, { useEffect } from 'react';
import RevealTileSoundFile from '../../sounds/oooh-hoo.mp3';

const RevealTileSound = ({ playSound }) => {
  useEffect(() => {
    if (playSound) {
      const audio = new Audio(RevealTileSoundFile);
      audio.play();
    }
  }, [playSound]);

  return null;
};

export default RevealTileSound;

