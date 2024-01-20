import Container from 'react-bootstrap/Container';
import GridSection from "../../components/GameGrid/GridSection";
import UnderGameBoard from "../../components/GameSections/UnderGameBoard";
import AboveGameBoard from '../../components/GameSections/AboveGameBoard';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import NewGridSection from '../../components/GameGrid/NewGridSection';

function NewGame() {

  const [score, setScore] = useState(405);

  const updateScore = (value) => {
    setScore((prevScore) => prevScore + value);
  };

  return (
    <Container  className="mt-2 flex-grow-1">
        <AboveGameBoard score={score} />
        <NewGridSection updateScore={updateScore} />
        <UnderGameBoard updateScore={updateScore} />
    </Container>
    )
}
  
  export default NewGame;