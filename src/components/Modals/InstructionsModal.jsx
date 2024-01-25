import InstructionsText from './InstructionsText';
import SudokuInstructions from './InstructionsText';

const styles = {
    backgroundColor: "var(--teal)",
    borderBottom: "2px double var(--yellow)",
    fontFamily: "var(--fontFour)",
    body: {
        fontFamily: "var(--fontFour)",
        backgroundColor: "var(--teal)",
        // border: "1px solid var(--orange)",
    },
    closeButton: {
        color: "var(--pink)",
        fontWeight: "bold",
        fontSize: "1.5rem",
    }
}

function InstructionsModal(props) {
    const {closeModal} = props;
    return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content ">
                    <div className="modal-header text-center" style={styles}>
                        <h4 className="modal-title p-2 ps-3 pe-0 w-100" id="instrucationsModalLabel">Sudoku Instructions</h4>
                        <button type="button" className="close btn" onClick={closeModal} aria-label="Close">
                            <span style={styles.closeButton} aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-4" style={styles.body}>
                        <InstructionsText />
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default InstructionsModal;

