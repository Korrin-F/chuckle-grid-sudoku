import React from 'react';
import useSound from 'use-sound';
import gambleSound from '../../sounds/oooh-hoo.mp3';

const GambleSound = ({ playSound }) => {
  const [play] = useSound(gambleSound);

  React.useEffect(() => {
    if (playSound) {
      play();
    }
  }, [playSound, play]);

  return null;
};

export default GambleSound;
