
import Label from "../../globalComponents/Label";
import InputField from "../../globalComponents/InputField";
import PdfComp from "../../globalComponents/PdfComp";
import Upload from "../../assests/images/icons/Upload.png";
import Table from "./Table";



import FileUpload from '../../globalComponents/FileUpload';
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";


import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";


const ForeignOperatingCompany = ({handleClose, handleSave}) => {


    const [table, setTable] = useState("");

    const { foreignOperatingCompany } = useSelector((store) => store.businessInfo)
    const [isAddPdf, setAddPdf] = useState(Object.keys(foreignOperatingCompany).length >= 1 ? foreignOperatingCompany : {});


    const onFilesChange = (e) => {
        console.log(e)
    }

    const dispatch = useDispatch()


    return (

<>
        <DialogTitle id="responsive-dialog-title">
        </DialogTitle>
        <DialogContent>
            <DialogContentText>


        <>
            <div className="w-full min-h-min flex-col justify-start items-start gap-8 inline-flex bg-white">
                <div className="self-stretch h-[247px] flex-col justify-start items-start gap-6 flex">
                    <div className="text-center text-zinc-500 text-base font-normal leading-tight" style={{ fontSize: "14px", fontFamily: "Degular" }}>Foreign Operating Company</div>
                    <div className="self-stretch h-[204px] flex-col justify-start items-start gap-12 flex">
                        <div className="self-stretch h-[204px] flex-col justify-start items-start gap-9 flex">
                            <div className="self-stretch h-[88px] flex-col justify-start items-start flex">

                                <div className="self-stretch h-[88px] flex-col justify-start items-center gap-1 flex" style={{ fontSize: "16px", fontFamily: "Degular" }}>
                                    <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex">
                                        <div className="text-blue-950 font-normal leading-tight">Name of Foreign Operating Company</div>
                                    </div>
                                    <div className="self-stretch px-4 py-3 pt-2  bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                        <input type='text' className="text-stone-700 text-lg font-normal  leading-snug border-none outline-none w-full" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder='Enter name of foreign operating company'></input>
                                    </div>

                                    <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex pt-2">
                                        <div className="text-blue-950 font-normal leading-tight">Country where the FOC is legally organized (must be non-U.S.):</div>
                                    </div>

                                    <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                        <input type='text' className="text-stone-700 text-lg font-normal  leading-snug border-none outline-none w-full" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder='Enter country'></input>
                                    </div>

                                    <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex pt-2">
                                        <div className="text-blue-950 font-normal  leading-tight">Address of FOC’s headquarters (including country):</div>
                                    </div>

                                    <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                        <input type='text' className="text-stone-700 font-normal  leading-snug border-none outline-none w-full" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder='Enter address of FOC’s headquarters'></input>
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
                    <Label text="City" required='*' toolTipText='A free unique number that idenfities your business Obtain n EIN here (https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online). Social Security Numbers are prohibited' />
                    <InputField name={'EIN'} type={'number'} style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder={'Enter City'} readonly={true} />
                </div>
                <div className='w-1/2 flex flex-col gap-3'>
                    <Label text="State" required='*' toolTipText='A free unique number that idenfities your business Obtain n EIN here (https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online). Social Security Numbers are prohibited' />
                    <InputField name={'EIN'} type={'number'} style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder={'Enter State'} readonly={true} />
                </div>
            </div>

            <div className='flex gap-8 pt-5' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                <div className='w-1/2 flex flex-col gap-3'>
                    <Label text="Country" required='*' toolTipText='A free unique number that idenfities your business Obtain n EIN here (https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online). Social Security Numbers are prohibited' />
                    <InputField name={'EIN'} type={'number'} style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder={'Enter Country'} readonly={true} />
                </div>
            </div>

            <br />

            <div className="self-stretch h-[88px] flex-col justify-start items-center gap-1 flex" style={{ fontSize: "16px", fontFamily: "Degular" }}>
                <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex">
                    <div className="text-blue-950 font-normal  leading-tight">Identify the foreign currency and set forth the exchange rate used: $1 U.S. = __ [Foreign Currency]</div>
                </div>
                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                    <input type='text' className="text-stone-700 font-normal  leading-snug border-none outline-none w-full" style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder='Enter foreign currency'></input>
                </div>

            </div>



            <div className='flex gap-8 pt-12' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                <div className='w-1/2 flex flex-col gap-3'>
                    <Label text="Applicant fiscal year-end: " required='*' toolTipText='A free unique number that idenfities your business Obtain n EIN here (https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online). Social Security Numbers are prohibited' />
                    <InputField name={'EIN'} type={'number'} style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder={'Enter applicant fiscal year-end'} readonly={true} />
                </div>
                <div className='w-1/2 flex flex-col gap-3'>
                    <Label text="FOC fiscal year-end:" required='*' toolTipText='A free unique number that idenfities your business Obtain n EIN here (https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online). Social Security Numbers are prohibited' />
                    <InputField name={'EIN'} type={'number'} style={{ fontSize: "0.875rem", fontFamily: "Degular" }} placeholder={'Enter FOC fiscal year-end'} readonly={true} />
                </div>
            </div>

            <div className='flex gap-8 pt-12' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                <Table />
            </div>

            {table == "YES" ? <Table /> : <></>}




            {/*Table */}

            <div className="self-stretch h-[88px] flex-col justify-start items-center gap-1 flex pt-5" style={{ fontSize: "16px", fontFamily: "Degular" }}>
                <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex">
                    <div className="text-blue-950 font-normal  leading-tight">Are the FOC and the Applicant in the same industry?</div>
                </div>
                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                    <input value={table} onChange={event => setTable(event.target.value)} type='text' style={{ fontSize: "0.875rem", fontFamily: "Degular" }} className="text-stone-700 text-lg font-normal leading-snug border-none outline-none w-full" placeholder='Enter response' ></input>
                </div>

            </div>


            <br />
            <br />
            <div className="w-full min-h-min flex-col justify-start items-start gap-8 inline-flex bg-white pt-5">
                <div className="self-stretch h-[47px] flex-col justify-start items-start gap-6 flex">
                    <div className="text-center text-zinc-500 text-base font-normal leading-tight" style={{ fontSize: "16px", fontFamily: "Degular" }}>DOCUMENTS TO BE UPLOADED</div>

                </div>
            </div>


            {/*start*/}

            <div className='flex flex-col gap-3' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                <div className='flex justify-between'>
                    {/* <Label text="Disclosure of offering to the public" required='*' toolTipText='If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home
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
                        <FileUpload label={`Disclosure of offering to the public`} requiredText='*'  toolTip={`If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home`}  maxSizeMB={50} onFilesChange={onFilesChange} fileName={`disclosurePublic`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

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

            <div className='flex flex-col gap-3 pt-5' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                <div className='flex justify-between'>
                    {/* <Label text="Organizational chart" required='*' toolTipText='If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home
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
                        <FileUpload label={`Organizational chart`} requiredText='*' maxSizeMB={50}  toolTip={`If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home
`} onFilesChange={onFilesChange}  fileName={`organizationalChart`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

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

            <div className='flex flex-col gap-3 pt-5' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                <div className='flex justify-between'>
                    {/* <Label text="Computation of the company’s revenues generated outside the U.S." required='*' toolTipText='If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home
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
                        <FileUpload label={`Computation of the company’s revenues generated outside the U.S.`} requiredText='*'  toolTip={`Computation of the company’s revenues generated outside the U.S." required='*' toolTipText='If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`ComputationRevenue`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

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



            <div className='flex flex-col gap-3 pt-5' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                <div className='flex justify-between'>
                    {/* <Label text="Audited Financial Statements" required='*' toolTipText='If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home
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
                        <FileUpload label={`Audited Financial Statements`} requiredText={'*'} toolTip={`If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`auditedFinancialStatements`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

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

            <div className='flex flex-col gap-3 pt-5' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                <div className='flex justify-between'>
                    {/* <Label text="Service Offering" required='*' toolTipText='If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home
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
                        <FileUpload label={`Service Offering`} requiredText={'*'} toolTip={`If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home
'`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`serviceOffering`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

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
            <div className='flex flex-col gap-3 pt-5' style={{ fontSize: "16px", fontFamily: "Degular" }}>
                <div className='flex justify-between'>
                    {/* <Label text="Revenue Generation" required='*' toolTipText='If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home' />
                    <label className='cursor-pointer' htmlFor='capability-statement'>
                        <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                            <div className="w-5 h-5 relative" >
                                <img src={Upload} alt="" />
                            </div>
                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='capability-statement' />Upload</div>
                        </div>
                    </label> */}

                    <div className='w-full flex flex-col gap-2'>
                        <FileUpload label={`Revenue Generation`} requiredText={'*'} toolTip={`If business premises are leased, rented, executive suite or virtaul office.  If home base provide the signature page of the homeowners deed or mortgage receipt which shows the owners of the home
'`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`revenueGeneration`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

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
                <Button onClick={() => handleSave(isAddPdf, "foreignOperatingCompany")} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </>
    )

}


export default ForeignOperatingCompany;