import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HighScoresTable from './HighscoresTable';
import NewGameButton from './NewGameButton';

function HighscoresRow() {
    return (
        <Row className="justify-content-center">
            <Col className="col-7">
                <HighScoresTable />
                <NewGameButton />
            </Col>
        </Row>
    )
}

export default HighscoresRow;