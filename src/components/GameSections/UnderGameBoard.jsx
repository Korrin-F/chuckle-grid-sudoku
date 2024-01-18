import GambleButton from "../Gamble/GambleButton";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MotivationButton from "../../components/Giphy/GameMotivation"

function UnderGameBoard() {
  return (
        <Container className="mt-4">
            <Row className="justify-content-evenly">
                <Col className='d-flex flex-col justify-content-center col-6'>
                    <GambleButton />
                </Col>
                <Col className='d-flex flex-col justify-content-center col-6'>
                    <MotivationButton />
                </Col>
            </Row>
        </Container>
  );
}

export default UnderGameBoard;