import InstructionsModal from "../Modals/InstructionsModal";
import { useState } from 'react';

function InstructionsBTN() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <button type="button" className="btn btn-primary"
            onClick={openModal} >
                Instructions
            </button>
            {showModal && <InstructionsModal closeModal={closeModal} />}
        </>
        
    )
}

export default InstructionsBTN;

// data-toggle="modal" data-target="#exampleModal"