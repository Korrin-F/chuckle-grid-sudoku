import Cell from "./Cell";

const styles = {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr"
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Box(props) {
    const {letter} = props;
    return (
        <div 
            className='grid-item'
        >
            {/* {letter} */}
            <div 
                className='grid-container'
                style={styles}
            >
                {/* map over the numbers array and create a new div element with the class name grid-item and text value of array value and append it to the grid-container element */}
                {numbers.map((number, index) => (
                    <Cell
                        key={index}
                        id={letter+number}
                    />
                ))}
            </div>
        </div>
    )
}

export default Box;