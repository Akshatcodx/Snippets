import React from "react";
import FileSubmit from "./Components/FileSubmit";
import Password from "./Components/Password";
import AddModal from "./Components/AddModal";
import ParentComponent from "./Components/ParentComponent";
import { ToastContainer } from "react-toastify";
import { SpinnerCircular } from "spinners-react";
import PlusLayout from "./Components/PlusLayout";
import Objects from "./Components/Objects";
import Objects2 from "./Components/Objects2";
import SignatureModal from "./Signature/SignatureModal";
import SignatureParentComponent from "./Signature/SignatureParentComponent";

const App = () => {
  let obj1 = {
    name: "akshat",
    roll: 23,
    address: {
      city: "mohali",
    },
  };
  let obj2 = JSON.parse(JSON.stringify(obj2));
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SignatureParentComponent />
    </div>
  );
};

export default App;
