
import Container from 'react-bootstrap/Container';
import HighscoresRow from '../../components/HighscoresSection/HighscoresRow';

function HighScores() {


  return (
    <Container fluid className="pt-5 flex-grow-1">
      <HighscoresRow />
    </Container>
  );
};

export default HighScores;