import Container from 'react-bootstrap/Container';
import GridSection from "../../components/GameGrid/GridSection";
import UnderGameBoard from "../../components/GameSections/UnderGameBoard";


function Game() {
  return (
    <Container  className="mt-5 flex-grow-1">
        <GridSection />
        <UnderGameBoard />
    </Container>
    )
}

export default Game;
