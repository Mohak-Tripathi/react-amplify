import React, { useState } from "react";
import { CircleProgress } from "react-gradient-progress";
import { changeSideBar } from "../features/displayPage/displayPageSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SideBar() {

    const dispatch = useDispatch();
    const { sideBar, formToDisplay } = useSelector((store) => store.displayPage)



    const sidebarPages = [
        { name: "General Info", percentage: 20 },
        { name: "Business Info", percentage: 40 },
        { name: "Management Control", percentage: 60 },
        { name: "Business Desc", percentage: 80 },
        { name: "References", percentage: 100 },
    ];

    // Find the percentage based on the current sidebar page
    const currentPage = sidebarPages.find(page => page.name === sideBar);
    const currentPercentage = currentPage ? currentPage.percentage : 0;



    // progress bar
    const [percentage, setPercentage] = useState(50);

    const handlePercentageChange = (event) => {
        const newPercentage = event.target.value;
        setPercentage(newPercentage);
    };

    return (
        <section className="basis-1/4 min-w-[25%] px-4 flex gap-4 ">
            <div className=" w-full text-[0.85rem] overflow-y-auto bg-white" >
                <div className="progress-bar p-4 h-full bg-white flex gap-1 flex-col pb-5">
                    <div className="flex items-center w-full justify-center">
                        <CircleProgress
                            // percentage={20}

                            percentage={currentPercentage}
                            strokeWidth={8}
                            primaryColor={["#0075BF", "#0075BF"]}
                            secondaryColor={"#F4F4F4"}
                            fontColor={"#000000"}
                            fontSize={"1.75rem"}
                            width={140}
                        />
                    </div>
                    <h4 className="text-[#959595]">STEPS TO COMPLETE</h4>
                    <div className="flex flex-col gap-2 text pb-5 mb-5">
                        <div
                            className={`p-[0.75rem]  flex justify-between items-center rounded cursor-pointer ${sideBar === "General Info" ? "bg-[#BDE1F4]" : "bg-slate-100"}`}
                            onClick={() => dispatch(changeSideBar({ sideBarName: "General Info" }))}
                        >
                            General Information
                        </div>
                        <div
                            className={`p-[0.75rem] flex justify-between items-center rounded cursor-pointer ${sideBar === "Business Info" ? "bg-[#BDE1F4]" : "bg-slate-100"}`}
                            onClick={() => dispatch(changeSideBar({ sideBarName: "Business Info" }))}
                        >
                            Business Information
                        </div>
                        <div
                            className={`p-[0.75rem] flex justify-between items-center rounded cursor-pointer ${sideBar === "Management Control" ? "bg-[#BDE1F4]" : "bg-slate-100"}`} onClick={() => dispatch(changeSideBar({ sideBarName: "Management Control" }))}
                        >
                            Management & Controls
                        </div>
                        <div
                            className={`p-[0.75rem] flex justify-between items-center rounded cursor-pointer ${sideBar === "Business Desc" ? "bg-[#BDE1F4]" : "bg-slate-100"} `}
                            onClick={() => dispatch(changeSideBar({ sideBarName: "Business Desc" }))}
                        >
                            Business Description
                        </div>
                        <div
                            className={`p-[0.75rem] flex justify-between items-center rounded cursor-pointer ${sideBar === "References" ? "bg-[#BDE1F4]" : "bg-slate-100"}`}
                            onClick={() => dispatch(changeSideBar({ sideBarName: "References" }))}
                        >
                            References
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
