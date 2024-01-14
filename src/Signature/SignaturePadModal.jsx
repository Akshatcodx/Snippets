import React, { useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import SignatureCanvas from "react-signature-canvas";

const SignaturePadModal = ({
  showSignaturePadModal,
  toggleSignaturePadModal,
  setSignature,
}) => {
  const sigCanvas = useRef(null);
  const clear = () => sigCanvas.current.clear();
  const save = () => {
    setSignature(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    toggleSignaturePadModal();
  };
  return (
    <>
      <Modal show={showSignaturePadModal} onHide={toggleSignaturePadModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignatureCanvas
            ref={sigCanvas}
            penColor="green"
            canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={clear}>
            Clear
          </Button>
          <Button variant="primary" onClick={save}>
            Save Sign
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignaturePadModal;
