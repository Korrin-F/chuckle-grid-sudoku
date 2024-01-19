import Container from 'react-bootstrap/Container';
import GridSection from "../../components/GameGrid/GridSection";
import UnderGameBoard from "../../components/GameSections/UnderGameBoard";
import AboveGameBoard from '../../components/GameSections/AboveGameBoard';


function Game() {
  return (
    <Container  className="mt-2 flex-grow-1">
        <AboveGameBoard />
        <GridSection />
        <UnderGameBoard />
    </Container>
    )
}

export default Game;
