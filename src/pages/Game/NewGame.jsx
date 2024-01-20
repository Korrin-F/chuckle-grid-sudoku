import Container from 'react-bootstrap/Container';
import GridSection from "../../components/GameGrid/GridSection";
import UnderGameBoard from "../../components/GameSections/UnderGameBoard";
import AboveGameBoard from '../../components/GameSections/AboveGameBoard';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import NewGridSection from '../../components/GameGrid/NewGridSection';

function NewGame() {

  const [score, setScore] = useState(405);
  const [sudokuBoard, setSudokuBoard] = useState([]);

  const updateScore = (value) => {
    setScore((prevScore) => prevScore + value);
  };
  const updateSudokuBoard = (newSudokuBoard) => {
    setSudokuBoard(newSudokuBoard);
  };

  return (
    <Container  className="mt-2 flex-grow-1">
        <AboveGameBoard score={score} />
        <NewGridSection updateScore={updateScore} sudokuBoard={sudokuBoard} updateSudokuBoard={updateSudokuBoard}/>
        <UnderGameBoard updateScore={updateScore} score={score} updateSudokuBoard={updateSudokuBoard}/>
    </Container>
    )
}
  
  export default NewGame;