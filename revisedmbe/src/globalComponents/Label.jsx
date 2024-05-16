import React, { useState } from "react";
import toolTip from "../assests/images/icons/tool.png";

const Label = ({ text, toolTipText, toolTipSrc, required }) => {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  return (
    <>
      <div className="flex gap-2 items-center w-[70%]">
        <label className="relative text-[#141F58] text-base">
          {text}{" "}
          <span className=" top-0 left-50 text-red-500">
            {required}
          </span>
        </label>
        {toolTipText && (
          <div className="relative">
            <img
              src={toolTip}
              alt=""
              className=" w-[20px] cursor-pointer"
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
                <p>{toolTipText}
                {toolTipSrc && (
                    <a
                      href={toolTipSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" underline"
                    >
                      click here.
                    </a>
                  )}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Label;
