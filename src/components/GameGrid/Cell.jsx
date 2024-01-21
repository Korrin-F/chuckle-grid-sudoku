import React, { useState } from 'react';
import './Cell.css';

const style = {
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: "30px"
}


function Cell(props) {
    const {id, value, data, updateCell} = props;
    const [inputValue, setInputValue] = useState(value);
    const handleInputChange = (event) => {
        // Ensure that only one digit is entered
    const newInputValue = event.target.value.slice(0, 1);
    // Update the input value using state
    setInputValue(newInputValue);
    };
    const handleInputBlur = () => {
        // Notify the parent component to update the sudokuBoard state
        updateCell(id, inputValue);
    };

    return (
        <input
            className='grid-item'
            type='text'
            id={id}
            data-sol={data}
            value={inputValue || ""}
            maxLength='1'
            size='1'
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            style={style}
        />
    )
}

export default Cell;