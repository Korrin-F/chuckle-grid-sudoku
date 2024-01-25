import { useState } from 'react';
import Row from 'react-bootstrap/Row';


const styles = {
    width: "max-content",
    fontFamily: "var(--fontFour)"
}

function Score(props) { 
   
    const { score } = props;
    return (
            <h2 style={styles}>Score: <span>{score}</span></h2>  
    )
}
export default Score;