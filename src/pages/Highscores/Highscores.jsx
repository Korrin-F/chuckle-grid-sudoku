import highScores from '../../data/highscores.json';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HighScores() {


  return (
    <Container  className="mt-5 flex-grow-1">
      {/* High Scores Table */}
      <Table striped >
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {/* maybe dynamically generate rows based on highScores array/info */}
          {highScores.map((score, index) => (
            <tr key={index}>
              <td>{score.name}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Reward Button */}
      <div className="text-center">
        <Link to="/">
          <Button variant="info">New Game</Button>
        </Link>
      </div>
    </Container>
  );
};

export default HighScores;