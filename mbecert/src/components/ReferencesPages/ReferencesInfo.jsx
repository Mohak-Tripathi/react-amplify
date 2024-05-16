import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useDispatch } from "react-redux";

import plusIcon from "../../assests/images/Plus.png";

import {
  changeReferencesPage,
  changeSideBar,
} from "../../features/displayPage/displayPageSlice";

import { handleCheckInput } from '../../helpers/inputFieldValidators';

import FormFooter from "../../globalComponents/FormFooter";
import SectionTitle from "../../globalComponents/SectionTitle";
import Label from "../../globalComponents/Label";
import Tooltip from "../../globalComponents/Tooltip";
import InputField from "../../globalComponents/InputField";

import "react-phone-input-2/lib/style.css"; // * phone input css

export default function ReferencesInfo() {
  const dispatch = useDispatch();

  const [referenceForm, setReferenceForm] = useState([{ email: '' }]);

  const [isFormValidate, setFormValidate] = useState({
    email: false,
  })

  const [refPhoneNumber, setrefphonenumber] = useState("");
  const [references, setReferences] = useState([
    {
      Ref_Comp_Name: "",
      Ref_Cont_FirstName: "",
      Ref_Cont_LastName: "",
      Ref_Cont_Number: "",
      Ref_Cont_Email: "",
      Ref_Product: "",
    },
  ]);

  const handleOnChange = (value) => {
    setrefphonenumber(value);
  };

  const handleReferenceChange = (index, field, value, fieldType) => {
    // setReferences((prevReferences) => {
    //   const newReferences = [...prevReferences];
    //   newReferences[index][field] = value;
    //   return newReferences;
    // });


    if (handleCheckInput({ target: { value: value } }, fieldType, referenceForm[index][field])) {
      // console.log("handleCheckInput - ", e.target.value);
      updateField(field, { target: { value: value } }, index);
      if (fieldType === "email") {
        setFormValidate({ ...isFormValidate, email: false })
      }
    } else {

      updateField(field, { target: { value: value } }, index);
      if (fieldType === "email") {
        setFormValidate({ ...isFormValidate, email: true })
        if (value.trim() === "") {
          setFormValidate({ ...isFormValidate, email: false })
        }
      }
    }

    function updateField(fieldName, e, index) {
      if (e.target.value !== "undefined") {
        // setReferenceForm({ ...referenceForm, [fieldName]: e.target.value });

        setReferences((prevReferences) => {
          const newReferences = [...prevReferences];
          newReferences[index][fieldName] = e.target.value;
          return newReferences;
        });
      }
    }
  };

  const handleDeleteReference = (index) => {
    setReferences((prevReferences) => {
      const newReferences = [...prevReferences];
      newReferences.splice(index, 1);
      return newReferences;
    });
  };


  //   function handleInputChange(e, fieldName, fieldType) { // ! use "i" if your form is array

  // }

  const handleAddReference = () => {
    setReferences((prevReferences) => [
      ...prevReferences,
      {
        Ref_Comp_Name: "",
        Ref_Cont_FirstName: "",
        Ref_Cont_LastName: "",
        Ref_Cont_Number: "",
        Ref_Cont_Email: "",
        Ref_Product: "",
      },
    ]);
  };

  const handleNext = () => {
    dispatch(
      changeReferencesPage({
        formName: "Bank Ref Info",
        step: "next",
      })
    );
  };

  const handleReturn = () => {
    dispatch(changeSideBar({ sideBarName: "Business Desc" }));
  };

  return (
    <div className="main bg-white flex flex-col gap-4">
      <div className="flex flex-col p-8 gap-6" style={{ paddingTop: 0 }}>
        <div className="w-full h-[0px] border border-neutral-300"></div>

        {references.map((reference, index) => (
          <div key={index} className="flex flex-col gap-10">
            {index !== 0 && (
              <div className="w-full h-[0px] border border-neutral-300"></div>
            )}
            <div className="flex justify-between">
              <SectionTitle title={`REFERENCE INFORMATION ${index + 1}`} />
              {index !== 0 && (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-[red] cursor-pointer"
                  height="1em"
                  width="1em"
                  onClick={() => handleDeleteReference(index)}
                >
                  <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
                </svg>
              )}
            </div>
            <div className="w-full flex-col justify-start items-start inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                <div className="self-stretch justify-start items-center gap-px flex">
                  <Label text="Reference Company Name" />
                  <Tooltip toolTipText="Provide four (4) of your current and highest customer references (firms you have done business for)" />
                </div>

                <InputField
                  onChange={(e) =>
                    handleReferenceChange(
                      index,
                      "Ref_Comp_Name",
                      e.target.value
                    )
                  }
                  id={`Ref_Comp_Name_${index}`}
                  type="text"
                  placeholder="Enter Company Name"
                  name={`Ref_Comp_Name_${index}`}
                  value={reference.Ref_Comp_Name}
                />
              </div>
            </div>
            <div className="flex justify-between items-center gap-6">
              <div className="flex flex-col gap-1 w-full">
                <Label text="Reference Contact First Name" />
                <InputField
                  onChange={(e) =>
                    handleReferenceChange(
                      index,
                      "Ref_Cont_FirstName",
                      e.target.value
                    )
                  }
                  className="w-[484px] h-12 pl-3 pr-2.5 py-3.5  justify-start items-start gap-2 "
                  id={`Ref_Cont_FirstName_${index}`}
                  type="text"
                  placeholder="Enter First Name"
                  name={`Ref_Cont_FirstName_${index}`}
                  value={reference.Ref_Cont_FirstName}
                />
              </div>
              <div className="flex flex-col gap-1 justify-start w-full">
                <Label text="Reference Contact Last Name" />
                <InputField
                  onChange={(e) =>
                    handleReferenceChange(
                      index,
                      "Ref_Cont_LastName",
                      e.target.value
                    )
                  }
                  className="w-[484px] h-12 pl-3 pr-2.5 py-3.5  justify-start items-start gap-2 "
                  id={`Ref_Cont_LastName_${index}`}
                  type="text"
                  placeholder="Enter Last Name"
                  name={`Ref_Cont_LastName_${index}`}
                  value={reference.Ref_Cont_LastName}
                />
              </div>
            </div>

            <div className="flex justify-between items-start gap-6">
              <div className="flex flex-col gap-1 w-full">
                <Label text="Phone Number" />
                <div className="relative">
                  <PhoneInput
                    country={"us"}
                    onlyCountries={["us"]}
                    countryCodeEditable={false}
                    disableDropdown
                    id={`Ref_Cont_Number_${index}`}
                    name={`Ref_Cont_Number_${index}`}
                    value={reference.Ref_Cont_Number}
                    onChange={handleOnChange}
                    inputStyle={{
                      borderRadius: "0",
                      width: "100%",
                      height: "2.8rem",
                      borderColor: "#E2E4E9",
                    }}
                  />
                </div>
              </div>
              <div className='flex flex-col w-full'>
                <div className="flex flex-col gap-1 w-full">
                  <Label text="Reference Contact Email" />
                  <InputField
                    onChange={(e) =>
                      handleReferenceChange(
                        index,
                        "Ref_Cont_Email",
                        e.target.value,
                        "email"
                      )
                    }
                    className="w-[484px] h-12 pl-3 pr-2.5 py-3.5 justify-start items-start gap-2"
                    id={`Ref_Cont_Email_${index}`}
                    type="Email"
                    placeholder="Johndoe@example.com"
                    name={`Ref_Cont_Email_${index}`}
                    value={reference.Ref_Cont_Email}
                  />
                </div>

                { // ! for email validation
                  isFormValidate.email &&
                  <div className='w-full flex items-center'>
                    <div className='w-[23%]'></div>
                    <div className='text-red-500 text-xs'>
                      Please enter valid email
                    </div>
                  </div>
                }
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                <div className="self-stretch pb-3 justify-start items-center gap-px inline-flex">
                  <Label text="Reference Product/ Service" />
                </div>

                <InputField
                  onChange={(e) =>
                    handleReferenceChange(index, "Ref_Product", e.target.value)
                  }
                  id={`Ref_Product_${index}`}
                  type="text"
                  placeholder="Enter Product/Service Name"
                  name={`Ref_Product_${index}`}
                  value={reference.Ref_Product}
                />
              </div>
            </div>
          </div>
        ))}
        {references.length < 4 && (
          <h5
            id="addMoreFacility"
            className="flex gap-1 text-sm text-[#0045AC] cursor-pointer"
            onClick={handleAddReference}
          >
            <img src={plusIcon} alt="" /> Add Reference
          </h5>
        )}
      </div>
      <FormFooter
        onNextClick={handleNext}
        onReturnClick={handleReturn}
        actionReturn={changeSideBar({ sideBarName: "Business Desc" })}
        prevText={`Previous: Business Description`}
        actionNext={changeReferencesPage({
          formName: "Bank Ref Info",
          step: "next",
        })}
      />
    </div>
  );
}
