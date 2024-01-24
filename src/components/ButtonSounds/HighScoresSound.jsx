import React, { useEffect, useRef } from 'react';
import { Howl, Howler } from 'howler';
import highScoresSound from '../../sounds/we-are-the-champions.mp3';

const HighScoresSound = ({ playSound }) => {
  const sound = useRef(null);

  useEffect(() => {
    sound.current = new Howl({
      src: [highScoresSound],
    });

    return () => {
      if (sound.current) {
        sound.current.unload();
      }
    };
  }, []);

  useEffect(() => {
    if (playSound) {
      sound.current.play();
    } else {
      sound.current.stop();
    }
  }, [playSound]);

  return null;
};

export default HighScoresSound;
