import React, { useState } from "react";
import AddModal from "./AddModal";
import { addNewProduct } from "../Api/APIFunctions";
import SuccessModal from "./SuccessModal";
import axios from "axios";

const ParentComponent = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loader, setLoader] = useState(false);
  //   this is for add modal
  const toggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };
  // this is for success modal
  const toggleSuccessModal = () => {
    setShowSuccessModal(!showSuccessModal);
  };
  const AddProduct = (title) => {
    // addNewProduct(title)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
    setLoader(true);
    axios
      .post("https://dummyjson.com/products/add", title)
      .then((res) => {
        setLoader(false);
        // why i have added add and not toggle succes modal
        toggleAddModal();
      })
      .catch((err) => {
        setLoader(false);
        toastMessage("Invalid data entered");
      });
  };
  return (
    <div>
      <div className="registerPage">
        <div className="registerContainer">
          <h1>Register</h1>
          <div className="registerForm">
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" />
            <label htmlFor="email">email</label>
            <input type="email" id="email" />
            <button className="btn" onClick={toggleAddModal}>
              Add Product
            </button>
          </div>
        </div>
      </div>
      {showAddModal ? (
        <AddModal
          showAddModal={showAddModal}
          toggleModal={toggleAddModal}
          AddProduct={AddProduct}
          loader={loader}
        />
      ) : (
        <SuccessModal
          showSuccessModal={showSuccessModal}
          toggleModal={toggleSuccessModal}
        />
      )}
    </div>
  );
};

export default ParentComponent;
