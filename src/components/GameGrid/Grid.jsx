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

    const [unsolvedDataSudoku, setUnsolvedDataSudoku] = useState([])
    console.log(unsolvedDataSudoku);
    
      useEffect(() => {
        async function sudokuApi(){

            const difficulty = '';
            const options = {
            method: 'GET',
            url: 'https://sudoku-board.p.rapidapi.com/new-board',
            params: {
              diff: difficulty,
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
            //   console.log(response.data);
        
            const unsolvedDataSudoku = response.data.response['unsolved-sudoku'];
        
            setUnsolvedDataSudoku(unsolvedDataSudoku);
        
          } catch (error) {
              console.error(error);
          }}
          sudokuApi();
      }, [])

}

function Grid({ unsolvedDataSudoku: arr }) {
  if (arr.length === 0) {
    return null;
  }
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center w-75'>
        <div className='grid-container' style={styles}>
          {/* map over the boxes array and create a new div element with the class name grid-item and text value of array value and append it to the grid-container element */}
          {boxes.map((box, index) => {
            const x = Math.floor(index / 3) * 3;
            
            // use the percent operator to calculate a y for the second index.
            const y = (index % 3) * 3;
            

            return (
              <Box
                key={index}
                letter={box}
                numbers={[
                  arr[x][y], arr[x][y + 1], arr[x][y + 2],
                  arr[x + 1][y], arr[x + 1][y + 1], arr[x + 1][y + 2],
                  arr[x + 2][y], arr[x + 2][y + 1], arr[x + 2][y + 2],
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
