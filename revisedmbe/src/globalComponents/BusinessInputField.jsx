import React, { useState } from 'react'

const BusinessInputField = ({ id, type, placeholder, readOnly, onChange, valueField }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (onChange) {
      onChange(value)
    }
  }

  return (
    <>
      <input
        onChange={handleInputChange}
        // className="appearance-none border border-zinc-200 shadow w-full py-3 px-4 text-sm mt-0 text-slate-500 h-[3.3rem] leading-tight focus:outline-none"
        className="appearance-none border border-zinc-200 shadow w-full py-3 px-4 text-sm mt-0 text-slate-500 h-[3.3rem] leading-tight focus:outline-none font-degular"

        id={id}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        value={valueField}
      />
    </>
  )
}

export default BusinessInputField