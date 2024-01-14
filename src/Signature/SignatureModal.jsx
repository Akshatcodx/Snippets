import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import SignatureCanvas from "react-signature-canvas";

const SignatureModal = ({
  showSignatureModal,
  toggleSignatureModal,
  toggleSignaturePadModal,
  setSignature,
}) => {
  const [signatureText, setSignatureText] = useState("");
  const [selectedFont, setSelectedFont] = useState("font1");
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(false);
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file.name.match(/\.(png|jpeg|jpg)$/)) {
      setFile(file);
      setSignature(file);
      setFileError(false);
    } else {
      setFileError(true);
    }
  };
  return (
    <div>
      <Modal show={showSignatureModal} onHide={toggleSignatureModal}>
        <form encType="multipart/form-data">
          <Modal.Header closeButton>
            <Modal.Title>Add Your Signature</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Add your Signature"
                aria-label="Add your Signature"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setSignatureText(e.target.value);
                }}
              />
            </InputGroup>
            <div className="preview">
              <div className="section1">
                <div className="text">Preview</div>
                <div className="font">
                  <select
                    onChange={(e) => {
                      setSelectedFont(e.target.value);
                    }}
                  >
                    <option value="font1">Font 1</option>
                    <option value="font2">Font 2</option>
                    <option value="font3">Font 3</option>
                    <option value="font4">Font 4</option>
                  </select>
                </div>
              </div>
              <div className="section2">
                <h3 className={`${selectedFont}`}>{signatureText}</h3>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="addSignature">
              <Button variant="primary" onClick={toggleSignaturePadModal}>
                Add your Signature
              </Button>
            </div>
            <div className="upload btn">
              <label htmlFor="file" style={{ cursor: "pointer" }}>
                Upload signature
              </label>
              <input
                id="file"
                type="file"
                style={{ display: "none" }}
                onChange={handleFile}
              />
            </div>
            {fileError ? (
              <span className="error" style={{ textAlign: "center" }}>
                Invalid file type
              </span>
            ) : (
              <span style={{ textAlign: "center" }}>{file?.name}</span>
            )}
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default SignatureModal;
