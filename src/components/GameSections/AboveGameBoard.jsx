import SolutionButton from './SolutionButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Score from "./Score";
import EndGameButton from './EndGameButton';
import Stack from 'react-bootstrap/Stack';


function AboveGameBoard(props) {
    const { score, sudokuBoard, updateSudokuBoard, solution } = props;
  return (
        // <Container className="mt-4">
            <Row className="mt-4 justify-content-center w-100">
                <Col xs={10} md={9} lg={8} xl={7} xxl={6}>
                    <Stack gap={2} >
                        <Row className="justify-content-end">
                            <Score score={score} />
                        </Row>
                        <Row className="justify-content-end">
                            <SolutionButton sudokuBoard={sudokuBoard} updateSudokuBoard={updateSudokuBoard} solution={solution}/>
                            <EndGameButton score={score}/>
                        </Row>
                    </Stack>
                    
                </Col>
                {/* <Col className='d-flex flex-col justify-content-end col-12'>
                    <Score score={score} />
                </Col>
                <Col className='d-flex flex-col justify-content-end col-12'>
                    <SolutionButton sudokuBoard={sudokuBoard} updateSudokuBoard={updateSudokuBoard} solution={solution}/>
                    <EndGameButton score={score}/>
                </Col> */}
            </Row>
        // </Container>
  );
}

export default AboveGameBoard;