import GambleButton from "../Gamble/GambleButton";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UnderGameBoard() {
  return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col className='d-flex flex-col justify-content-center col-4'>
                    <GambleButton />
                </Col>
            </Row>
        </Container>
  );
}

export default UnderGameBoard;