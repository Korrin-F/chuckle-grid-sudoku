import ErrorModalText from './ErrorModalText';
import React from 'react';

const errorApiModal = (props) => {
    const {closeModal, isOpen} = props;

    if (!isOpen) {
      return null;
    }
    
  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="instrucationsModalLabel">API Error</h5>
                <button type="button" className="close btn" onClick={closeModal} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <ErrorModalText />
            </div>
        </div>
    </div>
</div>
  );
};


export default errorApiModal;
