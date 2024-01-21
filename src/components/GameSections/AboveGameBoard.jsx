import SolutionButton from './SolutionButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Score from "./Score";
import EndGameButton from './EndGameButton';


function AboveGameBoard(props) {
    const { score } = props;
  return (
        <Container className="mt-4 mb-3">
            <Row className="justify-content-end">
                <Col className='d-flex flex-col justify-content-end col-12'>
                    <Score score={score} />
                </Col>
                <Col className='d-flex flex-col justify-content-end col-12'>
                    <SolutionButton />
                    <EndGameButton score={score}/>
                </Col>
            </Row>
        </Container>
  );
}

export default AboveGameBoard;