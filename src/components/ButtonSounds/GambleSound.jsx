import React, { useEffect } from 'react';
import useSound from 'use-sound';
import gambleSound from '../../sounds/oooh-hoo.mp3';

const GambleSound = ({ playSound }) => {
  const [play, { stop }] = useSound(gambleSound);

  useEffect(() => {
    if (playSound) {
      play();
    } else {
      stop(); // Stop the sound when playSound is false
    }
  }, [playSound, play, stop]);

  return null;
};

export default GambleSound;
