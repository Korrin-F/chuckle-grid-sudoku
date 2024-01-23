import React, { useRef, useEffect } from 'react';
import motivationSound from '../../sounds/youcandoit3.mp3';

const MotivationSound = ({ playSound }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (playSound) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [playSound]);

  return (
    <audio ref={audioRef} src={motivationSound} />
  );
};

export default MotivationSound;
