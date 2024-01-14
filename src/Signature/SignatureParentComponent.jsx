import React, { useState } from "react";
import SignatureModal from "./SignatureModal";
import SignaturePadModal from "./SignaturePadModal";

const SignatureParentComponent = () => {
  const [signature, setSignature] = useState(null);
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [showSignaturePadModal, setShowSignaturePadModal] = useState(false);
  console.log(signature);

  const toggleSignatureModal = () => {
    setShowSignatureModal(!showSignatureModal);
  };
  const toggleSignaturePadModal = () => {
    toggleSignatureModal();
    setShowSignaturePadModal(!showSignaturePadModal);
  };
  return (
    <>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        tenetur odit quibusdam ipsa molestiae fugit dolorem corporis
        necessitatibus non eius neque voluptate quam dolor, quia eveniet ullam
        est quis adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Perferendis tenetur odit quibusdam ipsa molestiae fugit dolorem
        corporis necessitatibus non eius neque voluptate quam dolor, quia
        eveniet ullam est quis adipisci! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Perferendis tenetur odit quibusdam ipsa molestiae
        fugit dolorem corporis necessitatibus non eius neque voluptate quam
        dolor, quia eveniet ullam est quis adipisci! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Perferendis tenetur odit quibusdam ipsa
        molestiae fugit dolorem corporis necessitatibus non eius neque voluptate
        quam dolor, quia eveniet ullam est quis adipisci! Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Perferendis tenetur odit quibusdam
        ipsa molestiae fugit dolorem corporis necessitatibus non eius neque
        voluptate quam dolor, quia eveniet ullam est quis adipisci! Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Perferendis tenetur odit
        quibusdam ipsa molestiae fugit dolorem corporis necessitatibus non eius
        neque voluptate quam dolor, quia eveniet ullam est quis adipisci! Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tenetur
        odit quibusdam ipsa molestiae fugit dolorem corporis necessitatibus non
        eius neque voluptate quam dolor, quia eveniet ullam est quis adipisci!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        tenetur odit quibusdam ipsa molestiae fugit dolorem corporis
        necessitatibus non eius neque voluptate quam dolor, quia eveniet ullam
        est quis adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Perferendis tenetur odit quibusdam ipsa molestiae fugit dolorem
        corporis necessitatibus non eius neque voluptate quam dolor, quia
        eveniet ullam est quis adipisci! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Perferendis tenetur odit quibusdam ipsa molestiae
        fugit dolorem corporis necessitatibus non eius neque voluptate quam
        dolor, quia eveniet ullam est quis adipisci! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Perferendis tenetur odit quibusdam ipsa
        molestiae fugit dolorem corporis necessitatibus non eius neque voluptate
        quam dolor, quia eveniet ullam est quis adipisci! Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Perferendis tenetur odit quibusdam
        ipsa molestiae fugit dolorem corporis necessitatibus non eius neque
        voluptate quam dolor, quia eveniet ullam est quis adipisci!
        <button className="btn" onClick={toggleSignatureModal}>
          Add Your Signature
        </button>
      </div>
      {showSignatureModal && (
        <SignatureModal
          showSignatureModal={showSignatureModal}
          toggleSignatureModal={toggleSignatureModal}
          toggleSignaturePadModal={toggleSignaturePadModal}
          setSignature={setSignature}
        />
      )}
      {showSignaturePadModal && (
        <SignaturePadModal
          showSignaturePadModal={showSignaturePadModal}
          toggleSignaturePadModal={toggleSignaturePadModal}
          setSignature={setSignature}
        />
      )}
    </>
  );
};

export default SignatureParentComponent;
