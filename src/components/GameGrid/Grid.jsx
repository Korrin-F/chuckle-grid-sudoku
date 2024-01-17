import Box from "./Box";

const styles = {
    width: "500px",
    height: "500px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr"
}

const boxes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

function Grid() {
    return (
        <>
            <div 
                className='d-flex flex-column justify-content-center align-items-center w-75'
            >
                <div
                    className='grid-container'
                    style={styles}
                >
                    {/* map over the boxes array and create a new div element with the class name grid-item and text value of array value and append it to the grid-container element */}
                    {boxes.map((box, index) => (
                        <Box
                            key={index}
                            letter={box}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Grid;