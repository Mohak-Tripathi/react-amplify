import Label from "../../globalComponents/Label";
import InputField from "../../globalComponents/InputField";
import Upload from "../../assests/images/icons/Upload.png";
import PdfComp from "../../globalComponents/PdfComp";


import FileUpload from '../../globalComponents/FileUpload';
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";


import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { handleCheckInput } from '../../helpers/inputFieldValidators';


const InvestmentFund = ({ handleClose, handleSave }) => {


    const { investmentFund } = useSelector((store) => store.businessInfo)
    const [isAddPdf, setAddPdf] = useState(Object.keys(investmentFund).length >= 1 ? investmentFund : {});


    const [investmentForm, setInvestmentForm] = useState([{ nameOfFunds: '', sponsorName: '', address: '', country: '', state: "", city: "", zipCode: "", backgroundInvestment: "", numberOfInvestor: "" }]);

    const [isFormValidate, setFormValidate] = useState({
        email: false,
    })

    const onFilesChange = (e) => {
        console.log(e)
    }

    const dispatch = useDispatch()



    function handleInputChange(e, fieldName, fieldType) { // ! use "i" if your form is array
        if (handleCheckInput(e, fieldType, investmentForm[0][fieldName])) {
            console.log("handleCheckInput - ", e.target.value);
            updateField(fieldName, e);
            if (fieldType === "email") {
                setFormValidate({ ...isFormValidate, email: false })
            }
        } else {
            console.log("handleCheckInput fasly - ", e.target.value);
            updateField(fieldName, e);
            if (fieldType === "email") {
                setFormValidate({ ...isFormValidate, email: true })
                if (e.target.value.trim() === "") {
                    setFormValidate({ ...isFormValidate, email: false })
                }
            }
        }

        function updateField(fieldName, e) {
            if (e.target.value !== "undefined") {
                setInvestmentForm({ ...investmentForm, [fieldName]: e.target.value });
            }
        }
    }




    return (

        <>
            <DialogTitle id="responsive-dialog-title">
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <>

                        <div className="w-full min-h-min flex-col justify-start items-start gap-8 inline-flex bg-white">
                            <div className="self-stretch h-[247px] flex-col justify-start items-start gap-6 flex">
                                <div className="text-center text-zinc-500 text-base font-normal  leading-tight" style={{ fontSize: "14px", fontFamily: "Degular" }}>INVESTMENT FUND</div>
                                <div className="self-stretch h-[204px] flex-col justify-start items-start gap-12 flex">
                                    <div className="self-stretch h-[204px] flex-col justify-start items-start gap-9 flex">
                                        <div className="self-stretch h-[88px] flex-col justify-start items-start flex">

                                            <div className="self-stretch h-[88px] flex-col justify-start items-center gap-1 flex" style={{ fontSize: "16px", fontFamily: "Degular" }}>
                                                <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex">
                                                    <div className="text-blue-950 font-normal  leading-tight"  > Name of the Fund</div>
                                                </div>
                                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" onChange={(e) => handleInputChange(e, "nameOfFunds", "text")} value={investmentForm["nameOfFunds"]} style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder='Enter Name of the Fund'></input>
                                                </div>

                                                <div className="self-stretch pb-4 pt-2 justify-start items-center gap-px inline-flex">
                                                    <div className="text-blue-950  font-normal leading-tight">Sponsor Name</div>
                                                </div>

                                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" onChange={(e) => handleInputChange(e, "sponsorName", "text")} value={investmentForm["sponsorName"]} style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder='Enter Sponsor Name'></input>
                                                </div>
                                                <div className="self-stretch pb-4 pt-2 justify-start items-center gap-px inline-flex">
                                                    <div className="text-blue-950  font-normal leading-tight">Address</div>
                                                </div>

                                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                                    <input type='text' className="text-stone-700 text-lg font-normal leading-snug border-none outline-none w-full" onChange={(e) => handleInputChange(e, "address", "text")} value={investmentForm["address"]} style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder='Enter Address'></input>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                        <br />
                        <br />
                        <br />
                        <div className='flex gap-8 pt-12' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                            <div className='w-1/2 flex flex-col gap-3'>
                                <Label text="Country" required='*' />

                                <InputField id="physicalZIP_code" type="text" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} onChange={(e) => handleInputChange(e, "country", "text")} value={investmentForm["country"]} placeholder="Enter Country" name='physicalZIP_code' readOnly />
                            
                            </div>
                            <div className='w-1/2 flex flex-col gap-3'>
                                <Label text="State" required='*' />
                                <InputField id="physicalLocation_Type" type="text" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} onChange={(e) => handleInputChange(e, "state", "text")} value={investmentForm["state"]} placeholder="Enter State" name='physicalLocation_Type' />
                            </div>
                        </div>

                        <div className='flex gap-8 pt-6' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                            <div className='w-1/2 flex flex-col gap-3'>
                                <Label text="City" required='*' />
                                <InputField id="physicalZIP_code" type="text" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} onChange={(e) => handleInputChange(e, "city", "text")} value={investmentForm["city"]} placeholder="Enter City" name='physicalZIP_code' readOnly />
                            </div>
                            <div className='w-1/2 flex flex-col gap-3'>
                                <Label text="ZipCode" required='*' />
                                <InputField id="physicalLocation_Type" type="text" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} onChange={(e) => handleInputChange(e, "zipCode", "number")} value={investmentForm["zipCode"]} placeholder="Enter Zip Code" name='physicalLocation_Type' />
                            </div>
                        </div>
                        <div className='flex gap-8 pt-6' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                            <div className='w-1/2 flex flex-col gap-3'>
                                <Label text="Website" required='*' />
                                <InputField id="physicalZIP_code" type="text" placeholder="Enter Website" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} onChange={(e) => handleInputChange(e, "website", "text")} value={investmentForm["website"]} name='website' readOnly />
                            </div>

                        </div>

                        <div className="self-stretch h-[88px] flex-col justify-start items-center gap-1 flex pt-10">
                            <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex">
                                <div className="text-blue-950 font-normal leading-tight" style={{ fontSize: "16px", fontFamily: "Degular" }} > BackGround of the Group and Investment Strategy</div>
                            </div>
                            <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                <input type='text' className="text-stone-700 text-lg font-normal leading-snug border-none outline-none w-full" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} onChange={(e) => handleInputChange(e, "backgroundInvestment", "text")} value={investmentForm["backgroundInvestment"]} placeholder='Enter backGround of the group and investment strategy'></input>
                            </div>

                        </div>


                        <div className='flex gap-8 pt-20' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                            <div className='w-1/2 flex flex-col gap-3'>
                                <Label text="The number of investors in the fund " required='*' />
                                <InputField id="physicalZIP_code" type="text" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} onChange={(e) => handleInputChange(e, "numberOfInvestor", "number")} placeholder="Enter no of investors in the fund " name='physicalZIP_code' readOnly />
                           
                            </div>
                            <div className='w-1/2 flex flex-col gap-3'>
                                <Label text="Any such investors Affiliates of the general partner or of each other" />
                                <div className='flex gap-4'>
                                    <div className="flex items-center h-6">
                                        <input id="website_Yes" type="radio" value="website_Yes" name="website_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600"
                                        />
                                        <label htmlFor="website_Yes" className="ms-2 text-sm text-black dark:text-gray-300">Yes</label>
                                    </div>
                                    <div className="flex items-center h-6">
                                        <input id="website_No" type="radio" value="website_No" name="website_radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor="website_No" className="ms-2 text-sm text-black dark:text-gray-300">No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-[88px] flex-col justify-start items-center gap-1 flex pt-10" style={{ fontSize: "16px", fontFamily: "Degular" }}>
                            <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex">
                                <div className="text-blue-950 font-normal leading-tight" > BackGround of the Group and Investment Strategy</div>
                            </div>
                            <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                <input type='text' className="text-stone-700 text-lg font-normal leading-snug border-none outline-none w-full" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder='Enter backGround of the group and investment strategy'></input>
                            </div>
                            <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex pt-10">
                                <div className="text-blue-950 font-normal leading-tight">The legal structure of the general partner</div>
                            </div>

                            <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                <input type='text' className="text-stone-700 text-lg font-normal  leading-snug border-none outline-none w-full" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder='Enter legal structure of the general partner'></input>
                            </div>
                        </div>

                        <br />
                        <br />

                        {/*<div className="w-full min-h-min flex-col justify-start items-start gap-8 inline-flex bg-white ">*/}
                        {/*    <div className="self-stretch h-[247px] flex-col justify-start items-start gap-6 flex">*/}
                        {/*        <div className="self-stretch h-[204px] flex-col justify-start items-start gap-12 flex">*/}
                        {/*            <div className="self-stretch h-[204px] flex-col justify-start items-start gap-9 flex">*/}
                        {/*                <div className="self-stretch h-[88px] flex-col justify-start items-start flex">*/}

                        <br />
                        <br />
                        <br />
                        <br />
                        <div className=' border-[#D9D9D9] w-[100%] border pt-10'></div>
                        <div className="self-stretch flex-col justify-start items-center gap-1 flex pt-10">
                            <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex" >
                                <div className="text-gray-500 text-xl font-normal  leading-tight" style={{ fontSize: "14px", fontFamily: "Degular" }}> DOCUMENTS NEEDED TO BE UPLOADED</div>
                            </div>
                        </div>
                        {/*                </div>*/}

                        {/*            </div>*/}

                        {/*        </div>*/}

                        {/*    </div>*/}

                        {/*</div>*/}

                        <div className='flex flex-col gap-3 '>
                            <div className='flex justify-between' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                                {/* <Label text="Evidence that the fund has a minimum of $25 million  AOM and/or fund investment commitments" required='*' toolTipText='If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage 
                    receipt which shows the owners of the home
' />
                    <label className='cursor-pointer' htmlFor='capability-statement'>
                        <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                            <div className="w-5 h-5 relative" >
                                <img src={Upload} alt="" />
                            </div>
                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='capability-statement'  />Upload</div>
                        </div>
                    </label> */}


                                <div className='w-full flex flex-col gap-2'>
                                    <FileUpload label={`Evidence that the fund has a minimum of $25 million  AOM and/or fund investment commitments 
                 `} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`evidence`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} requiredText='*' toolTip={`If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage 
                 receipt which shows the owners of the home`} />
                                    {/* 
                            <InputField placeholder={'Add comments if any'} type={'text'} /> */}
                                </div>



                            </div>
                            {/* <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <div className='flex gap-4'>
                            <div className='flex gap-5'>
                                <div className="flex gap-4">
                                    <div>
                                        <PdfComp /> <PdfComp />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}

                        </div>


                        <div className='flex flex-col gap-3 pt-10'>
                            <div className='flex justify-between' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                                {/* <Label text="A statement whether the fund is a minority-managed fund." required='*' toolTipText='If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home
' />
                    <label className='cursor-pointer' htmlFor='capability-statement'>
                        <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                            <div className="w-5 h-5 relative" >
                                <img src={Upload} alt="" />
                            </div>
                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='capability-statement' />Upload</div>
                        </div>
                    </label> */}

                                <div className='w-full flex flex-col gap-2'>
                                    <FileUpload label={`A statement whether the fund is a minority-managed fund.`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`minorityManagedFund`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} requiredText='*' toolTip={`If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home`} />
                                    {/* 
                            <InputField placeholder={'Add comments if any'} type={'text'} /> */}
                                </div>


                            </div>
                            {/* <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <div className='flex gap-4'>
                            <div className='flex gap-5'>
                                <div className="flex gap-4">
                                    <div>
                                        <PdfComp /> <PdfComp />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}

                        </div>



                    </>


                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Disagree
                </Button>
                <Button onClick={() => handleSave(isAddPdf, "investmentFund")} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </>
    )

}

export default InvestmentFund;