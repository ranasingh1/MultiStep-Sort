import React, { useState } from 'react'
import StepHead from './StepHead'
import FormField from './FormField'

const Address = ({ onChangeYourInfo, yourInfo, isEmpty}) => {
    const [formField, setFormField] = useState([{
        id: 4,
        name: "line1",
        label: "Address Line 1",
        placeholder: "line1",
      },
      {
        id: 5,
        name: "line2",
        label: "Address Line 2",
        placeholder: "line2",
      },
      {
        id: 6,
        name: "city",
        label: "City",
        placeholder: "city",
      },
      {
        id:7 ,
        name: "state",
        label: "State",
        placeholder: "Delhi",
      },
    {
        id:8,
        name: "zip",
        label: "Pincode",
        placeholder: "000",
       
    }
    ]
      )
  return (
    <div>
        <StepHead
          title="Address"
          desc="Please fill your address."
        />
        <form>
        <div className="flex flex-col space-y-6 text-[14px]">

     {formField.map((formField)=>(
          <FormField 
          onChangeYourInfo={onChangeYourInfo}
          key={formField.id}
          name={formField.name}
          label={formField.label}
          placeholder={formField.placeholder}
          value={yourInfo[formField.name]}
          isEmpty={isEmpty}
          />
     ))}      
     </div>
     </form>  
    </div>
  )
}

export default Address