import GambleButton from "../Gamble/GambleButton";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MotivationButton from "../../components/Giphy/GameMotivation"

function UnderGameBoard(props) {
    const {updateScore, score, updateSudokuBoard, sudokuBoard, solution } = props;
  return (
        // <Container className="mt-4 mb-5">
            <Row className="w-100 justify-content-center m-auto mb-5">
                <Col className='d-flex flex-col justify-content-between col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 p-0'>
                    {/* <Row className='justify-content-center'> */}
                        <GambleButton score={score} updateScore={updateScore} updateSudokuBoard={updateSudokuBoard} sudokuBoard={sudokuBoard} solution={solution}/>
                        <MotivationButton />
                    {/* </Row> */}
                </Col>
                {/* <Col className='d-flex flex-col justify-content-end col-3'>
                    <MotivationButton />
                </Col> */}
            </Row>
        // </Container>
  );
}

export default UnderGameBoard;