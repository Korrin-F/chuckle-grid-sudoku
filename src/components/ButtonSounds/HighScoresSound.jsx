import React, { useEffect } from 'react';
import useSound from 'use-sound';
import highScoresSound from '../../sounds/we-are-the-champions.mp3';

const HighScoresSound = ({ playSound }) => {
  const [play, { stop }] = useSound(highScoresSound);

  useEffect(() => {
    if (playSound) {
      play();
    } else {
      stop(); // Stop the sound when playSound is false
    }
  }, [playSound, play, stop]);

  return null;
};

export default HighScoresSound;
