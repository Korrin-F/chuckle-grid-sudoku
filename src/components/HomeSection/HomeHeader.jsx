import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gridImage from '../../assets/images/grid_transformed-redu@0.5x.png'
import Image from 'react-bootstrap/Image';
import tagline from '../../assets/images/tagline_transformed-redu@0.5x.png'
import Stack from 'react-bootstrap/Stack';


// center largest:
// Col className="col-4 mt-5 pt-5"
// top Image className="mt-5"



function HomeHeader() {
    return (
        <Row className="justify-content-center text-center mb-4">
            <Col className="col-sm-4 mt-5 pt-5">
                <Stack direction="vertical" gap={3}>
                    <Image fluid src={gridImage} alt="Sudoku Grid" className="mt-5" />
                    <Image fluid src={tagline} alt="Sudoku Tagline" />
                </Stack>
            </Col>
        </Row>
    )
}
 export default HomeHeader;