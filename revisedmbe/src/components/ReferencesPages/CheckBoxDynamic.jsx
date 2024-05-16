import React from "react";

import Tooltip from "../../globalComponents/Tooltip";

export default function CheckBoxDynamic({
  labelText,
  toolTipText,
  checked,
  id,
  htmlfor,
  onChange,
}) {
  const handleCheckboxChange = () => {
    onChange && onChange(!checked);
  };

  return (
    <div className="flex items-center text-blue-950 text-lg font-normal font-'Degular Demo' leading-[22px]">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="h-[16px] w-[18px] border-2 rounded-md border-r-[#E4EAF9] mr-2"
        id={id}
      />
      <label htmlFor={htmlfor} className="mr-0 text-base">
        {labelText}
      </label>
      <Tooltip toolTipText={toolTipText} />
    </div>
  );
}
