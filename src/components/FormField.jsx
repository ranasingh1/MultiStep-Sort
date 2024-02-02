import React, { useEffect, useState } from "react";

const FormField = ({
  name,
  label,
  placeholder,
  onChangeYourInfo,
  value = "",
  isEmpty,
  validationMessage = "",
}) => {
  const [borderColor, setBorderColor] = useState("border-[#d6d9e6]");
  const [displayMessage, setDisplayMessage] = useState("hidden");

  useEffect(() => {
    if (isEmpty[name] || (validationMessage && value.trim() === "")) {
      setBorderColor("border-[#ed3548]");
      setDisplayMessage("block");
    } else {
      setBorderColor("border-[#d6d9e6]");
      setDisplayMessage("hidden");
    }
  }, [isEmpty, name, value]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <label>{label}</label>
        <p className={`font-medium text-[14px] text-[#ed3548] ${displayMessage}`}>
          {isEmpty[name] && `Enter Valid ${label}`}
        </p>
      </div>
      <div>
        <input
          onChange={onChangeYourInfo}
          name={name}
          className={`font-medium w-full mt-1 p-2 pl-3 rounded-lg border ${borderColor} text-[#02295a] text-[15px] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd]`}
          type="text"
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  );
};

export default FormField;
