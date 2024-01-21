
import { useEffect } from 'react';
import Cell from "./Cell";


const styles = {
  grid: {
    width: "500px",
    height: "500px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
    }
};




function NewCombiGrid(props) {
  const { sudokuBoard, updateSudokuBoard, solution } = props;

  const updateCell = (id, value) => { //updates the sudokuBoard state with the new input value that the user enters into any cell
    const rowIndex = parseInt(id.charAt(0));
    const colIndex = parseInt(id.charAt(1));
    
    const newSudokuBoard = [...sudokuBoard];
    newSudokuBoard[rowIndex][colIndex] = parseInt(value);
    updateSudokuBoard(newSudokuBoard);
  }

  useEffect(() => {
    console.log("Sudoku Board Updated:", sudokuBoard);
    console.log("Solution:", solution);
    // ... rest of your code
  }, [sudokuBoard, solution]);
 
 
 
  if (sudokuBoard.length === 0) {
    return null;
  }



  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-75'>
      <div className='grid-container' style={styles.grid}>
        {sudokuBoard.map((row, rowIndex) => (
          row.map((value, colIndex) => (
            <Cell
              key={`${rowIndex}${colIndex}`}//{`${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`}
              id={`${rowIndex}${colIndex}`}
              value={value}
              updateCell={updateCell}
            />
          ))
        ))}
      </div>
    </div>
  );
}

export default NewCombiGrid;

