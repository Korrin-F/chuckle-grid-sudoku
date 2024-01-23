import React, { useState } from "react";
import { Button } from "react-bootstrap";
import GambleModal from "../Modals/GambleModal";
import RevealTilesSound from "../ButtonSounds/RevealTileSound";
import LosePointsSound from "../ButtonSounds/LosePointsSound";
import GainPointsSound from "../ButtonSounds/GainPointsSound";

const style = {
  backgroundColor: "var(--pink)",
  borderRadius: "1rem",
  border: "outset 0.5rem var(--pink)",
  boxShadow: "inset 0 0 1rem var(--shadow), 0 -2px .75rem var(--shadow-teal)",
  color: "white",
  fontFamily: "var(--fontTwo)",
  width: "max-content",
};

function GambleButton(props) {
  const { updateScore, score, updateSudokuBoard, sudokuBoard, solution } = props;
  const [gambleResult, setGambleResult] = useState({
    text: "",
    buttonText: "",
  });
  const [show, setShow] = useState(false);
  const [amountToReveal, setAmountToReveal] = useState(0); // Declare amountToReveal

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const handleClick = () => {
    letsGamble();
    handleShow();
  };

  const letsGamble = () => {
    const random = Math.floor(Math.random() * 3);
    const randomAmount = Math.floor(Math.random() * 5) + 5;

    // Set the amountToReveal
    setAmountToReveal(randomAmount);

    if (random === 0) {
      setGambleResult({
        text: "You lost 50 points!",
        buttonText: "Whatever!",
      });
      updateScore(-50);
      playAudio("losePointsSound");
    } else if (random === 1) {
      setGambleResult({
        text: "You gained 50 points!",
        buttonText: "Awesome!",
      });
      updateScore(50);
      playAudio("gainPointsSound");
    } else {
      revealTiles(randomAmount);
      setGambleResult({
        text: `You revealed ${randomAmount} tiles!`,
        buttonText: "Cool!",
      });
      playAudio("revealTilesSound");
    }
  };

  const revealTiles = (amount) => {
    const newSudokuBoard = [...sudokuBoard];

    for (let i = 0; i < amount; i++) {
      let randomX = Math.floor(Math.random() * 9);
      let randomY = Math.floor(Math.random() * 9);

      console.log("X:", randomX, "Y:", randomY, "Changed to:", solution[randomX][randomY]);

      newSudokuBoard[randomX][randomY] = solution[randomX][randomY];
    }

    updateSudokuBoard(newSudokuBoard);
  };

  const playAudio = (soundType) => {
    // ... (unchanged)
  };

  return (
    <>
      <Button className="m-2" onClick={handleClick} size="lg" style={style}>
        Gamble
      </Button>
      <GambleModal show={show} handleClose={handleClose} score={score} gamble={gambleResult} />
      {gambleResult.text === `You revealed ${amountToReveal} tiles!` && <RevealTilesSound playSound={true} />}
      {gambleResult.text === "You lost 50 points!" && <LosePointsSound playSound={true} />}
      {gambleResult.text === "You gained 50 points!" && <GainPointsSound playSound={true} />}
    </>
  );
}

export default GambleButton;


// CODE FOR LATER
//   const masterArray = [
//     ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"],
//     ["A4", "A5", "A6", "B4", "B5", "B6", "C4", "C5", "C6"],
//     ["A7", "A8", "A9", "B7", "B8", "B9", "C7", "C8", "C9"],
//     ["D1", "D2", "D3", "E1", "E2", "E3", "F1", "F2", "F3"],
//     ["D4", "D5", "D6", "E4", "E5", "E6", "F4", "F5", "F6"],
//     ["D7", "D8", "D9", "E7", "E8", "E9", "F7", "F8", "F9"],
//     ["G1", "G2", "G3", "H1", "H2", "H3", "I1", "I2", "I3"],
//     ["G4", "G5", "G6", "H4", "H5", "H6", "I4", "I5", "I6"],
//     ["G7", "G8", "G9", "H7", "H8", "H9", "I7", "I8", "I9"]
//  ]
//  const starterArray = []

//  useEffect(() => {
//     for (let row of masterArray) {
//         let miniArray = [];
//       for (let cell of row) {
//         let element = document.getElementById(cell);
//         miniArray.push(element.value);
//       }
//         starterArray.push(miniArray);
//     }

//     console.log("starter array:", starterArray);
//   }, []);

    // const revealTiles = (amount) => {
    //   const tilesToReveal = [];

    //   for(let i = 0; i < amount; i++) {
    //     const random = Math.floor(Math.random() * 82);
    //     const randomCell = cellIdsFlat[random];
    //     console.log(randomCell);
    //     const cell = document.getElementById(randomCell);
    //     const solution = cell.getAttribute("data-sol");
    //     // make sure the cell is elegable to be revealed
    //     // and make sure the same tile has not already be chosen
    //     if (solution !== "0" && !tilesToReveal.includes(randomCell)) {
    //       tilesToReveal.push(randomCell);
    //     } else {
    //       i--;
    //     }
    //   }

    //   for (let tile of tilesToReveal) {
    //     const cell = document.getElementById(tile);
    //     const solution = cell.getAttribute("data-sol");
    //     cell.value = solution;
    //   }

    // }