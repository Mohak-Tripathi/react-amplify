import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import InputField from "../../globalComponents/InputField";
import Label from "../../globalComponents/Label";
import SectionTitle from "../../globalComponents/SectionTitle";

import plusIcon from '../../assests/images/Plus.png'

import { useDispatch, useSelector } from "react-redux";
import { changeFormToDisplay, changeSideBar } from "../../features/displayPage/displayPageSlice";


import FormFooter from "../../globalComponents/FormFooter";
import { handleCheckInput } from '../../helpers/inputFieldValidators';

export default function ContactInfo() {

    //Contact Information
    //PRIMARY OWNER DETAILS
    // First Name

    const [isFormValidate, setFormValidate] = useState({
        emailPrimaryOwner: false,
        emailAltPrimaryOwner: false,
    })

    const [prOwnFirName, setPrOwnFirName] = useState('')
    const prOwnFirNameChange = (e) => {
        setPrOwnFirName(e.target.value);
    }

    // Last Name
    const [prOwnLastName, setPrOwnLastName] = useState('')
    const prOwnLastNameChange = (e) => {
        setPrOwnLastName(e.target.value);
    }

    // Title
    const [prOwnTitle, setPrOwnTitle] = useState('')
    const prOwnTitleChange = (e) => {
        setPrOwnTitle(e.target.value);
    }

    // Primary Number
    const [prOwnPriNum, setPrOwnPriNum] = useState('')
    const prOwnPriNumChange = (value) => {
        setPrOwnPriNum(value);
    }

    // Alternate Phone Number
    const [prOwnAltNum, setPrOwnAltNum] = useState('')
    const prOwnAltNumChange = (value) => {
        setPrOwnAltNum(value);
    }

    // Email Address 
    const [prOwnEmail, setPrOwnEmail] = useState('')
    const prOwnEmailChange = (e, fieldType) => {
        if (handleCheckInput(e, fieldType)) {
            setFormValidate({ ...isFormValidate, emailPrimaryOwner: false })
            setPrOwnEmail(e.target.value);
        }
        else {
            setFormValidate({ ...isFormValidate, emailPrimaryOwner: true })
            setPrOwnEmail(e.target.value);
            if (e.target.value.trim() === "")
                setFormValidate({ ...isFormValidate, emailPrimaryOwner: false })
        }
    }

    // Alternate Email Address 
    const [prOwnAltEmail, setPrOwnAltEmail] = useState('')
    const prOwnAltEmailChange = (e, fieldType) => {
        if (handleCheckInput(e, fieldType)) {
            setFormValidate({ ...isFormValidate, emailAltPrimaryOwner: false })
            setPrOwnAltEmail(e.target.value);
        }
        else {
            setFormValidate({ ...isFormValidate, emailAltPrimaryOwner: true })
            setPrOwnAltEmail(e.target.value);
            if (e.target.value.trim() === "")
                setFormValidate({ ...isFormValidate, emailAltPrimaryOwner: false })
        }
    }

    // checkbox
    // Primary Number
    const [priOwnMobCheck, setPriOwnMobCheck] = useState(true);
    const [priOwnOthrCheck, setPriOwnOthrCheck] = useState(false);

    const priOwnMobCheckChange = () => {
        if (!priOwnMobCheck) {
            setPriOwnMobCheck(true);
            setPriOwnOthrCheck(false);
        }
    };

    const priOwnOthrCheckChange = () => {
        if (!priOwnOthrCheck) {
            setPriOwnMobCheck(false);
            setPriOwnOthrCheck(true);
        }
    };

    // Alternate Phone Number
    const [priOwnAltMobCheck, setPriOwnAltMobCheck] = useState(true);
    const [priOwnAltOthrCheck, setPriOwnAltOthrCheck] = useState(false);

    const priOwnAltMobCheckChange = () => {
        if (!priOwnAltMobCheck) {
            setPriOwnAltMobCheck(true);
            setPriOwnAltOthrCheck(false);
        }
    };

    const priOwnAltOthrCheckChange = () => {
        if (!priOwnAltOthrCheck) {
            setPriOwnAltMobCheck(false);
            setPriOwnAltOthrCheck(true);
        }
    };


    // ---------------------------------------------------------

    //PRIMARY CONTACT DETAILS

    const [priConInput, setPriConInput] = useState([{ PrOwFirName: '', PrOwLasName: '', PrOwTitle: '', PrOwPriNum: '', PrOwAltPhNum: '', PrOwEmAdd: '', PrOwAltEmAdd: '' }]);

    function priConInputChange(index, fiellName, value) {
        console.log(value)
        const updatedSessions = [...priConInput];
        updatedSessions[index][fiellName] = value;
        setPriConInput(updatedSessions);
    }

    const priConAddMore = () => {
        console.log('inside function')
        setPriConInput((prevSessions) => [
            ...prevSessions,
            { PrOwFirName: '', PrOwLasName: '', PrOwTitle: '', PrOwPriNum: '', PrOwAltPhNum: '', PrOwEmAdd: '', PrOwAltEmAdd: '' }
        ])
    }

    const priConDelete = (index) => {
        setPriConInput((prevSessions) => prevSessions.filter((_, i) => i !== index));
    }

    // checkbox
    // Primary Number
    const [priConMobCheck, setPriConMobCheck] = useState(true);
    const [priConOthrCheck, setPriConOthrCheck] = useState(false);

    const priConMobCheckChange = () => {
        if (!priConMobCheck) {
            setPriConMobCheck(true);
            setPriConOthrCheck(false);
        }
    };

    const priConOthrCheckChange = () => {
        if (!priConOthrCheck) {
            setPriConMobCheck(false);
            setPriConOthrCheck(true);
        }
    };

    // Alternate Phone Number
    const [priConAltMobCheck, setPriConAltMobCheck] = useState(true);
    const [priConAltOthrCheck, setPriConAltOthrCheck] = useState(false);

    const priConAltMobCheckChange = () => {
        if (!priConAltMobCheck) {
            setPriConAltMobCheck(true);
            setPriConAltOthrCheck(false);
        }
    };

    const priConAltOthrCheckChange = () => {
        if (!priConAltOthrCheck) {
            setPriConAltMobCheck(false);
            setPriConAltOthrCheck(true);
        }
    };

    // same as primary check
    const [samePrimaryCheck, setSamePrimaryCheck] = useState(false);

    // useEffect(()=> {
    //     if(samePrimaryCheck) {
    //         setPriConInput[0].PrOwFirName(prOwnFirName)
    //     } else {
    //         setPriConInput[0].PrOwFirName('')
    //     }
    // })

    const handleSameAsPhysicalChange = (e) => {
        setSamePrimaryCheck(e.target.checked);
    };

    // data for dropdown
    // physical address
    // city
    const phyAddCityData = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Indianapolis", "Columbus", "Fort Worth", "Charlotte", "Seattle", "Denver", "Washington, D.C."]

    // state
    const phyAddStateData = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland"]

    // location type
    const phyAddLocType = ["Business Park", "Strip Mall", "Virtual Office", "Home", "Office Building (Separate Office)"]

    // MAILING ADDRESS
    // city
    const mailAddCityData = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Indianapolis", "Columbus", "Fort Worth", "Charlotte", "Seattle", "Denver", "Washington, D.C."]

    // state
    const mailAddStateData = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland"]

    // location type
    const mailAddLocType = ["Business Park", "Strip Mall", "Virtual Office", "Home", "Office Building (Separate Office)"]

    // Location of Additional Facilities
    // city
    const addFaciCityData = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Indianapolis", "Columbus", "Fort Worth", "Charlotte", "Seattle", "Denver", "Washington, D.C."]

    // state
    const addFaciStateData = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland"]

    // location type
    const addFaciType = ["Office", "Distribution Facility", "Manufacturing Facility", "Warehouse"];

    const dispatch = useDispatch()

    async function handleClick() {
        console.log("INIT ContactInfo")
        await window.ZOHO.CREATOR.init();

        let config1 = {
            formName: "Application_Form",
            data: {
                data: {
                    Business_Description: "This is first test",
                    RMSDC_Alignment: "4464717000001520007",
                    Prev_Certificate_Number: 5500,
                    Does_Your_Business_Have_Any_Strategic_Partners_Or_Alliances_That_Will_Increase_Your_Business_Capac:
                        "Yes",
                    Is_the_business_a_certified_partner_representative_reseller1: "Yes",
                    Are_you_a_Corporate_Plus_Member: "No",
                    Name_of_the_Corporate_Sponsor: "NA",
                },
            },
        };
        const test = await window.ZOHO.CREATOR.API.addRecord(config1)
        console.log("ADDED UP", test)
    }

    const handleNext = () => {
        dispatch(changeSideBar({ sideBarName: "Business Info" }));
    }

    const handleReturn = () => {
        dispatch(changeFormToDisplay({ formName: "Gen Business Info", step: "prev" }));
    }

    return (
        <>
            <div className='px-8 pb-8 pt-4 bg-white w-full flex flex-col gap-4'>
                {/* form progress bar/tab start */}
                {/* <div className='flex justify-between items-center text-base text-[#0A0D14] gap-4'>
                    <div className='flex gap-1 items-center'>
                        <p className='bg-[#fff] text-black w-8 h-8 rounded-full border-2 border-[#D9D9D9] flex items-center justify-center'>1</p>
                        <p>General Business Information</p>
                    </div>
                    <div className=' border-[#D9D9D9] w-[50%] border'></div>
                    <div className='flex gap-1 items-center'>
                        <p className='bg-[#0045AC] text-white w-8 h-8 rounded-full  flex items-center justify-center'>2</p>
                        <p>Contact Information</p>
                    </div> */}
                {/* <div className=' border-[#D9D9D9] w-1/4 border'></div>
            <div className='flex gap-1 items-center'>
                <p className='bg-[#fff] text-black w-8 h-8 rounded-full border-2 border-[#D9D9D9] flex items-center justify-center'>3</p>
                <p>Upload Documents</p>
            </div> */}
                {/* </div> */}
                {/* form progress bar/tab end */}
                <div className=' border-[#D4D4D4] w-full border'></div>
                <div id='genInfo2' className='flex flex-col gap-8'>
                    {/* PRIMARY OWNER DETAILS start */}
                    <div className='flex flex-col gap-4'>
                        <SectionTitle title="PRIMARY OWNER DETAILS" />
                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="First Name" required='*' />
                                    <InputField type={"text"} placeholder={"Enter First Name"} name={'PrOwFirName'} onChange={(e) => prOwnFirNameChange(e)} value={prOwnFirName} />
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Last Name" required='*' />
                                    <InputField type={"text"} placeholder={"Enter Last Name"} name={'PrOwLasName'} onChange={(e) => prOwnLastNameChange(e)} value={prOwnLastName} />
                                </div>
                            </div>

                            <div className=' flex flex-col gap-2'>
                                <Label text="Title" required='*' />
                                <InputField type={"text"} placeholder={"Enter Designation"} name={'PrOwTitle'} onChange={(e) => prOwnTitleChange(e)} value={prOwnTitle} />
                            </div>

                            <div className='flex gap-8'>
                                <div className='w-1/2'>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <Label text="Primary Number" required='*' />
                                        {/* <InputField type={"text"} placeholder={"Enter Primary Number"} name={'PrOwPriNum'} onChange={(e) => prOwnPriNumChange(e)} value={prOwnPriNum} /> */}
                                        <PhoneInput
                                            country={"us"}
                                            countryCodeEditable={false}
                                            value={prOwnPriNum}
                                            onChange={prOwnPriNumChange}
                                            inputStyle={{
                                                borderRadius: "0",
                                                width: "100%",
                                                height: "2.8rem",
                                                borderColor: "#E2E4E9",
                                            }}
                                        />
                                    </div>
                                    <div className='flex gap-4 mt-2'>
                                        <div className="flex items-center">
                                            <input id="PrOwPriNumMob" type="checkbox" value="PrOwPriNumMob" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-[50%] dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                checked={priOwnMobCheck}
                                                onChange={priOwnMobCheckChange} />
                                            <label for="PrOwPriNumMob" className="ms-2 text-sm  text-[#525866] dark:text-gray-300">Mobile</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="PrOwPriNumOth" type="checkbox" value="PrOwPriNumOth" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                checked={priOwnOthrCheck}
                                                onChange={priOwnOthrCheckChange} />
                                            <label for="PrOwPriNumOth" className="ms-2 text-sm  text-[#525866] dark:text-gray-300">Other</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <Label text="Alternate Phone Number" />
                                        {/* <InputField type={"text"} placeholder={"Enter Alternate Phone Number"} name={'PrOwAltPhNum'} onChange={(e) => prOwnAltNumChange(e)} value={prOwnAltNum} /> */}
                                        <PhoneInput
                                            country={"us"}
                                            countryCodeEditable={false}
                                            value={prOwnAltNum}
                                            onChange={prOwnAltNumChange}
                                            inputStyle={{
                                                borderRadius: "0",
                                                width: "100%",
                                                height: "2.8rem",
                                                borderColor: "#E2E4E9",
                                            }}
                                        />
                                    </div>
                                    <div className='flex gap-4 mt-2'>
                                        <div className="flex items-center">
                                            <input id="PrOwAltPhNumMob" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                checked={priOwnAltMobCheck}
                                                onChange={priOwnAltMobCheckChange} />
                                            <label for="PrOwAltPhNumMob" className="ms-2 text-sm  text-[#525866] dark:text-gray-300">Mobile</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="PrOwAltPhNumOth" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                checked={priOwnAltOthrCheck}
                                                onChange={priOwnAltOthrCheckChange} />
                                            <label for="PrOwAltPhNumOth" className="ms-2 text-sm  text-[#525866] dark:text-gray-300">Other</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-8'>
                                <div className='flex flex-col w-full'>
                                    <div className='w-full flex flex-col gap-2'>
                                        <Label text="Email Address" required='*' />
                                        <InputField type={"text"} placeholder={"Enter Email Address"} name={'PrOwEmAdd'} onChange={(e) => prOwnEmailChange(e, "email")} value={prOwnEmail} />
                                    </div>
                                    { // ! for email validation
                                        isFormValidate.emailPrimaryOwner &&
                                        <div className='w-full flex items-center'>
                                            <div className=''></div>
                                            <div className='text-red-500 text-xs'>
                                                Please enter valid email
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className='flex flex-col w-full'>
                                    <div className='w-full flex flex-col gap-2'>
                                        <Label text="Alternate Email Address" />
                                        <InputField type={"text"} placeholder={"Enter Alternate Email Address"} name={'PrOwAltEmAdd'} onChange={(e) => prOwnAltEmailChange(e, "email")} value={prOwnAltEmail} />
                                    </div>
                                    { // ! for email validation
                                        isFormValidate.emailAltPrimaryOwner &&
                                        <div className='w-full flex items-center'>
                                            <div className=''></div>
                                            <div className='text-red-500 text-xs'>
                                                Please enter valid email
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* PRIMARY OWNER DETAILS end  */}
                    <div className=' border-[#D4D4D4] w-full border'></div>
                    {/* PRIMARY CONTACT DETAILS start */}
                    {priConInput.map((contact, index) => (
                        <div key={index} className='flex flex-col gap-4'>
                            <div className='flex justify-between'>
                                {index === 0 && (
                                    <SectionTitle title={`PRIMARY CONTACT DETAILS`} />
                                )}
                                {index > 0 && (
                                    <SectionTitle title={`SECONDARY CONTACT DETAILS`} />
                                )}
                                {index > 0 && (
                                    <div className="flex items-center">
                                        <p role='button' onClick={() => priConDelete(index)}>
                                            <RiDeleteBin6Line className='text-[red]' />
                                        </p>
                                    </div>
                                )}
                                {index === 0 && (
                                    <div className="flex items-center">
                                        <input id="PRIMARY_CONTACT_DETAILS_checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded     dark:bg-gray-700 dark:border-gray-600" name='samePriCont' onChange={handleSameAsPhysicalChange} />
                                        <label for="PRIMARY_CONTACT_DETAILS_checkbox" className="ms-2 text-base text-[#141F58] dark:text-gray-300">Same as Primary Owner</label>
                                    </div>
                                )}
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className='flex gap-8'>
                                    <div className='w-1/2 flex flex-col gap-2'>
                                        <Label text="First Name" required='*' />
                                        <InputField type={"text"} placeholder={"Enter First Name"} name={'PrOwFirName'} onChange={(e) => priConInputChange(index, 'PrOwFirName', e.target.value)} value={priConInput.PrOwFirName} />
                                    </div>
                                    <div className='w-1/2 flex flex-col gap-2'>
                                        <Label text="Last Name" required='*' />
                                        <InputField type={"text"} placeholder={"Enter Last Name"} name={'PrOwLasName'} onChange={(e) => priConInputChange(index, 'PrOwLasName', e.target.value)} value={priConInput.PrOwLasName} />
                                    </div>
                                </div>

                                <div className=' flex flex-col gap-2'>
                                    <Label text="Title" required='*' />
                                    <InputField type={"text"} placeholder={"Enter Designation"} name={'PrOwTitle'} onChange={(e) => priConInputChange(index, 'PrOwTitle', e.target.value)} value={priConInput.PrOwTitle} />
                                </div>

                                <div className='flex gap-8'>
                                    <div className='w-1/2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label text="Primary Number" required='*' />
                                            <PhoneInput
                                                country={"us"}
                                                countryCodeEditable={false}
                                                onChange={(value) => priConInputChange(index, 'PrOwPriNum', value)}
                                                inputStyle={{
                                                    borderRadius: "0",
                                                    width: "100%",
                                                    height: "2.8rem",
                                                    borderColor: "#E2E4E9",
                                                }}
                                            />

                                        </div>
                                        <div className='flex gap-4 mt-2'>
                                            <div className="flex items-center">
                                                <input id="PrOwDetPriNumMob" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-[50%] dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                    checked={priConMobCheck}
                                                    onChange={priConMobCheckChange} />
                                                <label for="PrOwDetPriNumMob" className="ms-2 text-sm  text-[#525866] dark:text-gray-300">Mobile</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="PrOwDetPriNumOth" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                    checked={priConOthrCheck}
                                                    onChange={priConOthrCheckChange} />
                                                <label for="PrOwDetPriNumOth" className="ms-2 text-sm  text-[#525866] dark:text-gray-300">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <div className='flex flex-col gap-2 w-full'>
                                            <div className='flex flex-col gap-2'>
                                                <Label text="Alternate Phone Number" />
                                                <PhoneInput
                                                    country={"us"}
                                                    countryCodeEditable={false}
                                                    onChange={(value) => priConInputChange(index, 'PrOwAltPhNum', value)}
                                                    inputStyle={{
                                                        borderRadius: "0",
                                                        width: "100%",
                                                        height: "2.8rem",
                                                        borderColor: "#E2E4E9",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className='flex gap-4 mt-2'>
                                            <div className="flex items-center">
                                                <input id="PrOwDetAltPhNumMob" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                    checked={priConAltMobCheck}
                                                    onChange={priConAltMobCheckChange} />
                                                <label for="PrOwDetAltPhNumMob" className="ms-2 text-sm  text-[#525866] dark:text-gray-300">Mobile</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="PrOwDetAltPhNumOth" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                    checked={priConAltOthrCheck}
                                                    onChange={priConAltOthrCheckChange} />
                                                <label for="PrOwDetAltPhNumOth" className="ms-2 text-sm  text-[#525866] dark:text-gray-300">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-8'>
                                    <div className='w-1/2 flex flex-col gap-2'>
                                        <Label text="Email Address" required='*' />
                                        <InputField type={"text"} placeholder={"Enter Email Address"} name='PrOwEmAdd' value={priConInput.PrOwEmAdd}
                                            onChange={(e) => priConInputChange(index, 'PrOwEmAdd', e.target.value)} />
                                    </div>
                                    <div className='w-1/2 flex flex-col gap-2'>
                                        <Label text="Alternate Email Address" />
                                        <InputField type={"text"} placeholder={"Enter Alternate Email Address"} name='PrOwAltEmAdd' value={priConInput.PrOwAltEmAdd}
                                            onChange={(e) => priConInputChange(index, 'PrOwAltEmAdd', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* PRIMARY CONTACT DETAILS end  */}
                    {priConInput.length === 1 && (
                        <h5
                            id='addMoreContact'
                            className='flex items-center gap-1 text-sm text-[#0045AC] cursor-pointer'
                            onClick={priConAddMore}
                        >
                            <img src={plusIcon} alt="" className='h-4 w-4' /> Add Secondary Contact
                        </h5>
                    )}
                </div>
            </div>
            {/* <FormFooter onNextClick={handleNext} onReturnClick={handleReturn}  actionReturn={changeFormToDisplay({ formName: "Gen Business Info" })} actionNext={changeSideBar({ sideBarName: "Business Info" })} /> */}
            <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeFormToDisplay({ formName: "Gen Business Info", step: "prev" })} actionNext={changeSideBar({ sideBarName: "Business Info" })} />
        </>
    )
}

