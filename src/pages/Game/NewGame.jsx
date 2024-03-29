import Container from 'react-bootstrap/Container';
import GridSection from "../../components/GameGrid/GridSection";
import UnderGameBoard from "../../components/GameSections/UnderGameBoard";
import AboveGameBoard from '../../components/GameSections/AboveGameBoard';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import NewGridSection from '../../components/GameGrid/NewGridSection';
import NewGrid from '../../components/GameGrid/NewGrid';
import ErrorAPIModal from '../../components/Modals/ErrorAPIModal';
import Stack from 'react-bootstrap/Stack';


const styles = {
  backgroundColor: "white"
}

function NewGame(props) {
  const { screenWidth } = props;

  const [score, setScore] = useState(405);
  const [sudokuBoard, setSudokuBoard] = useState([]);
  const [solution, setSolution] = useState([]);
  const [boardColors, setBoardColors] = useState([]);
  const [apiCalled, setApiCalled] = useState(false);
  const storedDifficulty = localStorage.getItem("difficulty");

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState('');

  const updateSolution = (newSolution) => {
    setSolution(newSolution);
  }
  const updateScore = (value) => {
    setScore((prevScore) => prevScore + value);
  };
  const updateSudokuBoard = (newSudokuBoard) => {
    setSudokuBoard(newSudokuBoard);
  };
  const updateBoardColors = (newBoardColors) => {
    setBoardColors(newBoardColors);
  };

  useEffect(() => {
    // const tempBoard = [
    //   [0,4,0,0,8,1,0,0,0],
    //   [0,0,0,0,4,9,1,0,0],
    //   [0,0,1,0,0,6,2,0,4],
    //   [1,0,7,0,0,5,0,0,0],
    //   [6,0,4,8,0,7,0,1,0],
    //   [5,8,0,1,0,3,4,7,0],
    //   [0,6,0,0,1,0,0,2,0],
    //   [7,1,0,0,0,4,0,6,3],
    //   [0,0,8,0,0,2,0,4,0]
    // ];
    // const tempSolution = [
    //   [2,4,5,3,8,1,6,9,7],
    //   [3,7,6,2,4,9,1,5,8],
    //   [8,9,1,5,7,6,2,3,4],
    //   [1,2,7,4,9,5,3,8,6],
    //   [6,3,4,8,2,7,5,1,9],
    //   [5,8,9,1,6,3,4,7,2],
    //   [4,6,3,7,1,8,9,2,5],
    //   [7,1,2,9,5,4,8,6,3],
    //   [9,5,8,6,3,2,7,4,1]
    // ];
    // updateSudokuBoard(tempBoard);
    // updateSolution(tempSolution);

    
    let isMounted = true; // Flag to check if the component is still mounted

    async function sudokuApi() {
        // console.log("async started")

      const options = {
        method: 'GET',
        url: 'https://sudoku-board.p.rapidapi.com/new-board',
        params: {
          diff: storedDifficulty,
          stype: 'list',
          solu: 'true'
        },
        headers: {
          'X-RapidAPI-Key': '2e13952d57msh0b9a07691f3383ep15d154jsn3c910cbadbe9',
          'X-RapidAPI-Host': 'sudoku-board.p.rapidapi.com',
          "access-control-allow-credentials": "true",
          "access-control-allow-origin": "*",
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Add any other methods your app might use
          'Access-Control-Allow-Headers': 'Content-Type', // Add any other headers your app might send
        }
      };

      try {
        const response = await axios.request(options);
        const unsolvedData = response.data.response['unsolved-sudoku'];
        const solutionData = response.data.response['solution'];

        if (isMounted) {
            

            updateSolution(solutionData);
            // setUnsolvedDataSudoku(unsolvedData);
            updateSudokuBoard(unsolvedData);
        
            // Set apiCalled to true to prevent further API calls
            setApiCalled(true);

            if (unsolvedData.length > 0) {
                // handles the board colors
                const newBoardColors = unsolvedData.map(row =>
                row.map(cell => (cell !== 0 ? "var(--orange)" : "white"))
                );
                // create the board colors array
                updateBoardColors(newBoardColors);
                // Store unsolvedDataSudoku in local storage
                localStorage.setItem("unsolvedDataSudoku", JSON.stringify(unsolvedData));
                // Flatten the 2D array into a 1D array
                const flattenedArray = unsolvedData.flat();
                // Count the occurrences of 0 (zeros) in the flattened array
                const numberOfZeros = flattenedArray.filter(value => value === 0).length;
                // the number of zeros subttacted from 81 will determine the starter score
                console.log(`Number of zeros: ${numberOfZeros}`);
                // there are 81 tiles on the board, so the starter score is 405 for 5 pts each tile
                // lets subtract 5 points for each tile that is already given
                const starterScore = ((81-numberOfZeros) * 5);
                console.log(`Subtract this from start score (405): ${starterScore}`);
                console.log(`Starter score should be: ${405-starterScore}`);
                // set the score in local storage
                localStorage.setItem("score", starterScore);
                // update the score in the game
                updateScore(-(starterScore));
                // temporary local storage that should be replaced with the actual solutions array from the API
        
                localStorage.setItem("solutions", JSON.stringify(solutionData));
                console.log("Board Colors:", boardColors);
              }
        }

      } catch (error) {
        setIsErrorModalOpen(true);
        setErrorModalMessage('An error occurred');
     }
      
    }

    if(!apiCalled){
        sudokuApi(); 
    }

    return () => {
        isMounted = false; // Cleanup function to set isMounted to false when the component unmounts
    };

    
  }, [apiCalled]);

  return (

    <Container fluid className="pt-5 mt-5  flex-grow-1" style={styles}>
      <Stack gap={2} className="pt-5 mt-3 pt-md-0 mt-md-0 pt-xl-4 pt-xxl-0">
        <AboveGameBoard score={score} sudokuBoard={sudokuBoard} updateSudokuBoard={updateSudokuBoard} solution={solution}/>
        <NewGrid sudokuBoard={sudokuBoard} updateSudokuBoard={updateSudokuBoard} solution={solution} updateSolution={updateSolution} screenWidth={screenWidth} boardColors={boardColors}/>
        <UnderGameBoard updateScore={updateScore} score={score} updateSudokuBoard={updateSudokuBoard} sudokuBoard={sudokuBoard} solution={solution} boardColors={boardColors} updateBoardColors={updateBoardColors}/>

        <ErrorAPIModal
        isOpen={isErrorModalOpen}
        closeModal={() => setIsErrorModalOpen(false)}
        errorMessage={errorModalMessage}
        />
      </Stack>
    </Container>
    )
}
  
  export default NewGame;