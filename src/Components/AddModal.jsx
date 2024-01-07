import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { SpinnerCircular } from "spinners-react";

const AddModal = ({ showAddModal, toggleModal, AddProduct, loader }) => {
  const [title, setTitle] = useState({ title: "" });
  console.log(title);
  return (
    <div>
      <Modal show={showAddModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Add Product Name"
              aria-label="Add Product Name"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setTitle({ ...title, title: e.target.value });
              }}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              AddProduct(title);
            }}
          >
            {loader ? <SpinnerCircular /> : "AddProduct"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModal;
