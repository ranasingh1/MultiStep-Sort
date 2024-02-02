import React from "react";
import FormField from "./FormField";
import StepHead from "./StepHead";

const PaymentDetails = ({ onChangeYourInfo, yourInfo, isEmpty, isValidField }) => {
  const formFields = [
    {
      id: 4,
      name: "cardNumber",
      label: "Card Number",
      placeholder: "Enter your card number",
      validationMessage: "Please enter a valid card number",
    },
    {
      id: 5,
      name: "expiryDate",
      label: "Expiry Date",
      placeholder: "MM/YYYY",
      validationMessage: "Please enter a valid expiry date (MM/YYYY)",
    },
    {
      id: 6,
      name: "cvv",
      label: "CVV",
      placeholder: "Enter CVV",
      validationMessage: "Please enter a valid CVV",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <StepHead title="Payment Details" desc="Please fill Payment Details" />

      <form className="flex flex-col space-y-6">
        {formFields.map((formField) => (
          <FormField
            onChangeYourInfo={onChangeYourInfo}
            key={formField.id}
            name={formField.name}
            label={formField.label}
            placeholder={formField.placeholder}
            value={yourInfo[formField.name]}
            isEmpty={isEmpty}
            validationMessage={formField.validationMessage}
          />
        ))}
      </form>
    </div>
  );
};

export default PaymentDetails;
