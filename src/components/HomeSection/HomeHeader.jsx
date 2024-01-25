import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gridImage from '../../assets/images/grid_transformed-redu@0.5x.png'
import Image from 'react-bootstrap/Image';
import tagline from '../../assets/images/tagline_transformed-redu@0.5x.png'
import Stack from 'react-bootstrap/Stack';



function HomeHeader() {
    return (
        <Row className="justify-content-center text-center mb-4">
            <Col className="mt-5 pt-5 mt-md-0 mt-lg-5"
                xs={10}
                sm={6}
                lg={4}
                xxl={3}
            >
                <Stack direction="vertical" gap={3}>
                    <Image fluid src={gridImage} alt="Sudoku Grid" className="mt-5" />
                    <Image fluid src={tagline} alt="Sudoku Tagline" />
                </Stack>
            </Col>
        </Row>
    )
}
 export default HomeHeader;