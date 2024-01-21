import React from 'react';

const style = {
  width: "100%",
  height: "100%",
  textAlign: "center",
  fontSize: "30px"
}

function Cell({ id, value, updateCell }) {
  const handleInputChange = (event) => {
    // Ensure that only one digit is entered
    const newInputValue = event.target.value.slice(0, 1);
    console.log(`Cell Input Change: ${newInputValue} for ${id}`);
    // Update the input value using state
    updateCell(id, newInputValue);
  };

  const handleInputBlur = (event) => {
    const newInputValue = event.target.value.slice(0, 1);
    updateCell(id, newInputValue);
  };

  return (
    <input
      className='grid-item'
      type='text'
      id={id}
      value={value !== 0 ? value : ''}
      maxLength='1'
      size='1'
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      style={style}
    />
  );
}

export default Cell;
