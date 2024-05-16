import React from 'react'
import { useDispatch, useSelector } from "react-redux"

import '../components/General.css'

import prev from "../assests/images/prev.png";
import save from "../assests/images/mark.png";
import next from "../assests/images/next.png";

function FormFooter({ actionReturn, actionNext, withdraw, prevText = 'Previous', onNextClick, onReturnClick }) {

    const { sideBar, referencesPage } = useSelector((store) => store.displayPage)

    return (
        <aside className='bg-white'>
            <div className="bg-sky-200 w-full h-[1px]"></div>
            <div className="w-full min-h-min pt-4 pr-8 pb-4 pl-8 justify-between items-start inline-flex">

                {actionReturn && (
                    <div className=" py-3 justify-center items-center gap-2 flex cursor-pointer" onClick={onReturnClick}>
                        <div className="w-5 h-5 relative" >
                            <img src={prev} alt="prev" />
                        </div>
                        <div className="text-[#0045AC] text-base font-normal font-['Degular Demo'] leading-tight flex gap-2 items-center">{prevText}</div>
                    </div>
                )}
                <div className="grow shrink basis-0 h-[43px] justify-end items-start gap-4 flex">
                    {
                        (sideBar === "References" && referencesPage === "Opt Ins") &&
                        <div
                            className="flex w-[175px] h-[43px] items-center justify-center relative  bg-blue-800 cursor-pointer"
                            onClick={withdraw}
                        >
                            <div className="absolute [font-family:'Degular_Demo-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[19.2px] whitespace-nowrap ">
                                Withdraw Application
                            </div>
                        </div>
                    }
                    <div className="w-[148px] self-stretch px-4 py-[11px] border border-blue-800 justify-center items-center gap-2 flex cursor-pointer" onClick={() => { }}>
                        <div className="w-5 h-5 relative" >
                            <img src={save} alt="mark" />
                        </div>
                        <div className="text-blue-800 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Save as Draft</div>
                    </div>
                    <div className="w-[88px] self-stretch px-4 py-3 bg-blue-800 justify-center items-center gap-4 flex cursor-pointer" onClick={onNextClick}>
                        <div className="justify-center items-center gap-2 flex">
                            <div className="text-white text-base font-normal font-['Degular Demo'] leading-tight">Next</div>
                            <div className="w-4 h-4 relative" >
                                <img src={next} alt="next" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default FormFooter