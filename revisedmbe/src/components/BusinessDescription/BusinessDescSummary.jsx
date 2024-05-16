import React from 'react'
import FormFooter from '../../globalComponents/FormFooter'
import { useDispatch } from "react-redux";
import { changeFormToDisplayBusinessDesc, changeSideBar } from '../../features/displayPage/displayPageSlice'
import SectionTitle from '../../globalComponents/SectionTitle'
import Label from '../../globalComponents/Label'
import BG from '../../assests/images/BG.png'
import SumSecHeader from '../../globalComponents/SumSecHeader'

export default function BusinessDescSummary() {

    const dispatch = useDispatch()

    const handleNext = () => {
        dispatch(changeSideBar({ sideBarName: "References" }))
    }

    const handleReturn = () => {
        dispatch(changeFormToDisplayBusinessDesc({ formName: "Stragetic Alliance", step: "prev" }))
    }

    return (
        <>
            <div className='main  h-full'>
                <div className='flex flex-col gap-2'>
                    <div className='bg-white flex flex-col'>
                        <SumSecHeader text='Business Description' />
                        <div className='p-8 flex flex-col gap-6'>
                            {/* <Label text='Business Description' /> */}
                            <div className='flex justify-start items-center'>
                                <div className="left w-[25%]">
                                    <SectionTitle title='Business Description' />
                                </div>
                                <div className="right w-[75%]">
                                    <div>Description 1</div>
                                    <div>Description 2</div>
                                </div>
                            </div>
                        </div>
                        <div className='p-8 flex justify-between items-start'>
                            <div className='left w-[50%] flex flex-col gap-10'>
                                <div className="row-1 flex justify-start items-center">
                                    <div className='w-[50%]'>
                                        <SectionTitle title='Website URL' />
                                    </div>
                                    <div>https://example.com</div>
                                </div>
                                <div className="row-2 flex justify-start items-center">
                                    <div className='w-[50%]'>
                                        <SectionTitle title='Facebook Icon' />
                                    </div>
                                    <img src={BG} alt='facebook-icon' className='rounded-full h-16 w-16' />
                                </div>
                                <div className="row-3 flex justify-start items-center">
                                    <div className='w-[50%]'>
                                        <SectionTitle title='Facebook Icon' />
                                    </div>
                                    <img src={BG} alt='facebook-icon' className='rounded-full h-16 w-16' />
                                </div>
                            </div>
                            <div className='right w-[50%] flex flex-col gap-10'>
                                <div className="row-1 flex justify-start items-center">
                                    <div className='w-[50%]'>
                                        <SectionTitle title='Video URL' />
                                    </div>
                                    <div>https://example.com</div>
                                </div>
                                <div className="row-2 flex justify-start items-center">
                                    <div className='w-[50%]'>
                                        <SectionTitle title='Facebook Icon' />
                                    </div>
                                    <img src={BG} alt='facebook-icon' className='rounded-full h-16 w-16' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white flex flex-col'>
                        <SumSecHeader text='NAICS & UNSPSC Description' />
                        <div className='p-8 flex flex-col gap-10'>
                            {/* <Label text='NAICS & UNSPSC Description' /> */}
                            <div className='flex justify-between items-center'>
                                <div className='left w-[25%]'>
                                    <SectionTitle title='Primary NAICS' />
                                </div>
                                <div className='right w-[75%]'>
                                    12345
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='left w-[25%]'>
                                    <SectionTitle title='Your Primary Industry' />
                                </div>
                                <div className='right w-[75%]'>
                                    12345
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='left w-[25%]'>
                                    <SectionTitle title='NAICS Codes' />
                                </div>
                                <div className='right w-[75%] flex flex-col gap-1'>
                                    <div className='flex gap-1.5'>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'><div className='left w-[25%]'>
                                <SectionTitle title='UNSPSC Codes' />
                            </div>
                                <div className='right w-[75%] flex flex-col gap-1'>
                                    <div className='flex gap-1.5'>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                    </div>
                                    <div className='flex gap-1.5'>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                        <div className='p-0.5 px-2 text-sm bg-[#EAEAEA] rounded-sm'>12345 - Hunting & Trapping</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white flex flex-col'>
                        <SumSecHeader text='Corporate Plus' />
                        <div className='flex flex-col gap-10'>
                            <div className='p-8 flex justify-start items-center'>
                                <div className="left flex justify-start items-center w-[50%] gap-20">
                                    <div className='w-[35%]'>
                                        <SectionTitle title='Are you a Corporate Plus Member?' />
                                    </div>
                                    <div>Yes</div>
                                </div>
                                <div className="right w-[50%] flex justify-start items-center gap-20">
                                    <div className='w-[25%]'>
                                        <SectionTitle title='NMSDC Corporate Sponsor' />
                                    </div>
                                    <div>Yes</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white flex flex-col'>
                        <SumSecHeader text='Strategic Alliances & Partnerships' />
                        <div className='p-8 flex flex-col gap-10'>
                            <div className='row-1 flex justify-start items-center'>
                                <div className='left flex justify-start items-center w-[50%] gap-20'>
                                    <div className='w-[35%]'>
                                        <SectionTitle title='Does your business have any strategic partners or alliances that will increase your business capacity?' />
                                    </div>
                                    <div>Yes</div>
                                </div>
                                <div className='right flex justify-start items-center w-[50%] gap-20'>
                                    <div className='w-[50%] flex flex-col gap-4'>
                                        <div className='text-[#0045AC]'>Company 1</div>
                                        <div className='flex flex-col gap-2'>
                                            <div>Company Name</div>
                                            <SectionTitle title='Company Description' />
                                        </div>
                                    </div>
                                    <div className='w-[50%] flex flex-col gap-4'>
                                        <div className='text-[#0045AC]'>Company 2</div>
                                        <div className='flex flex-col gap-2'>
                                            <div>Company Name</div>
                                            <SectionTitle title='Company Description' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row-2 flex justify-start items-center'>
                                <div className='left flex justify-start items-center w-[50%] gap-20'>
                                    <div className='w-[35%]'>
                                        <SectionTitle title='Is the business a Certified Partner/ Representative/ Reseller' />
                                    </div>
                                    <div>No</div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeFormToDisplayBusinessDesc({ formName: "Stragetic Alliance" })} actionNext={changeSideBar({ sideBarName: "References" })} />
            </div>
        </>
    )
}
