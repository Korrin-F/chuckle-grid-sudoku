
import { useEffect } from 'react';
import Cell from "./Cell";
import Row from 'react-bootstrap/Row';


const styles = {
  grid: {
    width: "500px",
    height: "500px",
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",
    gridTemplateRows: "repeat(9, 1fr)",
    }
};




function NewGrid(props) {
  const { sudokuBoard, updateSudokuBoard, solution } = props;


  useEffect(() => {
    console.log("Sudoku Board Updated:", sudokuBoard);
    console.log("Solution:", solution);
    // ... rest of your code
    const tempBoard = [
      [1,3,0,0,5,7,6,8,0],
      [0,0,0,0,6,0,4,5,3],
      [0,0,0,8,0,4,0,0,7],
      [0,1,3,0,7,0,8,9,0],
      [4,0,5,0,8,9,3,0,2],
      [8,0,6,0,2,3,5,0,4],
      [0,5,0,0,0,0,9,6,1],
      [9,0,7,0,0,6,2,0,8],
      [0,8,0,3,9,0,7,0,5]
    ];
    updateSudokuBoard(tempBoard);
  }, []);
 
 //[sudokuBoard, solution] ^^replace after testing with tempBoard^^
 
  if (sudokuBoard.length === 0) {
    return null;
  }


  return (
    <Row className='justify-content-center align-items-center text-center my-5' id='grid-row'>
      <div className='grid-container p-0' style={styles.grid}>
        {sudokuBoard.map((row, rowIndex) => (
          row.map((value, colIndex) => (
            <Cell
              key={`${rowIndex}${colIndex}`}
              id={`${rowIndex}${colIndex}`}
              value={value}
              // updateCell={updateCell}
              sudokuBoard={sudokuBoard}
              updateSudokuBoard={updateSudokuBoard}
            />
          ))
        ))}
      </div>
    </Row>
  );
}

export default NewGrid;

