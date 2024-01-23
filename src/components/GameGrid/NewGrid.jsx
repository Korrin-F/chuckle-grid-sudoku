
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
  const { sudokuBoard, updateSudokuBoard, solution, updateSolution } = props;


  useEffect(() => {
    console.log("Sudoku Board Updated:", sudokuBoard);
    console.log("Solution:", solution);
    // ... rest of your code

  }, [sudokuBoard, solution]);
 

 
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

