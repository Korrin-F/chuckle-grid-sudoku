import SolutionButton from './SolutionButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Score from "./Score";
import EndGameButton from './EndGameButton';


function AboveGameBoard() {
  return (
        <Container className="mt-4">
            <Row className="justify-content-end">
                <Col className='d-flex flex-col justify-content-end col-12'>
                    <Score score="15" />
                </Col>
                <Col className='d-flex flex-col justify-content-end col-12'>
                    <SolutionButton />
                    <EndGameButton />
                </Col>
            </Row>
        </Container>
  );
}

export default AboveGameBoard;