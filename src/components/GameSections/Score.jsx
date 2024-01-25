import { useState } from 'react';
import Row from 'react-bootstrap/Row';

// SCORING POTENTIALLY
// - 405 points to start (81 squares * 5 points)
// - subtract 5 points from every square already given or given through gamble button (more score will be shown for medium and hard)
// - at the end give every correct square 10 points (need to make sure that the cells store a bit of data saying if they were given)
const styles = {
    width: "max-content"
}

function Score(props) {
    // refresh score every time the gamble button in pressed 
   
    const { score } = props;
    return (
        // <Row className="justify-content-end">
            <h2 style={styles} className="text-right">Score: <span>{score}</span></h2>
        // </Row>
        
    )
}
export default Score;