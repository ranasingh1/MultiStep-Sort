// TextInput.js
import React from 'react';

const TextInput = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-full p-2 border mb-4 rounded-md focus:outline-none"
    value={value}
    onChange={onChange}
  />
);

export default TextInput;
