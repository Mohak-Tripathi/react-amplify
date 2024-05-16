import React, { useState } from 'react';
import InputField from '../globalComponents/InputField';


const Dropdown = ( {options }) => {
  
    return (
        <>
           <div className="relative">
        <div className="items-stretch shadow-2xl bg-white w-full flex flex-col p-2 absolute z-10 border">
          {options.map((option, index) => (
            <span
              key={index}
              className="text-gray-950 text-sm leading-5 tracking-normal items-stretch cursor-pointer bg-white justify-center mt-1 py-2 rounded-lg"
            >
              {option}
            </span>
          ))}
        </div>
      
    </div>
        </>
    )
}

export default Dropdown