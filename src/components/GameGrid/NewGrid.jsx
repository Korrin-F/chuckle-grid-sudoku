
import { useEffect } from 'react';
import Cell from "./Cell";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const styles = {
  grid: {
    width: "500px",
    height: "500px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
    }
};




function NewGrid(props) {
  const { sudokuBoard, updateSudokuBoard, solution } = props;

  // const updateCell = (id, value) => { //updates the sudokuBoard state with the new input value that the user enters into any cell
  //   const rowIndex = parseInt(id.charAt(0));
  //   const colIndex = parseInt(id.charAt(1));
    
  //   const newSudokuBoard = [...sudokuBoard];
  //   newSudokuBoard[rowIndex][colIndex] = parseInt(value);
  //   updateSudokuBoard(newSudokuBoard);
  // }

  useEffect(() => {
    console.log("Sudoku Board Updated:", sudokuBoard);
    console.log("Solution:", solution);
    // ... rest of your code
    const tempBoard = [[1,3,0,0,5,7,6,8,0],[0,0,0,0,6,0,4,5,3],[0,0,0,8,0,4,0,0,7],[0,1,3,0,7,0,8,9,0],[4,0,5,0,8,9,3,0,2],[8,0,6,0,2,3,5,0,4],[0,5,0,0,0,0,9,6,1],[9,0,7,0,0,6,2,0,8],[0,8,0,3,9,0,7,0,5]];
    updateSudokuBoard(tempBoard);
  }, []);
 
 //[sudokuBoard, solution]
 
  if (sudokuBoard.length === 0) {
    return null;
  }


  // const sudokuContainer = {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(9, 1fr)",
  //   gap: 1
  // }
  // const sudokuRow = {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(9, 1fr)"
  // }

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

