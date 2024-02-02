import React, { useEffect, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Step from "./Step";
import { SIDEBAR_IMG } from "../constants";
import Address from "./Address";
import PaymentDetails from "./PaymentDetails";
import Result from "./Result";
import { isValidField } from "../constants/helper";
import { Link } from "react-router-dom";

const Form = () => {
  ///STATES///////////
  const [stepNumber, setStepNumber] = useState(() => 1);
  const [goBackVisible, setGoBackVisible] = useState("invisible");
  const [steps, setSteps] = useState([
    { id: 1, title: "PERSONAL DETAILS", active: true },
    { id: 2, title: "ADDRESS", active: false },
    { id: 3, title: "PAYMENT DETAILS", active: false },
    { id: 4, title: "RESULT", active: false },
  ]);

  const [yourDetails, setYourDetails] = useState({
    name: "",
    email: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isEmpty, setIsEmpty] = useState(false);

  const [displayResult, setDisplayResult] = useState(false);

  ///USE EFFECTS

  useEffect(() => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepNumber) {
          return { ...step, active: true };
        } else {
          return { ...step, active: false };
        }
      });
      return updatedSteps;
    });
    if (stepNumber > 1) {
      setGoBackVisible("visible");
    } else {
      setGoBackVisible("invisible");
    }
  }, [stepNumber, yourDetails, displayResult]);

  ////Functions
  const validateFields = () => {
    let areFieldsValid = true;

    if (stepNumber === 1) {
      const requiredFields = ["name", "email", "phone"];
      requiredFields.forEach((field) => {
        if (
          yourDetails[field].trim() === "" ||
          !isValidField(field, yourDetails[field])
        ) {
          areFieldsValid = false;
          setIsEmpty((prevIsEmpty) => ({ ...prevIsEmpty, [field]: true }));
        } else {
          setIsEmpty((prevIsEmpty) => ({ ...prevIsEmpty, [field]: false }));
        }
      });
    } else if (stepNumber === 2) {
      const requiredFields = ["line1", "line2", "city", "state", "zip"];
      requiredFields.forEach((field) => {
        if (yourDetails[field].trim() === "") {
          areFieldsValid = false;
          setIsEmpty((prevIsEmpty) => ({ ...prevIsEmpty, [field]: true }));
        } else {
          setIsEmpty((prevIsEmpty) => ({ ...prevIsEmpty, [field]: false }));
        }
      });
    } else if (stepNumber === 3) {
      const requiredFields = ["cardNumber", "expiryDate", "cvv"];
      requiredFields.forEach((field) => {
        if (
          yourDetails[field].trim() === "" ||
          !isValidField(field, yourDetails[field])
        ) {
          areFieldsValid = false;
          setIsEmpty((prevIsEmpty) => ({ ...prevIsEmpty, [field]: true }));
        } else {
          setIsEmpty((prevIsEmpty) => ({ ...prevIsEmpty, [field]: false }));
        }
      });
    }

    return areFieldsValid;
  };

  const nextStep = () => {
    const fieldsAreValid = validateFields();

    if (fieldsAreValid) {
      setStepNumber((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1);
  };

  const changeYourInfo = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setYourDetails((prevInfo) => {
      return { ...prevInfo, [fieldName]: fieldValue };
    });

    if (fieldValue.trim() === "") {
      setIsEmpty((prevIsEmpty) => ({ ...prevIsEmpty, [fieldName]: true }));
    } else {
      setIsEmpty((prevIsEmpty) => ({ ...prevIsEmpty, [fieldName]: false }));
    }
  };

  return (
    <div className="container">
      <div className="bg-[#d6d9e6] md:bg-white rounded-xl md:p-3 md:flex justify-center">
        <div className="relative">
          <img
            className="hidden md:block h-full"
            src={SIDEBAR_IMG}
            alt="sidebar"
          />
          <img
            className=" block md:hidden w-full"
            src={SIDEBAR_IMG}
            alt="topbar"
          />
          {/* STEP*/}
          <div className="flex justify-center mt-8 absolute inset-0 space-x-10 md:space-x-0 md:block md:mt-0 md:pl-6 md:pt-8 md:space-y-7">
            {steps.map((step) => (
              <Step
                key={step.id}
                number={step.id}
                title={step.title}
                active={step.active}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between absolute top-40  w-96 md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 shadow-lg bg-white md:px-8 md:py-5 md:mx-28 md:w-100 md:my-2">
          {(displayResult && (
            <>
              <Result />
            </>
          )) || (
              <>
                {/* PERSONAL DETAILS **/}
                <div>
                  {(stepNumber === 1 && (
                    <PersonalDetails
                      onChangeYourInfo={changeYourInfo}
                      yourInfo={yourDetails}
                      currentStep={stepNumber}
                      isEmpty={isEmpty}
                    />
                  )) ||

                    (stepNumber === 2 && (
                      <Address
                        onChangeYourInfo={changeYourInfo}
                        yourInfo={yourDetails}
                        currentStep={stepNumber}
                        isEmpty={isEmpty}
                      />
                    )) ||
                    (stepNumber === 3 && (
                      <PaymentDetails
                        onChangeYourInfo={changeYourInfo}
                        yourInfo={yourDetails}
                        isEmpty={isEmpty}
                      />
                    )) ||
                    (stepNumber === 4 && <Result />)}
                </div>
                <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full bg-white p-5  md:p-0 md:static items-center w-[700px]]">
                  <div
                    onClick={prevStep}
                    className={`font-medium text-[#9699ab] select-none cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
                  >
                    Go back
                  </div>
                  {stepNumber === 4 ? (
                   <Link to ="/page/product"> <div
                      className="font-medium bg-[#473dff] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                    >
                      Product 
                    </div>
                    </Link>
                  ) : (
                    <div
                      onClick={nextStep}
                      className="font-medium bg-[#02295a] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                    >
                      Next Step
                    </div>
                  )}
                </div>
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Form;
