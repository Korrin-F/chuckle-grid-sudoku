import React from 'react';

const style = {
  display: 'block',
  fontSize: '1.5rem',
  lineHeight: 'auto',
  border: "1px solid lightgrey",
  borderRadius: 0 
}

function Cell(props) {
  const { id, value,sudokuBoard, updateSudokuBoard } = props;

  const handleInputChange = (event) => {
    const newInputValue = event.target.value.slice(0, 1);
    console.log(`Cell Input Change: ${newInputValue} for ${id}`);
    updateCell(id, newInputValue);
  };

  const updateCell = (id, value) => { //updates the sudokuBoard state with the new input value that the user enters into any cell
    const rowIndex = parseInt(id.charAt(0)); // the first number of the id is the row index
    const colIndex = parseInt(id.charAt(1)); // the second number of the id is the column index
    
    const newSudokuBoard = [...sudokuBoard]; // make a copy of the board
    newSudokuBoard[rowIndex][colIndex] = parseInt(value); // update the value of the cell in the copied board
    updateSudokuBoard(newSudokuBoard); // update the state of the board with the new board
  }


  return (
    <input
      className='grid-item text-center form-control '
      type='text'
      id={id}
      value={value !== 0 ? value : ''}
      maxLength='1'
      size='1'
      onChange={handleInputChange}
      style={style}
    />
  );
}

export default Cell;
