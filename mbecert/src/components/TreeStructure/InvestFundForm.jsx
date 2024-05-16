import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import InputField from '../../globalComponents/InputField';
import Label from '../../globalComponents/Label';
import { FaPlus } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { handleCheckInput } from '../../helpers/inputFieldValidators';


function InvestFundForm({ handleClose }) {

    const [businessStructure, setBusinessStructure] = useState([])
    const [legalBusinessStructure, setLegalBusinessStructure] = useState([])
    const [isfundsType, setIsfundsType] = useState([])
    const [ivestmentInfo, setInvestmentInfo] = useState([{ firstName: '', lastName: '', ethinicOrigin: '', citizenship: '', votingPercent: "", companyOwnerPercent: "", noOfShare: "" }]);
    const [isFormValidate, setFormValidate] = useState({
        email: false,
    })
    const [isInvestmentForm, setInvestmentForm] = useState({ fundInvestments: "", unfundInvestments: "", noOfInvestors: "" })

    const citiesMulti = [
        { name: 'Individual', value: 'Individual' },
        { name: "Company", value: "Company", companyName: '', ein: '', registrationNumber: '', businessStructure: '', },
        { name: 'Trust', value: 'Trust' },
        { name: 'Investment Fund', value: 'Investment Fund' },
    ];

    const citiesMulti2 = citiesMulti;

    const fundsType = [
        { name: 'Committed Fund', value: 'Individual' },
        { name: "Fundless/Independent Sponsor", value: "Fundless/Independent Sponsor" },
    ];

    const addMore = () => {
        // console.log('inside function', individual.length)
        if (ivestmentInfo.length <= 2) {
            setInvestmentInfo((prevSessions) => [
                ...prevSessions,
                { companyName: '', ein: '' }
            ])
        }
    }

    function handleDel(index) {
        // setInvestmentInfo((prevSessions) => prevSessions.filter((_, i) => i !== index));
        setInvestmentInfo((prevSections) => prevSections.slice(0, -1));
    }

    function handleInputChange(e, fieldName, i, fieldType) { // ! use "i" if your form is array
        // * i condition is based on array or object
        if (handleCheckInput(e, fieldType, typeof i === "number" ? ivestmentInfo[i][fieldName] : isInvestmentForm[fieldName])) {
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
                const dataToUpdate = [...ivestmentInfo]
                dataToUpdate[i] = {
                    ...dataToUpdate[i],
                    [fieldName]: e.target.value,
                }
                setInvestmentInfo(dataToUpdate);
            } else {
                setInvestmentForm({ ...isInvestmentForm, [fieldName]: e.target.value });
            }
        }
    }

    return (
        <React.Fragment>
            <DialogTitle id="responsive-dialog-title" style={{ zIndex: 100 }}>
            </DialogTitle>
            <DialogContent style={{ zIndex: 100 }}>
                <DialogContentText style={{ zIndex: 100 }}>
                    <div className=" text-zinc-500 text-base font-normal font-['Degular Demo'] mb-5 leading-tight">Enter the Investment Fund Details</div>
                    <div className=" text-blue-800 text-xs uppercase font-normal font-['Degular Demo'] leading-tight">INVESTMENT FUND DETAILS</div>
                    <div className="left flex flex-col justify-between items-start w-full gap-4 my-5">
                        <div className="h-5 justify-start items-center gap-1 flex">
                            <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">What is the Company's Legal Business Structure ?</div>
                            {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                        </div>
                        {/* <MultiSelect options={citiesMulti} optionLabel="name"
                            placeholder="Select" maxSelectedLabels={3} className="relative h-10 outline-none w-full z-50" style={{ zIndex: 1400 }} /> */}
                        <Dropdown value={businessStructure} onChange={(e) => setBusinessStructure(e.target.value)} options={citiesMulti} optionLabel="name" placeholder={`Select`} className="w-full outline-none font-['Degular Demo'] px-2 text-slate-500 border border-zinc-200  shadow " />

                    </div>
                    <div className="left flex flex-col justify-between items-start w-full gap-4 my-5">
                        <div className="h-5 justify-start items-center gap-1 flex">
                            <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">Fund Name</div>
                            {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                        </div>
                        <InputField type={"text"} placeholder={"Enter Fund Name"} />
                        {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Fund Name' /> */}
                    </div>

                    <div className='flex justify-center items-center gap-5'>
                        <div className="left flex flex-col justify-between items-start w-full gap-4 my-5">
                            <div className="h-5 justify-start items-center gap-1 flex">
                                <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">Date of Formation</div>
                                {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                            </div>
                            <InputField type={"date"} placeholder={"Select"} />
                            {/* <input type='date' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Select Date' /> */}
                        </div>
                        {/* <div></div> */}
                    </div>

                    <div className='flex justify-center items-center gap-5'>
                        <div className="left flex flex-col justify-between items-start w-full gap-4 my-5">
                            <div className="h-5 justify-start items-center gap-1 flex">
                                <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">Legal Structure of the fund?</div>
                                {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                            </div>
                            <Dropdown value={legalBusinessStructure} onChange={(e) => setLegalBusinessStructure(e.target.value)} options={citiesMulti2} optionLabel="name" placeholder={`Select`} className="w-full outline-none font-['Degular Demo'] px-2 text-slate-500 border border-zinc-200  shadow " />

                            {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Select Date' /> */}
                        </div>
                        <div className="left flex flex-col justify-between items-start w-full gap-4 my-5">
                            <div className="h-5 justify-start items-center gap-1 flex">
                                <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">Is the fund?</div>
                                {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                            </div>
                            <Dropdown value={isfundsType} onChange={(e) => setIsfundsType(e.target.value)} options={fundsType} optionLabel="name" placeholder={`Select`} className="w-full outline-none font-['Degular Demo'] px-2 text-slate-500 border border-zinc-200  shadow " />
                            {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Select Date' /> */}
                        </div>
                    </div>

                    <div className="left flex flex-col justify-between items-start w-full gap-4 my-5">
                        <div className="h-5 justify-start items-center gap-1 flex">
                            <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">Amount invested in fund to date plus current market value of fund investments</div>
                            {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                        </div>
                        <InputField type={"text"} placeholder={"Enter Amount"} onChange={(e) => handleInputChange(e, "fundInvestments", undefined, "number")} value={isInvestmentForm["fundInvestments"]} />
                        {/* <input type='date' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Name' /> */}
                    </div>

                    <div className='flex justify-center items-center gap-5'>
                        <div className="left flex flex-col justify-between items-start w-full gap-4 my-5">
                            <div className="h-5 justify-start items-center gap-1 flex">
                                <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">Amount of unfunded fund investment commitments</div>
                                {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                            </div>
                            <InputField type={"text"} placeholder={"Enter Amount"} onChange={(e) => handleInputChange(e, "unfundInvestments", undefined, "number")} value={isInvestmentForm["unfundInvestments"]} />
                            {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Select Date' /> */}
                        </div>
                        <div className="left flex flex-col justify-between items-start w-full gap-4 my-5">
                            <div className="h-5 justify-start items-center gap-1 flex">
                                <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">Number of investors </div>
                                {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                            </div>
                            <InputField type={"text"} placeholder={"Enter Number"} onChange={(e) => handleInputChange(e, "noOfInvestors", undefined, "number")} value={isInvestmentForm["noOfInvestors"]} />
                            {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Select Date' /> */}
                        </div>
                    </div>

                    <div className='flex flex-col gap-6 mt-3'>
                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight ">List Fund Investment</div>
                        {
                            ivestmentInfo.map((trust, i) => {
                                return (
                                    <div className='flex justify-between gap-8 w-full' key={i}>
                                        <div className='w-1/2 flex flex-col gap-2 justify-between'>
                                            <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Company Name</div>
                                            <InputField type={"text"} placeholder={"Enter Company Name"} />
                                        </div>
                                        <div className='w-1/2 flex flex-col gap-2 justify-between'>
                                            <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Class of security owned by
                                                the funds </div>
                                            <InputField type={"text"} placeholder={"Enter Class"} />
                                        </div>
                                        <div className='w-1/2 flex flex-col gap-2 justify-between'>
                                            <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Number of shares owned
                                                by the fund </div>
                                            <InputField type={"text"} placeholder={"Enter Number"} onChange={(e) => handleInputChange(e, "noOfShare", i, "number")} value={ivestmentInfo[i]["noOfShare"]} />
                                        </div>
                                        <div className='w-1/2 flex flex-col gap-2 justify-between'>
                                            <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Ownership
                                                percentage</div>
                                            <InputField type={"text"} placeholder={"Enter Percentage"} onChange={(e) => handleInputChange(e, "companyOwnerPercent", i, "percent")} value={ivestmentInfo[i]["companyOwnerPercent"]} />
                                            {/* <Dropdown value={indiSelectEthenicOrigin} onChange={(e) => setIndiSelectEthenicOrigin(e.target.value)} options={selectEthnicOrigin} optionLabel="value"
                                                placeholder={`Select`} className="w-full outline-none font-['Degular Demo'] px-2 text-slate-500 border border-zinc-200  shadow " /> */}
                                            {/* <InputField type={"date"} placeholder={"Enter First Name"} /> */}
                                        </div>
                                        <div className='w-1/2 flex flex-col gap-2 justify-between'>
                                            <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Voting
                                                Percentage </div>
                                            <InputField type={"text"} placeholder={"Enter Percentage"} onChange={(e) => handleInputChange(e, "votingPercent", i, "percent")} value={ivestmentInfo[i]["votingPercent"]} />
                                            {/* <Dropdown value={indiSelectCitizenship} onChange={(e) => setIndiSelectCitizenship(e.target.value)} options={selectCitizenship} optionLabel="value"
                                                placeholder={`Select`} className="w-full outline-none font-['Degular Demo'] px-2 text-slate-500 border border-zinc-200  shadow " /> */}
                                            {/* <InputField type={"date"} placeholder={"Enter Last Name"} /> */}
                                        </div>
                                        <div className='w-1/2 flex flex-col gap-2 justify-between'>
                                            <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Outstanding Securities
                                                of the company</div>
                                            <InputField type={"text"} placeholder={"Enter Security"} />
                                        </div>
                                        {/* {
                                            ivestmentInfo.length > 1 &&
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
                                ivestmentInfo.length > 1 &&
                                <button onClick={() => handleDel()}>
                                    <RiDeleteBin6Line className='text-[red]' />
                                </button>
                            }
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
                            <div className="text-white text-xs ont-normal font-['Degular Demo'] leading-tight">Save</div>
                        </div>
                    </div>
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default InvestFundForm