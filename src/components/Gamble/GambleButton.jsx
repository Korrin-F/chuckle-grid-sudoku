import React, { useState } from "react";
import { Button } from "react-bootstrap";
import GambleModal from "../Modals/GambleModal";
import RevealTilesSound from "../ButtonSounds/RevealTileSound";
import LosePointsSound from "../ButtonSounds/LosePointsSound";
import GainPointsSound from "../ButtonSounds/GainPointsSound";
import sadFetch from "../Giphy/GambleFetch/SadFetch.jsx"; 
import celebrateFetch from "../Giphy/GambleFetch/CelebrateFetch";
import happyFetch from "../Giphy/GambleFetch/HappyFetch";



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
  const {
    updateScore,
    score,
    updateSudokuBoard,
    sudokuBoard,
    solution,
    boardColors,
    updateBoardColors,
  } = props;

  const [gambleResult, setGambleResult] = useState({
    text: "",
    buttonText: "",
  });
  const [show, setShow] = useState(false);
  const [amountToReveal, setAmountToReveal] = useState(0);
  const [fetchedContent, setFetchedContent] = useState(null);
  const [soundKey, setSoundKey] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    handleGamble();
    handleShow();
  };

  const handleGamble = async () => {
    const random = Math.floor(Math.random() * 3);
    // const random = 2; // for testing
    const randomAmount = Math.floor(Math.random() * 5) + 5;

    setAmountToReveal(randomAmount);

    if (random === 0) {
      setGambleResult({
        text: "You lost 50 points!",
        buttonText: "Whatever!",
      });
      updateScore(-50);
      playAudio("losePointsSound");
      const sadGifs = await sadFetch();
      setFetchedContent(sadGifs);
    } else if (random === 1) {
      setGambleResult({
        text: "You gained 50 points!",
        buttonText: "Awesome!",
      });
      updateScore(50);
      playAudio("gainPointsSound");
      const happyGifs = await happyFetch();
      setFetchedContent(happyGifs);
    } else {
      revealTiles(randomAmount);
      setGambleResult({
        text: `You revealed ${randomAmount} tiles!`,
        buttonText: "Cool!",
      });
      playAudio("revealTilesSound");
      const celebrateGifs = await celebrateFetch();
      setFetchedContent(celebrateGifs);
    }
  };

  const colors = ["var(--blue)", "var(--green)", "var(--pink)"];
  let colorIndex = 0;

  const revealTiles = (amount) => {
    const newSudokuBoard = [...sudokuBoard];
    const newBoardColors = [...boardColors];

    for (let i = 0; i < amount; i++) {
      let randomX = Math.floor(Math.random() * 9);
      let randomY = Math.floor(Math.random() * 9);

      console.log("X:", randomX, "Y:", randomY, "Changed to:", solution[randomX][randomY]);

      newSudokuBoard[randomX][randomY] = solution[randomX][randomY];
      newBoardColors[randomX][randomY] = colors[colorIndex];
      // Cycle through colors
      colorIndex = (colorIndex + 1) % colors.length;
    }

    updateSudokuBoard(newSudokuBoard);
    updateBoardColors(newBoardColors);
  };

  const playAudio = (soundType) => {
    setSoundKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <Button className="m-2" onClick={handleClick} size="lg" style={style}>
        Gamble
      </Button>
      <GambleModal
        show={show}
        handleClose={handleClose}
        score={score}
        gamble={gambleResult}
        fetchedContent={fetchedContent}
      />
      {gambleResult.text === `You revealed ${amountToReveal} tiles!` && (
        <RevealTilesSound key={soundKey} playSound={true} />
      )}
      {gambleResult.text === "You lost 50 points!" && (
        <LosePointsSound key={soundKey} playSound={true} />
      )}
      {gambleResult.text === "You gained 50 points!" && (
        <GainPointsSound key={soundKey} playSound={true} />
      )}
    </>
  );
}

export default GambleButton;


