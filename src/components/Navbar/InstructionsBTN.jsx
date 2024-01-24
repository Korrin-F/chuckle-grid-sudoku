import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InstructionsModal from '../Modals/InstructionsModal';
import InstructionsSound from '../ButtonSounds/InstructionsSound';

function InstructionsBTN(props) {
  const { style } = props;
  const [showModal, setShowModal] = useState(false);
  const [playSound, setPlaySound] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setPlaySound(true); // Trigger sound when modal is opened
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSoundEnd = () => {
    setPlaySound(false);
  };

  return (
    <>
      <Button style={style} onClick={openModal}>
        Instructions
      </Button>
      {showModal && <InstructionsModal closeModal={closeModal} />}
      {playSound && <InstructionsSound playSound={true} onSoundEnd={handleSoundEnd} />}
    </>
  );
}

export default InstructionsBTN;
