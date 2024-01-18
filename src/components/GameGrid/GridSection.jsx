import Grid from "./Grid"

function GridSection() {
    return (
        <section
            className='container-fluid d-flex flex-grow-1'
            id='grid-section'
        >
            <div 
                className='row justify-content-center text-center my-3 m-auto'
                id='grid-row'
            >
                <Grid />
            </div>
        </section>
    )
}

export default GridSection; 