import { useState } from "react";
import { changeReferencesPage } from "../../features/displayPage/displayPageSlice";
import { useDispatch } from "react-redux";

import FormFooter from "../../globalComponents/FormFooter";
import InputField from "../../globalComponents/InputField";
import Label from "../../globalComponents/Label";
import SectionTitle from "../../globalComponents/SectionTitle";

export default function BankRefInfo() {
  const dispatch = useDispatch();
  const [refbankname, setrefbankname] = useState("");

  const handlebankname = (event) => {
    setrefbankname(event.target.value);
  };

  const handleNext = () => {
    dispatch(changeReferencesPage({ formName: "Opt Ins", step: "next" }));
  };

  const handleReturn = () => {
    dispatch(
      changeReferencesPage({ formName: "References Info 1", step: "prev" })
    );
  };

  return (
    <div className="main bg-white flex flex-col justify-between h-full gap-4">
      <div className="flex flex-col p-8 gap-6" style={{ paddingTop: 0 }}>
        <div className="w-full h-[0px] border border-neutral-300"></div>

        <SectionTitle title={`BANK REFERENCE INFORMATION`} />
        <div className="flex flex-col gap-10">
          <div className="w-full flex-col justify-start items-start inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-1 flex">
              <div className="self-stretch justify-start items-center gap-px inline-flex">
                <Label text="Name of Banking Institution" />
              </div>

              <InputField
                onChange={handlebankname}
                id="Ref_Bank_Name"
                type="text"
                placeholder="Enter Name"
                name="Ref_Bank_Name"
              />
            </div>
          </div>
        </div>
      </div>
      <FormFooter
        onNextClick={handleNext}
        onReturnClick={handleReturn}
        actionReturn={changeReferencesPage({
          formName: "References Info 1",
          step: "prev",
        })}
        actionNext={changeReferencesPage({ formName: "Opt Ins", step: "next" })}
      />
    </div>
  );
}
