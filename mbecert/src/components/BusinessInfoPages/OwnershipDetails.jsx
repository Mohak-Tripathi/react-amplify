import React, { useState } from 'react'
import '../BusinessDescription/General.css'
import PdfComp from "../../globalComponents/PdfComp";
import Label from "../../globalComponents/Label";
import {
    changeBusinessPage,
    changeFormToDisplayBusiness,
    changeSideBar
} from "../../features/displayPage/displayPageSlice";
import { useDispatch } from "react-redux";
import FormFooter from "../../globalComponents/FormFooter";

export default function OwnershipDetails() {
    const dispatch = useDispatch()
    const [addFacilVisible, setaddFacilVisible] = useState(false);
    const [selectedaddFacilRadio, setSelectedaddFacil] = useState('addFacil_No');

    const [facilities, setFacilities] = useState([{ id: 1 }]);

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
    const [form, setForm] = useState(false)
    const handleForm = (e) => {
        setForm(true);
    }

    function handleClick() {
        return undefined;
    }

    const handleNext = () => {
        dispatch(changeBusinessPage({ formName: "Other Ownership Considerations", step: "next" }));
    }

    const handleReturn = () => {
        dispatch(changeBusinessPage({ formName: "TreeStructure", step: "prev" }));
    }

    return (
        <>
            <div className="owner-details bg-white w-full flex justify-between items-start gap-10 custom:gap-0">
                <div className="left w-[30%]">
                    <div className="w-full text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Enter the Ownership Details of the Company that Owns ACME</div>
                </div>
                <div className="right w-[70%] flex flex-col gap-4">
                    <div className='text-blue-800 text-sm font-normal uppercase leading-none pt-1'>owner 1</div>
                    <div>
                        <div className="w-full h-8 pb-3 justify-start items-center gap-px inline-flex">
                            {/* <div className="text-blue-950 text-sm font-normal font-['Degular Demo'] leading-tight">Is This Owner the Primary Representative of the Company Listed Above?</div>
                            <div className="text-orange-600 text-sm font-medium font-['Inter'] leading-tight">*</div>
                            <div className="w-5 h-5 relative" >
                                <img src={Info} alt="info" />
                            </div> */}
                            <Label text='Is This Owner the Primary Representative of the Company Listed Above?' toolTipText='Hello world' />
                        </div>
                        <div className='flex gap-4 justify-start items-center text-xl'>
                            <div className='flex gap-2 justify-center items-center'>
                                <input type="radio" id='yes' name='primary_representative' value='Yes' className='checkBoxBtn' />
                                <label for='yes'>Yes</label>
                            </div>
                            <div className='flex gap-2 justify-center items-center'>
                                <input type="radio" id='no' name='primary_representative' value='Yes' className='checkBoxBtn' />
                                <label for='no'>No</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[0px] border border-neutral-300 border-opacity-90"></div>
                    <div className="w-full min-h-min px-8 py-6 shadow border border-zinc-200 flex-col justify-start items-start gap-6 inline-flex">
                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] whitespace-nowrap text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Owner Name</div>
                            <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Name'></input>
                        </div>

                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] whitespace-nowrap text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Owner Email</div>
                            <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Email'></input>
                        </div>

                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Owner Ethinicity</div>
                            <div className="w-full rounded border border-[#BCBCBC] justify-start items-center px-3">
                                <select name='companyType' id='company' aria-label='Choose a type' className='min-h-min p-2 outline-none w-full'>
                                    <option className='w-full text-slate-500' disabled selected value> -- select an option --</option>
                                    <option className='w-full' value="Asian Indian">Asian Indian</option>
                                    <option className='w-full' value="Asian Pacific">Asian Pacific</option>
                                    <option className='w-full' value="Black or African American">Black or African American</option>
                                    <option className='w-full' value="Hispanic or Latino">Hispanic or Latino</option>
                                    <option className='w-full' value="Native American or Alaska Native">Native American or Alaska Native</option>
                                    <option className='w-full' value="Native Hawaiian or Other Pacific">Native Hawaiian or Other Pacific</option>
                                    <option className='w-full' value="Islander">Islander</option>
                                    <option className='w-full' value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] justify-start items-center flex">
                                <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Owner Gender</div>
                                <div className="text-orange-600 text-sm font-medium font-['Inter'] leading-tight">*</div>
                            </div>
                            <div className="w-full rounded border border-[#BCBCBC] justify-start items-center px-3">
                                <select name='companyType' id='company' aria-label='Choose a type' className='min-h-min p-2 outline-none w-full'>
                                    <option className='w-full text-slate-500' disabled selected value> -- select an option --</option>
                                    <option className='w-full' value="Male">Male</option>
                                    <option className='w-full' value="Female">Female</option>
                                    <option className='w-full' value="Non-binary">Non-binary</option>
                                    <option className='w-full' value="Other">Other</option>
                                    <option className='w-full' value="Decline to Disclose">Decline to Disclose</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Owner Voting Percentage</div>
                            <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Percentage'></input>
                        </div>

                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Owner Ownership's Percentage</div>
                            <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Percentage'></input>
                        </div>

                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Type of Capital Contribution</div>
                            <div className="w-full rounded border border-[#BCBCBC] justify-start items-center px-3">
                                <select name='companyType' id='company' aria-label='Choose a type' className='min-h-min p-2 outline-none w-full'>
                                    <option className='w-full text-slate-500' disabled selected value> -- select an option --</option>
                                    <option className='w-full' value="Initial Capital Contribution">Initial Capital Contribution</option>
                                    <option className='w-full' value="Equipment Value">Equipment Value</option>
                                    <option className='w-full' value="Both">Both</option>
                                </select>
                            </div>
                        </div>


                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Initial Capital Contribution</div>
                            <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Amount in Dollars'></input>
                        </div>

                        <div className='flex justify-between items-center gap-11 w-full'>
                            <div className="w-[40%] justify-start items-center flex">
                                <div className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Expertise (years)</div>
                                <div className="text-orange-600 text-sm font-medium font-['Inter'] leading-tight">*</div>
                            </div>
                            <input type='text' className="w-full min-h-min p-2 border border-[#BCBCBC] outline-none text-stone-700 text-base font-normal font-['Degular Demo'] leading-snug w-full" placeholder='Enter Years'></input>
                        </div>


                        {/* ! divider */}
                        <div className="w-full h-[0px] border border-neutral-300 border-opacity-90"></div>

                        <div className='docs w-full flex gap-1 custom:gap-4'>
                            <div className="left w-[30%]">
                                <div><span className="text-slate-500 text-base font-normal font-['Degular Demo'] leading-tight">Upload Owner Documents</span><span className="text-orange-600 text-sm font-normal font-['Inter'] leading-tight">*</span></div>
                            </div>

                            <div className='right w-[70%] flex flex-col gap-8'>
                                <div className="two w-full flex flex-col gap-4 justify-between items-start custom:flex-row">
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
                                                {/*<img src={Cloud} alt="" />*/}
                                            </div>
                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='GovtPhoto' />Upload</div>
                                        </div>
                                    </label>
                                </div>

                                <div className="w-full h-[0px] border border-zinc-100"></div>

                                <div className="two w-full flex flex-col gap-4 justify-between items-start custom:flex-row">
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
                                                {/*<img src={Cloud} alt="" />*/}
                                            </div>
                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='GovtPhoto' />Upload</div>
                                        </div>
                                    </label>
                                </div>

                                <div className="w-full h-[0px] border border-zinc-100"></div>

                                <div className="three w-full flex flex-col gap-4 justify-between items-start custom:flex-row">
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
                                                {/*<img src={Cloud} alt="" />*/}
                                            </div>
                                            <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='GovtPhoto' />Upload</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[724px] h-5 justify-start items-center inline-flex cursor-pointer" role='button' onClick={(e) => handleForm(e)}>
                        <div className="w-5 h-5 relative" >
                            {/*<img src={Plus} alt="" />*/}
                        </div>
                        <div className="text-center text-blue-800 text-base font-normal font-['Degular Demo'] leading-tight">Add Another Owner or Primary Representative</div>
                    </div>
                </div>
            </div>


            {/*<div className="w-full min-h-min pt-4 pr-8 pb-4 justify-between items-start inline-flex">
                <div className="px-4 py-3 justify-start items-center gap-2 flex cursor-pointer" onClick={() => { }}>
                    <div className="w-5 h-5 relative" >
                         <img src={leftArrow} alt="prev" />
                    </div>
                    <div className="text-blue-800 text-base font-normal font-['Degular Demo'] leading-tight" >Previous</div>
                </div>
                <div className="grow shrink basis-0 h-[43px] justify-end items-start gap-4 flex">
                    <div className="w-[148px] self-stretch px-4 py-[11px] border border-blue-800 justify-center items-center gap-2 flex cursor-pointer" onClick={() => handleClick()}>
                        <div className="w-5 h-5 relative" >
                             <img src={save} alt="mark" />
                        </div>
                        <div className="text-blue-800 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Save as Draft</div>
                    </div>
                    <div className="w-[88px] self-stretch px-4 py-3 bg-blue-800 justify-center items-center gap-4 flex cursor-pointer" onClick={() => dispatch(changeFormToDisplayBusiness({ formName: "Other Ownership Considerations" }))}>
                        <div className="justify-center items-center gap-2 flex">
                            <div className="text-white text-base font-normal font-['Degular Demo'] leading-tight">Next</div>
                            <div className="w-4 h-4 relative" >
                                 <img src={rightArrow} alt="next" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}

            <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeBusinessPage({ formName: "TreeStructure", step: "prev" })} actionNext={changeBusinessPage({ formName: "Other Ownership Considerations", step: "next" })} />

        </>
    )
}
