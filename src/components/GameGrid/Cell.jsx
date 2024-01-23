import React from 'react';

const style = {
  // aspectRatio: 1,
  // width: "4rem",
  // height: "4rem",
  // textAlign: "center",
  // fontSize: "2.5rem", //30px
  display: 'block',
  // width: '100%',
  // padding: '0.375rem 0.75rem',
  // fontSize: '2rem',
  // lineHeight: '1.5',
  // fontWeight: '400',
  border: "1px solid lightgrey",
  borderRadius: 0 
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
      className='grid-item text-center form-control '
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
