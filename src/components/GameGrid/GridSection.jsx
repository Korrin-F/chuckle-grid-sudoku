import Grid from "./Grid";
import NewGrid from "./NewGrid";

function GridSection(props) {


    return (
        <section
            className='container-fluid d-flex flex-grow-1'
            id='grid-section'
        >
            <div 
                className='row justify-content-center text-center my-3 m-auto'
                id='grid-row'
            >
                <Grid unsolvedDataSudoku = {unsolvedDataSudoku}/>
            </div>
        </section>
    )
}

export default GridSection; 