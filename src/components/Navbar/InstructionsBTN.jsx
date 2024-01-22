import InstructionsModal from "../Modals/InstructionsModal";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

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
            <Button primary
            className=""
            onClick={openModal} >
                Instructions
            </Button>
            {showModal && <InstructionsModal closeModal={closeModal} />}
        </>
        
    )
}

export default InstructionsBTN;

