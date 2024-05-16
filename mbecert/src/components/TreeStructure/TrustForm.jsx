import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PdfComp from '../../globalComponents/PdfComp';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPlus } from "react-icons/fa";
import Label from '../../globalComponents/Label';
import InputField from '../../globalComponents/InputField';
import { Dropdown } from 'primereact/dropdown';
import Cloud from "../../assests/images/cloud.png"
import FileUpload from '../../globalComponents/FileUpload';
import { handleCheckInput } from '../../helpers/inputFieldValidators';

function TrustForm({ handleClose }) {

    const [trustInfo, setTrustInfo] = useState([{ firstName: '', lastName: '', ethinicOrigin: '', citizenship: '', votingPercent: "", companyOwnerPercent: "", noOfShare: "" }]);
    const [isTrustForm, setTrustForm] = useState({ votingPercent: "", companyOwnerPercent: "", noOfShare: "" })
    const [isFormValidate, setFormValidate] = useState({
        email: false,
    })
    
    const [isTheTrust, setIsTheTrust] = useState([])
    const [trustOwnedBy, setIsTrustOwnedBy] = useState([])
    const [indiSelectCitizenship, setIndiSelectCitizenship] = useState([])
    const [indiSelectEthenicOrigin, setIndiSelectEthenicOrigin] = useState([])

    const addMore = () => {
        // console.log('inside function', individual.length)
        if (trustInfo.length <= 2) {
            setTrustInfo((prevSessions) => [
                ...prevSessions,
                { companyName: '', ein: '', }
            ])
        }
    }

    function handleDel(index) {
        // setTrustInfo((prevSessions) => prevSessions.filter((_, i) => i !== index));
        setTrustInfo((prevSections) => prevSections.slice(0, -1));
    }

    useEffect(() => {
        console.log(trustOwnedBy);
    }, [trustOwnedBy])

    const isTrust = [
        { value: "Recoverable" },
        { value: "Irrecoverable" },
    ]

    const isTrustOwnedBy = [
        { value: "Company" },
        { value: "Individuals" },
    ]

    const selectCitizenship = [
        { value: "Asian Indian" },
        { value: "Asian Pacific" },
        { value: "Black or African American" },
        { value: "Hispanic or Latino" },
        { value: "Native American or Alaska Native" },
        { value: "Native Hawaiian or Other Pacific" },
        { value: "Islander" },
        { value: "Other" },
    ]

    const selectEthnicOrigin = selectCitizenship;

    // pdf cpmponent file handling
    const onFilesChange = (e) => {
        console.log(e)
    }

    const [fileUpload, setFileUpload] = useState({})

    function handleInputChange(e, fieldName, fieldType) { // ! use "i" if your form is array
        if (handleCheckInput(e, fieldType, isTrustForm[fieldName])) {
            updateField(fieldName, e);
            if (fieldType === "email") {
                setFormValidate({ ...isFormValidate, email: false })
            }
        } else {
            updateField(fieldName, e);
            if (fieldType === "email") {
                setFormValidate({ ...isFormValidate, email: true })
                if (e.target.value.trim() === "") {
                    setFormValidate({ ...isFormValidate, email: false })
                }
            }
        }

        function updateField(fieldName, e) {
      
            setTrustForm({ ...isTrustForm, [fieldName]: e.target.value });
        }
    }

    return (
        <React.Fragment>
            <DialogTitle id="responsive-dialog-title" style={{ zIndex: 100 }}>
            </DialogTitle>
            <DialogContent style={{ zIndex: 100 }}>
                <DialogContentText style={{ zIndex: 100 }}>
                    <div className=" text-zinc-500 text-base font-normal font-['Degular Demo'] mb-5 leading-tight">Enter the Trust Details</div>
                    <div className=" text-blue-800 text-xs font-normal font-['Degular Demo'] uppercase leading-tight">TRUST DETAILS</div>
                    <div className="w-full h-full p-8 flex-col justify-start items-start gap-12 inline-flex bg-white shadow border border-zinc-200 my-3">
                        {/* <div className="self-stretch h-[0px] border border-neutral-300"></div> */}
                        <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch flex-col justify-start items-start gap-12 flex">
                                <div className="left flex justify-between items-center w-full gap-4">
                                    <div className="h-5 justify-start items-center gap-1 flex w-[15%]">
                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Trust Name</div>
                                        {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                                    </div>
                                    <InputField type={"text"} placeholder={"Enter Company Name"} />
                                    {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Company Name' /> */}
                                </div>
                                <div className="left flex justify-between items-center w-full gap-4">
                                    <div className="h-5 justify-start items-center gap-1 flex w-[15%]">
                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Date of Formation</div>
                                        {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                                    </div>
                                    <InputField type={"date"} placeholder={"Select"} />
                                    {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter EIN' /> */}
                                </div>
                                <div className="left flex justify-between items-center w-full gap-4">
                                    <div className="h-5 justify-start items-center gap-1 flex w-[15%]">
                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">is the Trust?</div>
                                        {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                                    </div>
                                    <Dropdown value={isTheTrust} onChange={(e) => setIsTheTrust(e.target.value)} options={isTrust} optionLabel="value" placeholder={`Select`} className="w-full outline-none font-['Degular Demo'] px-2 text-slate-500 border border-zinc-200  shadow " />


                                    {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter EIN' /> */}
                                </div>
                                <div className="left flex justify-between items-center w-full gap-4">
                                    <div className="h-5 justify-start items-center gap-1 flex w-[15%]">
                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">Is the Trustee managed by?</div>
                                        {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                                    </div>
                                    <Dropdown value={trustOwnedBy} onChange={(e) => setIsTrustOwnedBy(e.target.value)} options={isTrustOwnedBy} optionLabel="value" placeholder={`Select`} className="w-full outline-none font-['Degular Demo'] px-2 text-slate-500 border border-zinc-200  shadow " />
                                    {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter EIN' /> */}
                                </div>
                            </div>
                        </div>

                        {
                            trustInfo.map((trust, i) => {
                                return (
                                    <div className='flex justify-between gap-8 w-full' key={i}>
                                        {
                                            (trustOwnedBy === "Company") &&
                                            <div className='w-1/2 flex flex-col gap-2'>
                                                <Label text="Company Name" />
                                                <InputField type={"text"} placeholder={"Enter Company Name"} name={'PrOwFirName'} />
                                            </div>
                                        }
                                        <div className='w-1/2 flex flex-col gap-2'>
                                            <Label text="First Name" />
                                            <InputField type={"text"} placeholder={"Enter First Name"} name={'PrOwFirName'} />
                                        </div>
                                        <div className='w-1/2 flex flex-col gap-2'>
                                            <Label text="Last Name" />
                                            <InputField type={"text"} placeholder={"Enter Last Name"} name={'PrOwLasName'} />
                                        </div>
                                        <div className='w-1/2 flex flex-col gap-2'>
                                            <Label text="Ethinic Origin" />
                                            <Dropdown value={indiSelectEthenicOrigin} onChange={(e) => setIndiSelectEthenicOrigin(e.target.value)} options={selectEthnicOrigin} optionLabel="value"
                                                placeholder={`Select`} className="w-full outline-none font-['Degular Demo'] px-2 text-slate-500 border border-zinc-200  shadow " />
                                            {/* <InputField type={"date"} placeholder={"Enter First Name"} name={'PrOwFirName'} /> */}
                                        </div>
                                        <div className='w-1/2 flex flex-col gap-2'>
                                            <Label text="Citizenship" />
                                            <Dropdown value={indiSelectCitizenship} onChange={(e) => setIndiSelectCitizenship(e.target.value)} options={selectCitizenship} optionLabel="value"
                                                placeholder={`Select`} className="w-full outline-none font-['Degular Demo'] px-2 text-slate-500 border border-zinc-200  shadow " />
                                            {/* <InputField type={"date"} placeholder={"Enter Last Name"} name={'PrOwLasName'} /> */}
                                        </div>
                                        {/* {
                                            trustInfo.length > 1 &&
                                            <button onClick={() => handleDel(i)}>
                                                <RiDeleteBin6Line className='text-[red]' />
                                            </button>
                                        } */}
                                    </div>
                                )
                            })
                        }

                        <div className='w-full flex justify-between items-center'>
                            <button onClick={() => addMore()} className='flex items-center justify-center gap-3'> <FaPlus />Add More</button>
                            {
                                trustInfo.length > 1 &&
                                <button onClick={() => handleDel()}>
                                    <RiDeleteBin6Line className='text-[red]' />
                                </button>
                            }
                        </div>

                        <div className="left flex flex-col justify-between items-start w-full gap-4">
                            <div className="h-5 justify-start items-center gap-1 flex">
                                <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">Number of shares and class of all securities held by trust (e.g., 500 shares of common stock) ?</div>
                                {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                            </div>
                            <InputField type={"text"} placeholder={"Enter Number of Share"} onChange={(e) => handleInputChange(e, "noOfShare", "number")} value={isTrustForm["noOfShare"]} />
                            {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Number of Share' /> */}
                        </div>

                        <div className='flex justify-center items-center gap-3'>
                            <div className="left flex flex-col justify-between items-start w-full gap-4">
                                <div className="h-5 justify-start items-center gap-1 flex">
                                    <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">Voting percentage of class of securities held and of all outstanding securities of the company</div>
                                    {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                                </div>
                                <InputField type={"text"} placeholder={"Enter Voting Percentage"} onChange={(e) => handleInputChange(e, "votingPercent", "percent")} value={isTrustForm["votingPercent"]} />
                                {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Voting Percentage' /> */}
                            </div>
                            <div className="left flex flex-col justify-between items-start w-full gap-4">
                                <div className="h-5 justify-start items-center gap-1 flex">
                                    <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">Ownership percentage of class of securities held and of all outstanding securities of the company</div>
                                    {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                                </div>
                                <InputField type={"text"} placeholder={"Enter Ownership Percentage"} onChange={(e) => handleInputChange(e, "companyOwnerPercent", "percent")} value={isTrustForm["companyOwnerPercent"]}/>
                                {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Ownership Percentage' /> */}
                            </div>
                        </div>

                        <div className="self-stretch h-[0px] border border-neutral-300 border-opacity-90"></div>

                        <div className='docs w-full flex gap-1 custom:gap-4'>
                            <div className="left w-[30%]">
                                <div><span className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Upload Trust Details</span><span className="text-orange-600 text-sm font-normal font-['Inter'] leading-tight">*</span></div>
                            </div>

                            <div className='right w-[70%] flex flex-col gap-8'>
                                <div className='flex flex-col gap-3'>
                                    {/* <div className="two w-full flex gap-4 justify-between items-start custom:flex-row">
                                        <div className='flex flex-col gap-4 '>
                                            <div className="pb-3 justify-start items-center gap-0 flex min-w-min">
                                                <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Class of share</div>
                                                <div className="text-orange-600 text-sm font-medium font-['Inter'] leading-tight">*</div>
                                            </div>
                                            <PdfComp />
                                        </div>
                                        <label className='cursor-pointer' htmlFor='GovtPhoto'>
                                            <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                <div className="w-5 h-5 relative" >
                                                    <img src={Cloud} alt="" />
                                                </div>
                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='GovtPhoto' />Upload</div>
                                            </div>
                                        </label>
                                    </div> */}
                                    <FileUpload label={`Class of share`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`classofshare`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                    <InputField type={"text"} placeholder={"Add comments if any"} />
                                </div>

                                {/* <div className="w-full h-[0px] border border-zinc-100"></div> */}

                                <div className='flex flex-col gap-3'>
                                    {/* <div className="two w-full flex gap-4 justify-between items-start custom:flex-row">
                                        <div className='flex flex-col gap-4'>
                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">% ownership of class</div>
                                                <div className="text-orange-600 text-sm font-medium font-['Inter'] leading-tight">*</div>
                                            </div>
                                            <PdfComp />
                                        </div>
                                        <label className='cursor-pointer' htmlFor='GovtPhoto'>
                                            <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                <div className="w-5 h-5 relative" >
                                                    <img src={Cloud} alt="" />
                                                </div>
                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='GovtPhoto' />Upload</div>
                                            </div>
                                        </label>
                                    </div> */}
                                    <FileUpload label={`% ownership of class`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`ownershipofclass`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                    <InputField type={"text"} placeholder={"Add comments if any"} />
                                </div>

                                <div className='flex flex-col gap-3'>
                                    {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                        <div className='flex flex-col gap-4'>
                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">% ownership of total equity to be added</div>
                                                <div className="text-orange-600 text-sm font-medium font-['Inter'] leading-tight">*</div>
                                            </div>
                                            <PdfComp />
                                        </div>
                                        <label className='cursor-pointer' htmlFor='GovtPhoto'>
                                            <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                <div className="w-5 h-5 relative" >
                                                    <img src={Cloud} alt="" />
                                                </div>
                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='GovtPhoto' />Upload</div>
                                            </div>
                                        </label>
                                    </div> */}
                                    <FileUpload label={`% ownership of total equity to be added`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`percentoftotalequity`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                    <InputField type={"text"} placeholder={"Add comments if any"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => handleClose()}>
                    <div className="w-[148px] self-stretch px-4 py-[11px] border border-blue-800 justify-center items-center gap-2 flex cursor-pointer" >
                        <div className="text-blue-800 text-xs font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Cancel</div>
                    </div>
                </Button>
                <Button onClick={() => handleClose()} autoFocus>
                    <div className="w-[88px] self-stretch px-4 py-3 bg-blue-800 justify-center items-center gap-4 flex cursor-pointer">
                        <div className="justify-center items-center gap-2 flex">
                            <div className="text-white text-xs font-normal font-['Degular Demo'] leading-tight">Save</div>
                        </div>
                    </div>
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default TrustForm;