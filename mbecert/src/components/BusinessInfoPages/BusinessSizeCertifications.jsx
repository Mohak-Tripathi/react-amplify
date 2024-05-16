import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import Pdf from "../../globalComponents/Pdf";
import SectionTitle from "../../globalComponents/SectionTitle";
import Label from "../../globalComponents/Label";
import InputField from "../../globalComponents/InputField";
import PdfComp from "../../globalComponents/PdfComp";
import { changeBusinessPage, changeFormToDisplayBusiness } from "../../features/displayPage/displayPageSlice";
import { useDispatch, useSelector } from "react-redux";
import FormFooter from "../../globalComponents/FormFooter";
import SelectWrapper from "../../globalComponents/SelectWrapper";
import PublicMarket from "./PublicMarket";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { useMediaQuery, useTheme } from "@mui/material";
import ForeignOperatingCompany from "./ForeignOperatingCompany";
import FamilyOffice from "./FamilyOffice";
import IndependentSponsor from "./IndependentSponsor";
import InvestmentFund from "./InvestmentFund";
import AngelInvestorGroup from "./AngelInvestorGroup";
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import Cloud from "../../assests/images/cloud.png";
import { MdModeEdit } from "react-icons/md";
// import { changeIndependentSponsor } from '../../features/forms/businessInfoSlice';
import { popUpFileHandling } from "../../features/forms/businessInfoSlice.js";
import { handleCheckInput } from '../../helpers/inputFieldValidators.js';


export default function BusinessSizeCertifications() {

    const dispatch = useDispatch()
    const { additionalDocument } = useSelector((store) => store.businessInfo)
    const [isAddPdf, setAddPdf] = useState(Object.keys(additionalDocument).length >= 1 ? additionalDocument : {});
    const [DBAVisible, setDBAVisible] = useState(false);
    const [selectedDBARadio, setSelectedDBA] = useState('DBA_No');
    const [isEstablishedYear, setEstablishedYear] = useState("establishedYear_No")
    const [isGeographiesServed, setGeographiesServed] = useState([])
    const [isPreviousCert, setPreviousCert] = useState("previousCert_No")
    const [isRegional, setRegional] = useState([]);
    const [isOtherCertification, setOtherCertification] = useState([]);
    const [isDesignationApply, setDesignationApply] = useState("designationApply_No")
    const [isInitiativeCert, setInitiativeCert] = useState("initiativeCert_Closed")
    const [isCorporatePlusMember, setCorporatePlusMember] = useState("corporatePlusMember_No")
    const [isQualifiedProgramInvestor, setQualifiedProgramInvestor] = useState("qualifiedProgramInvestor_No")
    const [isMillionAssets, setMillionAssets] = useState("millionAssets_No")
    const [websiteVisible, setWebsiteVisible] = useState(false);
    const [selectedWebsiteRadio, setSelectedWebsite] = useState('website_No');

    const [addFacilVisible, setaddFacilVisible] = useState(false);
    const [selectedaddFacilRadio, setSelectedaddFacil] = useState('addFacil_No');

    const [facilities, setFacilities] = useState([{ id: 1 }]);

    const [visibleDiv, setVisibleDiv] = useState('genInfo1');

    const [contacts, setContacts] = useState([{ id: 1, type: 'PRIMARY', },]);

    const [physicalAddress, setPhysicalAddress] = useState({
        physicalAdd1: '',
        physicalAdd2: '',
        physicalCity: '',
        physicalState: '',
        physicalZIP_code: '',
        physicalLocation_Type: '',
    });

    const [mailingAddress, setMailingAddress] = useState({
        mailingAdd1: '',
        mailingAdd2: '',
        mailingCity: '',
        mailingState: '',
        mailingZIP_code: '',
        mailingLocation_Type: '',
    });

    const [isSameAsPhysical, setIsSameAsPhysical] = useState(false);

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

    const handleAddMoreFacility = () => {
        const newFacilityId = facilities.length + 1;
        const newFacility = { id: newFacilityId };
        setFacilities([...facilities, newFacility]);
    };

    const handleRemoveFacility = (index) => {
        const updatedFacilities = [...facilities];
        updatedFacilities.splice(index, 1);
        for (let i = index; i < updatedFacilities.length; i++) {
            updatedFacilities[i].id = i + 1;
        }
        setFacilities(updatedFacilities);
    };


    const handlePrevClick = () => {
        if (visibleDiv === 'genInfoPreview') {
            setVisibleDiv('genInfo2');
        } else if (visibleDiv === 'genInfo2') {
            setVisibleDiv('genInfo1');
        }
    };
    const addSecondaryContact = () => {
        setContacts((prevContacts) => [
            ...prevContacts,
            {
                id: prevContacts.length + 1,
                type: 'SECONDARY',
            },
        ]);
    };

    const removeContact = (id) => {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    };

    const handleCheckboxChange = () => {
        setIsSameAsPhysical((prev) => !prev);

        if (!isSameAsPhysical) {
            // If checkbox is checked, copy physical address to mailing address and make it readonly
            setMailingAddress({ ...physicalAddress });
        } else {
            // If checkbox is unchecked, clear mailing address and remove readonly attribute
            setMailingAddress({
                mailingAdd1: '',
                mailingAdd2: '',
                mailingCity: '',
                mailingState: '',
                mailingZIP_code: '',
                mailingLocation_Type: '',
            });
        }
    };

    const [company, setCompany] = useState('');

    const handleInputChanges = (e) => {

        setCompany(e.target.value);

        alert(company);

    }

    const handleInputChange = (field, value) => {
        // Update the corresponding field in physical address
        setPhysicalAddress((prev) => ({
            ...prev,
            [field]: value,
        }));

        // If checkbox is checked, update the corresponding field in mailing address
        if (isSameAsPhysical) {
            setMailingAddress((prev) => ({
                ...prev,
                [field]: value,
            }));
        }
    };

    const [selectedCompanyType, setSelectedCompanyType] = useState('');

    const [dialogContent, setDialogContent] = useState(null);
    const [showIndividualForm, setShowIndividualForm] = useState(false);
    const [showCompanyForm, setShowCompanyForm] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [isAnnualRevenue, setAnnualRevenue] = useState([{ year: "", desc: "" }, { year: "", desc: "" }, { year: "", desc: "" },])
    const [isFormValidate, setFormValidate] = useState({
        email: false,
    })
    const [isBusSizeCert, setBusSizeCert] = useState({ annualRevenue: "", amountOtherNMSDCCertMinority: "", amountOtherMinority: "", amountOherNMSDCCertMBE: "", amountOtherMBE: "", noOfOwner: "", noOfMinorityOwner: "", noOfFullTimeEmployee: "", noOfFullTimeMinorityEmployee: "", noOfPartTimeEmployee: "", noOfPartTimeMinorityEmployee: "", noOfContractEmployee: "", noOfContractMinorityEmployee: "", });

    const handleCompanyTypeChange = (e) => {

        if (e.target.value === "Public Market") {
            setShowIndividualForm(true);
            setShowCompanyForm(false);
            setDialogContent(<PublicMarket handleSave={handleSave} handleClose={handleClose} />);
            setOpen(true);
        }

        if (e.target.value === "Foreign Operating Company") {
            setShowIndividualForm(true);
            setShowCompanyForm(false);
            setDialogContent(<ForeignOperatingCompany handleSave={handleSave} handleClose={handleClose} />);
            setOpen(true);
        }

        if (e.target.value === "Family Office") {
            setShowIndividualForm(true);
            setShowCompanyForm(false);
            setDialogContent(<FamilyOffice handleSave={handleSave} handleClose={handleClose} />);
            setOpen(true);
        }

        if (e.target.value === "Independent Sponsor") {
            setShowIndividualForm(true);
            setShowCompanyForm(false);
            setDialogContent(<IndependentSponsor handleSave={handleSave} handleClose={handleClose} />);
            setOpen(true);
        }
        if (e.target.value === "Investment Fund") {
            setShowIndividualForm(true);
            setShowCompanyForm(false);
            setDialogContent(<InvestmentFund handleSave={handleSave} handleClose={handleClose} />);
            setOpen(true);
        }

        if (e.target.value === "Angel Investor Group") {
            setShowIndividualForm(true);
            setShowCompanyForm(false);
            console.log("Am i reachinfg")
            setDialogContent(<AngelInvestorGroup handleSave={handleSave} handleClose={handleClose} />);
            setOpen(true);
        }
        setSelectedCompanyType(e.target.value);
    };


    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



    const companyTypeOptions = [
        { value: '', label: 'Select Type Of Investors', disabled: true },
        { value: 'Angel Investor Group', label: 'Angel Investor Group' },
        { value: 'Independent Sponsor', label: 'Independent Sponsor' },
        { value: 'Investment Fund', label: 'Investment Fund' },
        { value: 'Family Office', label: 'Family Office' },
        { value: 'Foreign Operating Company', label: 'Foreign Operating Company' },
        { value: 'Public Market', label: 'Public Market' },
    ];

    const geographiesServed = [
        { value: "Local" },
        { value: "National" },
        { value: "International" },
        { value: "Regional" },
    ]

    const regional = [
        { value: "Central" },
        { value: "Intermountain West" },
        { value: "Mid Atlantic" },
        { value: "Northeast" },
        { value: "Northwest" },
        { value: "South Central" },
        { value: "Southeast" },
        { value: "Southwest" },
        { value: "West" },
    ]

    const otherCertification = [
        { value: "Ability One - Federal Program - the largest source of employment for people with disabilities" },
        { value: "AFA - Asian Farmers Association" },
        { value: "DOT - Department of Transportation" },
        { value: "DVBE - Disabled Veteran Businesses" },
        { value: "FAA - Federal Aviation Administration GFSI - Global Food Safety Initiative" },
        { value: "HUB - Women and/or Minority Owned Businesses in North Carolina or Texas" },
        { value: "ICBA - Independent Community of Bankers of America" },
        { value: "ISO 9000/9001 - Organization for Standardization" },
        { value: "NAMC National Association of Minority Contractors" },
        { value: "NAMWOLF - The National Association of Minority & Women Owned Law Firms" },
        { value: "NAVOBA - SDVBE - Service Disabled Veteran Business Enterprise" },
        { value: "NAVOBA - VBE - National Veterans Owned Business Association - Veteran Business Enterprise" },
        { value: "NBFA - National Black Farmers Association" },
        { value: "NGLCC - National Gay and Lesbian Chamber of Commerce" },
        { value: "NLFRTA - National Latino Farmers & Ranchers Trade Association" },
        { value: "SBA-8(a) - Minority and Women Owned Business certification for small disadvantaged business" },
        { value: "SDVOSB-Service-Disabled Veteran-Owned Small Business" },
        { value: "State - EDGE - Global Business Certification for Gender Equality" },
        { value: "State - SWAM - Small, women-owned and minority owed businesses in Virginia" },
        { value: "TNAFA - Traditional Native American Farmers Association" },
        { value: "USBLN - Disability Supplier Diversity Program" },
        { value: "WBENC - Women's Business Enterprise Council - Women owned and operated business certification" },
        { value: "Other" },
    ]

    const handleClose = () => {
        setOpen(false);
    };


    const handleSave = (fileUpload, name) => {
        // setOpen(false);
        console.log("THIS IS WORKING -", fileUpload, name);


        dispatch(
            popUpFileHandling({ fileUpload: fileUpload, page: name })
        );

    };



    const handleNext = () => {
        dispatch(changeBusinessPage({ formName: "Additional Documents", step: "next" }))
    }

    const handleReturn = () => {
        dispatch(changeBusinessPage({ formName: "Business Acquastion & Opening licence", step: "prev" }))
    }

    const addMoreYears = () => {
        if (isAnnualRevenue.length <= 3) {
            setAnnualRevenue((prevSessions) => [
                ...prevSessions,
                { year: "", desc: "" },
            ])
        }
    }

    const handleDel = () => {
        setAnnualRevenue((prevSections) => prevSections.slice(0, -1));
    }

    function handleInputChangeCheck(e, fieldName, i, fieldType) { // ! use "i" if your form is array
        // * i condition is based on array or object
        if (handleCheckInput(e, fieldType, typeof i === "number" ? isAnnualRevenue[i][fieldName] : isBusSizeCert[fieldName])) {
            updateField(fieldName, e, i);
            if (fieldType === "email") {
                setFormValidate({ ...isFormValidate, email: false })
            }
        } else {
            updateField(fieldName, e, i);
            if (fieldType === "email") {
                setFormValidate({ ...isFormValidate, email: true })
                if (e.target.value.trim() === "") {
                    setFormValidate({ ...isFormValidate, email: false })
                }
            }
        }

        function updateField(fieldName, e, i) {
            if (typeof i === "number") {
                const dataToUpdate = [...isAnnualRevenue]
                dataToUpdate[i] = {
                    ...dataToUpdate[i],
                    [fieldName]: e.target.value,
                }
                setAnnualRevenue(dataToUpdate);
            } else {
                setBusSizeCert({ ...isBusSizeCert, [fieldName]: e.target.value });
            }
        }
    }

    return (
        <div className=' bg-white w-full flex flex-col'>
            <div className='px-8 pb-8 pt-4 bg-white w-full flex flex-col gap-8'>

                <div className=' border-[#D4D4D4] w-full border'></div>
                <div id='genInfo1' className='flex flex-col gap-8' style={{ display: visibleDiv === 'genInfo1' ? 'flex' : 'none' }}>
                    {/* BUSINESS INFORMATION start  */}
                    <div className='flex flex-col gap-6'>
                        <SectionTitle title="REVENUE, SIZE CERTIFICATION" />
                        <div className='flex flex-col gap-12'>
                            <div className='flex flex-col gap-2'>
                                <Label text="Is the company established less than a year" />
                                <div className='flex gap-4'>
                                    <div className="flex items-center h-6">
                                        <input id="establishedYear_Yes" type="radio" value="establishedYear_Yes" name="establishedYear" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setEstablishedYear(e.target.value)}
                                            checked={isEstablishedYear === 'establishedYear_Yes'} />
                                        <label htmlFor="establishedYear_Yes" className="ms-2 text-sm text-black ">Yes</label>
                                    </div>
                                    <div className="flex items-center h-6">
                                        <input id="establishedYear_No" type="radio" value="establishedYear_No" name="establishedYear" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setEstablishedYear(e.target.value)}
                                            checked={isEstablishedYear === 'establishedYear_No'} />
                                        <label htmlFor="establishedYear_No" className="ms-2 text-sm text-black ">No</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <Label text="Annual Revenue - Current YTD" />
                        <InputField type="text" placeholder="Enter Amount in Dollars" onChange={(e) => handleInputChangeCheck(e, "annualRevenue", undefined, "number")} value={isBusSizeCert["annualRevenue"]} />
                    </div>
                    {/* BUSINESS INFORMATION end  */}
                    {/* <div className=' border-[#D4D4D4] w-full border'></div> */}
                    {/* PHYSICAL ADDRESS start  */}
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-2 items-center relative'>
                            <Label text="Annual Revenue (Most Recent Years)" />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex gap-8'>
                                <div className='w-1/3'>
                                    <Label text="Year" required='*' />
                                    {/* <InputField type="text" placeholder="Enter Number" /> */}
                                </div>
                                <div className='w-2/3'>
                                    <Label text="Revenue" required='*' />
                                    {/* <InputField type="text" placeholder="Enter Number" /> */}
                                </div>
                            </div>
                            {
                                isAnnualRevenue.map((elem, i) => {
                                    return (
                                        <div key={i} className='flex gap-8'>
                                            <div className='w-1/3'>
                                                <InputField type="text" placeholder="Enter year" onChange={(e) => handleInputChangeCheck(e, "year", i, "years")} value={isAnnualRevenue[i]["years"]} />
                                            </div>
                                            <div className='w-2/3'>
                                                <InputField type="text" placeholder="Enter Amount in Dollars" onChange={(e) => handleInputChangeCheck(e, "desc", i, "number")} value={isAnnualRevenue[i]["desc"]} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* <div className='flex gap-8'>
                                <div className='w-1/3'>
                                    <InputField type="text" placeholder="Enter year" />
                                </div>
                                <div className='w-2/3'>
                                    <InputField type="text" placeholder="Enter Amount in Dollars" />
                                </div>
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-1/3'>
                                    <InputField type="text" placeholder="Enter year" />
                                </div>
                                <div className='w-2/3'>
                                    <InputField type="text" placeholder="Enter Amount in Dollars" />
                                </div>
                            </div> */}
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <button onClick={addMoreYears} className="text-blue-950 text-[17px] font-normal font-['Degular Demo'] leading-tight cursor-pointer">+ Add More</button>
                            {
                                isAnnualRevenue.length > 1 &&
                                <button onClick={() => handleDel()}>
                                    <RiDeleteBin6Line className='text-[red]' />
                                </button>
                            }
                        </div>
                        <div className='flex flex-col gap-8'>
                            <div className='w-full flex flex-col gap-2'>
                                <Label text="Amount spent with other NMSDC certified Minority Businesses" />
                                <InputField type="text" placeholder="Enter Amount" onChange={(e) => handleInputChangeCheck(e, "amountOtherNMSDCCertMinority", undefined, "number")} value={isBusSizeCert["amountOtherNMSDCCertMinority"]} />
                            </div>
                            <div className=' border-[#D4D4D4] w-full border'></div>
                            <div className='w-full flex flex-col gap-2'>
                                <Label text="Amount spent with other Minority Businesses" />
                                <InputField type="text" placeholder="Enter Amount" onChange={(e) => handleInputChangeCheck(e, "amountOtherMinority", undefined, "number")} value={isBusSizeCert["amountOtherMinority"]} />
                            </div>
                            <div className=' border-[#D4D4D4] w-full border'></div>

                            {/* <div className='flex gap-8'>
                                <Label text="Year" required='*' />

                                <div className='w-1/2'>
                                    <InputField type="text" placeholder="Enter Number" />
                                </div>
                                <div className='w-1/2'>
                                    <InputField type="text" placeholder="Enter Number" />
                                </div>
                                <div className='w-1/2'>
                                    <InputField type="text" placeholder="Enter Number" />
                                </div>
                                <div className='w-1/2'>
                                    <InputField type="text" placeholder="Enter Number" />
                                </div>

                            </div> */}
                            <div className='w-full flex flex-col gap-2'>
                                <Label text="How Are Taxes Filed" required='*' />
                                <div className='w-full flex items-center justify-start gap-4'>
                                    <div className="px-4 py-2 bg-[#F1F1F1] border justify-start items-center gap-[7px] flex cursor-pointer">
                                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='checkbox' />Sole Proprietorship</div>
                                    </div>
                                    <div className="px-4 py-2 bg-[#F1F1F1] border justify-start items-center gap-[7px] flex cursor-pointer">
                                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='checkbox' />Corporation</div>
                                    </div>
                                    <div className="px-4 py-2 bg-[#F1F1F1] border justify-start items-center gap-[7px] flex cursor-pointer">
                                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='checkbox' />LLC</div>
                                    </div>
                                    <div className="px-4 py-2 bg-[#F1F1F1] border justify-start items-center gap-[7px] flex cursor-pointer">
                                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='checkbox' />LLP</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Amount spent with other NMSDC certified MBE's" required='*' toolTipText={``} />
                                    <InputField type="text" placeholder="Enter Number" onChange={(e) => handleInputChangeCheck(e, "amountOherNMSDCCertMBE", undefined, "number")} value={isBusSizeCert["amountOherNMSDCCertMBE"]} />
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Amount spent with other MBE's" required='*' toolTipText={``} />
                                    <InputField type="text" placeholder="Enter Number" onChange={(e) => handleInputChangeCheck(e, "amountOtherMBE", undefined, "number")} value={isBusSizeCert["amountOtherMBE"]} />
                                </div>
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Number of Owners" required='*' toolTipText={``} />
                                    <InputField type="text" placeholder="Enter Number" onChange={(e) => handleInputChangeCheck(e, "noOfOwner", undefined, "number")} value={isBusSizeCert["noOfOwner"]} />
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Number of Minority Owners" required='*' toolTipText={``} />
                                    <InputField type="text" placeholder="Enter Number" onChange={(e) => handleInputChangeCheck(e, "noOfMinorityOwner", undefined, "number")} value={isBusSizeCert["noOfMinorityOwner"]} />
                                </div>
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Number of Full-Time Employee" required='*' toolTipText={``} />
                                    <InputField type="text" placeholder="Enter Number" onChange={(e) => handleInputChangeCheck(e, "noOfFullTimeEmployee", undefined, "number")} value={isBusSizeCert["noOfFullTimeEmployee"]} />
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Number of Full-Time Minority Employee" required='*' />
                                    <InputField type="text" placeholder="Enter Number" onChange={(e) => handleInputChangeCheck(e, "noOfFullTimeMinorityEmployee", undefined, "number")} value={isBusSizeCert["noOfFullTimeMinorityEmployee"]} />
                                </div>
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Number of Part-Time Employees" required='*' />
                                    <InputField type="text" placeholder="Enter Number" onChange={(e) => handleInputChangeCheck(e, "noOfPartTimeEmployee", undefined, "number")} value={isBusSizeCert["noOfPartTimeEmployee"]} />
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Number of Part-Time Minority Employees" required='*' />
                                    <InputField type="text" placeholder="Enter Number" onChange={(e) => handleInputChangeCheck(e, "noOfPartTimeMinorityEmployee", undefined, "number")} value={isBusSizeCert["noOfPartTimeMinorityEmployee"]} />
                                </div>
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Number of Contract(1099) Employees" required='*' />
                                    <InputField type="text" placeholder="Enter Number" onChange={(e) => handleInputChangeCheck(e, "noOfContractEmployee", undefined, "number")} value={isBusSizeCert["noOfContractEmployee"]} />
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Number of Contract(1099) Minority Employees" required='*' />
                                    <InputField type="text" placeholder="Enter Number" onChange={(e) => handleInputChangeCheck(e, "noOfContractMinorityEmployee", undefined, "number")} value={isBusSizeCert["noOfContractMinorityEmployee"]} />
                                </div>
                            </div>
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Geographies Served" required='*' />
                                    <Dropdown value={isGeographiesServed} onChange={(e) => setGeographiesServed(e.target.value)} options={geographiesServed} optionLabel="value" placeholder={`Select`} className="w-full outline-none font-['Degular Demo'] px-2 text-slate-500 border border-zinc-200 shadow h-11" />
                                    {/* <InputField type="text" placeholder="Enter Number" /> */}
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Regional" required='*' />
                                    <MultiSelect
                                        value={isRegional}
                                        onChange={(e) => setRegional(e.value)}
                                        options={regional}
                                        optionLabel="value"
                                        placeholder="Select"
                                        maxSelectedLabels={9}
                                        className="relative outline-none w-full px-2 border border-zinc-200 shadow h-11"
                                    />
                                    {/* <InputField type="text" placeholder="Enter Number" /> */}
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label text="Previous NMSDC Cert Application" />
                                <div className='flex gap-4'>
                                    <div className="flex items-center h-6">
                                        <input id="previousCert_Yes" type="radio" value="previousCert_Yes" name="previousCert" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setPreviousCert(e.target.value)}
                                            checked={isPreviousCert === 'previousCert_Yes'} />
                                        <label htmlFor="previousCert_Yes" className="ms-2 text-sm text-black ">Yes</label>
                                    </div>
                                    <div className="flex items-center h-6">
                                        <input id="previousCert_No" type="radio" value="previousCert_No" name="previousCert" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setPreviousCert(e.target.value)}
                                            checked={isPreviousCert === 'previousCert_No'} />
                                        <label htmlFor="previousCert_No" className="ms-2 text-sm text-black ">No</label>
                                    </div>
                                </div>
                            </div>
                            {
                                isPreviousCert === "previousCert_Yes" &&
                                <div className='w-full flex flex-col gap-2'>
                                    <Label text="Last Certification date" />
                                    <InputField type="date" placeholder="Select Date" />
                                </div>
                            }
                            <div className='w-full flex flex-col gap-2'>
                                <Label text="Other Certification" />
                                <Dropdown value={isOtherCertification} onChange={(e) => setOtherCertification(e.target.value)} options={otherCertification} optionLabel="value" placeholder={`Select`} className="w-full outline-none font-['Degular Demo'] px-2 text-slate-500 border border-zinc-200 shadow h-11" />
                                <InputField type="text" placeholder="Add comment if any" />
                                {/* <InputField id="physicalAdd1" type="text" placeholder="Line 1" name='physicalAdd1' /> */}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label text="Which Designation is your Company Applying For?" />
                                <div className='flex gap-4'>
                                    <div className="flex items-center h-6">
                                        <input id="designationApply_Yes" type="radio" value="designationApply_Yes" name="designationApply" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setDesignationApply(e.target.value)}
                                            checked={isDesignationApply === 'designationApply_Yes'} />
                                        <label htmlFor="designationApply_Yes" className="ms-2 text-sm text-black ">Minority- Controlled Private Held</label>
                                    </div>
                                    <div className="flex items-center h-6">
                                        <input id="designationApply_No" type="radio" value="designationApply_No" name="designationApply" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setDesignationApply(e.target.value)}
                                            checked={isDesignationApply === 'designationApply_No'} />
                                        <label htmlFor="designationApply_No" className="ms-2 text-sm text-black ">Minority- Controlled Publicly Traded</label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label text={`The investment transaction requiring Growth Initiative certification (the "Transaction")`} />
                                <div className='flex gap-4'>
                                    <div className="flex items-center h-6">
                                        <input id="initiativeCert_NotClosed" type="radio" value="initiativeCert_NotClosed" name="initiativeCert" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setInitiativeCert(e.target.value)}
                                            checked={isInitiativeCert === 'initiativeCert_NotClosed'} />
                                        <label htmlFor="initiativeCert_NotClosed" className="ms-2 text-sm text-black ">Has not Closed Yet</label>
                                    </div>
                                    <div className="flex items-center h-6">
                                        <input id="initiativeCert_Closed" type="radio" value="initiativeCert_Closed" name="initiativeCert" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setInitiativeCert(e.target.value)}
                                            checked={isInitiativeCert === 'initiativeCert_Closed'} />
                                        <label htmlFor="initiativeCert_Closed" className="ms-2 text-sm text-black ">Closed</label>
                                    </div>
                                    <div className="flex items-center h-6">
                                        <input id="initiativeCert_NA" type="radio" value="initiativeCert_NA" name="initiativeCert" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setInitiativeCert(e.target.value)}
                                            checked={isInitiativeCert === 'initiativeCert_NA'} />
                                        <label htmlFor="initiativeCert_NA" className="ms-2 text-sm text-black ">Not Applicable</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <Label text="Closing Date of Transaction" />
                            <InputField type="Date" placeholder="Select Date" />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <Label text="Are you a Corporate Plus Member?" />
                            <div className='flex gap-4'>
                                <div className="flex items-center h-6">
                                    <input id="corporatePlusMember_Yes" type="radio" value="corporatePlusMember_Yes" name="corporatePlusMember" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setCorporatePlusMember(e.target.value)}
                                        checked={isCorporatePlusMember === 'corporatePlusMember_Yes'} />
                                    <label htmlFor="corporatePlusMember_Yes" className="ms-2 text-sm text-black ">Yes</label>
                                </div>
                                <div className="flex items-center h-6">
                                    <input id="corporatePlusMember_No" type="radio" value="corporatePlusMember_No" name="corporatePlusMember" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setCorporatePlusMember(e.target.value)}
                                        checked={isCorporatePlusMember === 'corporatePlusMember_No'} />
                                    <label htmlFor="corporatePlusMember_No" className="ms-2 text-sm text-black ">No</label>
                                </div>
                            </div>
                        </div>
                        {
                            isCorporatePlusMember === "corporatePlusMember_Yes" &&
                            <div className='w-dull flex flex-col gap-2'>
                                <Label text="Name of Corporate Sponsor" />
                                <InputField type="text" placeholder="Enter Sponsor Name" />
                            </div>
                        }
                        <div className='flex flex-col gap-2'>
                            <Label text="Do you have an Investment from a Qualified Program Investor?" />
                            <div className='flex gap-4'>
                                <div className="flex items-center h-6">
                                    <input id="qualifiedProgramInvestor_Yes" type="radio" value="qualifiedProgramInvestor_Yes" name="qualifiedProgramInvestor" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setQualifiedProgramInvestor(e.target.value)}
                                        checked={isQualifiedProgramInvestor === 'qualifiedProgramInvestor_Yes'} />
                                    <label htmlFor="qualifiedProgramInvestor_Yes" className="ms-2 text-sm text-black ">Yes</label>
                                </div>
                                <div className="flex items-center h-6">
                                    <input id="qualifiedProgramInvestor_No" type="radio" value="qualifiedProgramInvestor_No" name="qualifiedProgramInvestor" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setQualifiedProgramInvestor(e.target.value)}
                                        checked={isQualifiedProgramInvestor === 'qualifiedProgramInvestor_No'} />
                                    <label htmlFor="qualifiedProgramInvestor_No" className="ms-2 text-sm text-black ">No</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-2 relative'>
                                <Label text="Type of Investor" />
                                {
                                    selectedCompanyType &&
                                    <MdModeEdit className='text-blue-950 cursor-pointer absolute left-28' onClick={() => handleCompanyTypeChange({ target: { value: selectedCompanyType } })} />
                                }
                            </div>
                            <div className="w-full bg-white rounded shadow border border-zinc-200 justify-start items-center text-slate-900">
                                <SelectWrapper name={"company"} id={"company"} label={"Select Type Of Investors"} options={companyTypeOptions} onChange={handleCompanyTypeChange}
                                    value={selectedCompanyType} />
                            </div>

                            <React.Fragment>
                                <Dialog
                                    PaperProps={{
                                        style: {
                                            minWidth: "1200px",
                                            maxWidth: "1200px",
                                            border: "1px solid #000000",
                                            borderRadius: "0",
                                            boxShadow: "none",
                                        },
                                    }}
                                    fullScreen={fullScreen}
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="responsive-dialog-title"
                                >
                                    {/* <DialogTitle id="responsive-dialog-title">
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText> */}
                                    {/* <IndividualForm/> */}
                                    {dialogContent}
                                    {/* <CompanyForm/> */}
                                    {/* </DialogContentText>
                                    </DialogContent> */}
                                    {/* <DialogActions>
                                        <Button autoFocus onClick={handleClose}>
                                            Disagree
                                        </Button>
                                        <Button onClick={handleSave} autoFocus>
                                            Agree
                                        </Button>
                                    </DialogActions> */}
                                </Dialog>
                            </React.Fragment>
                        </div>
                        {/* <div className='w-1/2'>
                            <Label text="Company name" />
                            <InputField id="PrOwAltEmAdd" type="text" placeholder="Enter Company name" name='PrOwAltEmAdd' />
                        </div>
                        <div className='w-1/2'>
                            <Label text="Address" />
                            <InputField id="PrOwAltEmAdd" type="text" placeholder="Enter company address" name='PrOwAltEmAdd' />
                        </div>
                        <div className='flex gap-8'>
                            <div className='w-1/2'>
                                <Label text="Country" />
                                <InputField type="text" placeholder="Select Country" />
                            </div>
                            <div className='w-1/2'>
                                <Label text="State" />
                                <InputField type="text" placeholder="Select State" />
                            </div>
                        </div>
                        <div className='flex gap-8'>
                            <div className='w-1/2'>
                                <Label text="City" />
                                <InputField type="text" placeholder="Select City" />
                            </div>
                            <div className='w-1/2'>
                                <Label text="Zipcode" />
                                <InputField type="text" placeholder="Enter Zipcode" />
                            </div>
                        </div>
                        <div className='flex gap-8'>
                            <div className='w-1/2'>
                                <Label text="Website" />
                                <InputField type="text" placeholder="https://example.com" />
                            </div>

                        </div>
                        <div>
                            <Label text="Background of the Group and Investment Strategy" />
                            <InputField type="text" placeholder="Enter Company Name" />
                        </div>
                        <div className='flex gap-8'>
                            <div className='w-1/2'>
                                <Label text="Number of Investor in Group" />
                                <InputField type="text" placeholder="Enter Number of Investor" />
                            </div>
                            <div className='w-1/2'>
                                <Label text="Number of Minority Investor" />
                                <InputField type="text" placeholder="Enter Number of Minority Investor" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label text="Does the Firm have a Minimum of $10 Million Assets under Management?" />
                            <div className='flex gap-4'>
                                <div className="flex items-center h-6">
                                    <input id="millionAssets_Yes" type="radio" value="millionAssets_Yes" name="millionAssets" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setMillionAssets(e.target.value)}
                                        checked={isMillionAssets === 'millionAssets_Yes'} />
                                    <label htmlFor="millionAssets_Yes" className="ms-2 text-sm text-black ">Yes</label>
                                </div>
                                <div className="flex items-center h-6">
                                    <input id="millionAssets_No" type="radio" value="millionAssets_No" name="millionAssets" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setMillionAssets(e.target.value)}
                                        checked={isMillionAssets === 'millionAssets_No'} />
                                    <label htmlFor="millionAssets_No" className="ms-2 text-sm text-black ">No</label>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* PHYSICAL ADDRESS end  */}
                    {/* <div className=' border-[#D4D4D4] w-full border'></div> */}
                    {/* <div className="self-stretch min-h-min flex-col justify-start items-start gap-6 flex">
                        <div className="text-center text-zinc-500 text-base font-normal font-['Degular Demo'] uppercase leading-tight">Document Upload</div>
                        <div className="self-stretch h-full flex-col justify-start items-start gap-12 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                    <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                        <div className="self-stretch justify-between items-center inline-flex">
                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Accredited Investor Letter</div>
                                            </div>
                                            <label className='cursor-pointer' htmlFor='TrustAgreement'>
                                                <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                    <div className="w-5 h-5 relative" >
                                                        <img src={Cloud} alt="" />
                                                    </div>
                                                    <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='TrustAgreement' />Upload</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="justify-start items-start gap-4 inline-flex">
                                            <PdfComp />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                    <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                        <div className="self-stretch justify-between items-center inline-flex">
                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Portfolio Investments</div>
                                            </div>
                                            <label className='cursor-pointer' htmlFor='ArticlesCertificate'>
                                                <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                    <div className="w-5 h-5 relative" >
                                                        <img src={Cloud} alt="" />
                                                    </div>
                                                    <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='ArticlesCertificate' />Upload</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="justify-start items-start gap-4 inline-flex">
                                            <PdfComp />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Realized Gain or Loss</div>
                                        </div>
                                        <label className='cursor-pointer' htmlFor='ArticlesCertificate'>
                                            <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                <div className="w-5 h-5 relative" >
                                                    <img src={Cloud} alt="" />
                                                </div>
                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='ArticlesCertificate' />Upload</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="justify-start items-start gap-4 inline-flex">
                                        <PdfComp />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Notes Payable</div>
                                        </div>
                                        <label className='cursor-pointer' htmlFor='ArticlesCertificate'>
                                            <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                <div className="w-5 h-5 relative" >
                                                    <img src={Cloud} alt="" />
                                                </div>
                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='ArticlesCertificate' />Upload</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="justify-start items-start gap-4 inline-flex">
                                        <PdfComp />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Tax Returns</div>
                                        </div>
                                        <label className='cursor-pointer' htmlFor='ArticlesCertificate'>
                                            <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                <div className="w-5 h-5 relative" >
                                                    <img src={Cloud} alt="" />
                                                </div>
                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='ArticlesCertificate' />Upload</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="justify-start items-start gap-4 inline-flex">
                                        <PdfComp />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Profit and Loss Statement</div>
                                        </div>
                                        <label className='cursor-pointer' htmlFor='ArticlesCertificate'>
                                            <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                <div className="w-5 h-5 relative" >
                                                    <img src={Cloud} alt="" />
                                                </div>
                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='ArticlesCertificate' />Upload</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="justify-start items-start gap-4 inline-flex">
                                        <PdfComp />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Balance Sheet</div>
                                        </div>
                                        <label className='cursor-pointer' htmlFor='ArticlesCertificate'>
                                            <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                <div className="w-5 h-5 relative" >
                                                    <img src={Cloud} alt="" />
                                                </div>
                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='ArticlesCertificate' />Upload</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="justify-start items-start gap-4 inline-flex">
                                        <PdfComp />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> */}

                </div>
                {/* form1 main div end  */}
                {/* ----------------------------------------------------------------- */}
                {/* form2 main div start  */}
                <div id='genInfo2' className='flex flex-col gap-8' style={{ display: visibleDiv === 'genInfo2' ? 'flex' : 'none' }}>
                    {/* PRIMARY OWNER DETAILS start */}
                    <div className='flex flex-col gap-6'>
                        <SectionTitle title="PRIMARY OWNER DETAILS" />
                        <div className='flex flex-col gap-12'>
                            <div className='flex gap-8'>
                                <div className='w-1/2'>
                                    <Label text="First Name" required='*' />
                                    <InputField id="PrOwFirName" type="text" placeholder="Enter First Name" name='PrOwFirName' />
                                </div>
                                <div className='w-1/2'>
                                    <Label text="Last Name" required='*' />
                                    <InputField id="PrOwLasName" type="text" placeholder="Enter Last Name" name='PrOwLasName' />
                                </div>
                            </div>

                            <div>
                                <Label text="Title" required='*' />
                                <InputField id="PrOwTitle" type="text" placeholder="Enter Designation" name='PrOwTitle' />
                            </div>

                            <div className='flex gap-8'>
                                <div className='w-1/2'>
                                    <Label text="Primary Number" required='*' />
                                    <InputField id="PrOwPriNum" type="text" placeholder="Enter Primary Number" name='PrOwPriNum' />
                                    <div className='flex gap-4 mt-2'>
                                        <div className="flex items-center">
                                            <input id="PrOwPriNumMob" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-[50%] dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="PrOwPriNumMob" className="ms-2 text-sm  text-[#525866] ">Mobile</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="PrOwPriNumOth" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="PrOwPriNumOth" className="ms-2 text-sm  text-[#525866] ">Other</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <Label text="Alternate Phone Number" />
                                    <InputField id="PrOwAltPhNum" type="text" placeholder="Enter Alternate Phone Number" name='PrOwAltPhNum' />
                                    <div className='flex gap-4 mt-2'>
                                        <div className="flex items-center">
                                            <input id="PrOwAltPhNumMob" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="PrOwAltPhNumMob" className="ms-2 text-sm  text-[#525866] ">Mobile</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="PrOwAltPhNumOth" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="PrOwAltPhNumOth" className="ms-2 text-sm  text-[#525866] ">Other</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-8'>
                                <div className='w-1/2'>
                                    <Label text="Email Address" required='*' />
                                    <InputField id="PrOwEmAdd" type="text" placeholder="Enter Email Address" name='PrOwEmAdd' />
                                </div>
                                <div className='w-1/2'>
                                    <Label text="Alternate Email Address" />
                                    <InputField id="PrOwAltEmAdd" type="text" placeholder="Enter Alternate Email Address" name='PrOwAltEmAdd' />
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* PRIMARY OWNER DETAILS end  */}
                    <div className=' border-[#D4D4D4] w-full border'></div>
                    {/* PRIMARY CONTACT DETAILS start */}
                    {contacts.map((contact, index) => (
                        <div key={contact.id} className='flex flex-col gap-6'>
                            <div className='flex justify-between'>
                                <SectionTitle title={`${contact.type} CONTACT DETAILS`} />
                                {index > 0 && (
                                    <div className="flex items-center">
                                        <p role='button' onClick={() => removeContact(contact.id)}>
                                            <RiDeleteBin6Line className='text-[red]' />
                                        </p>
                                    </div>
                                )}
                                {index === 0 && (
                                    <div className="flex items-center">
                                        <input id="PRIMARY_CONTACT_DETAILS_checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded     dark:bg-gray-700 dark:border-gray-600" name='samePriCont' />
                                        <label for="PRIMARY_CONTACT_DETAILS_checkbox" className="ms-2 text-sm text-[#141F58] ">same as primary </label>
                                    </div>
                                )}
                            </div>
                            <div className='flex flex-col gap-12'>
                                <div className='flex gap-8'>
                                    <div className='w-1/2'>
                                        <Label text="First Name" required='*' />
                                        <InputField id="PrOwFirName" type="text" placeholder="Enter First Name" name='PrOwFirName' />
                                    </div>
                                    <div className='w-1/2'>
                                        <Label text="Last Name" required='*' />
                                        <InputField id="PrOwLasName" type="text" placeholder="Enter Last Name" name='PrOwLasName' />
                                    </div>
                                </div>

                                <div>
                                    <Label text="Title" required='*' />
                                    <InputField id="PrOwTitle" type="text" placeholder="Enter Designation" name='PrOwTitle' />
                                </div>

                                <div className='flex gap-8'>
                                    <div className='w-1/2'>
                                        <Label text="Primary Number" required='*' />
                                        <InputField id="PrOwPriNum" type="text" placeholder="Enter Primary Number" name='PrOwPriNum' />
                                        <div className='flex gap-4 mt-2'>
                                            <div className="flex items-center">
                                                <input id="PrOwDetPriNumMob" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-[50%] dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="PrOwDetPriNumMob" className="ms-2 text-sm  text-[#525866] ">Mobile</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="PrOwDetPriNumOth" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="PrOwDetPriNumOth" className="ms-2 text-sm  text-[#525866] ">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <Label text="Alternate Phone Number" />
                                        <InputField id="PrOwAltPhNum" type="text" placeholder="Enter Alternate Phone Number" name='PrOwAltPhNum' />
                                        <div className='flex gap-4 mt-2'>
                                            <div className="flex items-center">
                                                <input id="PrOwDetAltPhNumMob" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="PrOwDetAltPhNumMob" className="ms-2 text-sm  text-[#525866] ">Mobile</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="PrOwDetAltPhNumOth" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="PrOwDetAltPhNumOth" className="ms-2 text-sm  text-[#525866] ">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-8'>
                                    <div className='w-1/2'>
                                        <Label text="Email Address" required='*' />
                                        <InputField id="PrOwEmAdd" type="text" placeholder="Enter Email Address" name='PrOwEmAdd' />
                                    </div>
                                    <div className='w-1/2'>
                                        <Label text="Alternate Email Address" />
                                        <InputField id="PrOwAltEmAdd" type="text" placeholder="Enter Alternate Email Address" name='PrOwAltEmAdd' />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                    {/* PRIMARY CONTACT DETAILS end  */}
                    {contacts.length === 1 && (
                        <h5
                            id='addMoreContact'
                            className='flex gap-1 text-sm text-[#0045AC] cursor-pointer'
                            onClick={addSecondaryContact}
                        >
                            {/*<img src={plusIcon} alt="" /> */}Add Secondary Contact
                        </h5>
                    )}
                </div>
                {/* form2 main div end  */}
                {/* ----------------------------------------------------------------- */}
                {/* form preview main div start  */}
                <div id='genInfoPreview' style={{ display: visibleDiv === 'genInfoPreview' ? 'flex' : 'none' }}>
                    {/* Upload Documents start  */}
                    <div className='flex flex-col gap-6'>
                        <SectionTitle title='UPLOADED DOCUMENTS' />
                        <div className='flex flex-col gap-12'>
                            {DBAVisible &&
                                <div className='flex flex-col gap-3'>
                                    <div className='flex justify-between'>
                                        <Label text="Assumed Name Document/Fictious Business Statenment" />
                                        {/* <UploadComp /> */}
                                        {/* <UploadInp /> */}
                                    </div>
                                    <div className='flex flex-col gap-8'>
                                        <div className='flex gap-4'>
                                            <Pdf ></Pdf>
                                            <Pdf ></Pdf>
                                        </div>

                                        <InputField placeholder='Add comments if any' />
                                    </div>

                                </div>
                            }

                            <div className='flex flex-col gap-3'>
                                <div className='flex justify-between'>
                                    <Label text="Proof of Federal Employer ID Number (EIN)" />
                                    {/* <UploadComp /> */}
                                    {/* <UploadInp /> */}
                                </div>
                                <div className='flex flex-col gap-8'>
                                    <div className='flex gap-4'>
                                        <Pdf ></Pdf>
                                        <Pdf ></Pdf>
                                    </div>

                                    {/* <InputField placeholder='Add comments if any' /> */}
                                </div>

                            </div>

                            <div className='flex flex-col gap-3'>
                                <div className='flex justify-between'>
                                    <Label text="Business Lease Agreements" toolTipText='If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home
' />
                                    {/* <UploadComp /> */}
                                    {/* <UploadInp /> */}
                                </div>
                                <div className='flex flex-col gap-8'>
                                    <div className='flex gap-4'>
                                        <Pdf />
                                        <Pdf />
                                    </div>

                                    {/* <InputField placeholder='Add comments if any' /> */}
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Upload Documents end  */}

                </div>
                {/* form preview main div end  */}
            </div>
            {/* submit footer start */}
            {/* <div className='flex justify-between border-t-2 border-[#BDE1F4] px-8 py-4'>
                <div>
                    <div id='preButton' className='text-[#0045AC] flex gap-2 py-2' role='button' onClick={handlePrevClick} style={{ display: visibleDiv !== 'genInfo1' ? 'flex' : 'none' }}>
                        <img src={leftArrow} alt="" />
                        <h5>Previous</h5>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='border border-[#0045AC] text-[#0045AC] flex gap-1 px-3 py-2' role='button'>
                        <img src={save} alt="" />
                        <h5>Save as Draft</h5>
                    </div>
                    <div id='nextButton' className='px-3 py-2 flex gap-1 border-[#0045AC] bg-[#0045AC]' role='button' onClick={() => dispatch(changeFormToDisplayBusiness({ formName: "Additional Documents" }))}>
                        <h5 className='text-white'>Next</h5>
                        <img src={rightArrow} alt="" />
                    </div>
                </div>
            </div>*/}
            {/* submit footer end */}

            <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeBusinessPage({ formName: "Business Acquastion & Opening licence", step: "prev" })} actionNext={changeBusinessPage({ formName: "Additional Documents", step: "next" })} />
        </div>
    )
}
