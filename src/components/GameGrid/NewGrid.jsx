
import { useState, useEffect } from 'react';
import Cell from "./Cell";
import Row from 'react-bootstrap/Row';


const styles = {

  global: {
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",
    gridTemplateRows: "repeat(9, 1fr)",
  },
  xSmall: {
    width: 300,
    height: 300,
  },
  small: {
    width: 500,
    height: 500,

  }
};
// 300 xs   font 1 
// 500 - lg
function NewGrid(props) {
  const { sudokuBoard, updateSudokuBoard, solution, updateSolution } = props;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("Sudoku Board Updated:", sudokuBoard);
    console.log("Solution:", solution);
    // ... rest of your code
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [sudokuBoard, solution]);

  if (sudokuBoard.length === 0) {
    return null;
  }
  const fontSize = screenWidth >= 576 ? "1.5rem" : "1rem";
  const gridStyles = {
    ...styles.global,
    ...(screenWidth >= 576 ? styles.small : styles.xSmall)
  }

  return (
    <Row className='justify-content-center align-items-center text-center my-5' id='grid-row'>
      <div className='grid-container p-0' style={gridStyles}>
        {sudokuBoard.map((row, rowIndex) => (
          row.map((value, colIndex) => (
            <Cell
              key={`${rowIndex}${colIndex}`}
              id={`${rowIndex}${colIndex}`}
              value={value}
              fontSize={fontSize}
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

