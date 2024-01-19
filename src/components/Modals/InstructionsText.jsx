import React from 'react';

function InstructionsText() {
    const instructions = `1. Your goal is to fill in each row, column, and 3x3 subgrid with the numbers 1 to 9.\n2. Avoid repeating numbers in rows, columns, and subgrids.\n3. Some numbers are there for you - lucky you!\n4. Enjoy your Sudoku adventure!`;

    return (
        <div>
            <h5>
                Welcome!
            </h5>
            <p>
                {/* splits text onto seperate lines */}
                {instructions.split('\n').map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </p>
            <h5>
                Need a clue?
            </h5>
            <p>
                Press 'Gamble' and reveal some of the board! If you're really lucky, you'll get extra points! But beware - you might lose points too!
            </p>
            <h5>
                Need motivation?
            </h5>
            <p>
                Press 'Motivation' and reveal a captivating burst of animated motivation and joy!
            </p>
        </div>
    );
}

export default InstructionsText;


