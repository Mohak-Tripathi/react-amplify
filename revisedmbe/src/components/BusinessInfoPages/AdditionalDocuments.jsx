import React, { useState } from 'react'
import PdfComp from "../../globalComponents/PdfComp";
import { changeBusinessPage, changeFormToDisplayBusiness, changeSideBar } from "../../features/displayPage/displayPageSlice";
import { useDispatch, useSelector } from "react-redux";
import FormFooter from "../../globalComponents/FormFooter";
import Cloud from "../../assests/images/cloud.png";
import InputField from '../../globalComponents/InputField';
import FileUpload from '../../globalComponents/FileUpload';



export default function AdditionalDocuments() {

    const dispatch = useDispatch()

    const { additionalDocument } = useSelector((store) => store.businessInfo)


    // const myData = [
    //     { text: 'Books', value: 1 },
    //     { text: 'Movies, Music & Games', value: 2 },
    //     { text: 'Electronics & Computers', value: 3 },
    //     { text: 'Home, Garden & Tools', value: 4 },
    //     { text: 'Health & Beauty', value: 5 },
    //     { text: 'Toys, Kids & Baby', value: 6 },
    //     { text: 'Clothing & Jewelry', value: 7 },
    //     { text: 'Sports & Outdoors', value: 8 },
    //     { text: 'Automotive & Industrial', value: 9 }
    // ];
    const [isAddPdf, setAddPdf] = useState(Object.keys(additionalDocument).length >= 1 ? additionalDocument : {});

    const [trustdoc, setTrustDoc] = useState(true);
    const [pdfUpload, setPdfUpload] = useState(false);
    const handleUpload = (e) => {
        e.preventDefault();
        setPdfUpload(true)
    }


    const [selectedCompanyType, setSelectedCompanyType] = useState('');

    const handleCompanyTypeChange = (e) => {
        setSelectedCompanyType(e.target.value);
    };


    const companyTypeOptions = [
        { value: '', label: 'Select Business Structure', disabled: true },
        { value: 'Corporation', label: 'Corporation Limited Liability Company' },
        { value: 'LLC', label: 'Limited Liability Partnership (LLP or LTD)' },
        { value: 'Trust', label: 'General Partnership (GP)' },
        { value: 'Sole Proprietorship', label: 'Sole Proprietorship' },
    ];

    const handleNext = () => {
        console.log("isAddPdf - ", isAddPdf);
        dispatch(changeSideBar({ sideBarName: "Management Control", fileUpload: isAddPdf, page: "additionalDocument" }))
    }

    const handleReturn = () => {
        dispatch(changeBusinessPage({ formName: "Business Size & Certifications", step: "prev" }))
    }

    const onFilesChange = (e) => {
        console.log(e)
    }

    return (
        <>
            <div className="w-full min-h-min px-8 pb-8 pt-4 flex-col justify-start items-start gap-8 inline-flex bg-white">
                <div className="self-stretch h-[0px] border border-neutral-300"></div>
                <div className="self-stretch h-[47px] flex-col justify-start items-start gap-6 flex">
                    <div className="text-center text-zinc-500 text-base font-normal font-['Degular Demo'] leading-tight">ADDITIONAL DOCUMENTS</div>
                    <div className="self-stretch h-[204px] flex-col justify-start items-start gap-12 flex">
                        <div className="self-stretch h-[204px] flex-col justify-start items-start gap-9 flex">
                            {/*<div className="self-stretch h-[88px] flex-col justify-start items-start flex">
                                <div className="self-stretch h-[88px] flex-col justify-start items-center gap-1 flex">
                                    <div className="self-stretch pb-3 justify-start items-center gap-px inline-flex">
                                        <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Is this company owned by Individuals, other companies or a combination of both?</div>
                                    </div>
                                    <div className="w-full bg-white rounded shadow border border-zinc-200 justify-start items-center px-3">
                                        <select name='companyType' id='company' aria-label='Choose a type' className='h-14 outline-none w-full'>
                                            <option className='w-full text-slate-500' disabled selected value> Select Corporation Type</option>
                                            <option className='w-full' value="Corporation">Individual Company</option>
                                            <option className='w-full' value="LLC">Company(ies)+Individual(s)</option>
                                            <option className='w-full' value="Trust">Trust</option>
                                            <option className='w-full' value="">Investment fund</option>
                                        </select>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>


                <div className="self-stretch min-h-min flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-full flex-col justify-start items-start gap-12 flex">
                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Stock Purchase`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`stockPurchase`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Stock Purchase</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}
                        {trustdoc &&
                            <div className='w-full flex flex-col gap-2'>
                                <FileUpload label={`Investment Agreement`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`investmentAgreement`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                                <InputField placeholder={'Add comments if any'} type={'text'} />
                            </div>
                            // <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            //     <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            //         <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                            //             <div className="self-stretch justify-between items-center inline-flex">
                            //                 <div className="pb-3 justify-start items-center gap-px flex">
                            //                     <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Investment Agreement</div>
                            //                 </div>
                            //                 <label className='cursor-pointer' htmlFor='ArticlesCertificate'>
                            //                     <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                            //                         <div className="w-5 h-5 relative" >
                            //                             <img src={Cloud} alt="" />
                            //                         </div>
                            //                         <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='ArticlesCertificate' />Upload</div>
                            //                     </div>
                            //                 </label>
                            //             </div>
                            //             <div className="justify-start items-start gap-4 inline-flex">
                            //                 <PdfComp />
                            //             </div>
                            //         </div>
                            //         <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                            //             <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                            //         </div>
                            //     </div>
                            // </div>
                        }

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Voting Agreement`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`votingAgreement`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Voting Agreement</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Voting Proxy Agreement`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`votingProxyAgreement`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Voting Proxy Agreement</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Employment Contracts`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`employmentContracts`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Employment Contracts</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Options or Warrants`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`optionsWarrants`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Options or Warrants</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Profit Sharing Agreement`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`profitSharingAgreement`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Profit Sharing Agreement</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Side Letter Agreement`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`sideLetterAgreement`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Side Letter Agreement</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}


                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Legal Opinions`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`legalOpinions`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Legal Opinions</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Side Letter Agreements`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`sideLetterAgreements`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Side Letter Agreements</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Other Transactional Documents`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`otherTransactionalDocuments`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Other Transactional Documents</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Index of Transactional Documents`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`indexTransactionalDocuments`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Index of Transactional Documents</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}


                        <div className='w-full flex flex-col gap-2'>
                            <div>
                                Does the applicant have more than one class of securities outstanding?  YES OR NO If yes answer this
                            </div>
                            <InputField placeholder={'Select'} type={'text'} />

                            {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                            </div> */}
                        </div>


                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Classes of Security Right & Preferences`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`classesSecurityRightPreferences`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Classes of Security Right & Preferences</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <div>
                                Do  you have any past, present, or proposed material contracts, arrangements,  understandings, relationships, negotiations, or transactions (excluding the
                                Transaction) the Applicant has with any investor(s) ?
                            </div>
                            <InputField placeholder={'Enter Company Name'} type={'text'} />
                            {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex w-full">
                                <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Enter Company Name'></input>
                            </div> */}
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Contract With Investors`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`contractWithInvestors`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Contract With Investors</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}



                        <div className='w-full flex flex-col gap-2'>
                            <div>
                                Does the Applicant’s charter or any transaction or other documents provide for any conversion rights, participation rights, liquidation preferences,
                                waterfalls or any other terms give a certain class or group of shareholders payments senior to other shareholders or in an amount greater than such
                                shareholder’s percentage of equity ownership?  YES or NO if yes provide this document
                                *
                                (Optional)
                            </div>
                            <InputField placeholder={'Enter Company Name'} type={'text'} />

                            {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex w-full">
                                <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Enter Company Name'></input>
                            </div> */}
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Liquidation Preferential Payments`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`liquidationPreferentialPayments`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Liquidation Preferential Payments</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Corporate Minutes(1 Year) with certification by secretary`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`corporateCertificationSecretary`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Corporate Minutes(1 Year) with certification by secretary</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Classes of Security Right & Preferences`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`classesSecurityRightPreferences`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Classes of Security Right & Preferences</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Contract With Investors`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`contractWithInvestors2`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Contract With Investors</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Liquidation Preferential Payments`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`liquidationPreferentialPayments2`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Liquidation Preferential Payments</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Minority Economic Equity`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`minorityEconomicEquity`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Minority Economic Equity</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Company Valuation Document`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`companyValuationDocument`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Company Valuation Document</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Investor Payment Obligations`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`investorPaymentObligations`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Investor Payment Obligations</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Investor Payment Obligations`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`investorPaymentObligations2`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Officer Agreement</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Executive Officer Employment Agreement`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`executiveOfficerEmploymentAgreement`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Executive Officer Employment Agreement</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Organizational chart of Management Employee`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`organizationalChartManagementEmployee`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Organizational chart of Management Employee</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}

                        <div className='w-full flex flex-col gap-2'>
                            <FileUpload label={`Miscellaneous`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`miscellaneous`} fileInfos={isAddPdf} setFileInfos={setAddPdf} validExtensions={['.pdf', '.doc', '.docx']} />

                            <InputField placeholder={'Add comments if any'} type={'text'} />
                        </div>
                        {/* <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Miscellaneous</div>
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
                                <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div>
                            </div>
                        </div> */}



                    </div>
                </div>
            </div>
            {/*<div className='bg-white'>
                <div className='bg-sky-200 w-full h-[1px]'></div>
                <div className="w-full min-h-min pt-4 pr-8 pb-4 justify-between items-start inline-flex">
                    <div className="px-4 py-3 justify-start items-center gap-2 flex cursor-pointer">
                        <div className="w-5 h-5 relative" >
                            <img src={Prev} alt="prev" />
                        </div>
                        <div className="text-blue-800 text-base font-normal font-['Degular Demo'] leading-tight">Previous</div>
                    </div>
                    <div className="grow shrink basis-0 h-[43px] justify-end items-start gap-4 flex">
                        <div className="w-[148px] self-stretch px-4 py-[11px] border border-blue-800 justify-center items-center gap-2 flex cursor-pointer">
                            <div className="w-5 h-5 relative" >
                                <img src={Mark} alt="mark" />
                            </div>
                            <div className="text-blue-800 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Save as Draft</div>
                        </div>
                        <div className="w-[88px] self-stretch px-4 py-3 bg-blue-800 justify-center items-center gap-4 flex cursor-pointer" onClick={() => dispatch(changeFormToDisplayBusiness({ formName: "Business Structure" }))}>
                            <div className="justify-center items-center gap-2 flex">
                                <div className="text-white text-base font-normal font-['Degular Demo'] leading-tight">Next</div>
                                <div className="w-4 h-4 relative" >
                                    <img src={Next} alt="next" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}

            <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeBusinessPage({ formName: "Business Size & Certifications", step: "prev" })} actionNext={changeSideBar({ sideBarName: "Management Control" })} />

        </>
    )
}
