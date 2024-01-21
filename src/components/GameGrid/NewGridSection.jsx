import NewGrid from "./NewGrid";


function NewGridSection(props) {
  const { sudokuBoard, updateSudokuBoard, solution } = props;


  return (
    <section className='container-fluid d-flex flex-grow-1' id='grid-section'>
      <div className='row justify-content-center text-center my-3 m-auto' id='grid-row'>
        <NewGrid  sudokuBoard={sudokuBoard} updateSudokuBoard={updateSudokuBoard}  solution={solution}/>
      </div>
    </section>
  );
}

export default NewGridSection;
