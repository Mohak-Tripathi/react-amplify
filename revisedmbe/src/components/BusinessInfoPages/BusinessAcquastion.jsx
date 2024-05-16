import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import Pdf from "../../globalComponents/Pdf";
import SectionTitle from "../../globalComponents/SectionTitle";
import Label from "../../globalComponents/Label";
import InputField from "../../globalComponents/InputField";
import PdfComp from "../../globalComponents/PdfComp";
import { changeBusinessPage, changeFormToDisplayBusiness } from "../../features/displayPage/displayPageSlice";
import { useDispatch, useSelector } from "react-redux";
import FormFooter from "../../globalComponents/FormFooter";
import { Dropdown } from 'primereact/dropdown';
import PhoneInput from "react-phone-input-2";
import upload from "../../assests/images/uplod.png";
import FileUpload from '../../globalComponents/FileUpload';
import { handleCheckInput } from '../../helpers/inputFieldValidators';



export default function BusinessAcquastion() {

    const dispatch = useDispatch()
    const { businessacquisition } = useSelector((store) => store.businessInfo);
    const [DBAVisible, setDBAVisible] = useState(false);
    const [selectedDBARadio, setSelectedDBA] = useState('DBA_No');
    const [isAcquisitionType, setAcquisitionType] = useState([]);
    const [isAllStates, setAllStates] = useState([]);
    const [isSubsidiariesAffiliates, setSubsidiariesAffiliates] = useState("subsidiariesAffiliates_No");
    const [isSubsidiariesAffiliatesCompany, setSubsidiariesAffiliatesCompany] = useState([{ value: "", ein: "" }]);
    const [isSubsidiaryAnotherFirm, setSubsidiaryAnotherFirm] = useState("subsidiaryAnotherFirm_No");
    const [isSubsidiariesAnotherFirm, setSubsidiariesAnotherFirm] = useState({ ein: "" });
    const [isFormValidate, setFormValidate] = useState({
        email: false,
    })
    const [isPhoneDropDown, SetPhoneDropDown] = useState(null)
    const [isPhoneDropDown2, SetPhoneDropDown2] = useState(null)

    const [websiteVisible, setWebsiteVisible] = useState(false);
    const [selectedWebsiteRadio, setSelectedWebsite] = useState('website_No');

    const [addFacilVisible, setaddFacilVisible] = useState(false);
    const [selectedaddFacilRadio, setSelectedaddFacil] = useState('addFacil_No');

    const [isPdfAcq, setPdfAcq] = useState(Object.keys(businessacquisition).length >= 1 ? businessacquisition : {})

    const [facilities, setFacilities] = useState([{ id: 1 }]);

    const [visibleDiv, setVisibleDiv] = useState('genInfo1');

    const [contacts, setContacts] = useState([{ id: 1, type: 'PRIMARY', },]);


    // const [fileUpload, setFileUpload] = useState(Object.keys(businessacquisition).length >= 1 ? businessacquisition : {});

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

    const handleNext = () => {
        dispatch(changeBusinessPage({ formName: "Business Size & Certifications", step: "next", fileUpload: isPdfAcq, page: "businessacquisition" }))
    }

    const handleReturn = () => {
        dispatch(changeBusinessPage({ formName: "Other Ownership Considerations", step: "prev" }))
    }

    const acquisitionType = [
        { value: "Started Business" },
        { value: "Bought Existing Business" },
        { value: "Gifted/Inherited Business" },
        { value: "Merger or Consolidation" },
        { value: "Secured a Franchise" },
    ]

    const allStates = [
        { value: "Started Business" },
        { value: "Bought Existing Business" },
        { value: "Gifted/Inherited Business" },
        { value: "Merger or Consolidation" },
        { value: "Secured a Franchise" },
    ]

    function handleAddMore() {
        if (isSubsidiariesAffiliatesCompany.length <= 3) {
            setSubsidiariesAffiliatesCompany((prevSessions) => [
                ...prevSessions,
                { type: "", outstandingShare: "", minoritySharesOwned: "", minorityOwnerPercentage: "" },
            ])
        }
    };

    const subsidiariesAffiliatesCompanyDelete = (index) => {
        setSubsidiariesAffiliatesCompany((prevSessions) => prevSessions.filter((_, i) => i !== index));
    }

    const onFilesChange = (e) => {
        console.log(e);
    }

    function handleInputChangeCheck(e, fieldName, i, fieldType) { // ! use "i" if your form is array
        // * i condition is based on array or object
        if (handleCheckInput(e, fieldType, typeof i === "number" ? isSubsidiariesAffiliatesCompany[i][fieldName] : isSubsidiariesAnotherFirm[fieldName])) {
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
                const dataToUpdate = [...isSubsidiariesAffiliatesCompany]
                dataToUpdate[i] = {
                    ...dataToUpdate[i],
                    [fieldName]: e.target.value,
                }
                setSubsidiariesAffiliatesCompany(dataToUpdate);
            } else {
                setSubsidiariesAnotherFirm({ ...isSubsidiariesAnotherFirm, [fieldName]: e.target.value });
            }
        }
    }

    return (
        <div className=' bg-white w-full flex flex-col'>
            <div className='px-8 pb-8 pt-4 bg-white w-full flex flex-col gap-8'>
                {/* form progress bar/tab start */}
                {/* form progress bar/tab end */}
                <div className=' border-[#D4D4D4] w-full border'></div>
                {/* form1 main div start  */}
                <div id='genInfo1' className='flex flex-col gap-8' style={{ display: visibleDiv === 'genInfo1' ? 'flex' : 'none' }}>
                    {/* BUSINESS INFORMATION start  */}
                    <div className='flex flex-col gap-6'>
                        <SectionTitle title="BUSINESS ACQUASITION & LICENSES" />
                        <div className='flex flex-col gap-12'>
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Acquisition Type" required='*' />
                                    <Dropdown value={isAcquisitionType} onChange={(e) => setAcquisitionType(e.target.value)} options={acquisitionType} optionLabel="value" placeholder={`Select Type`} className="w-full outline-none font-['Degular Demo'] h-11 px-2 text-slate-500 border border-zinc-200  shadow " />
                                    {/* <InputField type="text" placeholder="Select" /> */}
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Date started or Acquired" required={`*`} />
                                    <InputField type="date" placeholder="Enter Dun & Bradstreet Number" />
                                </div>
                            </div>

                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="State of firm or establishment" required='*' />
                                    <Dropdown value={isAllStates} onChange={(e) => setAllStates(e.target.value)} options={allStates} optionLabel="value" placeholder={`Select State of Establishment`} className="w-full outline-none font-['Degular Demo'] h-11 px-2 text-slate-500 border border-zinc-200  shadow " />
                                    {/* <InputField id="EIN" type="number" placeholder="(xx-xxxxxxx)" name='EIN' readOnly /> */}
                                </div>
                                <div className='w-1/2 flex flex-col gap-2'>
                                    <Label text="Operating License Expiration date" required={`*`} />
                                    <InputField type="date" placeholder="Enter Dun & Bradstreet Number" />
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <Label text="Does the applicant company have any subsidiaries or affiliates?" />
                                <div className='flex gap-4'>
                                    <div className="flex items-center h-6">
                                        <input id="subsidiariesAffiliates_Yes" type="radio" value="subsidiariesAffiliates_Yes" name="subsidiariesAffiliates" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setSubsidiariesAffiliates(e.target.value)}
                                            checked={isSubsidiariesAffiliates === 'subsidiariesAffiliates_Yes'} />
                                        <label htmlFor="subsidiariesAffiliates_Yes" className="ms-2 text-sm text-black ">Yes</label>
                                    </div>
                                    <div className="flex items-center h-6">
                                        <input id="subsidiariesAffiliates_No" type="radio" value="subsidiariesAffiliates_No" name="subsidiariesAffiliates" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setSubsidiariesAffiliates(e.target.value)}
                                            checked={isSubsidiariesAffiliates === 'subsidiariesAffiliates_No'} />
                                        <label htmlFor="subsidiariesAffiliates_No" className="ms-2 text-sm text-black ">No</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* BUSINESS INFORMATION end  */}
                    {/* <div className=' border-[#D4D4D4] w-full border'></div> */}
                    {/* PHYSICAL ADDRESS start  */}

                    {
                        isSubsidiariesAffiliates === "subsidiariesAffiliates_Yes" &&
                        <>
                            {
                                isSubsidiariesAffiliatesCompany.map((elem, i) => {
                                    return (
                                        <div key={i} className='flex flex-col gap-4'>
                                            <div className='w-full flex justify-between items-center'>
                                                <SectionTitle title={`COMPANY ${i + 1}`} />
                                                {
                                                    isSubsidiariesAffiliatesCompany.length > 1 &&
                                                    <button onClick={() => subsidiariesAffiliatesCompanyDelete(i)}>
                                                        <RiDeleteBin6Line className='text-[red]' />
                                                    </button>
                                                }
                                            </div>
                                            <div className='flex flex-col gap-6 border border-zinc-200 shadow px-4 pt-2 pb-4'>
                                                <div className='w-full flex flex-col gap-2'>
                                                    <Label text="Company Name" />
                                                    <InputField type="text" placeholder="Enter Company Name" />
                                                </div>
                                                <div className='w-full flex flex-col gap-2'>
                                                    <Label text="Address" />
                                                    <InputField type="text" placeholder="Enter Company Address" />
                                                </div>
                                                <div className='w-full flex gap-8'>
                                                    <div className='w-1/2 flex flex-col gap-2'>
                                                        <Label text="Phone Number" />
                                                        <PhoneInput
                                                            country={"us"}
                                                            countryCodeEditable={false}
                                                            value={isPhoneDropDown}
                                                            onChange={(e) => SetPhoneDropDown(e)}
                                                            inputStyle={{
                                                                borderRadius: "0",
                                                                width: "100%",
                                                                height: "2.8rem",
                                                                border: "1px solid #E2E4E9",
                                                                boxShadow: '0px 1px 2px 0px rgba(228, 229, 231, 0.24)',
                                                            }}
                                                        />
                                                    </div>
                                                    <div className='w-1/2 flex flex-col gap-2'>
                                                        <Label text="Federal Employee ID Number (EIN)" />
                                                        <InputField type="text" placeholder="(xx-xxxxxxx)" onChange={(e) => handleInputChangeCheck(e, "ein", i, "ein")} value={isSubsidiariesAffiliatesCompany[i]["ein"]} />
                                                    </div>
                                                </div>
                                                <div className='w-full flex flex-col gap-2'>
                                                    <Label text="Relationship" />
                                                    <InputField type="text" placeholder="Enter Details" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div>
                                <button onClick={handleAddMore} className="text-blue-950 text-[17px] font-normal font-['Degular Demo'] leading-tight cursor-pointer">+ Add More</button>
                            </div>
                        </>
                    }

                    <div className='flex flex-col gap-6'>
                        {/* <SectionTitle title="PHYSICAL ADDRESS" /> */}
                        <div className='flex flex-col gap-8'>
                            <div className='flex flex-col gap-2'>
                                <Label text="Is the applicant company a subsidiary of another firm ?" />
                                <div className='flex gap-4'>
                                    <div className="flex items-center h-6">
                                        <input id="subsidiaryAnotherFirm_Yes" type="radio" value="subsidiaryAnotherFirm_Yes" name="subsidiaryAnotherFirm" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setSubsidiaryAnotherFirm(e.target.value)}
                                            checked={isSubsidiaryAnotherFirm === 'subsidiaryAnotherFirm_Yes'} />
                                        <label htmlFor="subsidiaryAnotherFirm_Yes" className="ms-2 text-sm text-black ">Yes</label>
                                    </div>
                                    <div className="flex items-center h-6">
                                        <input id="subsidiaryAnotherFirm_No" type="radio" value="subsidiaryAnotherFirm_No" name="subsidiaryAnotherFirm" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setSubsidiaryAnotherFirm(e.target.value)}
                                            checked={isSubsidiaryAnotherFirm === 'subsidiaryAnotherFirm_No'} />
                                        <label htmlFor="subsidiaryAnotherFirm_No" className="ms-2 text-sm text-black ">No</label>
                                    </div>
                                </div>
                            </div>

                            {
                                isSubsidiaryAnotherFirm === "subsidiaryAnotherFirm_Yes" &&
                                <div className='w-full flex flex-col gap-6'>
                                    <div className='w-full flex flex-col gap-2'>
                                        <Label text="Company Name" />
                                        <InputField type="text" placeholder="Enter Company Name" />
                                    </div>
                                    <div className='w-full flex flex-col gap-2'>
                                        <Label text="Address" />
                                        <InputField type="text" placeholder="Enter Company Address" />
                                    </div>
                                    <div className='flex gap-8'>
                                        <div className='w-1/2 flex flex-col gap-2'>
                                            <Label text="Phone Number" />
                                            <PhoneInput
                                                country={"us"}
                                                countryCodeEditable={false}
                                                value={isPhoneDropDown2}
                                                onChange={(e) => SetPhoneDropDown2(e)}
                                                inputStyle={{
                                                    borderRadius: "0",
                                                    width: "100%",
                                                    height: "2.8rem",
                                                    border: "1px solid #E2E4E9",
                                                    boxShadow: '0px 1px 2px 0px rgba(228, 229, 231, 0.24)',
                                                }}
                                            />
                                        </div>
                                        <div className='w-1/2 flex flex-col gap-2'>
                                            <Label text="EIN Number" />
                                            <InputField type="text" placeholder="(xx-xxxxxxx)" onChange={(e) => handleInputChangeCheck(e, "ein", undefined, "ein")} value={isSubsidiariesAnotherFirm["ein"]} />
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col gap-2'>
                                        <Label text="Relation" />
                                        <InputField type="text" placeholder="Enter Details" />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    {/* PHYSICAL ADDRESS end  */}
                    {/* <div className=' border-[#D4D4D4] w-full border'></div> */}
                    <div className="self-stretch min-h-min flex-col justify-start items-start gap-6 flex">
                        <div className="text-center text-zinc-500 text-base font-normal font-['Degular Demo'] uppercase leading-tight">TERM OF TRANSACTIONS</div>
                        <div className="self-stretch h-full flex-col justify-start items-start gap-12 flex">
                            <div className='w-full flex flex-col gap-2'>
                                <FileUpload label={`Summary of Transaction Term`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`einDoc`} fileInfos={isPdfAcq} setFileInfos={setPdfAcq} validExtensions={['.pdf', '.doc', '.docx']} />

                                <InputField placeholder={'Add comments if any'} type={'text'} />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <FileUpload label={`Transaction Diagram`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`transactionDiagram`} fileInfos={isPdfAcq} setFileInfos={setPdfAcq} validExtensions={['.pdf', '.doc', '.docx']} />

                                <InputField placeholder={'Add comments if any'} type={'text'} />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <FileUpload label={`Capitalization Table`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`capitalizationTable`} fileInfos={isPdfAcq} setFileInfos={setPdfAcq} validExtensions={['.pdf', '.doc', '.docx']} />

                                <InputField placeholder={'Add comments if any'} type={'text'} />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <FileUpload label={`Lender`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`lender`} fileInfos={isPdfAcq} setFileInfos={setPdfAcq} validExtensions={['.pdf', '.doc', '.docx']} />

                                <InputField placeholder={'Add comments if any'} type={'text'} />
                            </div>
                            {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                    <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                        <div className="self-stretch justify-between items-center inline-flex">
                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Summary of Transaction Term</div>
                                            </div>
                                            <label className='cursor-pointer' htmlFor='TrustAgreement'>
                                                <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                    <div className="w-5 h-5 relative" >
                                                        <img src={upload} alt="" />
                                                    </div>
                                                    <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='TrustAgreement' />Upload</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="justify-start items-start gap-4 inline-flex">
                                            <PdfComp />
                                        </div>
                                    </div>
                                    <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                        <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                    </div>
                                </div>

                            </div> */}
                            {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                    <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                        <div className="self-stretch justify-between items-center inline-flex">
                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Transaction Diagram</div>
                                            </div>
                                            <label className='cursor-pointer' htmlFor='ArticlesCertificate'>
                                                <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                    <div className="w-5 h-5 relative" >
                                                        <img src={upload} alt="" />
                                                    </div>
                                                    <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='ArticlesCertificate' />Upload</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="justify-start items-start gap-4 inline-flex">
                                            <PdfComp />
                                        </div>
                                    </div>
                                    <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                        <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                    <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                        <div className="self-stretch justify-between items-center inline-flex">
                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Capitalization Table</div>
                                            </div>
                                            <label className='cursor-pointer' htmlFor='ArticlesCertificate'>
                                                <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                    <div className="w-5 h-5 relative" >
                                                        <img src={upload} alt="" />
                                                    </div>
                                                    <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='ArticlesCertificate' />Upload</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="justify-start items-start gap-4 inline-flex">
                                            <PdfComp />
                                        </div>
                                    </div>
                                    <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                        <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                    <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                        <div className="self-stretch justify-between items-center inline-flex">
                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Lender</div>
                                            </div>
                                            <label className='cursor-pointer' htmlFor='ArticlesCertificate'>
                                                <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                    <div className="w-5 h-5 relative" >
                                                        <img src={upload} alt="" />
                                                    </div>
                                                    <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='ArticlesCertificate' />Upload</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="justify-start items-start gap-4 inline-flex">
                                            <PdfComp />
                                        </div>
                                    </div>
                                    <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                        <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className=' border-[#D4D4D4] w-full border'></div> */}


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
                            {/*<img src={plusIcon} alt="" />*/} Add Secondary Contact
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
                                        <Pdf ></Pdf>
                                        <Pdf ></Pdf>
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
            {/*<div className='flex justify-between border-t-2 border-[#BDE1F4] px-8 py-4'>
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
                    <div id='nextButton' className='px-3 py-2 flex gap-1 border-[#0045AC] bg-[#0045AC]' role='button' onClick={() => dispatch(changeFormToDisplayBusiness({ formName: "Business Size & Certifications" }))}>
                        <h5 className='text-white'>Next</h5>
                        <img src={rightArrow} alt="" />
                    </div>
                </div>
            </div>*/}
            {/* submit footer end */}
            <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeBusinessPage({ formName: "Other Ownership Considerations", step: "prev" })} actionNext={changeBusinessPage({ formName: "Business Size & Certifications", step: "next" })} />
        </div>
    )
}
