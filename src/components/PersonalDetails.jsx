// PersonalDetails Component
import React from "react";
import FormField from "./FormField";
import StepHead from "./StepHead";

const PersonalDetails = ({ yourInfo, onChangeYourInfo, isEmpty, isValidField }) => {
  const formFields = [
    {
      id: 1,
      name: "name",
      label: "Name",
      placeholder: "e.g John Doe",
    },
    {
      id: 2,
      name: "email",
      label: "Email Address",
      placeholder: "e.g john@gmail.com",
      validationMessage: "Please enter a valid email address",
    },
    {
      id: 3,
      name: "phone",
      label: "Phone Number",
      placeholder: "e.g +1 234 567 890",
    },
  ];

  return (
    <div>
      <StepHead
        title="Personal Info"
        desc="Please provide your name, email address, and phone number."
      />
      <form>
        <div className="flex flex-col space-y-6 text-[14px]">
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
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
