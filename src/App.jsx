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
import Searchbar from "./Searchbar/Searchbar";
import SearchBarSelect from "./Searchbar/SearchBarSelect";
import Form_1 from "./Form/Form_1";
import Func4 from "./Functionality4/Func4";
import StepWrapper from "./StepperExample1/StepWrapper";
import One from "./Files/One";

const App = () => {
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
      <One />{" "}
    </div>
  );
};

export default App;
