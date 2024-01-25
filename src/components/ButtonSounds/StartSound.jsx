import React, { useEffect, useRef } from 'react';
import StartSoundFile from '../../sounds/lets-go.mp3';

const StartSound = ({ playSound, onSoundEnd }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleSoundEnd = () => {
      if (onSoundEnd) {
        onSoundEnd();
      }
    };

    if (playSound) {
      audio.src = StartSoundFile;

      // Use load() before play() to avoid the "play() request was interrupted" error
      audio.load().then(() => {
        audio.play().then(() => {
          audio.addEventListener('ended', handleSoundEnd);
        });
      });
    }

    return () => {
      audio.removeEventListener('ended', handleSoundEnd);
    };
  }, [playSound, onSoundEnd]);

  return <audio ref={audioRef} />;
};

export default StartSound;
