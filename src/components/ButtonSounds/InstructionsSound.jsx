import React, { useEffect } from 'react';
import InstructionsSoundFile from '../../sounds/help.mp3';

const InstructionsSound = ({ playSound }) => {
  useEffect(() => {
    if (playSound) {
      const audio = new Audio(InstructionsSoundFile);
      audio.play();
    }
  }, [playSound]);

  return null;
};

export default InstructionsSound;