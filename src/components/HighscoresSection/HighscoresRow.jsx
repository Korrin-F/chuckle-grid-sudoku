import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HighScoresTable from './HighscoresTable';
import NewGameButton from './NewGameButton';
import Stack from 'react-bootstrap/Stack';


function HighscoresRow() {
    return (
        <Row className="justify-content-center h-75 align-items-center ">
            <Col className="col-7">
                <Stack gap={3} className="h-100">
                    <HighScoresTable />
                    <NewGameButton />
                </Stack>
            </Col>
        </Row>
    )
}

export default HighscoresRow;