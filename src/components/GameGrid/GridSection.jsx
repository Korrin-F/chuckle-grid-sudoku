import Grid from "./Grid";

function GridSection(props) {

    return (
        <section
            className='container-fluid'
            id='grid-section'
        >
            <div 
                className='row justify-content-center text-center my-3'
                id='grid-row'
            >
                <Grid unsolvedDataSudoku = {props.unsolvedDataSudoku}/>
            </div>
        </section>
    )
}

export default GridSection; 