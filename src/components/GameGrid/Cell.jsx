import React, { useState } from 'react';

const style = {
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: "30px"
}


function Cell(props) {
    const {id, value} = props;
    const [inputValue, setInputValue] = useState(value);
    const handleInputChange = (event) => {
        // Ensure that only one digit is entered
    const newInputValue = event.target.value.slice(0, 1);
    // Update the input value using state
    setInputValue(newInputValue);
    };

    return (
        <input
            className='grid-item'
            type='text'
            placeholder={id}
            id={id}
            value={inputValue}
            maxLength='1'
            size='1'
            onChange={handleInputChange}
            style={style}
        />
    )
}

export default Cell;