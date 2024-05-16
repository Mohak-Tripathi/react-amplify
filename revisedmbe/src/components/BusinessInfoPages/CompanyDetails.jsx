import React, { useEffect, useState } from 'react'
import Cloud from '../../../assests/images/cloud.png'
import PdfComp from '../PdfComp'
import OwnerDetails from './OwnerDetails'
import Plus from '../../../assests/images/WPlus.svg'
import Prev from '../../../assests/images/prev.svg'
import Next from '../../../assests/images/next.svg'
import Mark from '../../../assests/images/mark.svg'
// import HorizontalLinearStepper from '../Stepper'


export default function CompanyDetails() {
    useEffect(()=>{
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    },[]);
    
/*    const navigate = useNavigate();*/
    const [form, setForm] = useState(false);
    const handleForm = (e)=>{
        setForm(true);
    }
    const prevPage = (e) =>{
/*        e.preventDefault();
        window.scrollTo(0, 0);
        navigate('/business')*/
    }

    const nextPage = (e) => {
        e.preventDefault();
        // navigate('/otherOwnership');
    };
    return (
        <>
            <div className="main flex gap-0 flex-col bg-white w-full">

                {/* Stepper */}
                {/* <HorizontalLinearStepper/> */}
                <div className='flex flex-col gap-4 pl-8 pt-4'>
                    <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-normal">Enter the Company(ies) that Owns ACME</div>
                    <div className="w-full text-blue-800 text-xs font-normal font-['Degular Demo'] uppercase leading-none">COMPANY 1</div>
                </div>

                {/* company 1 */}
                <div className="individual-owner px-8 py-2 bg-white">
                    <div className="w-full min-h-min px-8 py-6 shadow border border-zinc-200 flex-col justify-start items-start gap-6 inline-flex">
                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] whitespace-nowrap text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Company Name</div>
                            <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Company Name'></input>
                        </div>

                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] whitespace-nowrap text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">EIN Number</div>
                            <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter EIN Number'></input>
                        </div>

                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Is this company owned by Individuals, other companies or a combination of both?</div>
                            <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Select Ownership Structure'></input>
                        </div>

                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Company Voting Percent</div>
                            <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Title'></input>
                        </div>

                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Company OwnerShip Percent</div>
                            <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Select Role'></input>
                        </div>

                        {/* ! divider */}
                        <div className="w-full h-[0px] border border-neutral-300 border-opacity-90"></div>

                        <div className='docs w-full flex gap-4'>
                            <div className="left w-[30%]">
                                <div><span className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Upload ABC Company Documents</span><span className="text-orange-600 text-sm font-normal font-['Inter'] leading-tight">*</span></div>
                            </div>

                            <div className='right w-[70%] flex flex-col gap-8'>
                                <div className="two w-full flex justify-between items-start">
                                    <div className='flex flex-col gap-4'>
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">Government issued photo id (colored copy)</div>
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
                                </div>

                                <div className="w-full h-[0px] border border-zinc-100"></div>

                                <div className="two w-full flex justify-between items-start">
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
                                </div>

                                <div className="w-full h-[0px] border border-zinc-100"></div>

                                <div className="three w-full flex justify-between items-start">
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
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[0px] border border-neutral-300 border-opacity-90"></div>

                        <OwnerDetails />

                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='pt-6 cursor-pointer'>
                            <div className="w-[147px] h-11 px-4 py-3 bg-blue-800 justify-start items-start inline-flex">
                                <div className="w-5 h-5 relative text-[#f8f8f8]" >
                                    <img src={Plus} alt="" />
                                </div>
                                <div className="text-center text-white text-base font-normal font-['Degular Demo'] leading-tight">Add Company</div>
                            </div>
                        </div>
                        <div className="w-full h-[0px] border border-neutral-300 border-opacity-90 mb-6 mx-auto "></div>
                    </div>
                </div>

                {/* end company 1 */}
            </div>

            <div className='w-full bg-white'>
                <div className='bg-sky-200 w-full h-[1px]'></div>
                <div className="w-full min-h-min pt-4 pr-8 pb-4 justify-between items-start inline-flex">
                    <div className="px-4 py-3 justify-start items-center gap-2 flex cursor-pointer" onClick={(e) => prevPage(e)}>
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
                        <div className="w-[88px] self-stretch px-4 py-3 bg-blue-800 justify-center items-center gap-4 flex cursor-pointer " onClick={(e) => nextPage(e)}>
                            <div className="justify-center items-center gap-2 flex">
                                <div className="text-white text-base font-normal font-['Degular Demo'] leading-tight">Next</div>
                                <div className="w-4 h-4 relative" >
                                    <img src={Next} alt="next" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
