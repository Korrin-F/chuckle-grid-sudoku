import React from 'react';

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

  const handleBorderStyle = (id) => {
    
    const thick = "inset  thick var(--orange";
    const medium = "inset medium  var(--orange)";
    const thin = "inset thin var(--light-grey)";
    // const thick = "thick solid var(--orange";
    // const medium = "medium  solid var(--orange)";
    // const thin = "thin solid var(--light-grey)";

    let top = thin;
    let right = thin;
    let bottom = thin;
    let left = thin;


    // these borders will make up the outer border of the whole grid
    //top = 00-08
    if(id.charAt(0) === "0"){
      top = thick;
    }
    //right = 08-80
    if(id.charAt(1) === "8"){
      right = thick;
    }
    //bottom = 80-88
    if(id.charAt(0) === "8"){
      bottom = thick;
    }
    //left = 00-80
    if(id.charAt(1) === "0"){
      left = thick;
    }

    // these borders will make up the inner borders of the 3x3 squares

    // first horizontal border (bottom of) = 20-28
    if(id.charAt(0) === "2"){
      bottom = medium;
    }
    // second horizontal border (bottom of) = 50-58
    if(id.charAt(0) === "5"){
      bottom = medium;
    }

    // first vertical border (right of) = 02-62
    if(id.charAt(1) === "2"){
      right = medium;
    }
    // second vertical border (right of) = 05-65
    if(id.charAt(1) === "5"){
      right = medium;
    }


    return [top, right, bottom, left]
  }

  const handleBackgroundColor = () => {
    return "white";
  }

  const createStyle = (id) => {
      const borderStyle = handleBorderStyle(id); // top, right, bottom, left
      const backgroundColor = handleBackgroundColor();
      return {
        display: 'block',
        fontSize: '1.5rem',
        lineHeight: 'auto',
        borderTop: borderStyle[0],
        borderRight: borderStyle[1],
        borderBottom: borderStyle[2],
        borderLeft: borderStyle[3],
        backgroundColor: backgroundColor,
        borderRadius: 0
      }
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
      style={createStyle(id)}
    />
  );
}

export default Cell;
