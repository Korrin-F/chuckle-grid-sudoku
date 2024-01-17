import Grid from "./Grid"

function GridSection() {
    return (
        <section
            className='container-fluid'
            id='grid-section'
        >
            <div 
                className='row justify-content-center text-center my-3'
                id='grid-row'
            >
                <Grid />
            </div>
        </section>
    )
}

export default GridSection; 