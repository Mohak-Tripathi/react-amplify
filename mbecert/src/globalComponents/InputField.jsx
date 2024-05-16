import React from "react";
import { ChangeEvent } from "react";

// interface InputWrapperProps {
//   name: string;
//   type: string;
//   placeholder: string;
//   disabled: boolean;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   readonly: boolean;
//   value: string;
// }

const InputField = ({
  name,
  type,
  placeholder,
  readonly,
  disabled,
  onChange,
  value,
}) => {
  return (
    <>
      <input
        className="appearance-none border  border-[#E2E4E9] shadow w-full px-4 text-sm text-slate-500 h-[2.8rem] leading-tight focus:outline-none"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
    </>
  );
};
export default InputField;
