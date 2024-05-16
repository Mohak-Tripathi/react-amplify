// CompanyForm.js
import React, { useEffect, useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import ReactModal from 'react-modal';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Plus from '../../assests/images/WPlus.svg'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../../css/General.css'
import Cloud from '../../assests/images/cloud.png';
// import PdfComp from '../PdfComp';
import SelectWrapper from '../../globalComponents/SelectWrapper';
import { handleChangeCompanySelectedArr, updateCompany, updateCompanyFromForm, updateCompany_l2, updateNameValue } from '../../features/treeStructure/treeStructureSlice';
import { useDispatch, useSelector } from "react-redux";
import PdfComp from "../../globalComponents/PdfComp";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { handleDeleteForm, handleUpdateForm, handleUpdateFormField } from '../../features/treeStructure/companyFormSlice';
import InputField from '../../globalComponents/InputField';
import FileUpload from '../../globalComponents/FileUpload';
import { handleCheckInput } from '../../helpers/inputFieldValidators';


const CompanyForm = ({ onFormSubmit, level, setOpen, companyName, currentLevel }) => {
    const dispatch = useDispatch();
    const { companySelectedArr, companySelectedArr_l2, tree } = useSelector((store) => store.treeStructure);
    const { companyFormData } = useSelector((store) => store.companyForm);
    const [trustdoc, setTrustDoc] = useState(true);
    const [isForm, setForm] = useState({
        email: false,
    })
    const [noOfCompany, setnoOfCompany] = useState(Object.keys(companyFormData).indexOf(companyName) !== -1 ? companyFormData[companyName] : [{ companyName: '', ein: '', name: 'Company', value: 'Company', votingPercent: "", companyOwnerPercent: "" }]);
    // console.log("COMPANYNAME", companyName, Object.keys(companyFormData).indexOf(companyName), noOfCompany)
    const [disab, setDisab] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        registrationNumber: '',
        businessStructure: '',
    });

    // pdf component data handling

    const onFilesChange = (e) => {
        console.log(e)
    }

    const [fileUpload, setFileUpload] = useState({})

    const handleCompanyTypeChange = (e) => {
        dispatch(handleChangeCompanySelectedArr({ level: level, arr: [] }));
        setSelectedCompanyType(e.target.value);
    };

    useEffect(() => {
        console.log("triggered", companyFormData);
        if (Object.keys(companyFormData).indexOf(companyName) !== -1)
            setnoOfCompany(companyFormData[companyName])
    }, [companyFormData])

    const addMore = () => {
        // dispatch(handleUpdateForm({ form: { companyName: '', ein: '', name: 'Company', value: 'Company' }, formName: "companyFormData" }));
        // console.log('inside function', individual.length)
        if (noOfCompany.length <= 2) {
            setnoOfCompany((prevSessions) => [
                ...prevSessions,
                { name: "Company", value: "Company", companyName: '', ein: '', registrationNumber: '', businessStructure: '', votingPercent: "", companyOwnerPercent: "" }
            ])
        }
    }

    const companyDelete = (index) => {
        console.log(companyName, index, currentLevel, level)
        dispatch(handleDeleteForm({ index: index, formName: "companyFormData", companyName: companyFormData[companyName][index]["value"], level: level, parentCompany: companyName }));
        setnoOfCompany((prevSessions) => prevSessions.filter((_, i) => i !== index));
    }

    const [selectedCompanyType, setSelectedCompanyType] = useState('');

    const companyTypeOptions = [
        { value: '', label: 'Select Business Structure', disabled: true },
        { value: 'Corporation', label: 'Corporation Limited Liability Company' },
        { value: 'LLC', label: 'Limited Liability Partnership (LLP or LTD)' },
        { value: 'Trust', label: 'General Partnership (GP)' },
        { value: 'Sole Proprietorship', label: 'Sole Proprietorship' },
    ];

    // console.log(tree, tree[level], tree[currentLevel], Object.keys(tree[currentLevel]).length >= 1, level, currentLevel, companySelectedArr, "company form");

    const handleInputChange = (e, fieldName, i, fieldType) => {
        // let obj = {
        //     name: "Company",
        //     level: currentLevel,
        //     index: i,
        //     value: e.target.value,
        //     formName: "companyFormData",
        //     fieldName: fieldName,
        //     companyName: companyName,
        //     tree: tree,
        // }

        if (fieldName === "companyName") {
            const dataToUpdate = [...noOfCompany]
            dataToUpdate[i] = {
                ...dataToUpdate[i],
                [fieldName]: e.target.value,
                value: e.target.value,
            }
            setnoOfCompany(dataToUpdate);
        }

        // ! for email validation
        if (handleCheckInput(e, fieldType, noOfCompany[0][fieldName])) {
            updateField(fieldName, e, i);
            if (fieldType === "email") {
                setForm({ ...isForm, email: false })
            }
        } else {
            updateField(fieldName, e, i);
            if (fieldType === "email") {
                setForm({ ...isForm, email: true })
                if (e.target.value.trim() === "") {
                    setForm({ ...isForm, email: false })
                }
            }
        }

        function updateField(fieldName, e, i) {
            const dataToUpdate = [...noOfCompany]
            dataToUpdate[i] = {
                ...dataToUpdate[i],
                [fieldName]: e.target.value,
            }
            setnoOfCompany(dataToUpdate);
        }
        // else {
        //     e.target.value = noOfCompany[0][fieldName]
        // }
        // dispatch(handleUpdateFormField({ value: e.target.value, formName: "companyFormData", fieldName: fieldName, index: i }));
        // console.log(e.target.value, companyFormData, noOfCompany);

        // dispatch(updateNameValue(obj));
        // const { name, value } = e.target;


        // if (formData.companyName === 'Sole Proprietorship') {
        //     setSelectedCities([{ name: 'Individual' }]);
        //     setDisab(true);
        // } else {
        //     setDisab(false);
        // }
    };

    const handleMultiSelectChange = (e) => {
        setSelectedCities(e.value);
    };

    const handleSubmit = () => {
        onFormSubmit({ formData, selectedCities });
    };

    const [selectedCities, setSelectedCities] = useState([]);
    const cities = [
        { name: 'Individual' },
        { name: 'Company' },
        { name: 'Trust' },
        { name: 'Invest' }
    ];

    const citiesMulti = [
        { name: 'Individual', value: 'Individual' },
        { name: "Company", value: "Company", companyName: '', ein: '', registrationNumber: '', businessStructure: '', votingPercent: "", companyOwnerPercent: "" },
        { name: 'Trust', value: 'Trust' },
        { name: 'Investment Fund', value: 'Investment Fund' },
    ];

    const [isOpen, setIsOpen] = useState(false);

    function handleAgree() {
        let obj = {
            name: "Company",
            level: currentLevel,
            formName: "companyFormData",
            companyName: companyName,
            tree: tree,
            filteredArr: noOfCompany,
            unfilteredArr: tree[currentLevel][companyName].filter((elem) => elem.name !== "Company")
        }
        console.log(level, currentLevel, obj);
        // const test = companyFormData.map((elem) => {
        //     return { name: "Company", value: elem.companyName };
        // });
        if (tree[currentLevel] && tree[currentLevel][companyName]) {
            dispatch(updateNameValue(obj));

            const removeIndividual = tree[currentLevel][companyName].filter((elem) => elem.name !== "Company")
            // console.log(tree[currentLevel][companyName].filter((elem) => elem.name === "Company").length);
            // console.log(tree[currentLevel][companyName].filter((elem) => "Company").length);
            // dispatch(updateCompanyFromForm({ currentLevel: currentLevel, companyName: companyName, arr: [...removeIndividual, ...test] }));
        }
        setOpen(false);
    };

    function handleClose() {
        setOpen(false);
    }

    // function handleCheckInput(e, fieldType) {
    //     const regNum = /^[0-9]*$/;
    //     if (regNum.test(e.target.value) && fieldType === "number") {
    //         return true;
    //     }
    //     return false;
    //     console.log("handleChange", e.target.value);
    // }

    return (
        <React.Fragment>
            <DialogTitle id="responsive-dialog-title" style={{ zIndex: 100 }}>
            </DialogTitle>
            <DialogContent style={{ zIndex: 100, fontFamily: "Degular Demo" }}>
                <DialogContentText style={{ zIndex: 100 }}>
                    <div className=" text-zinc-500 text-base font-normal font-['Degular Demo'] mb-5 leading-tight">Enter the Company details of Company</div>
                    {
                        noOfCompany.map((elem, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <div className='flex justify-between items-center w-full'>
                                        <div className="text-center text-blue-800 text-xs font-normal font-['Degular Demo'] leading-tight uppercase my-3">Company {i + 1}</div>
                                        {
                                            noOfCompany.length > 1 &&
                                            <button onClick={() => companyDelete(i)}>
                                                <RiDeleteBin6Line className='text-[red]' />
                                            </button>
                                        }
                                    </div>
                                    <div className="w-full h-full p-8 flex-col justify-start items-start gap-12 inline-flex bg-white shadow border border-zinc-200" >
                                        {/* <div className="self-stretch h-[0px] border border-neutral-300"></div> */}
                                        <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                                            <div className="self-stretch flex-col justify-start items-start gap-12 flex">
                                                <div className='flex flex-col w-full'>
                                                    <div className="left flex justify-between items-center w-full gap-4">
                                                        <div className="h-5 justify-start items-center gap-1 flex w-[15%]">
                                                            <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Company Name</div>
                                                            {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                                                        </div>
                                                        <InputField type={"text"} placeholder={"Enter Company Name"} onChange={(e) => handleInputChange(e, "companyName", i, "text")} value={noOfCompany[i]["companyName"]} />

                                                        {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Company Name' onChange={(e) => handleInputChange(e, "companyName", i)} value={noOfCompany[i]["companyName"]} /> */}
                                                    </div>
                                                    { // ! for email validation
                                                        isForm.email &&
                                                        <div className='w-full flex items-center'>
                                                            <div className='w-[15%]'></div>
                                                            <div className='text-red-500 text-xs'>
                                                                Please enter valid email
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <div className="left flex justify-between items-center w-full gap-4">
                                                    <div className="h-5 justify-start items-center gap-1 flex w-[15%]">
                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">EIN</div>
                                                        {/* <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div> */}
                                                    </div>
                                                    <InputField type={"text"} placeholder={"Enter EIN"} onChange={(e) => handleInputChange(e, "ein", i, "number")} value={noOfCompany["ein"]} />

                                                    {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter EIN' /> */}
                                                </div>
                                                <div className="self-stretch flex-col justify-start items-start gap-9 flex">
                                                    <div className="self-stretch flex-col justify-start items-start flex">
                                                        <div className="self-stretch justify-start items-start gap-4 flex">
                                                            <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex w-[15%]">
                                                                <div className="text-slate-500 font-normal font-['Degular Demo'] leading-tight">What is the Company’s
                                                                    Legal Business Structure?</div>
                                                            </div>
                                                            <div className="w-full bg-white rounded shadow border border-zinc-200 justify-start items-center text-slate-900">

                                                                <SelectWrapper
                                                                    name={"company"}
                                                                    id={"company"}
                                                                    label={"Select Legal Structure"}
                                                                    options={companyTypeOptions}
                                                                    onChange={handleCompanyTypeChange}
                                                                    value={selectedCompanyType}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="self-stretch h-[88px] justify-start items-start gap-4 flex">
                                                    <div className="self-stretch pb-3 justify-start items-center gap-px inline-flex w-[15%]">
                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Is this company owned by Individuals, other companies, trust, Investment funds or combination of these?</div>
                                                    </div>
                                                    <div className="w-full bg-white rounded shadow border border-zinc-200 justify-start items-center">
                                                        {/*<select name='multi' id='multiSelect' aria-label='Choose a type' className='h-14 outline-none w-full' value={selectedValues.multi} onChange={handleSelectChange}>
                                            <option className='w-full text-slate-500' disabled selected value> Select Corporation Type</option>
                                            <option className='w-full' value="Individual">Individual</option>
                                            <option className='w-full' value="Company">Company</option>
                                            <option className='w-full' value="Trust">Trust</option>
                                            <option className='w-full' value="Investment Fund">Investment fund</option>
                                        </select>*/}

                                                        {/* <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                                            placeholder="Select Cities" maxSelectedLabels={3} className="h-12 outline-none w-full" /> */}

                                                        <MultiSelect
                                                            value={selectedCompanyType === "Sole Proprietorship" ? companySelectedArr[level][`company${i}`].filter((elem) => elem === "Individual") : companySelectedArr[level][`company${i}`]}
                                                            onChange={(e) => dispatch(updateCompany({ arr: e.value, companyName: noOfCompany[i]["companyName"], level: level, companyIndex: `company${i}` }))}
                                                            options={selectedCompanyType === "Sole Proprietorship" ? citiesMulti.filter((elem) => elem.name === "Individual") : citiesMulti}
                                                            optionLabel="name"
                                                            placeholder="Select Company Owned By"
                                                            maxSelectedLabels={3}
                                                            className="relative h-12 outline-none w-full z-50 px-2"
                                                            style={{ zIndex: 1400 }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="left flex justify-between items-center w-full gap-4">
                                                    <div className="h-5 justify-start items-center gap-1 flex w-[15%]">
                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Company Voting Percent</div>
                                                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div>
                                                    </div>
                                                    <InputField type={"text"} placeholder={"Enter Voting Percent"} onChange={(e) => handleInputChange(e, "votingPercent", i, "percent")} value={noOfCompany["votingPercent"]} />

                                                    {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Voting Percent' /> */}
                                                </div>
                                                <div className="left flex justify-between items-center w-full gap-4">
                                                    <div className="h-5 justify-start items-center gap-1 flex w-[15%]">
                                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Company Ownership Percent</div>
                                                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Inter'] leading-tight">*</div>
                                                    </div>
                                                    <InputField type={"text"} placeholder={"Enter Ownership Percent"} onChange={(e) => handleInputChange(e, "companyOwnerPercent", i, "percent")} value={noOfCompany["companyOwnerPercent"]} />
                                                    {/* <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Ownership Percent' /> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="self-stretch h-[0px] border border-neutral-300 border-opacity-90"></div>

                                        <div className='docs w-full flex gap-1 custom:gap-4'>
                                            <div className="left w-[30%]">
                                                <div><span className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Upload Company Documents</span><span className="text-orange-600 text-sm font-normal font-['Inter'] leading-tight">*</span></div>
                                            </div>

                                            <div className='right w-[70%] flex flex-col gap-8'>
                                                {/* <div className="two w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4 '>
                                                        <div className="pb-3 justify-start items-center gap-0 flex min-w-min">
                                                            <div className="text-blue-950 w-full text-sm font-normal font-['Degular Demo'] leading-tight custom:text-base">Certification of Incorporation or Certificate of Filing</div>
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
                                                <FileUpload label={`Certification of Incorporation or Certificate of Filing`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`certificationofinfo`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                {/* <div className="w-full h-[0px] border border-zinc-100"></div> */}

                                                {/* <div className="two w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4'>
                                                        <div className="pb-3 justify-start items-center gap-px flex">
                                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Articles of Incorporation or Certification of Formation</div>
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
                                                <FileUpload label={`Articles of Incorporation or Certification of Formation`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`articlesofformation`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4'>
                                                        <div className="pb-3 justify-start items-center gap-px flex">
                                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Articles of Amendment or Certification of Amendment</div>
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
                                                <FileUpload label={`Articles of Amendment or Certification of Amendment`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`ArticlesofAmendment`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4'>
                                                        <div className="pb-3 justify-start items-center gap-px flex">
                                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Corporate Bylaws</div>
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
                                                <FileUpload label={`Corporate Bylaws`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`corpbylaws`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4'>
                                                        <div className="pb-3 justify-start items-center gap-px flex">
                                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Proof of Capital Investment</div>
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
                                                <FileUpload label={`Proof of Capital Investment`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofCapitalinvest`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4'>
                                                        <div className="pb-3 justify-start items-center gap-px flex">
                                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Minutes of the last Board Meeting</div>
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
                                                <FileUpload label={`Minutes of the last Board Meeting`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`lastminutemeeting`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4'>
                                                        <div className="pb-3 justify-start items-center gap-px flex">
                                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Minutes of the meeting where officers were elected</div>
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
                                                <FileUpload label={`Minutes of the meeting where officers were elected`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`minofofficerselected`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4'>
                                                        <div className="pb-3 justify-start items-center gap-px flex">
                                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Stock Certificates issued</div>
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
                                                <FileUpload label={`Stock Certificates issued`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`stockcert`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4'>
                                                        <div className="pb-3 justify-start items-center gap-px flex">
                                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Current Stock Transfer Ledger</div>
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
                                                <FileUpload label={`Current Stock Transfer Ledger`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`currentstock`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4'>
                                                        <div className="pb-3 justify-start items-center gap-px flex">
                                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Proof of Stock Purchase</div>
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
                                                <FileUpload label={`Proof of Stock Purchase`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofstockpurchase`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4'>
                                                        <div className="pb-3 justify-start items-center gap-px flex">
                                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Purchase or buy | sell agreement with the corresponding proof of payment</div>
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
                                                <FileUpload label={`Purchase or buy | sell agreement with the corresponding proof of payment`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`buyorsellagreement`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4'>
                                                        <div className="pb-3 justify-start items-center gap-px flex">
                                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Stock options or other ownership options outstanding as well as agreements which restrict ownership or control of minority owners</div>
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
                                                <FileUpload label={`Stock options or other ownership options outstanding as well as agreements which restrict ownership or control of minority owners`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`stockoptionsoutstanding`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                                {/* <div className="three w-full flex gap-4 justify-between items-start custom:flex-row">
                                                    <div className='flex flex-col gap-4'>
                                                        <div className="pb-3 justify-start items-center gap-px flex">
                                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Certificate of Authority to Transact Business (Foreign Entity Certificate)</div>
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
                                                <FileUpload label={`Certificate of Authority to Transact Business (Foreign Entity Certificate)`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`certofauthority`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                    {
                        noOfCompany.length <= 2 &&
                        <div className="px-4 py-3 bg-blue-800 justify-start items-start inline-flex cursor-pointer mt-6" id='addIndOwn' role='button' onClick={() => addMore()}>
                            <div className="w-5 h-5 relative" >
                                <img src={Plus} alt="" />
                            </div>
                            <div className="text-center text-white text-base font-normal font-['Degular Demo'] leading-tight" >
                                Add More Companies
                            </div>
                        </div>
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => handleClose()}>
                    <div className="w-[148px] self-stretch px-4 py-[11px] border border-blue-800 justify-center items-center gap-2 flex cursor-pointer" >
                        <div className="text-blue-800 text-xs font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Cancel</div>
                    </div>
                </Button>
                <Button onClick={() => handleAgree()} autoFocus>
                    <div className="w-[88px] self-stretch px-4 py-3 bg-blue-800 justify-center items-center gap-4 flex cursor-pointer">
                        <div className="justify-center items-center gap-2 flex">
                            <div className="text-white text-xs font-normal font-['Degular Demo'] leading-tight">Save</div>
                        </div>
                    </div>
                </Button>
            </DialogActions>
        </React.Fragment>
    );
};

export default CompanyForm;
