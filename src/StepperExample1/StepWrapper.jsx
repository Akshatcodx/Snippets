import React, { useEffect, useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour.";
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { IoIosBulb } from "react-icons/io";

const StepWrapper = () => {
  const [data, setData] = useState([]); //state to set data comming from api
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [StepOne, StepTwo, StepThree, StepFour];
  const StepComponent = steps[currentStep];
  //   step for way 2
  useEffect(() => {
    //call api here set data in state
  }, []);
  // setup for way two
  const handleSubmit = () => {
    //send data to the api from heres
  };
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  let str = "this is a dummy text/N how are you";
  str = str.split("/N").join("<br>");
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: str }} />
      <div></div>
      {/* {<CommonStep data={data} />} */} //add all common things in this and
      map data there accordingly
      {StepComponent && <StepComponent />}
      <div className="buttons">
        {currentStep > 0 && <button onClick={handlePrevious}>Previous</button>}
        {currentStep === steps.length - 1 ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={handleNext}>next</button>
        )}
      </div>
      <div className="counter">
        <h1>{`${currentStep + 1}/${steps.length}`}</h1>
      </div>
      <div className="images" style={{ display: "flex", alignItems: "center" }}>
        {steps.map((curStep, idx) =>
          idx < currentStep ? (
            <FaLightbulb />
          ) : currentStep === idx ? (
            <div>
              <IoIosBulb />
            </div>
          ) : (
            <FaRegLightbulb />
          )
        )}
      </div>
    </div>
  );
};

export default StepWrapper;
