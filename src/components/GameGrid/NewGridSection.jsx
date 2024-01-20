import NewGrid from "./NewGrid";

function NewGridSection(props) {
  const { updateScore, sudokuBoard, updateSudokuBoard } = props;


  return (
    <section className='container-fluid d-flex flex-grow-1' id='grid-section'>
      <div className='row justify-content-center text-center my-3 m-auto' id='grid-row'>
        <NewGrid updateScore={updateScore} sudokuBoard={sudokuBoard} updateSudokuBoard={updateSudokuBoard}/>
      </div>
    </section>
  );
}

export default NewGridSection;
