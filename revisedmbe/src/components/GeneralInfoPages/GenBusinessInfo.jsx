import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Autocomplete, TextField } from '@mui/material'
import ReactFlagsSelect from "react-flags-select";

import { useDispatch, useSelector } from "react-redux";
import { changeFormToDisplay } from "../../features/displayPage/displayPageSlice";

import InputField from "../../globalComponents/InputField";
import Label from "../../globalComponents/Label";
import Label2 from "../../globalComponents/Label2";
import SectionTitle from "../../globalComponents/SectionTitle";
import FormFooter from '../../globalComponents/FormFooter'

import plusIcon from '../../assests/images/Plus.png'
import FileUpload from '../../globalComponents/FileUpload';
import { handleCheckInput } from '../../helpers/inputFieldValidators';

export default function GenBusinessInfo() {

    // -------------------------------------------------
    // const navigate = useNavigate();
    const [DBAVisible, setDBAVisible] = useState(false);
    const [selectedDBARadio, setSelectedDBA] = useState('DBA_No');

    const [websiteVisible, setWebsiteVisible] = useState(false);
    const [selectedWebsiteRadio, setSelectedWebsite] = useState('website_No');

    const [addFacilVisible, setaddFacilVisible] = useState(false);
    const [selectedaddFacilRadio, setSelectedaddFacil] = useState('addFacil_No');
    const { generalInfo } = useSelector((store) => store.generalInfo);

    const [fileUpload, setFileUpload] = useState(Object.keys(generalInfo).length >= 1 ? generalInfo : {});

    const [isFormValidate, setFormValidate] = useState({
        email: false,
    })
    // const [visibleDiv, setVisibleDiv] = useState('genInfo1');

    // const navigate = useNavigate();

    const handleDBARadio = (e) => {
        const selectedRadio = e.target.id;
        setSelectedDBA(selectedRadio);

        if (selectedRadio === 'DBA_Yes') {
            setDBAVisible(true);
        } else {
            setDBAVisible(false);
        }

    };

    const handleWebsiteRadio = (e) => {
        const selectedRadio = e.target.id;
        setSelectedWebsite(selectedRadio);

        if (selectedRadio === 'website_Yes') {
            setWebsiteVisible(true);
        } else {
            setWebsiteVisible(false);
        }

    };

    const handleaddFacilRadio = (e) => {
        const selectedRadio = e.target.id;
        setSelectedaddFacil(selectedRadio);

        if (selectedRadio === 'addFacil_Yes') {
            setaddFacilVisible(true);
        } else {
            setaddFacilVisible(false);
        }

    };

    // data management
    //General Business Information
    //Company Name 
    const [company, setCompany] = useState('');
    const handleInputChanges = (e) => {
        setCompany(e.target.value);
    }

    //Doing Business As
    const [dbaInput, setDbaInput] = useState('');
    const dbaInputChange = (e) => {
        setDbaInput(e.target.value)
        console.log(dbaInput);
    }

    // ein
    const [einInp, setEinInp] = useState('');
    const einInputChange = (e, fieldType) => {
        if (handleCheckInput(e, fieldType)) {
            setEinInp(e.target.value);
        }
    }

    // dun
    const [dunInp, setDunInp] = useState('');
    const dunInputChange = (e, fieldType) => {
        if (handleCheckInput(e, fieldType)) {
            setDunInp(e.target.value);
        }
    }

    //Office Telephone
    const [offTelInp, setOffTelInp] = useState();
    const offTelInpChange = (value) => {
        setOffTelInp(value);
    }

    //Company Website url
    const [compUrlInp, setCompUrlInp] = useState('');
    const compUrlInpChange = (e) => {
        setCompUrlInp(e.target.value);
    }

    //PHYSICAL ADDRESS
    //Physical Address line 1
    const [phyAddLine1Inp, setPhyAddLine1Inp] = useState('');
    const phyAddLine1InpChange = (e) => {
        setPhyAddLine1Inp(e.target.value);
    }

    //Physical Address line 2
    const [phyAddLine2Inp, setPhyAddLine2Inp] = useState('');
    const phyAddLine2InpChange = (e) => {
        setPhyAddLine2Inp(e.target.value);
    }

    // City
    const [phyAddCityInp, setPhyAddCityInp] = useState();
    const phyAddCityInpChange = (event, value) => {
        setPhyAddCityInp(value);
    }

    //State 
    const [phyAddStateInp, setPhyAddStateInp] = useState()
    const phyAddStateInpchange = (event, value) => {
        setPhyAddStateInp(value);
    }

    //ZIP code 
    const [phyAddZipCodeInp, setPhyAddZipCodeInp] = useState('');
    const phyAddZipCodeInpChange = (e, fieldType) => {
        if (handleCheckInput(e, fieldType)) {
            setPhyAddZipCodeInp(e.target.value);
        }
    }

    // Location Type
    const [phyAddLocInp, setPhyAddLocInp] = useState();
    const phyAddLocInpChange = (event, value) => {
        setPhyAddLocInp(value);
    }

    //MAILING ADDRESS
    //MAILING ADDRESS line 1
    const [mailAddLine1Inp, setMailAddLine1Inp] = useState('');
    const mailAddLine1InpChange = (e) => {
        setMailAddLine1Inp(e.target.value);
    }

    //MAILING ADDRESS line 2
    const [mailAddLine2Inp, setMailAddLine2Inp] = useState('');
    const mailAddLine2InpChange = (e) => {
        setMailAddLine2Inp(e.target.value);
    }

    // City
    const [mailAddCityInp, setMailAddCityInp] = useState();
    const mailAddCityInpChange = (event, value) => {
        setMailAddCityInp(value);
    }

    //State 
    const [mailAddStateInp, setMailAddStateInp] = useState()
    const mailAddStateInpchange = (event, value) => {
        setMailAddStateInp(value);
    }

    //ZIP code 
    const [mailAddZipCodeInp, setMailAddZipCodeInp] = useState('');
    const mailAddZipCodeInpChange = (e, fieldType) => {
        if (handleCheckInput(e, fieldType)) {
            setMailAddZipCodeInp(e.target.value);
        }
    }

    // Location Type
    const [mailAddLocInp, setMailAddLocInp] = useState();
    const mailAddLocInpChange = (event, value) => {
        setMailAddLocInp(value);
    }

    //Additional Facilities

    const [facilityInput, setFacilityInput] = useState([{ facilityName: '', facilityType: '', facilityAdd: '', facilityCountry: '', facilityState: '', facilityCity: '', facilityZipCode: '' }]);

    function facilityInputChange(index, fieldName, value, fieldType) {
        // console.log(value)
        // const updatedSessions = [...facilityInput];
        // updatedSessions[index][fieldName] = value;
        // setFacilityInput(updatedSessions);

        if (handleCheckInput({ target: { value: value } }, fieldType, facilityInput[index][fieldName])) {
            // console.log("handleCheckInput - ", handleCheckInput({ target: { value: value } }, fieldType, facilityInput[index][fieldName]));
            updateField(fieldName, { target: { value: value } }, index);
            if (fieldType === "email") {
                setFormValidate({ ...isFormValidate, email: false })
            }
        } else {
            // updateField(fieldName, { target: { value: value } }, index);
            if (fieldType === "email") {
                setFormValidate({ ...isFormValidate, email: true })
                if (value.trim() === "") {
                    setFormValidate({ ...isFormValidate, email: false })
                }
            }
        }

        function updateField(fieldName, e, index) {
            if (e.target.value !== "undefined") {
                const updatedSessions = [...facilityInput];
                updatedSessions[index][fieldName] = value;
                setFacilityInput(updatedSessions);
            }
        }
    }

    const facilityAddMore = () => {
        setFacilityInput((prevSessions) => [
            ...prevSessions,
            { facilityName: '', facilityType: '', facilityAdd: '', facilityCountry: '', facilityState: '', facilityCity: '', facilityZipCode: '' }
        ])
    }

    const facilityDelete = (index) => {
        setFacilityInput((prevSessions) => prevSessions.filter((_, i) => i !== index));
    }



    //UPLOAD DOCUMENTS
    //Business Statenment
    const [busStateDocInp, setBusStateDocInp] = useState('');
    const busStateDocInpChange = (e) => {
        setBusStateDocInp(e.target.value);
    }

    //(EIN)
    const [einDocInp, setEinDocInp] = useState('');
    const einDocInpChange = (e) => {
        setEinDocInp(e.target.value);
    }

    //Business Lease Agreements
    const [agreeDocInp, setAgreeDocInp] = useState('');
    const agreeDocInpChange = (e) => {
        setAgreeDocInp(e.target.value);
    }

    // same as checkbox
    const [physicalCheck, setPhysicalCheck] = useState(false);

    useEffect(() => {
        if (physicalCheck) {
            setMailAddLine1Inp(phyAddLine1Inp);
            setMailAddLine2Inp(phyAddLine2Inp);
            setMailAddCityInp(phyAddCityInp);
            setMailAddStateInp(phyAddStateInp);
            setMailAddZipCodeInp(phyAddZipCodeInp);
            setMailAddLocInp(phyAddLocInp);
        } else {
            setMailAddLine1Inp('');
            setMailAddLine2Inp('');
            setMailAddCityInp('');
            setMailAddStateInp('');
            setMailAddZipCodeInp('');
            setMailAddLocInp('');
        }
    }, [physicalCheck])

    const [autocompleteKey, setAutocompleteKey] = useState(0);

    const handleSamePhyChange = (e) => {
        setPhysicalCheck(e.target.checked);
        setAutocompleteKey((prevKey) => prevKey + 1);
    }


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

    // file handling

    const [dbaDoc, setdbaDoc] = useState({})
    const [einDoc, seteinDoc] = useState(Object.keys(generalInfo).length >= 1 ? generalInfo : {})
    const [aggreeDoc, setaggreeDoc] = useState({})

    // -------------------------------------------------
    const dispatch = useDispatch()

    async function handleClick() {
        console.log("INIT GenBusinessInfo")
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

        let config = {
            reportName: "All_Mbe_Applications",
            page: "1",
            pageSize: "100",
        };
        const test1 = await window.ZOHO.CREATOR.API.getAllRecords(config)
        console.log("SHOW ALL DATA - ", test1)
    }

    const handleNext = () => {
        dispatch(changeFormToDisplay({ formName: "Contact Info", step: "next", fileUpload: einDoc, page: "generalInfo" }));
    }

    const handleReturn = () => {
        dispatch(changeFormToDisplay({ formName: "Gen Business Info" }));
    }

    const onFilesChange = (e) => {
        console.log(e)
    }

    return (
        <>
            <div className='px-8 pb-8 pt-4 bg-white w-full flex flex-col gap-4'>
                {/* form progress bar/tab start */}
                {/* <div className='flex justify-between items-center text-base text-[#0A0D14] gap-4'>
                    <div className='flex gap-1 items-center'>
                        <p className='bg-[#0045AC] text-white w-8 h-8 rounded-full flex items-center justify-center'>1</p>
                        <p>General Business Information</p>
                    </div>
                    <div className=' border-[#D9D9D9] w-[50%] border'></div>
                    <div className='flex gap-1 items-center'>
                        <p className='bg-[#fff] text-black w-8 h-8 rounded-full border-2 border-[#D9D9D9] flex items-center justify-center'>2</p>
                        <p>Contact Information</p>
                    </div>
                </div> */}
                {/* form progress bar/tab end */}
                <div className=' border-[#D4D4D4] w-full border'></div>
                {/* form1 main div start  */}
                <div id='genInfo1' className='flex flex-col gap-6'>
                    {/* BUSINESS INFORMATION start  */}
                    <div className='flex flex-col gap-4'>
                        <SectionTitle title="BUSINESS INFORMATION" />
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <Label text="Company Name" required='*' toolTipText='The official name that was provided by the County Clerk or your State Secretary of State.' />
                                <InputField name={"company_Name"} type={"text"} placeholder={"Enter Company Name"} onChange={(e) => handleInputChanges(e)} value={company} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label text="Company has a DBA" />
                                <div className='flex gap-4'>
                                    <div className="flex items-center h-6">
                                        <input id="DBA_Yes" type="radio" value="DBA_Yes" name="dba_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={handleDBARadio}
                                            checked={selectedDBARadio === 'DBA_Yes'} />
                                        <label for="DBA_Yes" className="ms-2 text-sm text-black dark:text-gray-300">Yes</label>
                                    </div>
                                    <div className="flex items-center h-6">
                                        <input id="DBA_No" type="radio" value="DBA_No" name="dba_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={handleDBARadio}
                                            checked={selectedDBARadio === 'DBA_No'} />
                                        <label for="DBA_No" className="ms-2 text-sm text-black dark:text-gray-300">No</label>
                                    </div>
                                </div>
                                {DBAVisible && (
                                    <div className='mt-2 flex flex-col gap-2'>
                                        <Label2 text="Doing Business As" required='*' toolTipText='The assumed name certificate or fictitious business statement that is issued by the County Clerk or Secretary of State.' />
                                        <InputField name={'DBA'} type={'text'} placeholder={'Enter Doing Business As'} onChange={(e) => dbaInputChange(e)} value={dbaInput} />
                                    </div>
                                )}
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Federal Employer ID Number (EIN)" required='*' toolTipText='A free unique number that identifies your business. Social Security Numbers are prohibited. To obtain EIN ' toolTipSrc={'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online'} />
                                    <InputField name={'EIN'} type={'text'} placeholder={'(xx-xxxxxx)'} onChange={(e) => einInputChange(e, "ein")} value={einInp} />
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Dun & Bradstreet Number" toolTipText='The Data Universal Numbering System (DUNS) is a unique numerical identifier associated with a business entity to track credit and assist with the finding of potential partners. To obtain Dun & Bradstreet Number ' toolTipSrc={'https://www.dnb.com/duns/get-a-duns.html'} />
                                    <InputField name={'DUN'} type={'text'} placeholder={'Enter Dun & Bradstreet Number'} onChange={(e) => dunInputChange(e, "ein")} value={dunInp} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label text="Office Telephone" required='*' />

                                <PhoneInput
                                    country={"us"}
                                    countryCodeEditable={false}
                                    value={offTelInp}
                                    onChange={offTelInpChange}
                                    inputStyle={{
                                        borderRadius: "0",
                                        width: "48%",
                                        height: "2.8rem",
                                        borderColor: "#E2E4E9",
                                        boxShadow: '0px 1px 2px 0px rgba(228, 229, 231, 0.24)',
                                    }}
                                />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label text="Company has a Website" />
                                <div className='flex gap-4'>
                                    <div className="flex items-center h-6">
                                        <input id="website_Yes" type="radio" value="website_Yes" name="website_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={handleWebsiteRadio}
                                            checked={selectedWebsiteRadio === 'website_Yes'} />
                                        <label for="website_Yes" className="ms-2 text-sm text-black dark:text-gray-300">Yes</label>
                                    </div>
                                    <div className="flex items-center h-6">
                                        <input id="website_No" type="radio" value="website_No" name="website_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={handleWebsiteRadio}
                                            checked={selectedWebsiteRadio === 'website_No'} />
                                        <label for="website_No" className="ms-2 text-sm text-black dark:text-gray-300">No</label>
                                    </div>
                                </div>
                                {websiteVisible && (
                                    <div className='mt-2'>
                                        <InputField name={'web_url'} type={'url'} placeholder={'Enter Website URL'} onChange={(e) => compUrlInpChange(e)} value={compUrlInp} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* BUSINESS INFORMATION end  */}
                    <div className=' border-[#D4D4D4] w-full border'></div>
                    {/* PHYSICAL ADDRESS start  */}
                    <div className='flex flex-col gap-4'>
                        <SectionTitle title="PHYSICAL ADDRESS" />
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <Label text="Physical Address" required='*' toolTipText='This is the address where the company is physically located and headquartered.' />
                                <InputField type={"text"} placeholder={"Line 1"} name={'physicalAdd1'} onChange={(e) => phyAddLine1InpChange(e)} value={phyAddLine1Inp} />
                                <InputField type={"text"} placeholder={"Line 2"} name={'physicalAdd2'} onChange={(e) => phyAddLine2InpChange(e)} value={phyAddLine2Inp} />
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="City" required='*' />
                                    <Autocomplete
                                        name={'physicalCity'}
                                        onChange={phyAddCityInpChange} value={phyAddCityInp}
                                        className='w-full'
                                        disablePortal
                                        id="phyAddCity"
                                        options={phyAddCityData}
                                        fullWidth={true}
                                        style={{ fontSize: 1 }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                border: "1px solid #E2E4E9",
                                                outline: 'none',
                                                borderRadius: 0,
                                                height: '2.8rem',
                                                fontSize: "0.875rem",
                                                fontFamily: "degular",
                                                padding: '5px 4px 7.5px 5px',
                                                color: ' rgb(100 116 139)',
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid #E2E4E9", // Change color on hover
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid #BCBCBC", // Change color on focus
                                                },
                                            },
                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                border: "1px solid #E2E4E9",
                                                outline: 'none',
                                            },
                                            "& .MuiInputBase-root": {
                                                fontSize: "0.875rem",
                                            },
                                            "& .MuiInputBase-root": {
                                                fontSize: "0.875rem",
                                            },
                                            "& .MuiAutocomplete-Input": {
                                                fontSize: "0.875rem",
                                                fontFamily: "degular",
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select City'
                                        />}
                                    />
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="State" required='*' />
                                    <Autocomplete
                                        name={'physicalState'}
                                        onChange={phyAddStateInpchange} value={phyAddStateInp}
                                        className='w-full'
                                        disablePortal
                                        id="phyAddCity"
                                        options={phyAddStateData}
                                        fullWidth={true}
                                        style={{ fontSize: 1 }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                border: "1px solid #E2E4E9",
                                                outline: 'none',
                                                borderRadius: 0,
                                                height: '2.8rem',
                                                fontFamily: "degular",
                                                fontSize: "0.875rem",
                                                padding: '5px 4px 7.5px 5px',
                                                color: ' rgb(100 116 139)',
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid #E2E4E9", // Change color on hover
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid #BCBCBC", // Change color on focus
                                                },
                                            },
                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                border: "1px solid #E2E4E9",
                                                outline: 'none',
                                            },
                                            "& .MuiInputBase-root": {
                                                fontSize: "0.875rem",
                                            },
                                            "& .MuiInputBase-root": {
                                                fontSize: "0.875rem",
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select State'
                                        />}
                                    />
                                </div>
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-1/2  flex flex-col gap-2'>
                                    <Label text="ZIP Code" required='*' />
                                    <InputField type={"text"} placeholder={"Enter ZIP Code"} name={'physicalZIP_code'} onChange={(e) => phyAddZipCodeInpChange(e, "zip")} value={phyAddZipCodeInp} />
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Location Type" required='*' />
                                    <Autocomplete
                                        name={'physicalLocation_Type'}
                                        onChange={phyAddLocInpChange} value={phyAddLocInp}
                                        className='w-full'
                                        disablePortal
                                        id="physicalLocation_Type"
                                        options={phyAddLocType}
                                        fullWidth={true}
                                        style={{ fontSize: 1 }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                border: "1px solid #E2E4E9",
                                                outline: 'none',
                                                borderRadius: 0,
                                                height: '2.8rem',
                                                fontFamily: "degular",
                                                fontSize: "0.875rem",
                                                padding: '5px 4px 7.5px 5px',
                                                color: ' rgb(100 116 139)',
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid #E2E4E9",
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid #BCBCBC",
                                                },
                                            },
                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                border: "1px solid #E2E4E9",
                                                outline: 'none',
                                            },
                                            "& .MuiInputBase-root": {
                                                fontSize: "0.875rem",
                                            },
                                            "& .MuiInputBase-root": {
                                                fontSize: "0.875rem",
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Location Type'
                                        />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* PHYSICAL ADDRESS end  */}
                    <div className=' border-[#D4D4D4] w-full border'></div>
                    {/* MAILING ADDRESS start  */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between'>
                            <SectionTitle title="MAILING ADDRESS" />
                            <div className="flex items-center">
                                <input id="MAILING-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" name='samePhyAdd' onChange={handleSamePhyChange} />
                                <label for="MAILING-checkbox" className="ms-2 text-sm text-[#141F58] dark:text-gray-300">Same as Physical Address</label>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <Label text="Mailing Address" required='*' />
                                {/* <InputField type={"text"} placeholder={"Line 1"} name={'mailingAdd1'} />
                                <InputField type={"text"} placeholder={"Line 2"} name={'mailingAdd2'} /> */}
                                <InputField type={"text"} placeholder={"Line 1"} onChange={(e) => mailAddLine1InpChange(e)} value={mailAddLine1Inp} readonly={physicalCheck} />
                                <InputField type={"text"} placeholder={"Line 2"} name={'mailingAdd2'} onChange={(e) => mailAddLine2InpChange(e)} value={mailAddLine2Inp} readonly={physicalCheck} />
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="City" required='*' />

                                    <Autocomplete
                                        key={autocompleteKey}
                                        disabled={physicalCheck}
                                        name={'mailingCity'}
                                        onChange={mailAddCityInpChange} value={mailAddCityInp}
                                        className='w-full'
                                        disablePortal
                                        id="mailAddCity"
                                        options={mailAddCityData}
                                        fullWidth={true}
                                        style={{ fontSize: 1 }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                border: "1px solid #E2E4E9",
                                                outline: 'none',
                                                borderRadius: 0,
                                                height: '2.8rem',
                                                fontSize: "0.875rem",
                                                fontFamily: "degular",
                                                padding: '5px 4px 7.5px 5px',
                                                color: ' rgb(100 116 139)',
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid #E2E4E9", // Change color on hover
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid #BCBCBC", // Change color on focus
                                                },
                                            },
                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                border: "1px solid #E2E4E9",
                                                outline: 'none',
                                            },
                                            "& .MuiInputBase-root": {
                                                fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                                            },
                                            "& .MuiInputBase-root": {
                                                fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select City'
                                        />}
                                    />
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="State" required='*' />

                                    <Autocomplete
                                        key={autocompleteKey}
                                        disabled={physicalCheck}
                                        name={'mailingState'}
                                        onChange={mailAddStateInpchange} value={mailAddStateInp}
                                        className='w-full'
                                        disablePortal
                                        id="mailAddCity"
                                        options={mailAddStateData}
                                        fullWidth={true}
                                        style={{ fontSize: 1 }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                border: "1px solid #E2E4E9",
                                                outline: 'none',
                                                borderRadius: 0,
                                                height: '2.8rem',
                                                fontSize: "0.875rem",
                                                fontFamily: "degular",
                                                padding: '5px 4px 7.5px 5px',
                                                color: ' rgb(100 116 139)',
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid #E2E4E9", // Change color on hover
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid #BCBCBC", // Change color on focus
                                                },
                                            },
                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                border: "1px solid #E2E4E9",
                                                outline: 'none',
                                            },
                                            "& .MuiInputBase-root": {
                                                fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                                            },
                                            "& .MuiInputBase-root": {
                                                fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select State'
                                        />}
                                    />
                                </div>
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="ZIP Code" required='*' />
                                    {/* <InputField type={"text"} placeholder={"Enter ZIP code"} name={'mailingZIP_code'} /> */}
                                    <InputField type={"text"} placeholder={"Enter ZIP code"} name={'mailingZIP_code'} onChange={(e) => mailAddZipCodeInpChange(e, "zip")} value={mailAddZipCodeInp} readonly={physicalCheck}
                                    />
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Location Type" required='*' />
                                    <Autocomplete
                                        key={autocompleteKey}
                                        disabled={physicalCheck}
                                        name={'mailingLocation_Type'}
                                        onChange={mailAddLocInpChange} value={mailAddLocInp}
                                        className='w-full'
                                        disablePortal
                                        id="mailAddCity"
                                        options={mailAddLocType}
                                        fullWidth={true}
                                        style={{ fontSize: 1 }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                border: "1px solid #E2E4E9",
                                                outline: 'none',
                                                borderRadius: 0,
                                                height: '2.8rem',
                                                fontSize: "0.875rem",
                                                fontFamily: "degular",
                                                padding: '5px 4px 7.5px 5px',
                                                color: ' rgb(100 116 139)',
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid #E2E4E9", // Change color on hover
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    border: "1px solid #BCBCBC", // Change color on focus
                                                },
                                            },
                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                border: "1px solid #E2E4E9",
                                                outline: 'none',
                                            },
                                            "& .MuiInputBase-root": {
                                                fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                                            },
                                            "& .MuiInputBase-root": {
                                                fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Location Type'
                                        />}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* MAILING ADDRESS end  */}
                    <div className=' border-[#D4D4D4] w-full border'></div>
                    {/* Location of Additional Facilities start  */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <Label text="Location of Additional Facilities" />
                            <div className='flex flex-col gap-6'>

                                <div className='flex gap-4'>
                                    <div className="flex items-center h-6">
                                        <input id="addFacil_Yes" type="radio" value="addFacil_Yes" name="addFacil_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={handleaddFacilRadio}
                                            checked={selectedaddFacilRadio === 'addFacil_Yes'} />
                                        <label for="addFacil_Yes" className="ms-2 text-sm text-black dark:text-gray-300">Yes</label>
                                    </div>
                                    <div className="flex items-center h-6">
                                        <input id="addFacil_No" type="radio" value="addFacil_No" name="addFacil_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={handleaddFacilRadio}
                                            checked={selectedaddFacilRadio === 'addFacil_No'} />
                                        <label for="addFacil_No" className="ms-2 text-sm text-black dark:text-gray-300">No</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {addFacilVisible && (
                            <div className='flex flex-col gap-4'>
                                {facilityInput.map((facility, index) => (
                                    <div key={index} className='mt-2 flex flex-col gap-4'>
                                        <div className='flex justify-between'>
                                            <SectionTitle title={`FACILITY ${index + 1}`} />
                                            {index > 0 && <p role='button' onClick={() => facilityDelete(index)}><RiDeleteBin6Line className='text-[red]' /></p>}
                                        </div>
                                        <div className='border p-4 flex flex-col gap-6'>
                                            <div className='flex flex-col gap-2'>
                                                <Label2 text="Facility Name" required='*' />
                                                <InputField type={"text"} placeholder={"Enter Name of Facility"} name={'facilityName'} onChange={(e) => facilityInputChange(index, 'facilityName', e.target.value)} value={facilityInput.facilityName} />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label2 text="Facility Type" required='*' />

                                                <Autocomplete
                                                    name={'facilityType'}
                                                    onChange={(event, value) => facilityInputChange(index, 'facilityType', value)} value={facilityInput.facilityType}
                                                    className='w-full'
                                                    disablePortal
                                                    id={`facilityType${facility.id}`}
                                                    options={addFaciType}
                                                    fullWidth={true}
                                                    style={{ fontSize: 1 }}
                                                    sx={{
                                                        "& .MuiOutlinedInput-root": {
                                                            border: "1px solid #E2E4E9",
                                                            outline: 'none',
                                                            borderRadius: 0,
                                                            height: '2.8rem',
                                                            fontSize: "0.875rem",
                                                            fontFamily: "degular",
                                                            padding: '5px 4px 7.5px 5px',
                                                            color: ' rgb(100 116 139)',
                                                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                                                border: "1px solid #E2E4E9", // Change color on hover
                                                            },
                                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                                border: "1px solid #BCBCBC", // Change color on focus
                                                            },
                                                        },
                                                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                            border: "1px solid #E2E4E9",
                                                            outline: 'none',
                                                        },
                                                        "& .MuiInputBase-root": {
                                                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                                                        },
                                                        "& .MuiInputBase-root": {
                                                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                                                        }
                                                    }}
                                                    renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Facility Type'
                                                    />}
                                                />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label2 text="Facility Address" required='*' />
                                                <InputField type={"text"} placeholder={"Line 1"} name={'facilityAdd'} onChange={(e) => facilityInputChange(index, 'facilityAdd', e.target.value)} value={facilityInput.facilityAdd} />
                                            </div>
                                            <div className='flex justify-between gap-8'>
                                                <div className='w-1/2 flex flex-col gap-2'>
                                                    <Label2 text="Country" required='*' />

                                                    <ReactFlagsSelect
                                                        searchable
                                                        searchPlaceholder="Search countries"
                                                        selectedSize={16}
                                                        selected={facility.facilityCountry} // Use facility.facilityCountry for each instance
                                                        onSelect={(name) => { facilityInputChange(index, 'facilityCountry', name) }}
                                                        onChange={(event) => facilityInputChange(index, 'facilityCountry', event)}
                                                    />
                                                </div>
                                                <div className='w-1/2 flex flex-col gap-2'>
                                                    <Label2 text="State" required='*' />
                                                    <Autocomplete
                                                        name={'facilityState'}
                                                        onChange={(event, value) => facilityInputChange(index, 'facilityState', value)}
                                                        className='w-full'
                                                        disablePortal
                                                        id={`State${facility.id}`}
                                                        options={addFaciStateData}
                                                        fullWidth={true}
                                                        style={{ fontSize: 1 }}
                                                        sx={{
                                                            "& .MuiOutlinedInput-root": {
                                                                border: "1px solid #E2E4E9",
                                                                outline: 'none',
                                                                borderRadius: 0,
                                                                height: '2.8rem',
                                                                fontSize: "0.875rem",
                                                                fontFamily: "degular",
                                                                padding: '5px 4px 7.5px 5px',
                                                                color: ' rgb(100 116 139)',
                                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                                    border: "1px solid #E2E4E9", // Change color on hover
                                                                },
                                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                                    border: "1px solid #BCBCBC", // Change color on focus
                                                                },
                                                            },
                                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                                border: "1px solid #E2E4E9",
                                                                outline: 'none',
                                                            },
                                                            "& .MuiInputBase-root": {
                                                                fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                                                            },
                                                            "& .MuiInputBase-root": {
                                                                fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                                                            }
                                                        }}
                                                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select State'
                                                        />}
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex justify-between gap-8'>
                                                <div className='w-1/2 flex flex-col gap-2'>
                                                    <Label2 text="City" required='*' />
                                                    <Autocomplete
                                                        name={'facilityCity'}
                                                        onChange={(event, value) => facilityInputChange(index, 'facilityCity', value)} value={facilityInput.facilityCity}
                                                        className='w-full'
                                                        disablePortal
                                                        id={`City${facility.id}`}
                                                        options={addFaciCityData}
                                                        fullWidth={true}
                                                        style={{ fontSize: 1 }}
                                                        sx={{
                                                            "& .MuiOutlinedInput-root": {
                                                                border: "1px solid #E2E4E9",
                                                                outline: 'none',
                                                                borderRadius: 0,
                                                                height: '2.8rem',
                                                                fontSize: "0.875rem",
                                                                fontFamily: "degular",
                                                                padding: '5px 4px 7.5px 5px',
                                                                color: ' rgb(100 116 139)',
                                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                                    border: "1px solid #E2E4E9", // Change color on hover
                                                                },
                                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                                    border: "1px solid #BCBCBC", // Change color on focus
                                                                },
                                                            },
                                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                                border: "1px solid #E2E4E9",
                                                                outline: 'none',
                                                            },
                                                            "& .MuiInputBase-root": {
                                                                fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                                                            },
                                                            "& .MuiInputBase-root": {
                                                                fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                                                            }
                                                        }}
                                                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select City'
                                                        />}
                                                    />
                                                </div>
                                                <div className='w-1/2 flex flex-col gap-2'>
                                                    <Label2 text="ZIP Code" required='*' />
                                                    <InputField type={"text"} placeholder={"Enter ZIP Code"} name={'facilityZipCode'} onChange={(e) => facilityInputChange(index, 'facilityZipCode', e.target.value, "zip")} value={facilityInput[index]["facilityZipCode"]} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <h5 id='addMoreFacility' className='flex gap-1 items-center text-sm text-[#0045AC] cursor-pointer' onClick={facilityAddMore}><img src={plusIcon} alt="" /> Add more</h5>
                            </div>
                        )}
                    </div>
                    {/* Location of Additional Facilities end  */}
                    <div className=' border-[#D4D4D4] w-full border'></div>
                    {/* Upload Documents start  */}
                    <div className='flex flex-col gap-4'>
                        <SectionTitle title='UPLOAD DOCUMENTS' />
                        <div className='flex flex-col gap-6'>
                            {DBAVisible &&
                                <div className='flex flex-col gap-3'>
                                    <FileUpload label={`Assumed Name Document/Fictious Business Statenment`} requiredText={`*`} toolTip={`As filed with the Secretary of State.`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`dbaDoc`} fileInfos={einDoc} setFileInfos={seteinDoc} validExtensions={['.pdf', '.doc', '.docx']} />

                                    <InputField placeholder={'Add comments if any'} type={'text'} name={'busStateDocInp'} onChange={(e) => busStateDocInpChange(e)} />

                                </div>
                            }

                            <div className='flex flex-col gap-3'>

                                <FileUpload label={`Proof of Federal Employer ID Number (EIN)`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`einDoc`} fileInfos={einDoc} setFileInfos={seteinDoc} validExtensions={['.pdf', '.doc', '.docx']} />

                                <InputField placeholder={'Add comments if any'} type={'text'} name={'einDocInp'} onChange={(e) => einDocInpChange(e)} />

                            </div>

                            <div className='flex flex-col gap-3'>

                                <FileUpload label={`Business Lease Agreements`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`leaseAgreements`} fileInfos={einDoc} setFileInfos={seteinDoc} validExtensions={['.pdf', '.doc', '.docx']} />

                                <InputField placeholder={'Add comments if any'} type={'text'} name={'agreeDocInp'} onChange={(e) => agreeDocInpChange(e)} />

                            </div>
                        </div>
                    </div>
                    {/* Upload Documents end  */}
                </div>
            </div>
            <FormFooter onNextClick={handleNext} actionNext={changeFormToDisplay({ formName: "Contact Info", step: "next" })} />
        </>
    )
}

