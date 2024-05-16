import React, { useState } from "react";

import toolTip from "../assests/images/icons/tool.png";

const Tooltip = ({ text, toolTipText, required }) => {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  return (
    <>
      <div>
        <label className="relative text-[#141F58]">
          {text}{" "}
          <span className="absolute top-0 left-50 text-red-500">
            {required}
          </span>
        </label>
        {toolTipText && (
          <div className="relative">
            <img
              src={toolTip}
              alt=""
              className="w-[20px] cursor-pointer"
              onMouseEnter={() => {
                setToolTipVisible(true);
              }}
              onMouseLeave={() => {
                setToolTipVisible(false);
              }}
            />
            {toolTipVisible && (
              <div
                className={`w-[250px] p-2 text-xs shadow absolute left-[8%] top-4 bg-[#BDE1F4] z-10`}
                onMouseEnter={() => setToolTipVisible(true)}
                onMouseLeave={() => setToolTipVisible(false)}
              >
                <p>{toolTipText}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Tooltip;
