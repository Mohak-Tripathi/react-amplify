import React, { useState, Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Plus from '../../assests/images/WPlus.svg'
import Cloud from '../../assests/images/cloud.png'
import PdfComp from '../../globalComponents/PdfComp';
import { changeIndiInput } from '../../features/individualForm/individualFormSlice';
import { updateCompany, updateCompanyFromForm, updateNameValue } from '../../features/treeStructure/treeStructureSlice';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { handleDeleteForm, handleUpdateForm } from '../../features/treeStructure/companyFormSlice';
import { Dropdown } from 'primereact/dropdown';
import InputField from '../../globalComponents/InputField';
import FileUpload from '../../globalComponents/FileUpload';
import { handleCheckInput } from '../../helpers/inputFieldValidators';

export default function IndividualForm({ setInviForm, setOpen, companyName, level, currentLevel }) {

    const { tree } = useSelector((store) => store.treeStructure);
    const { individualFormData } = useSelector((store) => store.companyForm);
    const { individualForm } = useSelector((store) => store.businessInfo);
    const dispatch = useDispatch();
    const [yesNo, setYesNo] = useState("No");
    const [indiSelectRole, setIndiSelectRole] = useState([])
    const [indiSelectCitizenship, setIndiSelectCitizenship] = useState([])
    const [indiSelectEthenicOrigin, setIndiSelectEthenicOrigin] = useState([])
    const [indiSelectGender, setIndiSelectGender] = useState([])
    const [indiSelectCapitalContribution, setIndiSelectCapitalContribution] = useState([])
    const [isIndiVidualForm, setIndiVidualForm] = useState({ total: "", })
    const [isFormValidate, setFormValidate] = useState({
        email: false,
    })

    const [individual, setIndividual] = useState(Object.keys(individualFormData).indexOf(companyName) !== -1 ? individualFormData[companyName] : [
        { name: "Individual", value: "Individual", firstName: '', lastName: '', title: '', email: '', role: '', citizenship: '', yrsOfOwnership: '', ethnicOrigin: '', gender: '', ownershipPercent: '', votingPercent: '', typeofCapitalContribution: '', expertise: '', initialContribution: "", equipmentValue: "" },
    ]);
    const [individualOwner, setIndividualOwner] = useState([
        { name: "Individual", value: "Individual", firstName: '', lastName: '', title: '', email: '', role: '', citizenship: '', yrsOfOwnership: '', ethnicOrigin: '', gender: '', ownershipPercent: '', votingPercent: '', typeofCapitalContribution: '', expertise: '', initialContribution: "", equipmentValue: "" },
    ]);

    // pdf component file handling

    const onFilesChange = (e) => {
        console.log(e);
    };

    const [fileUpload, setFileUpload] = useState(Object.keys(individualForm).length >= 1 ? individualForm : {});

    function indiInputChange(index, fieldName, value) {
        // console.log(value)
        const updatedSessions = [...individual];
        updatedSessions[index] = {
            ...updatedSessions[index],
            [fieldName]: value
        }
        // updatedSessions[index][fieldName] = value;
        setIndividual(updatedSessions);
    }

    function handleAddMore() {
        if (individualOwner.length <= 3) {
            setIndividualOwner((prevSessions) => [
                ...prevSessions,
                { name: "Individual", value: "Individual", firstName: '', lastName: '', title: '', email: '', role: '', citizenship: '', yrsOfOwnership: '', ethnicOrigin: '', gender: '', ownershipPercent: '', votingPercent: '', typeofCapitalContribution: '', expertise: '', initialContribution: "", equipmentValue: "" },
            ])
        }
    };

    function handleDel(index) {
        // setIndividualOwner((prevSessions) => prevSessions.filter((_, i) => i !== index));
        setIndividualOwner((prevSections) => prevSections.slice(0, -1));
    }

    const indiAddMore = () => {
        // console.log("individualFormData", individualFormData);
        // dispatch(handleUpdateForm({ form: individualFormData, formName: "individualFormData" }));

        // console.log('inside function', individual.length)
        if (individual.length <= 3) {
            setIndividual((prevSessions) => [
                ...prevSessions,
                { name: "Individual", value: "Individual", firstName: '', lastName: '', title: '', email: '', role: '', citizenship: '', yrsOfOwnership: '', ethnicOrigin: '', gender: '', ownershipPercent: '', votingPercent: '', typeofCapitalContribution: '', expertise: '', initialContribution: "", equipmentValue: "" }
            ])
        }
    }

    const indiDelete = (index) => {
        // console.log("individualFormData", index, individualFormData);
        // dispatch(handleDeleteForm({ index: index, formName: "individualFormData" }));
        setIndividual((prevSessions) => prevSessions.filter((_, i) => i !== index));
    }

    function handleSave() {
        let obj = {
            name: "Individual",
            level: currentLevel,
            formName: "individualFormData",
            companyName: companyName,
            tree: tree,
            filteredArr: individual,
            unfilteredArr: tree[currentLevel][companyName].filter((elem) => elem.name !== "Individual"),
            fileUpload: fileUpload,
            page: "individualForm",
        }
        if (tree[currentLevel] && tree[currentLevel][companyName]) {
            dispatch(updateNameValue(obj));
        }
        setOpen(false);
    }

    const handleClose = () => {
        // console.log(fileUpload);
        // console.log(level, currentLevel, tree[currentLevel][companyName], tree[currentLevel]);
        // const test = individual.map((elem) => {
        //     return { name: "Individual" };
        // });
        // const removeIndividual = tree[currentLevel][companyName].filter((elem) => elem.name !== "Individual")
        // console.log(tree[currentLevel][companyName].filter((elem) => elem.name === "Individual").length);
        // dispatch(updateCompanyFromForm({ currentLevel: currentLevel, companyName: companyName, arr: [...removeIndividual, ...test] }));
        setOpen(false);
    };

    function handleYesNo(event) {
        setYesNo(event.target.value)
    }

    const selectRole = [
        { value: "Corporate Director" },
        { value: "Corporate Officer" },
        { value: "Corporate Stock or Shareholder" },
        { value: "LLC Manager" },
        { value: "LLC Member" },
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

    const selectGender = [
        { value: "Male" },
        { value: "Female" },
        { value: "Non-binary" },
        { value: "Other" },
        { value: "Decline to Disclose" },
    ]

    const selectCapitalContribution = [
        { value: "Initial Capital Contribution" },
        { value: "Equipment Value" },
        { value: "Both" },
    ]

    function handleInputChange(e, fieldName, i, fieldType) { // ! use "i" if your form is array
        // * i condition is based on array or object
        if (handleCheckInput(e, fieldType, typeof i === "number" ? individual[i][fieldName] : isIndiVidualForm[fieldName])) {
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
                const dataToUpdate = [...individual]
                dataToUpdate[i] = {
                    ...dataToUpdate[i],
                    [fieldName]: e.target.value,
                }
                setIndividual(dataToUpdate);
            } else {
                setIndiVidualForm({ ...isIndiVidualForm, [fieldName]: e.target.value });
            }
        }
    }

    return (
        <React.Fragment>
            <DialogTitle id="responsive-dialog-title" style={{ zIndex: 100 }}>
            </DialogTitle>
            <DialogContent style={{ zIndex: 100 }}>
                <DialogContentText style={{ zIndex: 100 }}>
                    <div className="main bg-white py-2 px-4">
                        <div className="w-full min-h-min flex-col justify-start items-start gap-8 inline-flex">
                            <div className="corporation-shares flex flex-col gap-4 w-full mb-3">
                                <div className="text-left text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Enter the Individual Owners Details of ACME</div>
                                {
                                    individualOwner.map((elem, i) => {
                                        return (
                                            <div key={i} className="input-box flex justify-between items-center gap-3 mt-2">

                                                <div className="flex-col justify-start items-start inline-flex">
                                                    <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                                                        <div className="self-stretch pb-2 justify-start items-center gap-px inline-flex">
                                                            <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Share Type</div>
                                                        </div>
                                                        <InputField type={"text"} placeholder={"Select Type"} />
                                                        {/* <input type='text' className="w-full p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Select Type'></input> */}
                                                    </div>
                                                </div>
                                                <div className="flex-col justify-start items-start inline-flex">
                                                    <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                                                        <div className="self-stretch pb-2 justify-start items-center gap-px inline-flex">
                                                            <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Number of shares  outstanding</div>
                                                        </div>
                                                        <InputField type={"text"} placeholder={"Select Type"} />
                                                        {/* <input type='text' className="w-full p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Select Type'></input> */}
                                                    </div>
                                                </div>
                                                <div className="flex-col justify-start items-start inline-flex">
                                                    <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                                                        <div className="self-stretch pb-2 justify-start items-center gap-px inline-flex">
                                                            <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Number of minority shares owned</div>
                                                        </div>
                                                        <InputField type={"text"} placeholder={"Select Type"} />
                                                        {/* <input type='text' className="w-full p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Select Type'></input> */}
                                                    </div>
                                                </div>
                                                <div className="flex-col justify-start items-start inline-flex">
                                                    <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                                                        <div className="self-stretch pb-2 justify-start items-center gap-px inline-flex">
                                                            <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Minority ownership percentage</div>
                                                        </div>
                                                        <InputField type={"text"} placeholder={"Select Type"} />
                                                        {/* <input type='text' className="w-full p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Select Type'></input> */}
                                                    </div>
                                                </div>
                                                {/* {
                                                    individualOwner.length > 1 &&
                                                    <button onClick={() => handleDel(i)}>
                                                        <RiDeleteBin6Line className='text-[red]' />
                                                    </button>
                                                } */}
                                            </div>
                                        )
                                    })
                                }
                                <div className='w-full flex justify-between items-center'>
                                    <button onClick={handleAddMore} className="text-blue-950 text-[17px] font-normal font-['Degular Demo'] leading-tight cursor-pointer">+ Add More</button>
                                    {
                                        individualOwner.length > 1 &&
                                        <button onClick={() => handleDel()}>
                                            <RiDeleteBin6Line className='text-[red]' />
                                        </button>
                                    }
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div></div>
                                    <div></div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch justify-start items-center gap-4 flex">
                                            <div className="self-stretch justify-start items-center gap-px inline-flex">
                                                <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Total</div>
                                            </div>
                                            <InputField type={"text"} placeholder={"Enter..."} onChange={(e) => handleInputChange(e, "total", undefined, "number")} value={isIndiVidualForm["total"]} />
                                            {/* <input type='text' className="w-full p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter...'></input> */}
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                                <div className="w-full h-14 pb-1 justify-start items-center gap-px inline-flex mt-3">
                                    <div className="grow shrink w-full basis-0"><span className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Do any outstanding classes of shares or shareholder have different conversion rights, dividend rights, liquidation preferences, waterfalls or any other preferential payment rights upon sale or liquidation of applicant ? </span><span className="text-red-600 text-base font-normal font-['Degular Demo'] leading-tight">*</span></div>
                                </div>
                                <div className='flex gap-4'>
                                    <div className='flex gap-4 justify-start items-center text-base'>
                                        <div className='flex gap-2 justify-center items-center'>
                                            <input type="radio" id='yesOwnerShipForm' name='primary_representative' className='checkBoxBtn' checked={yesNo === "Yes"} value={`Yes`} onChange={(e) => setYesNo(e.target.value)} />
                                            <label htmlFor='yesOwnerShipForm'>Yes</label>
                                        </div>
                                        <div className='flex gap-2 justify-center items-center'>
                                            <input type="radio" id='noOwnerShipForm' name='primary_representative' className='checkBoxBtn' checked={yesNo === "No"} value={`No`} onChange={(e) => setYesNo(e.target.value)} />
                                            <label htmlFor='noOwnerShipForm'>No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* INDIVDUAL OWNER 1 form start  */}
                            {
                                yesNo === "Yes"
                                &&
                                <>
                                    <div className="self-stretch min-h-min shadow flex-col justify-center items-start gap-6 flex" id='indOwn1'>
                                        {/* <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                                        <div className="justify-start items-center inline-flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-normal">Enter the Individual Owners Details of ACME</div>
                                        </div>
                                    </div>
                                </div> */}
                                        <div className="self-stretch min-h-min flex-col justify-center items-start gap-3 flex">
                                            {
                                                individual.map((indi, i) => {
                                                    return <Fragment key={i}>
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className="self-stretch text-blue-800 text-xs font-normal font-['Degular Demo'] uppercase leading-none">Indivdual owner {i + 1}</div>
                                                            {
                                                                individual.length > 1 &&
                                                                <button onClick={() => indiDelete(i)}>
                                                                    <RiDeleteBin6Line className='text-[red]' />
                                                                </button>
                                                            }
                                                        </div>
                                                        <div className="self-stretch min-h-min p-6 bg-white shadow border border-zinc-200 flex-col justify-start items-start gap-6 flex">

                                                            <div className="first flex justify-between items-center w-full gap-10">
                                                                <div className="left flex justify-between items-center w-full gap-4">
                                                                    <div className="h-5 justify-start items-center gap-1 flex">
                                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">First Name</div>
                                                                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div>
                                                                    </div>
                                                                    <InputField type={"text"} placeholder={"Enter First Name"} value={indi.firstName} onChange={(e) => { indiInputChange(i, 'firstName', e.target.value) }} />

                                                                    {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter First Name' value={indi.firstName} onChange={(e) => { indiInputChange(i, 'firstName', e.target.value) }} /> */}
                                                                </div>

                                                                <div className="right flex justify-between items-center w-full gap-5">
                                                                    <div className="h-5 justify-start items-center gap-1 flex">
                                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Last Name</div>
                                                                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div>
                                                                    </div>
                                                                    <InputField type={"text"} placeholder={"Enter Last Name"} />
                                                                    {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Last Name'></input> */}
                                                                </div>
                                                            </div>

                                                            <div className="first flex justify-between items-center w-full gap-10">
                                                                <div className='flex flex-col w-full'>
                                                                    <div className="left flex justify-between items-center w-full gap-1">
                                                                        <div className="h-5 justify-start items-center gap-1 flex">
                                                                            <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Owner Email</div>
                                                                            <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div>
                                                                        </div>
                                                                        <InputField type={"text"} placeholder={"johndoe@example.com"} onChange={(e) => handleInputChange(e, "email", i, "email")} value={individual[i]["email"]} />
                                                                        {/* <input type='email' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='johndoe@example.com'></input> */}
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
                                                                <div className="right flex justify-between items-center w-full gap-[4.0rem]">
                                                                    <div className="h-5 justify-start items-center gap-1 flex">
                                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Title</div>
                                                                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div>
                                                                    </div>
                                                                    <InputField type={"text"} placeholder={"Enter Title"} />
                                                                    {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Title'></input> */}
                                                                </div>
                                                            </div>

                                                            <div className="first flex justify-between items-center w-full gap-10">
                                                                <div className="left flex justify-between items-center w-full gap-[3.8rem]">
                                                                    <div className="h-5 justify-start items-center gap-1 flex">
                                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Role</div>
                                                                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div>
                                                                    </div>
                                                                    <div className="w-full rounded border border-zinc-200 justify-start items-center shadow text-slate-500">
                                                                        <Dropdown value={indiSelectRole} onChange={(e) => setIndiSelectRole(e.target.value)} options={selectRole} optionLabel="value" placeholder={`Select Role`} className="w-full outline-none font-['Degular Demo'] px-2 text-slate-500" />


                                                                        {/* <select name='companyType' id='company' aria-label='Choose a type' className='min-h-min py-2 px-0 outline-none w-full text-slate-600'>
                                                                            <option className='w-full text-slate-500' disabled selected value>Select Role</option>
                                                                            <option className='w-full text-slate-900' value="Asian Indian">Corporate Director</option>
                                                                            <option className='w-full text-slate-900' value="Asian Pacific">Corporate Officer</option>
                                                                            <option className='w-full text-slate-900' value="Black or African American">Corporate Stock or Shareholder</option>
                                                                            <option className='w-full text-slate-900' value="Hispanic or Latino">LLC Manager</option>
                                                                            <option className='w-full text-slate-900' value="Native American or Alaska Native">LLC Member</option>
                                                                        </select> */}
                                                                    </div>
                                                                </div>

                                                                <div className="right flex justify-between items-center w-full gap-[1.1rem]">
                                                                    <div className="h-5 justify-start items-center gap-1 flex">
                                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Citizenship</div>
                                                                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div>
                                                                    </div>
                                                                    <div className="w-full rounded border border-zinc-200 justify-start items-center shadow text-slate-500">
                                                                        <Dropdown value={indiSelectCitizenship} onChange={(e) => setIndiSelectCitizenship(e.target.value)} options={selectCitizenship} optionLabel="value"
                                                                            placeholder={`Select Citizenship`} className="w-full outline-none font-['Degular Demo'] px-2" />
                                                                        {/* <select name='companyType' id='company' aria-label='Choose a type' className='min-h-min py-2 px-0 outline-none w-full text-slate-600'>
                                                                            <option className='w-full text-slate-500' disabled selected value>Select Citizenship</option>
                                                                            <option className='w-full text-slate-900' value="Asian Indian">Asian Indian</option>
                                                                            <option className='w-full text-slate-900' value="Asian Pacific">Asian Pacific</option>
                                                                            <option className='w-full text-slate-900' value="Black or African American">Black or African American</option>
                                                                            <option className='w-full text-slate-900' value="Hispanic or Latino">Hispanic or Latino</option>
                                                                            <option className='w-full text-slate-900' value="Native American or Alaska Native">Native American or Alaska Native</option>
                                                                            <option className='w-full text-slate-900' value="Native Hawaiian or Other Pacific">Native Hawaiian or Other Pacific</option>
                                                                            <option className='w-full text-slate-900' value="Islander">Islander</option>
                                                                            <option className='w-full text-slate-900' value="Other">Other</option>
                                                                        </select> */}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="first flex justify-between items-center w-full gap-10">
                                                                <div className="left flex justify-between items-center w-full gap-[1.4rem]">
                                                                    <div className="h-5 justify-start items-center gap-0 flex">
                                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight max-w-min">Years of Ownership</div>
                                                                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div>
                                                                    </div>
                                                                    <InputField type={"text"} placeholder={"Enter Years"} onChange={(e) => handleInputChange(e, "yrsOfOwnership", i, "years")} value={individual[i]["yrsOfOwnership"]} />
                                                                    {/* <input type='email' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Years'></input> */}
                                                                </div>

                                                                <div className="right flex justify-between items-center w-full gap-[0.5rem]">
                                                                    <div className="h-5 justify-start items-center gap-1 flex">
                                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Ethnic Origin</div>
                                                                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div>
                                                                    </div>
                                                                    <div className="w-full rounded border border-zinc-200 justify-start items-center shadow text-slate-500">
                                                                        <Dropdown value={indiSelectEthenicOrigin} onChange={(e) => setIndiSelectEthenicOrigin(e.target.value)} options={selectEthnicOrigin} optionLabel="value"
                                                                            placeholder={`Select Ethnic Origin`} className="w-full outline-none font-['Degular Demo'] px-2" />
                                                                        {/* <select name='companyType' id='company' aria-label='Choose a type' className='min-h-min py-2 px-0 outline-none w-full text-slate-600'>
                                                                            <option className='w-full text-slate-500' disabled selected value> Select Ethnic Origin</option>
                                                                            <option className='w-full text-slate-900' value="Asian Indian">Asian Indian</option>
                                                                            <option className='w-full text-slate-900' value="Asian Pacific">Asian Pacific</option>
                                                                            <option className='w-full text-slate-900' value="Black or African American">Black or African American</option>
                                                                            <option className='w-full text-slate-900' value="Hispanic or Latino">Hispanic or Latino</option>
                                                                            <option className='w-full text-slate-900' value="Native American or Alaska Native">Native American or Alaska Native</option>
                                                                            <option className='w-full text-slate-900' value="Native Hawaiian or Other Pacific">Native Hawaiian or Other Pacific</option>
                                                                            <option className='w-full text-slate-900' value="Islander">Islander</option>
                                                                            <option className='w-full text-slate-900' value="Other">Other</option>
                                                                        </select> */}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="first flex justify-between items-center w-full gap-10">
                                                                <div className="left flex justify-between items-center w-full gap-10">
                                                                    <div className="h-5 justify-start items-center gap-1 flex">
                                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Gender</div>
                                                                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div>
                                                                    </div>
                                                                    <div className="w-full rounded border border-zinc-200 justify-start items-center shadow text-slate-500">
                                                                        <Dropdown value={indiSelectGender} onChange={(e) => setIndiSelectGender(e.target.value)} options={selectGender} optionLabel="value"
                                                                            placeholder={`Select Gender`} className="w-full outline-none font-['Degular Demo'] px-2" />
                                                                        {/* <select name='companyType' id='company' aria-label='Choose a type' className='min-h-min py-2 px-0 outline-none w-full text-slate-600'>
                                                                            <option className='w-full text-slate-500' disabled selected value> Select Gender</option>
                                                                            <option className='w-full text-slate-900' value="Male">Male</option>
                                                                            <option className='w-full text-slate-900' value="Female">Female</option>
                                                                            <option className='w-full text-slate-900' value="Non-binary">Non-binary</option>
                                                                            <option className='w-full text-slate-900' value="Other">Other</option>
                                                                            <option className='w-full text-slate-900' value="Decline to Disclose">Decline to Disclose</option>
                                                                        </select> */}
                                                                    </div>
                                                                </div>

                                                                <div className="right flex justify-between items-center w-full gap-8">
                                                                    <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight max-w-min">Ownership Percent</div>
                                                                    <InputField type={"text"} placeholder={"Enter Percentage"} onChange={(e) => handleInputChange(e, "ownershipPercent", i, "percent")} value={individual[i]["ownershipPercent"]} />
                                                                    {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Percentage'></input> */}
                                                                </div>
                                                            </div>


                                                            <div className="first flex justify-between items-center w-full gap-10">
                                                                <div className="left flex justify-between items-center w-full gap-12">
                                                                    <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight max-w-min">Voting Percent</div>
                                                                    <InputField type={"text"} placeholder={"Enter Percentage"} onChange={(e) => handleInputChange(e, "votingPercent", i, "percent")} value={individual[i]["votingPercent"]} />
                                                                    {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Percentage'></input> */}
                                                                </div>

                                                                <div className="right flex justify-between items-center w-full gap-[-0.5rem]">
                                                                    <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight w-[8.5rem]">Type of Capital Contribution</div>
                                                                    <div className="w-full rounded border border-zinc-200 justify-start items-center shadow text-slate-500">
                                                                        <Dropdown value={indiSelectCapitalContribution} onChange={(e) => setIndiSelectCapitalContribution(e.target.value)} options={selectCapitalContribution} optionLabel="value"
                                                                            placeholder={`Select Type of Capital Contribution`} className="w-full outline-none font-['Degular Demo'] px-2" />
                                                                        {/* <select name='companyType' id='company' aria-label='Choose a type' className='min-h-min py-2 px-0 outline-none w-full text-slate-600'>
                                                                            <option className='w-full text-slate-500' disabled selected value> Select Type of Capital Contribution</option>
                                                                            <option className='w-full text-slate-900' value="Initial Capital Contribution">Initial Capital Contribution</option>
                                                                            <option className='w-full text-slate-900' value="Equipment Value">Equipment Value</option>
                                                                            <option className='w-full text-slate-900' value="Both">Both</option>
                                                                        </select> */}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="first flex justify-between items-center w-full gap-10">
                                                                <div className="left flex justify-between items-center w-full gap-7">
                                                                    <div className="h-5 justify-start items-center gap-1 flex">
                                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight max-w-min">Initial Capital
                                                                            Contribution</div>
                                                                        {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                                                                    </div>
                                                                    <InputField type={"text"} placeholder={"Enter Amount in Dollars"} onChange={(e) => handleInputChange(e, "initialContribution", i, "number")} value={individual[i]["initialContribution"]} />
                                                                    {/* <input type='email' className="w-[140%] min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Amount in Dollars'></input> */}
                                                                </div>
                                                                <div className="left flex justify-between items-center w-full gap-7">
                                                                    <div className="h-5 justify-start items-center gap-1 flex">
                                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight max-w-min">Equipment Value</div>
                                                                        {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                                                                    </div>
                                                                    <InputField type={"text"} placeholder={"Enter Amount in Dollars"} onChange={(e) => handleInputChange(e, "equipmentValue", i, "number")} value={individual[i]["equipmentValue"]} />
                                                                    {/* <input type='email' className="w-[140%] min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Amount in Dollars'></input> */}
                                                                </div>
                                                            </div>
                                                            <div className="first flex justify-between items-center w-full gap-10">
                                                                <div className="left flex justify-between items-center w-full gap-7">
                                                                    <div className="h-5 justify-start items-center gap-1 flex">
                                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight max-w-min">Expertise (Years)</div>
                                                                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div>
                                                                    </div>
                                                                    <InputField type={"text"} placeholder={"Enter Years"} onChange={(e) => handleInputChange(e, "expertise", i, "years")} value={individual[i]["expertise"]} />
                                                                    {/* <input type='email' className="w-[140%] min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Years'></input> */}
                                                                </div>

                                                                <div className="right flex justify-between items-center w-full gap-4">
                                                                </div>
                                                            </div>

                                                            {/* End of owner Form */}
                                                            <div className="self-stretch h-[0px] border border-neutral-300 border-opacity-90"></div>

                                                            <div className='docs w-full flex gap-1 custom:gap-4'>
                                                                <div className="left w-[30%]">
                                                                    <div><span className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Upload Owner Documents</span><span className="text-orange-600 text-sm font-normal font-['Inter'] leading-tight">*</span></div>
                                                                </div>

                                                                <div className='right w-[70%] flex flex-col gap-8'>
                                                                    {/* <div className="two w-full flex gap-4 justify-between items-start custom:flex-row">
                                                                        <div className='flex flex-col gap-4 '>
                                                                            <div className="pb-3 justify-start items-center gap-0 flex min-w-min">
                                                                                <div className="text-blue-950 w-full text-sm font-normal font-['Degular Demo'] leading-tight custom:text-base">Government issued photo id (colored copy)</div>
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

                                                                    <FileUpload label={`Government issued photo id (colored copy)`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`photoid`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                                    <div className="w-full h-[0px] border border-zinc-100"></div>

                                                                    {/* <div className="two w-full flex gap-4 justify-between items-start custom:flex-row">
                                                                        <div className='flex flex-col gap-4'>
                                                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Proof of Expertise</div>
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
                                                                    <FileUpload label={`Proof of Expertise`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofexpertise`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                                    <div className="w-full h-[0px] border border-zinc-100"></div>

                                                                    {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                                        <div className='flex flex-col gap-4'>
                                                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Proof of U.S. Citizenship</div>
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
                                                                    <FileUpload label={`Proof of U.S. Citizenship`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofus`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                                    <div className="w-full h-[0px] border border-zinc-100"></div>

                                                                    {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                                        <div className='flex flex-col gap-4'>
                                                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Birth Certificate</div>
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
                                                                    <FileUpload label={`Birth Certificate`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`birthcert`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                                    <div className="w-full h-[0px] border border-zinc-100"></div>

                                                                    {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                                        <div className='flex flex-col gap-4'>
                                                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Does the birth certificate provide documents of the minority ethnicity</div>
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
                                                                    <FileUpload label={`Does the birth certificate provide documents of the minority ethnicity`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`birthminority`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                                    <div className="w-full h-[0px] border border-zinc-100"></div>

                                                                    {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                                        <div className='flex flex-col gap-4'>
                                                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">How would you like to document minority ethnicity</div>
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
                                                                    <FileUpload label={`How would you like to document minority ethnicity`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`documentminorityethnicity`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                                    <div className="w-full h-[0px] border border-zinc-100"></div>

                                                                    {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                                        <div className='flex flex-col gap-4'>
                                                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Native Americans/Alaska Native Blood Degree Certificate (i.e., tribal registry letter, tribal roll register number) [if applicable]</div>
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
                                                                    <FileUpload label={`Native Americans/Alaska Native Blood Degree Certificate (i.e., tribal registry letter, tribal roll register number) [if applicable]`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`nativeamerican`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                                    <div className="w-full h-[0px] border border-zinc-100"></div>

                                                                    {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                                        <div className='flex flex-col gap-4'>
                                                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Tribal Registry Letter</div>
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

                                                                    <FileUpload label={`Tribal Registry Letter`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`tribalregistryletter`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />

                                                                    <div className="w-full h-[0px] border border-zinc-100"></div>

                                                                    {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                                        <div className='flex flex-col gap-4'>
                                                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Tribal Roll Registry Card</div>
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
                                                                    <FileUpload label={`Tribal Roll Registry Card`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`tribalroll`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                                    <div className="w-full h-[0px] border border-zinc-100"></div>

                                                                    {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                                        <div className='flex flex-col gap-4'>
                                                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                                                <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Class of share</div>
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
                                                                    <FileUpload label={`Class of Share`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`classshare`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                                    <div className="w-full h-[0px] border border-zinc-100"></div>

                                                                    {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
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
                                                                    <FileUpload label={`% ownership of class`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`percentclass`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                                    <div className="w-full h-[0px] border border-zinc-100"></div>

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
                                                                    <FileUpload label={`% ownership of total equity to be added`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`percentofownerequity`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </Fragment>
                                                })
                                            }
                                        </div>
                                    </div>
                                    {
                                        individual.length <= 3 &&
                                        <div className="px-4 py-3 bg-blue-800 justify-start items-start inline-flex cursor-pointer" id='addIndOwn' role='button' onClick={() => indiAddMore()}>
                                            <div className="w-5 h-5 relative" >
                                                <img src={Plus} alt="" />
                                            </div>
                                            <div className="text-center text-white text-base font-normal font-['Degular Demo'] leading-tight" >
                                                Add Individual Owners
                                            </div>
                                        </div>
                                    }
                                </>
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
                <Button onClick={() => handleSave()} autoFocus>
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
