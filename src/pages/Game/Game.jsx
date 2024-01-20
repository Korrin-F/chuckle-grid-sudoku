import Container from 'react-bootstrap/Container';
import GridSection from "../../components/GameGrid/GridSection";
import UnderGameBoard from "../../components/GameSections/UnderGameBoard";
import AboveGameBoard from '../../components/GameSections/AboveGameBoard';
import React, { useState } from 'react';
import NewGridSection from '../../components/GameGrid/NewGridSection';


function Game() {
  const [score, setScore] = useState(405);

  const updateScore = (value) => {
    setScore((prevScore) => prevScore + value);
  };

  return (
    <Container  className="mt-2 flex-grow-1">
        <AboveGameBoard score={score} />
        <GridSection updateScore={updateScore} />
        <UnderGameBoard updateScore={updateScore} />
    </Container>
    )
}

export default Game;
