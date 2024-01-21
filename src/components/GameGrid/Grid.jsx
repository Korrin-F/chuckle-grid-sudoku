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

function GameApi() {
  const [unsolvedDataSudoku, setUnsolvedDataSudoku] = useState([]);

  const storedDifficulty = localStorage.getItem("difficulty");

  useEffect(() => {
    async function sudokuApi() {
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
      } catch (error) {
        console.error(error);
      }
    }
    sudokuApi();
  }, []);
  
  return unsolvedDataSudoku;
}

function Grid() {
  const unsolvedDataSudoku = GameApi();

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

export default Grid;
