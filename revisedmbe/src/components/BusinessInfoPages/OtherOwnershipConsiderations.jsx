import React, { useState } from 'react'
import { Textarea } from "@material-tailwind/react";
import Label from "../../globalComponents/Label";
import { changeBusinessPage, changeFormToDisplayBusiness } from "../../features/displayPage/displayPageSlice";
import { useDispatch } from "react-redux";
import FormFooter from "../../globalComponents/FormFooter";



export default function OtherOwnershipConsiderations() {
    const dispatch = useDispatch()
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

    const [DBAVisible, setDBAVisible] = useState(false);
    const [selectedDBARadio, setSelectedDBA] = useState('No_resources');
    const [isOwnerAssociated, setOwnerAssociated] = useState('No_ownerAssociated');
    const [isExternalAgreements, setExternalAgreements] = useState('No_externalAgreements');
    const [isPendingLawsuit, setPendingLawsuit] = useState('No_pendingLawsuit');

    const handleDBARadio = (e) => {
        const selectedRadio = e.target.id;
        // setSelectedDBA(selectedRadio);

        if (selectedRadio === 'DBA_Yes') {
            setDBAVisible(true);
        } else {
            setDBAVisible(false);
        }

    };

    const handleNext = () => {
        dispatch(changeBusinessPage({ formName: "Business Acquastion & Opening licence", step: "next" }));
    }

    const handleReturn = () => {
        dispatch(changeBusinessPage({ formName: "Ownership Details", step: "prev" }));
    }

    return (
        <>
            <div className="w-full min-h-min px-8 pb-8 pt-4 flex-col justify-start items-start gap-8 inline-flex bg-white">
                <div className="self-stretch h-[0px] border border-neutral-300"></div>
                <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                    <div className="text-center text-zinc-500 text-base font-normal font-['Regular Demo'] uppercase leading-tight">COMPANY DETAILS</div>
                    {/* <div className="text-center text-zinc-500 text-base font-normal font-['Regular Demo'] uppercase leading-tight">DETAILS REGARDING ACME COMPANY</div> */}
                    <div className="self-stretch flex-col justify-start items-start gap-12 flex">
                        <div className="self-stretch flex-col justify-start items-start gap-9 flex">
                            <div className="self-stretch flex-col justify-start items-start flex gap-8">

                                <div className='w-full'>
                                    <div className='flex flex-col gap-2'>
                                        <Label text="Any shared Resource" required={`*`} />
                                        <div className='flex gap-4'>
                                            <div className="flex items-center h-6">
                                                <input id="sharedResource_Yes" type="radio" value="Yes_resources" name="sharedResource" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setSelectedDBA(e.target.value)}
                                                    checked={selectedDBARadio === 'Yes_resources'} />
                                                <label htmlFor="sharedResource_Yes" className="ms-2 text-sm text-black ">Yes</label>
                                            </div>
                                            <div className="flex items-center h-6">
                                                <input id="sharedResource_No" type="radio" value="No_resources" name="sharedResource" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setSelectedDBA(e.target.value)}
                                                    checked={selectedDBARadio === 'No_resources'} />
                                                <label htmlFor="sharedResource_No" className="ms-2 text-sm text-black ">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        selectedDBARadio === "Yes_resources" &&
                                        <div className='flex gap-2 pt-5 w-full'>
                                            <Textarea
                                                placeholder="Describe"
                                                type="text"
                                                className="text-lg font-normal font-[Degular Demo] leading-snug border border-gray-300 outline-none w-full text-stone-700 py-2 shadow"
                                            />
                                        </div>
                                    }
                                </div>

                                <div className='w-full'>
                                    <div className='flex flex-col gap-2'>
                                        <Label text="Are any owners associated with any other business that will benefit from this certification?" required={`*`} />
                                        <div className='flex gap-4'>
                                            <div className="flex items-center h-6">
                                                <input id="ownersAssociated_Yes" type="radio" value="Yes_ownerAssociated" name="ownersAssociated" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setOwnerAssociated(e.target.value)}
                                                    checked={isOwnerAssociated === 'Yes_ownerAssociated'} />
                                                <label htmlFor="ownersAssociated_Yes" className="ms-2 text-sm text-black ">Yes</label>
                                            </div>
                                            <div className="flex items-center h-6">
                                                <input id="ownersAssociated_No" type="radio" value="No_ownerAssociated" name="ownersAssociated" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setOwnerAssociated(e.target.value)}
                                                    checked={isOwnerAssociated === 'No_ownerAssociated'} />
                                                <label htmlFor="ownersAssociated_No" className="ms-2 text-sm text-black ">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        isOwnerAssociated === "Yes_ownerAssociated" &&
                                        <div className='flex gap-2 pt-5 w-full'>
                                            <Textarea
                                                placeholder="Describe"
                                                type="text"
                                                className="text-lg font-normal font-[Degular Demo] leading-snug border border-gray-300 outline-none w-full text-stone-700 py-2 shadow"
                                            />
                                        </div>
                                    }
                                </div>

                                <div className='w-full'>
                                    <div className='flex flex-col gap-2'>
                                        <Label text="External Agreements Impacting Qualifications" required={`*`} />
                                        <div className='flex gap-4'>
                                            <div className="flex items-center h-6">
                                                <input id="externalAgreements_Yes" type="radio" value="Yes_externalAgreements" name="externalAgreements" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setExternalAgreements(e.target.value)}
                                                    checked={isExternalAgreements === 'Yes_externalAgreements'} />
                                                <label htmlFor="externalAgreements_Yes" className="ms-2 text-sm text-black ">Yes</label>
                                            </div>
                                            <div className="flex items-center h-6">
                                                <input id="externalAgreements_No" type="radio" value="No_externalAgreements" name="externalAgreements" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setExternalAgreements(e.target.value)}
                                                    checked={isExternalAgreements === 'No_externalAgreements'} />
                                                <label htmlFor="externalAgreements_No" className="ms-2 text-sm text-black ">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        isExternalAgreements === "Yes_externalAgreements" &&
                                        <div className='flex gap-2 pt-5 w-full'>
                                            <Textarea
                                                placeholder="Describe"
                                                type="text"
                                                className="text-lg font-normal font-[Degular Demo] leading-snug border border-gray-300 outline-none w-full text-stone-700 py-2 shadow"
                                            />
                                        </div>
                                    }
                                </div>

                                <div className='w-full'>
                                    <div className='flex flex-col gap-2'>
                                        <Label text="Pending Lawsuit Impacting Qualifications" required={`*`} />
                                        <div className='flex gap-4'>
                                            <div className="flex items-center h-6">
                                                <input id="pendingLawsuit_Yes" type="radio" value="Yes_pendingLawsuit" name="pendingLawsuit" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-8002 dark:bg-blue-700 dark:border-gray-600" onChange={(e) => setPendingLawsuit(e.target.value)}
                                                    checked={isPendingLawsuit === 'Yes_pendingLawsuit'} />
                                                <label htmlFor="pendingLawsuit_Yes" className="ms-2 text-sm text-black ">Yes</label>
                                            </div>
                                            <div className="flex items-center h-6">
                                                <input id="pendingLawsuit_No" type="radio" value="No_pendingLawsuit" name="pendingLawsuit" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setPendingLawsuit(e.target.value)}
                                                    checked={isPendingLawsuit === 'No_pendingLawsuit'} />
                                                <label htmlFor="pendingLawsuit_No" className="ms-2 text-sm text-black ">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        isPendingLawsuit === "Yes_pendingLawsuit" &&
                                        <div className='flex gap-2 pt-5 w-full'>
                                            <Textarea
                                                placeholder="Describe"
                                                type="text"
                                                className="text-lg font-normal font-[Degular Demo] leading-snug border border-gray-300 outline-none w-full shadow text-stone-700 py-2"
                                            />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
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
                        <div className="w-[88px] self-stretch px-4 py-3 bg-blue-800 justify-center items-center gap-4 flex cursor-pointer" onClick={() => dispatch(changeFormToDisplayBusiness({ formName: "Business Acquastion & Opening licence" }))}>
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

            <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeBusinessPage({ formName: "Ownership Details", step: "prev" })} actionNext={changeBusinessPage({ formName: "Business Acquastion & Opening licence", step: "next" })} />

        </>
    )
}
