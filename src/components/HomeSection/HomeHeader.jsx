import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gridImage from '../../assets/images/grid_transformed-redu@0.5x.png'
import Image from 'react-bootstrap/Image';
import tagline from '../../assets/images/tagline_transformed-redu@0.5x.png'

function HomeHeader() {
    return (
        <Row className="justify-content-center text-center mb-4">
            <Col className="col-6">
                <Image fluid src={gridImage} alt="Sudoku Grid" />
                <Image fluid src={tagline} alt="Sudoku Tagline" />
            </Col>
        </Row>
    )
}
 export default HomeHeader;