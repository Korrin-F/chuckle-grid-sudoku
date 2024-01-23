import GambleButton from "../Gamble/GambleButton";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MotivationButton from "../../components/Giphy/GameMotivation"

function UnderGameBoard(props) {
    const {updateScore, score, updateSudokuBoard, sudokuBoard, solution } = props;
  return (
        // <Container className="mt-4 mb-5">
            <Row className="justify-content-center">
                <Col className='d-flex flex-col justify-content-start col-3'>
                    <GambleButton score={score} updateScore={updateScore} updateSudokuBoard={updateSudokuBoard} sudokuBoard={sudokuBoard} solution={solution}/>
                </Col>
                <Col className='d-flex flex-col justify-content-end col-3'>
                    <MotivationButton />
                </Col>
            </Row>
        // </Container>
  );
}

export default UnderGameBoard;