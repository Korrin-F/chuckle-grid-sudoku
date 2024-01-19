import Box from "./Box";

const styles = {
  width: "500px",
  height: "500px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
};

const boxes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

function Grid({ unsolvedDataSudoku: arr }) {
  if (arr.length === 0) {
    return null;
  }
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center w-75'>
        <div className='grid-container' style={styles}>
          {/* map over the boxes array and create a new div element with the class name grid-item and text value of array value and append it to the grid-container element */}
          {boxes.map((box, index) => {
            const x = Math.floor(index / 3) * 3;
            
            // use the percent operator to calculate a y for the second index.
            const y = (index % 3) * 3;
            

            return (
              <Box
                key={index}
                letter={box}
                numbers={[
                  arr[x][y], arr[x][y + 1], arr[x][y + 2],
                  arr[x + 1][y], arr[x + 1][y + 1], arr[x + 1][y + 2],
                  arr[x + 2][y], arr[x + 2][y + 1], arr[x + 2][y + 2],
                ]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Grid;
