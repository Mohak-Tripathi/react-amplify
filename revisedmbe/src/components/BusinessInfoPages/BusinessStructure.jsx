import React, { useEffect, useState } from "react";
import SelectWrapper from "../../globalComponents/SelectWrapper";
import PdfComp from "../../globalComponents/PdfComp";
import { MultiSelect } from "primereact/multiselect";
import FileUpload from "../../globalComponents/FileUpload";

import {
  changeBusinessPage,
  changeFormToDisplayBusiness,
  changeReferencesPage,
  changeSideBar,
} from "../../features/displayPage/displayPageSlice";
import { useDispatch, useSelector } from "react-redux";
import FormFooter from "../../globalComponents/FormFooter";
import {
  handleChangeCompanySelectedArr,
  updateCompany,
} from "../../features/treeStructure/treeStructureSlice";
import Cloud from "../../assests/images/cloud.png";
import Label from '../../globalComponents/Label';
import SectionTitle from '../../globalComponents/SectionTitle';


export default function BusinessStructure() {
  const dispatch = useDispatch();
  const { companySelectedArr } = useSelector((store) => store.treeStructure);
  const { businessStructure } = useSelector((store) => store.businessInfo);
  const {
    companyFormData,
    individualFormData,
    trustFormData,
    investmentFundFormData,
  } = useSelector((store) => store.companyForm);

  const [trustdoc, setTrustDoc] = useState(true);
  const [pdfUpload, setPdfUpload] = useState(false);
  const [selectedValues, setSelectedValues] = useState({
    single: "",
    multi: [],
  });
  // console.log(businessStructure);
  const handleSelectChange = (event) => {
    const { name, value } = event.target;

    setSelectedValues((prevValues) => ({
      ...prevValues,
      [name]:
        name === "multi"
          ? Array.from(event.target.selectedOptions, (option) => option.value)
          : value,
    }));
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setPdfUpload(true);
  };

  const [selectedCompanyType, setSelectedCompanyType] = useState("");

  const handleCompanyTypeChange = (e) => {
    setSelectedCompanyType(e.target.value);
    dispatch(handleChangeCompanySelectedArr({ level: "l1", arr: [] }));
    if (e.target.value === "Sole Proprietorship") {
      setoptionsForOwn([{ name: "Individual", value: "Individual", firstName: '', lastName: '', title: '', email: '', role: '', citizenship: '', yrsOfOwnership: '', ethnicOrigin: '', gender: '', ownershipPercent: '', votingPercent: '', typeofCapitalContribution: '', expertise: '', }]);
    } else {
      setoptionsForOwn([
        { name: "Individual", value: "Individual", firstName: '', lastName: '', title: '', email: '', role: '', citizenship: '', yrsOfOwnership: '', ethnicOrigin: '', gender: '', ownershipPercent: '', votingPercent: '', typeofCapitalContribution: '', expertise: '', },
        {
          name: "Company",
          value: "Company",
          companyName: "",
          ein: "",
          registrationNumber: "",
          businessStructure: "",
        },
        trustFormData[0],
        investmentFundFormData[0],
      ]);
    }
    console.error(e.target.value);
  };

  const handleNext = () => {
    // console.log("HANDLE NEXT", optionsForOwn);
    // console.log(fileUpload, Object.keys(fileUpload), businessStructure, Object.keys(businessStructure));
    dispatch(
      changeBusinessPage({ formName: "Ownership Details", step: "next", fileUpload: fileUpload, page: "businessStructure" })
    );
  };

  const handleReturn = () => {
    // console.log("HANDLE RETURN", optionsForOwn);
    dispatch(changeSideBar({ sideBarName: "General Info" }));
  };

  const companyTypeOptions = [
    { value: "", label: "Select Business Structure", disabled: true },
    { value: "Corporation", label: "Corporation Limited Liability Company" },
    { value: "LLC", label: "Limited Liability Partnership (LLP or LTD)" },
    { value: "Trust", label: "General Partnership (GP)" },
    { value: "Sole Proprietorship", label: "Sole Proprietorship" },
  ];

  const [optionsForOwn, setoptionsForOwn] = useState([
    { name: "Individual", value: "Individual", firstName: '', lastName: '', title: '', email: '', role: '', citizenship: '', yrsOfOwnership: '', ethnicOrigin: '', gender: '', ownershipPercent: '', votingPercent: '', typeofCapitalContribution: '', expertise: '', },
    {
      name: "Company",
      value: "Company",
      companyName: "",
      ein: "",
      registrationNumber: "",
      businessStructure: "",
    },
    trustFormData[0],
    investmentFundFormData[0],
  ]);

  // pdf file handling

  const onFilesChange = (e) => {
    console.log(e)
  }

  const [fileUpload, setFileUpload] = useState(Object.keys(businessStructure).length >= 1 ? businessStructure : {});

  return (
    <>
      <div className="w-full min-h-min px-8 pt-4 flex-col justify-start items-start gap-8 inline-flex bg-white">
        <div className="self-stretch h-[0px] border border-neutral-300"></div>
        <div className="self-stretch flex-col justify-start items-start gap-6 flex">
          <div className="text-center text-zinc-500 text-base font-normal font-['Degular Demo'] leading-tight">BUSINESS DETAILS</div>
          <div className="self-stretch flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch flex-col justify-start items-start flex">
                <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                  {/* <div className="self-stretch pb-4 justify-start items-center gap-px inline-flex">
                                        <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">What is the Company’s Legal Business Structure?</div>
                                    </div> */}
                  <Label text="What is the Company’s Legal Business Structure?" />
                  <div className="w-full bg-white rounded shadow border border-zinc-200 justify-start items-center">
                    {/*<select name='single' id='singleSelect' aria-label='Choose a type' className='h-14 outline-none w-full' value={selectedValues.single} onChange={handleSelectChange}>
                                            <option className='w-full text-slate-500 p-4' disabled selected value> Select Business Structure</option>
                                            <option className='w-full' value="Corporation">Corporation Limited Liability Company</option>
                                            <option className='w-full p-4' value="LLC">Limited Liability Partnership (LLP or LTD)</option>
                                            <option className='w-full p-4' value="General">General Partnership (GP)</option>
                                            <option className='w-full p-4' value="Sole Proprietorship">Sole Proprietorship</option>
                                        </select>*/}

                    <SelectWrapper
                      name={"company"}
                      id={"company"}
                      label={"Select Business Structure"}
                      options={companyTypeOptions}
                      onChange={handleCompanyTypeChange}
                      value={selectedCompanyType}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start flex">
                <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                  {/* <div className="self-stretch pb-3 justify-start items-center gap-px inline-flex">
                                        <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Is this company owned by Individuals, other companies, trust, Investment funds or combination of these?</div>
                                    </div> */}
                  <Label text="Is this company owned by Individuals, other companies, trust, Investment funds or combination of these?" />
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
                      value={
                        selectedCompanyType === "Sole Proprietorship"
                          ? companySelectedArr.l1.filter(
                            (elem) => elem === "Individual"
                          )
                          : companySelectedArr.l1
                      }
                      onChange={(e) =>
                        dispatch(
                          updateCompany({
                            arr:
                              selectedCompanyType === "Sole Proprietorship"
                                ? e.value.filter(
                                  (elem) => elem === "Individual"
                                )
                                : e.value,
                            companyName: "ABC Inc.",
                            level: "l1",
                          })
                        )
                      }
                      options={optionsForOwn}
                      optionLabel="name"
                      placeholder="Select Corporation Type"
                      maxSelectedLabels={4}
                      className="h-10 outline-none w-full px-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch min-h-min flex-col justify-start items-start gap-6 flex">
          <SectionTitle title='Upload Documents of Applicant Company' />
          {/* <div className="text-center text-xl font-normal font-['Degular Demo'] leading-tight">Upload Documents of Applicant Company ACME</div> */}
          <div className="self-stretch h-full flex-col justify-start items-start gap-10 flex px-2">
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="pb-3 justify-start items-center gap-px flex">
                                            <Label text='Certificate of Incorporation or Certificate of Filing' required='*' />
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
                                </div> */}
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
                <FileUpload label={`Certificate of Incorporation or Certificate of Filing`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`Filingcertificate`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="pb-3 justify-start items-center gap-px flex">
                      <Label
                        text="Articles of Incorporation or Certificate of Formation"
                        required="*"
                      />
                    </div>
                    <label className="cursor-pointer" htmlFor="TrustAgreement">
                      <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                          <img src={Cloud} alt="" />
                        </div>
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                          <input
                            className="hidden"
                            type="file"
                            id="TrustAgreement"
                          />
                          Upload
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <PdfComp />
                  </div>
                 
                </div> */}
                <FileUpload label={`Articles of Incorporation or Certificate of Formation`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`articlesofformation`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="pb-3 justify-start items-center gap-px flex">
                      <Label
                        text="Articles of Amendment or Certificate of Amendment"
                        required="*"
                      />
                    </div>
                    <label className="cursor-pointer" htmlFor="TrustAgreement">
                      <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                          <img src={Cloud} alt="" />
                        </div>
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                          <input
                            className="hidden"
                            type="file"
                            id="TrustAgreement"
                          />
                          Upload
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <PdfComp />
                  </div>
                  
                </div> */}
                <FileUpload label={`Articles of Amendment or Certificate of Amendment`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`Amendmentarticles`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="pb-3 justify-start items-center gap-px flex">
                      <Label text="Corporate Bylaws" required="*" />
                    </div>
                    <label className="cursor-pointer" htmlFor="TrustAgreement">
                      <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                          <img src={Cloud} alt="" />
                        </div>
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                          <input
                            className="hidden"
                            type="file"
                            id="TrustAgreement"
                          />
                          Upload
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <PdfComp />
                  </div>
                </div> */}
                <FileUpload label={`Corporate Bylaws`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`corporatebylaws`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="pb-3 justify-start items-center gap-px flex">
                      <Label text="Proof of Capital Investment" required="*" />
                    </div>
                    <label className="cursor-pointer" htmlFor="TrustAgreement">
                      <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                          <img src={Cloud} alt="" />
                        </div>
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                          <input
                            className="hidden"
                            type="file"
                            id="TrustAgreement"
                          />
                          Upload
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <PdfComp />
                  </div>
                </div> */}
                <FileUpload label={`Proof of Capital Investment`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofcapital`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="pb-3 justify-start items-center gap-px flex">
                      <Label
                        text="Minutes of the last Board Meeting"
                        required="*"
                      />
                    </div>
                    <label className="cursor-pointer" htmlFor="TrustAgreement">
                      <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                          <img src={Cloud} alt="" />
                        </div>
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                          <input
                            className="hidden"
                            type="file"
                            id="TrustAgreement"
                          />
                          Upload
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <PdfComp />
                  </div>
                </div> */}
                <FileUpload label={`Minutes of the last Board Meeting`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`lastminutemeeting`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="pb-3 justify-start items-center gap-px flex">
                      <Label
                        text="Minutes of the last meeting where officers were elected"
                        required="*"
                      />
                    </div>
                    <label className="cursor-pointer" htmlFor="TrustAgreement">
                      <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                          <img src={Cloud} alt="" />
                        </div>
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                          <input
                            className="hidden"
                            type="file"
                            id="TrustAgreement"
                          />
                          Upload
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <PdfComp />
                  </div>
                </div> */}
                <FileUpload label={`Minutes of the last meeting where officers were elected`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`lastelectedmeeting`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="pb-3 justify-start items-center gap-px flex">
                      <Label text="Stock Certificates issued" required="*" />
                    </div>
                    <label className="cursor-pointer" htmlFor="TrustAgreement">
                      <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                          <img src={Cloud} alt="" />
                        </div>
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                          <input
                            className="hidden"
                            type="file"
                            id="TrustAgreement"
                          />
                          Upload
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <PdfComp />
                  </div>
                </div> */}
                <FileUpload label={`Stock Certificates issued`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`stockcertificate`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="pb-3 justify-start items-center gap-px flex">
                      <Label
                        text="Current Stock Transfer Ledger"
                        required="*"
                      />
                    </div>
                    <label className="cursor-pointer" htmlFor="TrustAgreement">
                      <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                          <img src={Cloud} alt="" />
                        </div>
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                          <input
                            className="hidden"
                            type="file"
                            id="TrustAgreement"
                          />
                          Upload
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <PdfComp />
                  </div>
                </div> */}
                <FileUpload label={`Current Stock Transfer Ledger`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`currentstock`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="pb-3 justify-start items-center gap-px flex">
                      <Label text="Proof of Stock Purchase" required="*" />
                    </div>
                    <label className="cursor-pointer" htmlFor="TrustAgreement">
                      <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                          <img src={Cloud} alt="" />
                        </div>
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                          <input
                            className="hidden"
                            type="file"
                            id="TrustAgreement"
                          />
                          Upload
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <PdfComp />
                  </div>
                </div> */}
                <FileUpload label={`Proof of Stock Purchase`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofstock`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="pb-3 justify-start items-center gap-px flex">
                      <Label
                        text="Purchase or buy|sell agreement with the corresponding proof of payment"
                        required="*"
                      />
                    </div>
                    <label className="cursor-pointer" htmlFor="TrustAgreement">
                      <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                          <img src={Cloud} alt="" />
                        </div>
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                          <input
                            className="hidden"
                            type="file"
                            id="TrustAgreement"
                          />
                          Upload
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <PdfComp />
                  </div>
                </div> */}
                <FileUpload label={`Purchase or buy/sell agreement with the corresponding proof of payment`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`buysellagreement`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="pb-3 justify-start items-center gap-px flex">
                      <Label
                        text="Stock options or other ownership options outstanding as well as agreements which restrict ownership or control of minority owners"
                        required="*"
                      />
                    </div>
                    <label className="cursor-pointer" htmlFor="TrustAgreement">
                      <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                          <img src={Cloud} alt="" />
                        </div>
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                          <input
                            className="hidden"
                            type="file"
                            id="TrustAgreement"
                          />
                          Upload
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <PdfComp />
                  </div>
                </div> */}
                <FileUpload label={`Stock options or other ownership options outstanding as well as agreements which restrict ownership or control of minority owners`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`stockorotheroptions`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                {/* <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="pb-3 justify-start items-center gap-px flex">
                      <Label
                        text="Certificate of Authority to Transact Business (Foreign Entity Certificate)"
                        required="*"
                      />
                    </div>
                    <label className="cursor-pointer" htmlFor="TrustAgreement">
                      <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                        <div className="w-5 h-5 relative">
                          <img src={Cloud} alt="" />
                        </div>
                        <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight">
                          <input
                            className="hidden"
                            type="file"
                            id="TrustAgreement"
                          />
                          Upload
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <PdfComp />
                  </div>
                </div> */}
                <FileUpload label={`Certificate of Authority to Transact Business (Foreign Entity Certificate)`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`certificateofforeignentity`} fileInfos={fileUpload} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                {/* <div className="self-stretch px-4 py-3 bg-white rounded-sm border border-stone-300 justify-start items-center gap-2 inline-flex">
                                    <input type='text' className="text-stone-700 text-lg font-normal font-['Degular Demo'] leading-snug border-none outline-none w-full" placeholder='Add comments if any'></input>
                                </div> */}
              </div>
            </div>
            {/* {trustdoc &&
                            <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                <div className="self-stretch h-[194px] flex-col justify-start items-start gap-8 flex">
                                    <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
                                        <div className="self-stretch justify-between items-center inline-flex">
                                            <div className="pb-3 justify-start items-center gap-px flex">
                                                <div className="text-blue-950 text-xl font-normal font-['Degular Demo'] leading-tight">Articles of Incorporation or Certificate of Formation</div>
                                            </div>
                                            <label className='cursor-pointer' htmlFor='ArticlesCertificate'>
                                                <div className="px-4 py-2 bg-sky-50 border justify-start items-center gap-[7px] flex cursor-pointer">
                                                    <div className="w-5 h-5 relative" >
                                                        <img src={Cloud} alt="" />
                                                    </div>
                                                    <div className="text-blue-950 text-base font-normal font-['Degular Demo'] leading-tight"><input className='hidden' type='file' id='ArticlesCertificate' />Upload</div>
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
                            </div>
                        } */}
          </div>
        </div>
      </div>

      {/*<div className="w-full min-h-min pt-4 pr-8 pb-4 justify-between items-start inline-flex">*/}
      {/*    <div className="px-4 py-3 justify-start items-center gap-2 flex cursor-pointer" onClick={() => { }}>*/}
      {/*        <div className="w-5 h-5 relative" >*/}
      {/*            /!* <img src={leftArrow} alt="prev" /> *!/*/}
      {/*        </div>*/}
      {/*        <div className="text-blue-800 text-base font-normal font-['Degular Demo'] leading-tight" >Previous</div>*/}
      {/*    </div>*/}
      {/*    <div className="grow shrink basis-0 h-[43px] justify-end items-start gap-4 flex">*/}
      {/*        <div className="w-[148px] self-stretch px-4 py-[11px] border border-blue-800 justify-center items-center gap-2 flex cursor-pointer" onClick={() => handleClick()}>*/}
      {/*            <div className="w-5 h-5 relative" >*/}
      {/*                /!* <img src={save} alt="mark" /> *!/*/}
      {/*            </div>*/}
      {/*            <div className="text-blue-800 text-base font-normal font-['Degular Demo'] leading-tight whitespace-nowrap">Save as Draft</div>*/}
      {/*        </div>*/}
      {/*        <div className="w-[88px] self-stretch px-4 py-3 bg-blue-800 justify-center items-center gap-4 flex cursor-pointer" onClick={() => dispatch(changeFormToDisplayBusiness({ formName: "Ownership Details" }))}>*/}
      {/*            <div className="justify-center items-center gap-2 flex">*/}
      {/*                <div className="text-white text-base font-normal font-['Degular Demo'] leading-tight">Next</div>*/}
      {/*                <div className="w-4 h-4 relative" >*/}
      {/*                    /!* <img src={rightArrow} alt="next" /> *!/*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}

      <FormFooter
        actionReturn={changeSideBar({ sideBarName: "General Info" })}
        prevText={`Previous: General Information`}
        actionNext={changeBusinessPage({
          formName: "TreeStructure",
          step: "next",
        })}
        onNextClick={handleNext}
        onReturnClick={handleReturn}
      />
    </>
  );
}
