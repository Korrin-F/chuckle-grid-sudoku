import Box from "./Box";
import axios from "axios";
import { useState, useEffect } from 'react';

const styles = {
  width: "500px",
  height: "500px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
};

const boxes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];


function NewGrid(props) {
  const { updateScore } = props;
  const [unsolvedDataSudoku, setUnsolvedDataSudoku] = useState([]);
  const [apiCalled, setApiCalled] = useState(false);
  const storedDifficulty = localStorage.getItem("difficulty");

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
        setUnsolvedDataSudoku(unsolvedData);

        // Set apiCalled to true to prevent further API calls
        setApiCalled(true);

      } catch (error) {
        console.error(error);
      }
      
    }
    sudokuApi();

    if (unsolvedDataSudoku.length > 0) {
        // Store unsolvedDataSudoku in local storage
        localStorage.setItem("unsolvedDataSudoku", JSON.stringify(unsolvedDataSudoku));
        console.log(unsolvedDataSudoku);
        // Flatten the 2D array into a 1D array
        const flattenedArray = unsolvedDataSudoku.flat();
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
      }
  }, [apiCalled]);
 
 
  if (unsolvedDataSudoku.length === 0) {
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
                numbers={[
                  unsolvedDataSudoku[x][y], unsolvedDataSudoku[x][y + 1], unsolvedDataSudoku[x][y + 2],
                  unsolvedDataSudoku[x + 1][y], unsolvedDataSudoku[x + 1][y + 1], unsolvedDataSudoku[x + 1][y + 2],
                  unsolvedDataSudoku[x + 2][y], unsolvedDataSudoku[x + 2][y + 1], unsolvedDataSudoku[x + 2][y + 2],
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

