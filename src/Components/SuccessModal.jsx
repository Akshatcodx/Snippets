import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const SuccessModal = ({ showSuccessModal, toggleModal }) => {
  return (
    <div>
      <Modal show={showSuccessModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success Logo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A<p>Product Added Successfully</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            continue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SuccessModal;
