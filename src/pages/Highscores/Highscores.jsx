import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import HighscoresRow from '../../components/HighscoresSection/HighscoresRow';
import HighScoresSound from '../../components/ButtonSounds/HighScoresSound';

function HighScores() {
  useEffect(() => {
    // Set playSound to true when the component mounts
    const playSound = true;

    return () => {
      // Cleanup logic (if needed)
    };
  }, []);

  return (
    <Container fluid className="pt-5 flex-grow-1">
      <HighscoresRow />
      <HighScoresSound playSound={true} />
    </Container>
  );
}

export default HighScores;
