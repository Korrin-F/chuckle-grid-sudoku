import Box from "./Box";
import axios from "axios";
import { useState, useEffect } from 'react';
import Cell from "./Cell";


const styles = {
  width: "500px",
  height: "500px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
};

const boxes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];


function NewGrid(props) {
  const { updateScore, sudokuBoard, updateSudokuBoard } = props;
//   const [unsolvedDataSudoku, setUnsolvedDataSudoku] = useState([]);
  const temporarySolutionsArray = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];
  const [apiCalled, setApiCalled] = useState(false);
  const storedDifficulty = localStorage.getItem("difficulty");
  const updateCell = (id, value) => { //updates the sudokuBoard state with the new input value that the user enters into any cell
    const x = id.charCodeAt(0) - 65; //calculates the row index based on the ASCII value of the first character of the id. this line converts the letter part to a numeric index. ASCII value of 'A' is 65, so subtracting 65 maps 'A' to 0, 'B' to 1, and so on.
    const y = parseInt(id.charAt(1)) - 1; // extracts the numeric part from the id (the second character) and converts it to an integer. Subtracting 1 ensures that it's zero-based
    const newSudokuBoard = [...sudokuBoard];
    newSudokuBoard[x][y] = parseInt(value); //updates the value at the specified cell with the new input value and converts the value to an integer
    updateSudokuBoard(newSudokuBoard);
  }

//   updateSudokuBoard(
//     [
//     ["", "", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", "", ""]
//     ]
//   )

  useEffect(() => {
    async function sudokuApi() {
        if (apiCalled) {
            // If the API has already been called, skip fetching data
            return;
          }
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
          'X-RapidAPI-Host': 'sudoku-board.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const unsolvedData = response.data.response['unsolved-sudoku'];
        // setUnsolvedDataSudoku(unsolvedData);
        updateSudokuBoard(unsolvedData);

        // Set apiCalled to true to prevent further API calls
        setApiCalled(true);

      } catch (error) {
        console.error(error);
      }
      
    }
    sudokuApi();

    if (sudokuBoard.length > 0) {
        // Store unsolvedDataSudoku in local storage
        localStorage.setItem("unsolvedDataSudoku", JSON.stringify(sudokuBoard));
        console.log(sudokuBoard);
        // Flatten the 2D array into a 1D array
        const flattenedArray = sudokuBoard.flat();
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

        localStorage.setItem("solutions", JSON.stringify(temporarySolutionsArray));
      }
  }, [apiCalled]);
 
 
  if (sudokuBoard.length === 0) {
    return null;
  }



  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center w-75'>
        <div className='grid-container' style={styles}>
          {boxes.map((box, index) => {
            const x = Math.floor(index / 3) * 3;
            const y = (index % 3) * 3;

            return (
              <Box
                key={index}
                letter={box}
                updateCell={updateCell}
                numbers={[
                    sudokuBoard[x][y], sudokuBoard[x][y + 1], sudokuBoard[x][y + 2],
                    sudokuBoard[x + 1][y], sudokuBoard[x + 1][y + 1], sudokuBoard[x + 1][y + 2],
                    sudokuBoard[x + 2][y], sudokuBoard[x + 2][y + 1], sudokuBoard[x + 2][y + 2],
                ]}
                data={[
                    temporarySolutionsArray[x][y], temporarySolutionsArray[x][y + 1], temporarySolutionsArray[x][y + 2],
                    temporarySolutionsArray[x + 1][y], temporarySolutionsArray[x + 1][y + 1], temporarySolutionsArray[x + 1][y + 2],
                    temporarySolutionsArray[x + 2][y], temporarySolutionsArray[x + 2][y + 1], temporarySolutionsArray[x + 2][y + 2],
                ]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NewGrid;

