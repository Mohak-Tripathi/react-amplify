import React, { ChangeEvent } from 'react';
import { Dropdown } from 'primereact/dropdown';

// interface Option {
//     value: string;
//     label: string;
//     disabled?: boolean;
// }

// interface SelectWrapperProps {
//     name: string;
//     id: string;
//     label: string;
//     options: Option[];
//     onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
//     value: string;
// }

const SelectWrapper = ({ name, id, label, options, onChange, value }) => {
    return (
        <Dropdown value={value} onChange={onChange} options={options} optionLabel="value"
            placeholder={label} className="w-full outline-none px-2 font-degular" />
        // <div className="mb-4">
        //     <select
        //         name={name}
        //         id={id}
        //         aria-label={`Choose ${label.toLowerCase()}`}
        //         className="h-12 outline-none w-full"
        //         onChange={onChange}
        //         value={value}
        //     >
        //         {options.map((option) => (
        //             <option key={option.value} value={option.value} disabled={option.disabled} className="w-full p-4">
        //                 {option.label}
        //             </option>
        //         ))}
        //     </select>
        // </div>
    );
};

export default SelectWrapper;
