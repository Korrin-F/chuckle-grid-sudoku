import { Button } from "react-bootstrap";
import { useState } from "react";
import GambleModal from "../Modals/GambleModal";
import cellIds from '../../data/cellids.json';


function GambleButton(props) {
    const {updateScore, score} = props;
    const cellIdsFlat = cellIds.flat();
    const [gambleResult, setGambleResult] = useState({
      text: "",
      buttonText: "",
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = () => {
      letsGamble();
      handleShow();
    }
    const letsGamble = () => {
      const random = Math.floor(Math.random() * 3); //add a 3rd option for revealing tiles + subtracting or adding points
      const amountToReveal = Math.floor(Math.random() * 5) + 5;
      if (random === 0) {
        setGambleResult({
          text: "You lost 50 points!",
          buttonText: "Whatever!",
        });
        updateScore(-50);
      } else if (random === 1) {
        setGambleResult({
          text: "You gained 50 points!",
          buttonText: "Awesome!",
        });
        updateScore(50);
      } else {
        revealTiles(amountToReveal);
        setGambleResult({
          text: `You revealed ${amountToReveal} tiles!`,
          buttonText: "Cool!",
        });
        // reveal 3 tiles
      }
    }

    const revealTiles = (amount) => {
      const tilesToReveal = [];

      for(let i = 0; i < amount; i++) {
        const random = Math.floor(Math.random() * 82);
        const randomCell = cellIdsFlat[random];
        console.log(randomCell);
        const cell = document.getElementById(randomCell);
        const solution = cell.getAttribute("data-sol");
        // make sure the cell is elegable to be revealed
        // and make sure the same tile has not already be chosen
        if (solution !== "0" && !tilesToReveal.includes(randomCell)) {
          tilesToReveal.push(randomCell);
        } else {
          i--;
        }
      }

      for (let tile of tilesToReveal) {
        const cell = document.getElementById(tile);
        const solution = cell.getAttribute("data-sol");
        cell.value = solution;
      }

    }
 

  return (
    <>
    <Button
      className="m-2"
      variant="danger"
      onClick={handleClick}
      size="lg"
    >
      Gamble
    </Button>
    <GambleModal show={show} handleClose={handleClose} score={score} gamble={gambleResult}/>
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