import NewGrid from "./NewGrid";


function NewGridSection(props) {
  const { sudokuBoard, updateSudokuBoard, solution } = props;


  return (

      <div className='row justify-content-center align-items-center text-center my-3 m-auto' id='grid-row'>
        <NewGrid  sudokuBoard={sudokuBoard} updateSudokuBoard={updateSudokuBoard}  solution={solution}/>
      </div>

  );
}

export default NewGridSection;
