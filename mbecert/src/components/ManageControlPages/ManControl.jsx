import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import SectionTitle from '../../globalComponents/SectionTitle'
import Label from '../../globalComponents/Label'
import Label2 from '../../globalComponents/Label2'
import InputField from '../../globalComponents/InputField'
// import Pdf from '../../globalComponents/Pdf'
import UploadInp from '../../globalComponents/UploadInp'

import plusIcon from '../../assests/images/Plus.png'
import ManConLabl from '../../globalComponents/ManConLabl'

import { Autocomplete, TextField } from '@mui/material'
import FormFooter from '../../globalComponents/FormFooter';
import { changeFormToDisplayManagement, changeSideBar } from '../../features/displayPage/displayPageSlice';
import FileUpload from '../../globalComponents/FileUpload';

const ManControl = () => {
  const dispatch = useDispatch()

  const { managementcontrol } = useSelector((store) => store.managementcontrol);
  // Management & Controls
  // Board Member Details
  const [bmdInput, setBmdInput] = useState([{ bmFirstName: '', bmLastName: '', bmDtAppoint: '', bmDtExp: '', bmBrdRole: '', bmType: '', bmCitizen: '', bmRace: '', bmGender: '', bmDirectDocInp: '', bmExprtDocInp: '', bmCertiIndInvestDocInp: '' }]);


  const bmdInputChange = (index, fiellName, value) => {
    const updatedSessions = [...bmdInput];
    updatedSessions[index][fiellName] = value;
    setBmdInput(updatedSessions);
  }

  const bmdAddMore = () => {
    setBmdInput((prevSessions) => [
      ...prevSessions,
      { bmFirstName: '', bmLastName: '', bmDtAppoint: '', bmDtExp: '', bmBrdRole: '', bmType: '', bmCitizen: '', bmRace: '', bmGender: '', bmDirectDocInp: '', bmExprtDocInp: '', bmCertiIndInvestDocInp: '' }
    ])
  }

  const bmdDelete = (index) => {
    setBmdInput((prevSessions) => prevSessions.filter((_, i) => i !== index));
  }

  // Board Member UPLOAD DOCUMENTS inputs
  const bmNums = {
    numBrdMembs: '',
    numMinBrdMembs: '',
  }

  const [bmNumsInput, setBmNumsInput] = useState(bmNums);
  const bmNumsInputChange = (e, fieldName) => {
    setBmNumsInput({
      ...bmNumsInput,
      [fieldName]: e.target.value,
    });
  };

  // not affiliate director
  const [sessions, setSessions] = useState([{ nthAffDrctFN: '', nthAffDrctLN: '', nthAffDrctR: '', nthAffDrctA: '', nthAffDrctE: '', ntAffDrctC: '' }]);

  const ntAffDirectInputChange = (index, fiellName, value) => {
    const updatedSessions = [...sessions];
    updatedSessions[index][fiellName] = value;
    setSessions(updatedSessions);
  }

  const ntAffDirectAddMore = () => {
    setSessions((prevSessions) => [
      ...prevSessions,
      { nthAffDrctFN: '', nthAffDrctLN: '', nthAffDrctR: '', nthAffDrctA: '', nthAffDrctE: '', ntAffDrctC: '' }
    ])
  }

  const ntAffDirectDeleteNtAff = (index) => {
    setSessions((prevSessions) => prevSessions.filter((_, i) => i !== index));
  }

  // Executive Leadership Team details
  const exeLeadTeamData = {
    exeLeadTeamFrstName: '',
    exeLeadTeamLstname: '',
    exeLeadTeamRace: '',
    exeLeadTeamDtApt: '',
    exeLeadTeamDtExp: '',
    exeLeadTeamCitizen: '',
  }

  const [exeLeadTeamInp, setExeLeadTeamInp] = useState(exeLeadTeamData);
  const exeLeadTeamInpChange = (value, fieldName, index) => {
    setExeLeadTeamInp({
      ...exeLeadTeamInp,
      [fieldName]: value,
    });
  };

  // Board Member UPLOAD DOCUMENTS inputs second 
  const bmDocInputsData2 = {
    bmGovIDDocSelect: '',
    bmGovIDDocInp: '',
    bmExprtSelect: '',
    bmExprtInp: '',
    bmInvestInp: '',
    bmBrtCertDocInp: '',
  }

  const [bmDocInput2, setBmDocInput2] = useState(bmDocInputsData2);
  const bmDocInput2Change = (value, fieldName, index) => {
    setBmDocInput2({
      ...bmDocInput2,
      [fieldName]: value,
    });
  };

  // not affiliate director 2
  const [ntAffDirectInputs2, setNtAffDirectInputs2] = useState([{ nthAffDrctFN2: '', nthAffDrctLN2: '', nthAffDrctRL2: '', nthAffDrctR2: '', nthAffDrctA2: '', nthAffDrctE2: '', ntAffDrctC2: '' }]);

  const ntAffDirectInputChange2 = (index, fiellName, value) => {
    const updatedSessions = [...ntAffDirectInputs2];
    updatedSessions[index][fiellName] = value;
    setNtAffDirectInputs2(updatedSessions);
  }

  const ntAffDirectAddMore2 = () => {
    setNtAffDirectInputs2((prevSessions) => [
      ...prevSessions,
      { nthAffDrctFN2: '', nthAffDrctLN2: '', nthAffDrctR2: '', nthAffDrctA2: '', nthAffDrctE2: '', ntAffDrctC2: '' }
    ])
  }

  const ntAffDirectDelete = (index) => {
    setNtAffDirectInputs2((prevSessions) => prevSessions.filter((_, i) => i !== index));
  }

  //  daily operation
  const [dailyOperatorInputs, setDailyOperatorInputs] = useState([{ dailyOptrFirstName: '', dailyOptrLstName: '', dailyOptrRace: '', dailyOptrDtApt: '', dailyOptrDtExp: '', dailyOptrCitizen: '' }]);

  const dailyOperatorInputsChange = (index, fiellName, value) => {
    const updatedSessions = [...dailyOperatorInputs];
    updatedSessions[index][fiellName] = value;
    setDailyOperatorInputs(updatedSessions);
  }

  const dailyOperatorAddMore = () => {
    setDailyOperatorInputs((prevSessions) => [
      ...prevSessions,
      { dailyOptrFirstName: '', dailyOptrLstName: '', dailyOptrRace: '', dailyOptrDtApt: '', dailyOptrDtExp: '', dailyOptrCitizen: '' }
    ])
  }

  const dailyOperatorDelete = (index) => {
    setDailyOperatorInputs((prevSessions) => prevSessions.filter((_, i) => i !== index));
  }

  //  Management Employees
  const manageEmpData = {
    manageEmpFirstName: '',
    manageEmpLstName: '',
    manageEmpTitle: '',
    manageEmpRole: '',
    manageEmpRace: '',
    manageEmpCitizen: '',
    manageEmpGender: '',
  }

  const [manageEmpInputs, setManageEmpInputs] = useState(manageEmpData);
  const manageEmpInputsChange = (value, fieldName, index) => {
    setManageEmpInputs({
      ...manageEmpInputs,
      [fieldName]: value,
    });
  };

  // Board Member UPLOAD DOCUMENTS inputs second 
  const manageEmpDocInputsData = {
    manageEmpGovIDDocInp: '',
    manageEmpExprtInp: '',
    manageEmpPrfCitizenDocInp: '',
  }

  const [manageEmpDocInput, setManageEmpDocInput] = useState(manageEmpDocInputsData);
  const manageEmpDocInputChange = (e, fieldName) => {
    setManageEmpDocInput({
      ...manageEmpDocInput,
      [fieldName]: e.target.value,
    });
  };

  //DECISION MAKERS
  //Signatory on Major Documents
  const signatoryData = {
    signatoryFirstName: '',
    signatoryLstName: '',
    signatoryTitle: '',
    signatoryRole: '',
    signatoryRace: '',
    signatoryCitizen: '',
    signatoryGender: '',
  }

  const [signatoryInputs, setSignatoryInputs] = useState(signatoryData);
  const signatoryInputsChange = (value, fieldName, index) => {
    setSignatoryInputs({
      ...signatoryInputs,
      [fieldName]: value,
    });
  };

  // Signatory on Major Documents UPLOAD DOCUMENTS inputs second 
  const signatoryDocInputsData = {
    signatoryGovIDDocInp: '',
    signatoryExprtDocInp: '',
    signatoryPrfCitizenDocInp: '',
    signatoryBnkLetterDocInp: '',
  }

  const [signatoryDocInput, setSignatoryDocInput] = useState(signatoryDocInputsData);
  const signatoryDocInputChange = (e, fieldName) => {
    setSignatoryDocInput({
      ...signatoryDocInput,
      [fieldName]: e.target.value,
    });
  };

  //Personnel Management
  const persManageData = {
    persManageFirstName: '',
    persManageLstName: '',
    persManageTitle: '',
    persManageRole: '',
    persManageRace: '',
    persManageCitizen: '',
    persManageGender: '',
  }

  const [persManageInputs, setPersManageInputs] = useState(persManageData);
  const persManageInputsChange = (value, fieldName, index) => {
    setPersManageInputs({
      ...persManageInputs,
      [fieldName]: value,
    });
  };

  //Personnel Management UPLOAD DOCUMENTS inputs second 
  const persManageDocInputsData = {
    persManageGovIDDocInp: '',
    persManageExprtDocInp: '',
    persManagePrfCitizenDocInp: '',
  }

  const [persManageDocInput, setPersManageDocInput] = useState(persManageDocInputsData);
  const persManageDocInputChange = (e, fieldName) => {
    setPersManageDocInput({
      ...persManageDocInput,
      [fieldName]: e.target.value,
    });
  };



  //Marketing & Sales
  const marketingData = {
    marketingFirstName: '',
    marketingLstName: '',
    marketingTitle: '',
    marketingRole: '',
    marketingRace: '',
    marketingCitizen: '',
    marketingGender: '',
  }

  const [marketingInputs, setMarketingInputs] = useState(marketingData);
  const marketingInputsChange = (value, fieldName, index) => {
    setMarketingInputs({
      ...marketingInputs,
      [fieldName]: value,
    });
  };

  //Marketing & Sales UPLOAD DOCUMENTS inputs second 
  const marketingDocInputsData = {
    marketingGovIDDocInp: '',
    marketingExprtDocInp: '',
    marketingPrfCitizenDocInp: '',
  }

  const [marketingDocInput, setMarketingDocInput] = useState(marketingDocInputsData);
  const marketingDocInputChange = (e, fieldName) => {
    setMarketingDocInput({
      ...marketingDocInput,
      [fieldName]: e.target.value,
    });
  };


  //Estimating
  const estimatingData = {
    estimatingFirstName: '',
    estimatingLstName: '',
    estimatingTitle: '',
    estimatingRole: '',
    estimatingRace: '',
    estimatingCitizen: '',
    estimatingGender: '',
  }

  const [estimatingInputs, setEstimatingInputs] = useState(estimatingData);
  const estimatingInputsChange = (value, fieldName, index) => {
    setEstimatingInputs({
      ...estimatingInputs,
      [fieldName]: value,
    });
  };

  //Estimating UPLOAD DOCUMENTS inputs second 
  const estimatingDocInputsData = {
    estimatingGovIDDocInp: '',
    estimatingExprtDocInp: '',
    estimatingPrfCitizenDocInp: '',
  }

  const [estimatingDocInput, setEstimatingDocInput] = useState(estimatingDocInputsData);
  const estimatingDocInputChange = (e, fieldName) => {
    setEstimatingDocInput({
      ...estimatingDocInput,
      [fieldName]: e.target.value,
    });
  };

  //Purchase of Major Items
  const purchaseData = {
    purchaseFirstName: '',
    purchaseLstName: '',
    purchaseTitle: '',
    purchaseRole: '',
    purchaseRace: '',
    purchaseCitizen: '',
    purchaseGender: '',
  }

  const [purchaseInputs, setPurchaseInputs] = useState(purchaseData);
  const purchaseInputsChange = (value, fieldName, index) => {
    setPurchaseInputs({
      ...purchaseInputs,
      [fieldName]: value,
    });
  };

  //Purchase of Major Items UPLOAD DOCUMENTS inputs second 
  const purchaseDocInputsData = {
    purchaseGovIDDocInp: '',
    purchaseExprtDocInp: '',
    purchasePrfCitizenDocInp: '',
  }

  const [purchaseDocInput, setPurchaseDocInput] = useState(purchaseDocInputsData);
  const purchaseDocInputChange = (e, fieldName) => {
    setPurchaseDocInput({
      ...purchaseDocInput,
      [fieldName]: e.target.value,
    });
  };

  //Supervision of Field Operations
  const superFieldData = {
    superFieldFirstName: '',
    superFieldLstName: '',
    superFieldTitle: '',
    superFieldRole: '',
    superFieldRace: '',
    superFieldCitizen: '',
    superFieldGender: '',
  }

  const [superFieldInputs, setSuperFieldInputs] = useState(superFieldData);
  const superFieldInputsChange = (value, fieldName, index) => {
    setSuperFieldInputs({
      ...superFieldInputs,
      [fieldName]: value,
    });
  };

  //Supervision of Field Operations UPLOAD DOCUMENTS inputs second 
  const superFieldDocInputsData = {
    superFieldGovIDDocInp: '',
    superFieldExprtDocInp: '',
    superFieldPrfCitizenDocInp: '',
  }

  const [superFieldDocInput, setSuperFieldDocInput] = useState(superFieldDocInputsData);
  const superFieldDocInputChange = (e, fieldName) => {
    setSuperFieldDocInput({
      ...superFieldDocInput,
      [fieldName]: e.target.value,
    });
  };


  //Determine Jobs/Projects to accept
  const deterJobData = {
    deterJobFirstName: '',
    deterJobLstName: '',
    deterJobTitle: '',
    deterJobRole: '',
    deterJobRace: '',
    deterJobCitizen: '',
    deterJobGender: '',
  }

  const [deterJobInputs, setDeterJobInputs] = useState(deterJobData);
  const deterJobInputsChange = (value, fieldName, index) => {
    setDeterJobInputs({
      ...deterJobInputs,
      [fieldName]: value,
    });
  };

  //Determine Jobs/Projects to accept UPLOAD DOCUMENTS inputs second 
  const deterJobDocInputsData = {
    deterJobGovIDDocInp: '',
    deterJobExprtDocInp: '',
    deterJobPrfCitizenDocInp: '',
  }

  const [deterJobDocInput, setDeterJobDocInput] = useState(deterJobDocInputsData);
  const deterJobDocInputChange = (e, fieldName) => {
    setDeterJobDocInput({
      ...deterJobDocInput,
      [fieldName]: e.target.value,
    });
  };

  // file handling
  const onFilesChange = (e) => {
    console.log(e)
  }

  const [certDirectNtAffInvstDoc, setCertDirectNtAffInvstDoc] = useState({});
  const [proofOfExprtDoc, setProofOfExprtDoc] = useState({});
  const [certIndInvstDoc, setCertIndInvstDoc] = useState({});


  const [govIssueIDDoc, setGovIssueIDDoc] = useState({});
  const [proofOfExprtDoc2, setProofOfExprtDoc2] = useState({});
  const [brthCertiDoc, setBrthCertiDoc] = useState({});

  const [govIssueIDDoc2, setGovIssueIDDoc2] = useState({});
  const [proofOfExprtDoc3, setProofOfExprtDoc3] = useState({});
  const [proofCitizenDoc, setProofCitizenDoc] = useState({});

  const [govIssueIDDoc3, setGovIssueIDDoc3] = useState({});
  const [proofOfExprtDoc4, setProofOfExprtDoc4] = useState({});
  const [proofCitizenDoc2, setProofCitizenDoc2] = useState({});
  const [bankSignDoc, setBankSignDoc] = useState({});

  const [govIssueIDDoc4, setGovIssueIDDoc4] = useState({});
  const [proofOfExprtDoc5, setProofOfExprtDoc5] = useState({});
  const [proofCitizenDoc3, setProofCitizenDoc3] = useState({});

  //Marketing & Sales
  const [govIssueIDDoc5, setGovIssueIDDoc5] = useState({});
  const [proofOfExprtDoc6, setProofOfExprtDoc6] = useState({});
  const [proofCitizenDoc4, setProofCitizenDoc4] = useState({});

  //Estimating
  const [govIssueIDDoc6, setGovIssueIDDoc6] = useState({});
  const [proofOfExprtDoc7, setProofOfExprtDoc7] = useState({});
  const [proofCitizenDoc5, setProofCitizenDoc5] = useState({});




  // dropdown data 
  const bmBrdRoleData = ['Chairperson', 'Vice Chairperson', 'Secretary', 'Treasurer', 'Member'];
  const bmTypeData = ['Indipendent', 'Investor', 'Affiliate company']
  const bmCitizenData = ["U.S Citizenship"];
  const bmRaceData = ["Asian Indian", "Asian Pacific", "Black or African American", "Hispanic or Latino",
    "Native American or Alaska Native", "Native Hawaiian or Other Pacific Islander", "White", "Other"];
  const bmGenderData = ["Male", "Female", "Non-binary", "Other", "Decline to Disclose"];

  const bmDocGovIDData = ["Driver's License or State Issued Identification Card", "US Passport or US Passport Card", "US Military Identification Card"]

  const bmDocProofExprtData = ['Resume', 'Bio', 'LinkedIn Profile']

  const manEmpRole = ['Corporate Director', 'Corporate Officer', 'Coporate Stock or Shareholder', 'LLC Manager', 'LLC Member']


  const [pdfmandcontrol, setFileUpload] = useState(Object.keys(managementcontrol).length >= 1 ? managementcontrol : {})
  const handleNext = () => {
    console.log(pdfmandcontrol);
    dispatch(changeSideBar({ sideBarName: "Business Desc", fileUpload: pdfmandcontrol, page: "managementcontrol" }));
  }

  const handleReturn = () => {
    dispatch(changeFormToDisplayManagement({ formName: "Business Type", step: "prev" }));
  }

  // const onFilesChange = (e) => {
  //   console.log(e)
  // }

  // const [pdfmandcontrol, setFileUpload] = useState({})

  return (

    <div className=' bg-white w-full flex flex-col min-h-full justify-between'>
      <div className='px-8 pb-8 pt-4 bg-white w-full flex flex-col gap-8'>
        {/* form progress bar/tab start */}
        {/* <div className='flex items-center text-sm gap-4 w-full justify-between'>
          <div className='flex gap-1 items-center'>
            <p className='bg-[#fff] text-black w-8 h-8 rounded-full border-2 border-[#D9D9D9] flex items-center justify-center'>1</p>
            <p>Business Type</p>
          </div>
          <div className=' border-[#D9D9D9] w-[60%] border'></div>
          <div className='flex gap-1 items-center'>
            <p className=' bg-[#0045AC] text-white w-8 h-8 rounded-full  flex items-center justify-center'>2</p>
            <p>Management & Controls</p>
          </div> */}
        {/* <div className=' border-[#D9D9D9] w-1/4 border'></div>
                        <div className='flex gap-1 items-center'>
                            <p className='bg-[#fff] text-black w-8 h-8 rounded-full border-2 border-[#D9D9D9] flex items-center justify-center'>3</p>
                            <p>Upload Documents</p>
                        </div> */}
        {/* </div> */}
        {/* form progress bar/tab end */}
        <div className=' border-[#D4D4D4] w-full border'></div>
        {/* Management & Controls start  */}
        <div id='genInfo2' className='flex flex-col gap-8'>
          {bmdInput.map((session, index) =>
            <div key={index} className='flex flex-col gap-8'>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                  <SectionTitle title='Board Member Details' />
                  {index > 0 && (
                    <RiDeleteBin6Line className='text-[red] cursor-pointer mt-1' onClick={() => bmdDelete(index)} />
                  )}
                </div>
                <div className='flex gap-2 overflow-x-scroll'>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Board Member First name' />
                    <InputField placeholder={'Enter First Name'} type={'text'} name={'bmFirstName'} onChange={(e) => bmdInputChange(index, 'bmFirstName', e.target.value)} value={bmdInput.bmFirstName} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Board Member Last name' />
                    <InputField placeholder={'Enter Last Name'} type={'text'} name={'bmLastName'} onChange={(e) => bmdInputChange(index, 'bmLastName', e.target.value)} value={bmdInput.bmLastName} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Date of Appointment' />
                    <InputField placeholder={'Select Date'} type={'date'} name={'bmDtAppoint'} onChange={(e) => bmdInputChange(index, 'bmDtAppoint', e.target.value)} value={bmdInput.bmDtAppoint} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Date of Expiration' />
                    <InputField placeholder={'Select Date'} type={'date'} name={'bmDtExp'} onChange={(e) => bmdInputChange(index, 'bmDtExp', e.target.value)} value={bmdInput.bmDtExp} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Board role' />
                    {/* <InputField placeholder={'Select'} name={'bmBrdRole'} onChange={(e) => bmdInputChange(index, 'bmBrdRole', e.target.value)} value={bmdInput.bmBrdRole} /> */}
                    <Autocomplete
                      name={'bmBrdRole'}
                      onChange={(event, value) => bmdInputChange(index, 'bmBrdRole', value)}
                      className='w-full'
                      disablePortal
                      id="bmBrdRole"
                      options={bmBrdRoleData}
                      fullWidth={true}
                      style={{ fontSize: 1 }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                          borderRadius: 0,
                          height: '2.8rem',
                          fontSize: "0.875rem",
                          padding: '5px 4px 7.5px 5px',
                          color: ' rgb(100 116 139)',
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9", // Change color on hover
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #BCBCBC", // Change color on focus
                          },
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        }
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Board role'
                      />}
                    />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Type' />
                    {/* <InputField placeholder={'Select'} name={'bmType'} onChange={(e) => bmdInputChange(index, 'bmType', e.target.value)} value={bmdInput.bmType} /> */}
                    <Autocomplete
                      name={'bmType'}
                      onChange={(event, value) => bmdInputChange(index, 'bmType', value)}
                      className='w-full'
                      disablePortal
                      id="bmType"
                      options={bmTypeData}
                      fullWidth={true}
                      style={{ fontSize: 1 }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                          borderRadius: 0,
                          height: '2.8rem',
                          fontSize: "0.875rem",
                          padding: '5px 4px 7.5px 5px',
                          color: ' rgb(100 116 139)',
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9", // Change color on hover
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #BCBCBC", // Change color on focus
                          },
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        }
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Type'
                      />}
                    />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Citizenship' />
                    {/* <InputField placeholder={'Select'} name={'bmCitizen'} onChange={(e) => bmdInputChange(index, 'bmCitizen', e.target.value)} value={bmdInput.bmCitizen} /> */}
                    <Autocomplete
                      name={'bmCitizen'}
                      onChange={(event, value) => bmdInputChange(index, 'bmCitizen', value)}
                      className='w-full'
                      disablePortal
                      id="bmCitizen"
                      options={bmCitizenData}
                      fullWidth={true}
                      style={{ fontSize: 1 }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                          borderRadius: 0,
                          height: '2.8rem',
                          fontSize: "0.875rem",
                          padding: '5px 4px 7.5px 5px',
                          color: ' rgb(100 116 139)',
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9", // Change color on hover
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #BCBCBC", // Change color on focus
                          },
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        }
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenship'
                      />}
                    />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Race/Ethinicity' />
                    {/* <InputField placeholder={'Select'} name={'bmRace'} onChange={(e) => bmdInputChange(index, 'bmRace', e.target.value)} value={bmdInput.bmRace} /> */}
                    <Autocomplete
                      name={'bmRace'}
                      onChange={(event, value) => bmdInputChange(index, 'bmRace', value)}
                      className='w-full'
                      disablePortal
                      id="bmRace"
                      options={bmRaceData}
                      fullWidth={true}
                      style={{ fontSize: 1 }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                          borderRadius: 0,
                          height: '2.8rem',
                          fontSize: "0.875rem",
                          padding: '5px 4px 7.5px 5px',
                          color: ' rgb(100 116 139)',
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9", // Change color on hover
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #BCBCBC", // Change color on focus
                          },
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        }
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethinicity'
                      />}
                    />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Gender' />
                    {/* <InputField placeholder={'Select'} name={'bmGender'} onChange={(e) => bmdInputChange(index, 'bmGender', e.target.value)} value={bmdInput.bmGender} /> */}
                    <Autocomplete
                      name={'bmGender'}
                      onChange={(event, value) => bmdInputChange(index, 'bmGender', value)}
                      className='w-full'
                      disablePortal
                      id="bmGender"
                      options={bmGenderData}
                      fullWidth={true}
                      style={{ fontSize: 1 }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                          borderRadius: 0,
                          height: '2.8rem',
                          fontSize: "0.875rem",
                          padding: '5px 4px 7.5px 5px',
                          color: ' rgb(100 116 139)',
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9", // Change color on hover
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #BCBCBC", // Change color on focus
                          },
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        }
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Gender'
                      />}
                    />
                  </div>
                </div>
              </div>
              <div className=' border-[#D4D4D4] w-full border'></div>
              <div className='flex flex-col gap-4'>
                <SectionTitle title='UPLOAD DOCUMENTS' />
                <div className='flex flex-col gap-3'>
                  {/* <div className='flex justify-between'>
                    <Label text="Certificate for Directors Not Affiliated with Investor " />
                    <UploadInp />
                  </div> */}
                  <FileUpload label={`Certificate for Directors Not Affiliated with Investor`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`certofdirectors`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                  <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                      {/* <Pdf ></Pdf> */}
                    </div>
                    <InputField placeholder={'Add comments if any'} type={'text'} name={'bmDirectDocInp'} onChange={(e) => bmdInputChange(index, 'bmDirectDocInp', e.target.value)} value={bmdInput.bmDirectDocInp} />
                  </div>
                </div>

                <div className='flex flex-col gap-3'>
                  {/* <div className='flex justify-between'>
                    <Label text="Proof of Expertise" />
                    <UploadInp />
                  </div> */}
                  <FileUpload label={`Proof of Expertise`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofexpert`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                  <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                      {/* <Pdf ></Pdf> */}
                    </div>
                    <InputField placeholder={'Add comments if any'} type={'text'} name={'bmExprtDocInp'} onChange={(e) => bmdInputChange(index, 'bmExprtDocInp', e.target.value)} value={bmdInput.bmExprtDocInp} />
                  </div>
                </div>

                <div className='flex flex-col gap-3'>
                  {/* <div className='flex justify-between'>
                    <Label text="Certificate for Independent Investors" />
                    <UploadInp />
                  </div> */}
                  <FileUpload label={`Certificate for Independent Investors`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`certindeinvest`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                  <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                      {/* <Pdf ></Pdf> */}
                    </div>
                    <InputField placeholder={'Add comments if any'} type={'text'} name={'bmCertiIndInvestDocInp'} onChange={(e) => bmdInputChange(index, 'bmCertiIndInvestDocInp', e.target.value)} value={bmdInput.bmCertiIndInvestDocInp} />
                  </div>
                </div>
              </div>
            </div>
          )}
          <h5 id='' className='flex gap-1 text-sm text-[#0045AC] cursor-pointer mt-2' onClick={bmdAddMore}><img src={plusIcon} alt="" /> Add more</h5>
          <div className=' border-[#D4D4D4] w-full border'></div>
          <div className='flex gap-4'>
            <div className='w-1/2 flex flex-col gap-2'>
              <Label2 text='Total Number of Board Members' required='*' />
              <InputField placeholder={'Enter Number of Board Members'} type={'text'} name={'numBrdMembs'} onChange={(e) => bmNumsInputChange(e, 'numBrdMembs')} value={bmNumsInput.numBrdMembs} />
            </div>
            <div className='w-1/2 flex flex-col gap-2'>
              <Label2 text='Number of Minority Board Members' required='*' />
              <InputField placeholder={'Enter Number of Minority Board Members'} type={'text'} name={'numMinBrdMembs'} onChange={(e) => bmNumsInputChange(e, 'numMinBrdMembs')} value={bmNumsInput.numMinBrdMembs} />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <Label text='Number and names of all directors that are not an "Affiliate" of any Investor (you may exclude directors included as
 Independent Directors)' required='*' />
            {sessions.map((session, index) =>
              <div key={index}>
                <div className='flex gap-2 overflow-x-scroll'>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='First name' />
                    <InputField placeholder={'Enter First Name'} type={'text'} name={'nthAffDrctFN'} onChange={(e) => ntAffDirectInputChange(index, 'ntAffDrctFN', e.target.value)} value={sessions.nthAffDrctFN} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Last name' />
                    <InputField placeholder='Enter Last Name' type={'text'} name={'nthAffDrctLN'} onChange={(e) => ntAffDirectInputChange(index, 'nthAffDrctLN', e.target.value)} value={sessions.nthAffDrctLN} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Race/Ethnicity' />
                    <Autocomplete
                      name={'nthAffDrctR'}
                      onChange={(event, value) => ntAffDirectInputChange(index, 'nthAffDrctR', value)}
                      className='w-full'
                      disablePortal
                      id="nthAffDrctR"
                      options={bmRaceData}
                      fullWidth={true}
                      style={{ fontSize: 1 }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                          borderRadius: 0,
                          height: '2.8rem',
                          fontSize: "0.875rem",
                          padding: '5px 4px 7.5px 5px',
                          color: ' rgb(100 116 139)',
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9", // Change color on hover
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #BCBCBC", // Change color on focus
                          },
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        }
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethnicity'
                      />}
                    />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Date of Appointment' />
                    <InputField placeholder={'Select Date'} type={'date'} name={'nthAffDrctA'} onChange={(e) => ntAffDirectInputChange(index, 'nthAffDrctA', e.target.value)} value={sessions.nthAffDrctA} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Date of Expiration' />
                    <InputField placeholder={'Select Date'} type={'date'} name={'nthAffDrctE'} onChange={(e) => ntAffDirectInputChange(index, 'nthAffDrctE', e.target.value)} value={sessions.nthAffDrctE} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Citizenship' />
                    <Autocomplete
                      name={'ntAffDrctC'}
                      onChange={(event, value) => ntAffDirectInputChange(index, 'ntAffDrctC', value)}
                      className='w-full'
                      disablePortal
                      id="ntAffDrctC"
                      options={bmCitizenData}
                      fullWidth={true}
                      style={{ fontSize: 1 }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                          borderRadius: 0,
                          height: '2.8rem',
                          fontSize: "0.875rem",
                          padding: '5px 4px 7.5px 5px',
                          color: ' rgb(100 116 139)',
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9", // Change color on hover
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #BCBCBC", // Change color on focus
                          },
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        }
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenship'
                      />}
                    />
                  </div>
                </div>
                {index > 0 && (
                  <RiDeleteBin6Line className='text-[red] cursor-pointer mt-1' onClick={() => ntAffDirectDeleteNtAff(index)} />
                )}
              </div>
            )}
            <h5 className='flex gap-1 text-sm text-[#0045AC] cursor-pointer mt-2' onClick={ntAffDirectAddMore}><img src={plusIcon} alt="" /> Add more</h5>
          </div>
          <div className='flex flex-col gap-4'>
            <Label text='Executive Leadership Team details' required='*' />
            <div className='flex gap-2 overflow-x-scroll'>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='First name' />
                <InputField placeholder={'Enter First Name'} type={'text'} name={'exeLeadTeamFrstName'} onChange={(e) => exeLeadTeamInpChange(e.target.value, 'exeLeadTeamFrstName')} value={exeLeadTeamInp.exeLeadTeamFrstName} />
              </div>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='Last name' />
                <InputField placeholder={'Enter Last Name'} type={'text'} name={'exeLeadTeamLstname'} onChange={(e) => exeLeadTeamInpChange(e.target.value, 'exeLeadTeamLstname')} value={exeLeadTeamInp.exeLeadTeamLstname} />
              </div>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='Race/Ethnicity' />
                <Autocomplete
                  name={'exeLeadTeamRace'}
                  onChange={(index, value) => exeLeadTeamInpChange(value, 'exeLeadTeamRace', index)}
                  className='w-full'
                  disablePortal
                  id="exeLeadTeamRace"
                  options={bmRaceData}
                  fullWidth={true}
                  style={{ fontSize: 1 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      border: "1px solid #E2E4E9",
                      outline: 'none',
                      borderRadius: 0,
                      height: '2.8rem',
                      fontSize: "0.875rem",
                      padding: '5px 4px 7.5px 5px',
                      color: ' rgb(100 116 139)',
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #E2E4E9", // Change color on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #BCBCBC", // Change color on focus
                      },
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #E2E4E9",
                      outline: 'none',
                    },
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                    },
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                    }
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethnicity'
                  />}
                />
              </div>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='Date of Appointment' />
                <InputField placeholder='Select Date' type='date' name={'exeLeadTeamDtApt'} onChange={(e) => exeLeadTeamInpChange(e.target.value, 'exeLeadTeamDtApt')} value={exeLeadTeamInp.exeLeadTeamDtApt} />
              </div>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='Date of Expiration' />
                <InputField placeholder='Select Date' type='date' name={'exeLeadTeamDtExp'} onChange={(e) => exeLeadTeamInpChange(e.target.value, 'exeLeadTeamDtExp')} value={exeLeadTeamInp.exeLeadTeamDtExp} />
              </div>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='Citizenship' />
                <Autocomplete
                  name={'exeLeadTeamCitizen'}
                  onChange={(index, value) => { exeLeadTeamInpChange(value, 'exeLeadTeamCitizen', index) }}
                  className='w-full'
                  disablePortal
                  id="exeLeadTeamCitizen"
                  options={bmCitizenData}
                  fullWidth={true}
                  style={{ fontSize: 1 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      border: "1px solid #E2E4E9",
                      outline: 'none',
                      borderRadius: 0,
                      height: '2.8rem',
                      fontSize: "0.875rem",
                      padding: '5px 4px 7.5px 5px',
                      color: ' rgb(100 116 139)',
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #E2E4E9",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #BCBCBC", // Change color on focus
                      },
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #E2E4E9",
                      outline: 'none',
                    },
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem",
                    },
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem",
                    }
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenships'
                  />}
                />
              </div>
            </div>

          </div>
          <div className=' border-[#D4D4D4] w-full border'></div>
          <div className='flex flex-col gap-4'>
            <SectionTitle title='UPLOAD DOCUMENTS' />
            <div className='flex flex-col gap-3'>
              {/* <div className='flex justify-between'>
                <Label text="Government Issued Photo ID " />
                <UploadInp />
              </div> */}
              <FileUpload label={`Government Issued Photo ID`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`govtphotoid`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />

              <div className='flex flex-col gap-4 w-full'>
                <div className='flex flex-col gap-3 w-1/2'>
                  {/* <InputField placeholder={'Select Document'} name={'bmGovIDDocSelect'} onChange={(e) => bmDocInput2Change(e, 'bmGovIDDocSelect')} value={bmDocInput2.bmGovIDDocSelect} /> */}
                  <Autocomplete
                    name={'bmGovIDDocSelect'}
                    onChange={(index, value) => { bmDocInput2Change(value, 'bmGovIDDocSelect', index) }}
                    className='w-full'
                    disablePortal
                    id="bmGovIDDocSelect"
                    options={bmDocGovIDData}
                    fullWidth={true}
                    style={{ fontSize: 1 }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        border: "1px solid #E2E4E9",
                        outline: 'none',
                        borderRadius: 0,
                        height: '2.8rem',
                        fontSize: "0.875rem",
                        padding: '5px 4px 7.5px 5px',
                        color: ' rgb(100 116 139)',
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #BCBCBC", // Change color on focus
                        },
                      },
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #E2E4E9",
                        outline: 'none',
                      },
                      "& .MuiInputBase-root": {
                        fontSize: "0.875rem",
                      },
                      "& .MuiInputBase-root": {
                        fontSize: "0.875rem",
                      }
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Document'
                    />}
                  />
                  <div className='flex gap-4'>
                    {/* <Pdf ></Pdf> */}
                  </div>
                </div>
                <InputField placeholder={'Add comments if any'} name={'bmGovIDDocInp'} onChange={(e) => bmDocInput2Change(e.target.value, 'bmGovIDDocInp')} value={bmDocInput2.bmGovIDDocInp} />
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              {/* <div className='flex justify-between'>
                <Label text="Proof of Expertise" />
                <UploadInp />
              </div> */}
              <FileUpload label={`Proof of Expertise`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofexpert2`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
              <div className='flex flex-col gap-4 w-full'>
                <div className='flex flex-col gap-3 w-1/2'>
                  {/* <InputField placeholder='Select Document' name={'bmExprtSelect'} onChange={(e) => bmDocInput2Change(e, 'bmExprtSelect')} value={bmDocInput2.bmExprtSelect} /> */}
                  <Autocomplete
                    name={'bmExprtSelect'}
                    onChange={(index, value) => { bmDocInput2Change(value, 'bmExprtSelect', index) }}
                    disablePortal
                    id="bmExprtSelect"
                    options={bmDocProofExprtData}
                    fullWidth={true}
                    style={{ fontSize: 1 }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        border: "1px solid #E2E4E9",
                        outline: 'none',
                        borderRadius: 0,
                        height: '2.8rem',
                        fontSize: "0.875rem",
                        padding: '5px 4px 7.5px 5px',
                        color: ' rgb(100 116 139)',
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #BCBCBC", // Change color on focus
                        },
                      },
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #E2E4E9",
                        outline: 'none',
                      },
                      "& .MuiInputBase-root": {
                        fontSize: "0.875rem",
                      },
                      "& .MuiInputBase-root": {
                        fontSize: "0.875rem",
                      }
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Document'
                    />}
                  />
                  <div className='flex gap-4'>
                  </div>
                </div>
                <InputField placeholder='Add comments if any' name={'bmExprtInp'} onChange={(e) => bmDocInput2Change(e, 'bmExprtInp')} value={bmDocInput2.bmExprtInp} />
              </div>
            </div>

            {/* <div className='flex flex-col gap-3'>
              <div className='flex justify-between'>
                <Label text="Certificate for Independent Investors" />
                <UploadInp />
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                </div>
                <InputField placeholder='Add comments if any' name={'bmInvestInp'} onChange={(e) => bmDocInput2Change(e, 'bmInvestInp')} value={bmDocInput2.bmInvestInp} />
              </div>
            </div> */}

            <div className='flex flex-col gap-3'>
              {/* <div className='flex justify-between'>
                <Label text="Birth Certificate" />
                <UploadInp />
              </div> */}
              <FileUpload label={`Birth Certificate`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`birth_cert`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
              <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                  {/* <Pdf ></Pdf> */}
                </div>
                <InputField placeholder='Add comments if any' name={'bmBrtCertDocInp'} onChange={(e) => bmDocInput2Change(e, 'bmBrtCertDocInp')} value={bmDocInput2.bmBrtCertDocInp} />
              </div>
            </div>

          </div>
          <div className=' border-[#D4D4D4] w-full border'></div>
          <div className='flex flex-col gap-4'>
            <Label text='Number and names of all directors that are not an "Affiliate" of any Investor (you may exclude directors included as
            Independent Directors)' required='*' />
            {ntAffDirectInputs2.map((session, index) =>
              <div key={index}>
                <div className='flex gap-2 overflow-x-scroll'>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='First name' />
                    <InputField placeholder={'Enter First Name'} type={'text'} name={'nthAffDrctFN2'} onChange={(e) => ntAffDirectInputChange2(index, 'nthAffDrctFN2', e.target.value)} value={ntAffDirectInputs2.nthAffDrctFN2} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Last name' />
                    <InputField placeholder={'Enter Last Name'} type={'text'} name={'nthAffDrctLN2'} onChange={(e) => ntAffDirectInputChange2(index, 'nthAffDrctLN2', e.target.value)} value={session.nthAffDrctLN2} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Role' />
                    <Autocomplete
                      name={'nthAffDrctRL2'}
                      onChange={(event, value) => ntAffDirectInputChange2(index, 'nthAffDrctRL2', value)}
                      className='w-full'
                      disablePortal
                      id="nthAffDrctRL2"
                      options={bmBrdRoleData}
                      fullWidth={true}
                      style={{ fontSize: 1 }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                          borderRadius: 0,
                          height: '2.8rem',
                          fontSize: "0.875rem",
                          padding: '5px 4px 7.5px 5px',
                          color: ' rgb(100 116 139)',
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #BCBCBC",
                          },
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        }
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select role'
                      />}
                    />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Race/Ethnicity' />
                    {/* <InputField placeholder={'Select'} name={'nthAffDrctR2'} onChange={(e) => ntAffDirectInputChange2(index, 'nthAffDrctR2', e.target.value)} value={ntAffDirectInputs2.nthAffDrctR2} /> */}
                    <Autocomplete
                      name={'nthAffDrctR2'}
                      onChange={(event, value) => ntAffDirectInputChange2(index, 'nthAffDrctR2', value)}
                      className='w-full'
                      disablePortal
                      id="nthAffDrctR2"
                      options={bmRaceData}
                      fullWidth={true}
                      style={{ fontSize: 1 }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                          borderRadius: 0,
                          height: '2.8rem',
                          fontSize: "0.875rem",
                          padding: '5px 4px 7.5px 5px',
                          color: ' rgb(100 116 139)',
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9", // Change color on hover
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #BCBCBC", // Change color on focus
                          },
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        }
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethinicity'
                      />}
                    />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Date of Appointment' />
                    <InputField placeholder={'Select Date'} type={'date'} name={'nthAffDrctA2'} onChange={(e) => ntAffDirectInputChange2(index, 'nthAffDrctA2', e.target.value)} value={ntAffDirectInputs2.nthAffDrctA2} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Date of Expiration' />
                    <InputField placeholder={'Select Date'} type={'date'} name={'nthAffDrctE2'} onChange={(e) => ntAffDirectInputChange2(index, 'nthAffDrctE2', e.target.value)} value={ntAffDirectInputs2.nthAffDrctE2} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Citizenship' />
                    {/* <InputField placeholder={'Select'} name={'ntAffDrctC2'} onChange={(e) => ntAffDirectInputChange2(index, 'ntAffDrctC2', e.target.value)} value={ntAffDirectInputs2.ntAffDrctC2} /> */}
                    <Autocomplete
                      name={'ntAffDrctC2'}
                      onChange={(event, value) => ntAffDirectInputChange2(index, 'ntAffDrctC2', value)}
                      className='w-full'
                      disablePortal
                      id="ntAffDrctC2"
                      options={bmCitizenData}
                      fullWidth={true}
                      style={{ fontSize: 1 }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                          borderRadius: 0,
                          height: '2.8rem',
                          fontSize: "0.875rem",
                          padding: '5px 4px 7.5px 5px',
                          color: ' rgb(100 116 139)',
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9", // Change color on hover
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #BCBCBC", // Change color on focus
                          },
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        }
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenship'
                      />}
                    />
                  </div>
                </div>
                {index > 0 && (
                  <RiDeleteBin6Line className='text-[red] cursor-pointer mt-1' onClick={() => ntAffDirectDelete(index)} />
                )}
              </div>
            )}
            <h5 id='' className='flex gap-1 text-sm text-[#0045AC] cursor-pointer mt-2' onClick={ntAffDirectAddMore2}><img src={plusIcon} alt="" /> Add more</h5>
          </div>
          <div className='flex flex-col gap-4'>
            <Label text='Name of Chief Executive Officer, President or person responsible for daily operation.' required='*' />
            {dailyOperatorInputs.map((session, index) =>
              <div key={index}>
                <div className='flex gap-2 overflow-x-scroll'>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='First name' />
                    <InputField placeholder={'Enter First Name'} type={'text'} name={'dailyOptrFirstName'} onChange={(e) => dailyOperatorInputsChange(index, 'dailyOptrFirstName', e.target.value)} value={dailyOperatorInputs.dailyOptrFirstName} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Last name' />
                    <InputField placeholder='Enter Last Name' type={'text'} name={'dailyOptrLstName'} onChange={(e) => dailyOperatorInputsChange(index, 'dailyOptrLstName', e.target.value)} value={dailyOperatorInputs.dailyOptrLstName} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Race/Ethnicity' />
                    {/* <InputField placeholder={'Select'} name={'dailyOptrRace'} onChange={(e) => dailyOperatorInputsChange(index, 'dailyOptrRace', e.target.value)} value={dailyOperatorInputs.dailyOptrRace} /> */}
                    <Autocomplete
                      name={'dailyOptrRace'}
                      onChange={(event, value) => dailyOperatorInputsChange(index, 'dailyOptrRace', value)}
                      className='w-full'
                      disablePortal
                      id="dailyOptrRace"
                      options={bmRaceData}
                      fullWidth={true}
                      style={{ fontSize: 1 }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                          borderRadius: 0,
                          height: '2.8rem',
                          fontSize: "0.875rem",
                          padding: '5px 4px 7.5px 5px',
                          color: ' rgb(100 116 139)',
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9", // Change color on hover
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #BCBCBC", // Change color on focus
                          },
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        }
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethinicity'
                      />}
                    />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Date of Appointment' />
                    <InputField placeholder={'Select Date'} type={'date'} name={'dailyOptrDtApt'} onChange={(e) => dailyOperatorInputsChange(index, 'dailyOptrDtApt', e.target.value)} value={dailyOperatorInputs.dailyOptrDtApt} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Date of Expiration' />
                    <InputField placeholder={'Select Date'} type={'date'} name={'dailyOptrDtExp'} onChange={(e) => dailyOperatorInputsChange(index, 'dailyOptrDtExp', e.target.value)} value={dailyOperatorInputs.dailyOptrDtExp} />
                  </div>
                  <div className='min-w-44 flex flex-col gap-2'>
                    <ManConLabl text='Citizenship' />
                    {/* <InputField placeholder={'Select'} name={'dailyOptrCitizen'} onChange={(e) => dailyOperatorInputsChange(index, 'dailyOptrCitizen', e.target.value)} value={dailyOperatorInputs.dailyOptrCitizen} /> */}
                    <Autocomplete
                      name={'dailyOptrCitizen'}
                      onChange={(event, value) => dailyOperatorInputsChange(index, 'dailyOptrCitizen', value)}
                      className='w-full'
                      disablePortal
                      id="dailyOptrCitizen"
                      options={bmCitizenData}
                      fullWidth={true}
                      style={{ fontSize: 1 }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                          borderRadius: 0,
                          height: '2.8rem',
                          fontSize: "0.875rem",
                          padding: '5px 4px 7.5px 5px',
                          color: ' rgb(100 116 139)',
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9", // Change color on hover
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #BCBCBC", // Change color on focus
                          },
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #E2E4E9",
                          outline: 'none',
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        },
                        "& .MuiInputBase-root": {
                          fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                        }
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenship'
                      />}
                    />
                  </div>
                </div>
                {index > 0 && (
                  <RiDeleteBin6Line className='text-[red] cursor-pointer mt-1' onClick={() => dailyOperatorDelete(index)} />
                )}
              </div>
            )}
            <h5 id='' className='flex gap-1 text-sm text-[#0045AC] cursor-pointer mt-2' onClick={dailyOperatorAddMore}><img src={plusIcon} alt="" /> Add more</h5>

          </div>
          <div className='flex flex-col gap-4'>
            <Label text='Management Employees' />
            <div className='flex gap-2 overflow-x-scroll'>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='First name' />
                <InputField placeholder={'Enter First Name'} type={'text'} name={'manageEmpFirstName'} onChange={(e) => manageEmpInputsChange(e.target.value, 'manageEmpFirstName')} value={manageEmpInputs.manageEmpFirstName} />
              </div>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='Last name' />
                <InputField placeholder={'Enter Last Name'} type={'text'} name={'manageEmpLstName'} onChange={(e) => manageEmpInputsChange(e.target.value, 'manageEmpLstName')} value={manageEmpInputs.manageEmpLstName} />
              </div>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='Title' />
                <InputField placeholder={'Enter'} name={'manageEmpTitle'} onChange={(e) => manageEmpInputsChange(e.target.value, 'manageEmpTitle')} value={manageEmpInputs.manageEmpTitle} />
              </div>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='Role' />
                <Autocomplete
                  name={'manageEmpRole'}
                  onChange={(index, value) => manageEmpInputsChange(value, 'manageEmpRole', index)}
                  className='w-full'
                  disablePortal
                  id="manageEmpRole"
                  options={manEmpRole}
                  fullWidth={true}
                  style={{ fontSize: 1 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      border: "1px solid #E2E4E9",
                      outline: 'none',
                      borderRadius: 0,
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #E2E4E9",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #BCBCBC",
                      },
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #E2E4E9",
                      outline: 'none',
                    },
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                    },
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                    }
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select role'
                  />}
                />
              </div>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='Ethinicity' />
                <Autocomplete
                  name={'manageEmpRace'}
                  onChange={(index, value) => manageEmpInputsChange(value, 'manageEmpRace', index)}
                  className='w-full'
                  disablePortal
                  id="manageEmpRace"
                  options={bmRaceData}
                  fullWidth={true}
                  style={{ fontSize: 1 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      border: "1px solid #E2E4E9",
                      outline: 'none',
                      borderRadius: 0,
                      height: '2.8rem',
                      fontSize: "0.875rem",
                      padding: '5px 4px 7.5px 5px',
                      color: ' rgb(100 116 139)',
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #E2E4E9", // Change color on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #BCBCBC", // Change color on focus
                      },
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #E2E4E9",
                      outline: 'none',
                    },
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                    },
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                    }
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethnicity'
                  />}
                />
              </div>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='Citizenship' />
                <Autocomplete
                  name={'manageEmpCitizen'}
                  onChange={(index, value) => { manageEmpInputsChange(value, 'manageEmpCitizen', index) }}
                  className='w-full'
                  disablePortal
                  id="manageEmpCitizen"
                  options={bmCitizenData}
                  fullWidth={true}
                  style={{ fontSize: 1 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      border: "1px solid #E2E4E9",
                      outline: 'none',
                      borderRadius: 0,
                      height: '2.8rem',
                      fontSize: "0.875rem",
                      padding: '5px 4px 7.5px 5px',
                      color: ' rgb(100 116 139)',
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #E2E4E9",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #BCBCBC", // Change color on focus
                      },
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #E2E4E9",
                      outline: 'none',
                    },
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem",
                    },
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem",
                    }
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenships'
                  />}
                />
              </div>
              <div className='min-w-44 flex flex-col gap-2'>
                <ManConLabl text='Gender' />
                <Autocomplete
                  name={'manageEmpGender'}
                  onChange={(index, value) => { manageEmpInputsChange(value, 'manageEmpGender', index) }}
                  className='w-full'
                  disablePortal
                  id="manageEmpGender"
                  options={bmGenderData}
                  fullWidth={true}
                  style={{ fontSize: 1 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      border: "1px solid #E2E4E9",
                      outline: 'none',
                      borderRadius: 0,
                      height: '2.8rem',
                      fontSize: "0.875rem",
                      padding: '5px 4px 7.5px 5px',
                      color: ' rgb(100 116 139)',
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #E2E4E9",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #BCBCBC", // Change color on focus
                      },
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #E2E4E9",
                      outline: 'none',
                    },
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem",
                    },
                    "& .MuiInputBase-root": {
                      fontSize: "0.875rem",
                    }
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Gender'
                  />}
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-3'>
              {/* <div className='flex justify-between'>
                <Label text="Government Issued Photo ID" />
                <UploadInp />
              </div> */}
              <FileUpload label={`Government Issued Photo ID`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`govtphotoidME`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
              <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                  {/* <Pdf ></Pdf> */}
                </div>
                <InputField placeholder={'Add comments if any'} type={'text'} name={'manageEmpGovIDDocInp'} onChange={(e) => manageEmpDocInputChange(e, 'manageEmpGovIDDocInp')} value={manageEmpDocInput.manageEmpGovIDDocInp} />
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              {/* <div className='flex justify-between'>
                <Label text="Proof of Expertise" />
                <UploadInp />
              </div> */}
              <FileUpload label={`Proof of Expertise`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofexpertME`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
              <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                  {/* <Pdf ></Pdf> */}
                </div>
                <InputField placeholder={'Add comments if any'} type={'text'} name={'manageEmpExprtInp'} onChange={(e) => manageEmpDocInputChange(e, 'manageEmpExprtInp')} value={manageEmpDocInput.manageEmpExprtInp} />
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              {/* <div className='flex justify-between'>
                <Label text="Proof of U.S. Citizenship" />
                <UploadInp />
              </div> */}
              <FileUpload label={`Proof of U.S. Citizenship`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofusME`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
              <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                  {/* <Pdf ></Pdf> */}
                </div>
                <InputField placeholder={'Add comments if any'} type={'text'} name={'manageEmpPrfCitizenDocInp'} onChange={(e) => manageEmpDocInputChange(e, 'manageEmpPrfCitizenDocInp')} value={manageEmpDocInput.manageEmpPrfCitizenDocInp} />
              </div>
            </div>
          </div>
          <div className=' border-[#D4D4D4] w-full border'></div>
          <div className='flex flex-col gap-4'>
            <SectionTitle title='DECISION MAKERS' />
            <div className='flex flex-col gap-12'>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3'>
                  <Label text='Signatory on Major Documents' />
                  <div className='flex gap-2 overflow-x-scroll'>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='First name' />
                      <InputField placeholder={'Enter First Name'} type={'text'} name={'signatoryFirstName'} onChange={(e) => signatoryInputsChange(e.target.value, 'signatoryFirstName')} value={signatoryInputs.signatoryFirstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Last name' />
                      <InputField placeholder={'Enter Last Name'} type={'text'} name={'signatoryLstName'} onChange={(e) => signatoryInputsChange(e.target.value, 'signatoryLstName')} value={signatoryInputs.signatoryLstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Title' />
                      <InputField placeholder={'Enter'} name={'signatoryTitle'} onChange={(e) => signatoryInputsChange(e.target.value, 'signatoryTitle')} value={signatoryInputs.signatoryTitle} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Role' />
                      <Autocomplete
                        name={'signatoryRole'}
                        onChange={(index, value) => signatoryInputsChange(value, 'signatoryRole', index)}
                        className='w-full'
                        disablePortal
                        id="signatoryRole"
                        options={bmBrdRoleData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC",
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select role'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Ethinicity' />
                      <Autocomplete
                        name={'signatoryRace'}
                        onChange={(index, value) => signatoryInputsChange(value, 'signatoryRace', index)}
                        className='w-full'
                        disablePortal
                        id="signatoryRace"
                        options={bmRaceData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9", // Change color on hover
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethnicity'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Citizenship' />
                      <Autocomplete
                        name={'signatoryCitizen'}
                        onChange={(index, value) => { signatoryInputsChange(value, 'signatoryCitizen', index) }}
                        className='w-full'
                        disablePortal
                        id="signatoryCitizen"
                        options={bmCitizenData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenships'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Gender' />
                      <Autocomplete
                        name={'signatoryGender'}
                        onChange={(index, value) => { signatoryInputsChange(value, 'signatoryGender', index) }}
                        className='w-full'
                        disablePortal
                        id="signatoryGender"
                        options={bmGenderData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Gender'
                        />}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Government Issued Photo ID" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Government Issued Photo ID`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`govtphotoidDM`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} name={'signatoryGovIDDocInp'} onChange={(e) => signatoryDocInputChange(e, 'signatoryGovIDDocInp')} value={signatoryDocInput.signatoryGovIDDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of Expertise" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of Expertise`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofexpertDM`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} name={'signatoryExprtDocInp'} onChange={(e) => signatoryDocInputChange(e, 'signatoryExprtDocInp')} value={signatoryDocInput.signatoryExprtDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of U.S. Citizenship" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of U.S. Citizenship`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofusDM`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} name={'signatoryPrfCitizenDocInp'} onChange={(e) => signatoryDocInputChange(e, 'signatoryPrfCitizenDocInp')} value={signatoryDocInput.signatoryPrfCitizenDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Bank Signature Card or Bank Letter" required='*' toolTipText=' ' />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Bank Signature Card or Bank Letter`} requiredText={`*`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`BanksignDM`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} name={'signatoryBnkLetterDocInp'} onChange={(e) => signatoryDocInputChange(e, 'signatoryBnkLetterDocInp')} value={signatoryDocInput.signatoryBnkLetterDocInp} />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3'>
                  <Label text='Personnel Management' />
                  <div className='flex gap-2 overflow-x-scroll'>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='First name' />
                      <InputField placeholder={'Enter First Name'} type={'text'} name={'persManageFirstName'} onChange={(e) => persManageInputsChange(e, 'persManageFirstName')} value={persManageInputs.persManageFirstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Last name' />
                      <InputField placeholder='Enter Last Name' type={'text'} name={'persManageLstName'} onChange={(e) => persManageInputsChange(e, 'persManageLstName')} value={persManageInputs.persManageLstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Title' />
                      <InputField placeholder={'Enter'} name={'persManageTitle'} onChange={(e) => persManageInputsChange(e, 'persManageTitle')} value={persManageInputs.persManageTitle} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Role' />
                      <Autocomplete
                        name={'persManageRole'}
                        onChange={(index, value) => persManageInputsChange(value, 'persManageRole', index)}
                        className='w-full'
                        disablePortal
                        id="persManageRole"
                        options={bmBrdRoleData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC",
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select role'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Ethinicity' />
                      <Autocomplete
                        name={'persManageRace'}
                        onChange={(index, value) => persManageInputsChange(value, 'persManageRace', index)}
                        className='w-full'
                        disablePortal
                        id="persManageRace"
                        options={bmRaceData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9", // Change color on hover
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethnicity'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Citizenship' />
                      <Autocomplete
                        name={'persManageCitizen'}
                        onChange={(index, value) => { persManageInputsChange(value, 'persManageCitizen', index) }}
                        className='w-full'
                        disablePortal
                        id="persManageCitizen"
                        options={bmCitizenData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenships'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Gender' />
                      <Autocomplete
                        name={'persManageGender'}
                        onChange={(index, value) => { persManageInputsChange(value, 'persManageGender', index) }}
                        className='w-full'
                        disablePortal
                        id="persManageGender"
                        options={bmGenderData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Gender'
                        />}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Government Issued Photo ID" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Government Issued Photo ID`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`govtphotoidPM`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'persManageGovIDDocInp'} onChange={(e) => persManageDocInputChange(e, 'persManageGovIDDocInp')} value={persManageDocInput.persManageGovIDDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of Expertise" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of Expertise`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofexpertPM`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'persManageExprtDocInp'} onChange={(e) => persManageDocInputChange(e, 'persManageExprtDocInp')} value={persManageDocInput.persManageExprtDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of U.S. Citizenship" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of U.S. Citizenship`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofuscitizenPM`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'persManagePrfCitizenDocInp'} onChange={(e) => persManageDocInputChange(e, 'persManagePrfCitizenDocInp')} value={persManageDocInput.persManagePrfCitizenDocInp} />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3'>
                  <Label text='Marketing & Sales' />
                  <div className='flex gap-2 overflow-x-scroll'>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text={'First name'} />
                      <InputField placeholder={'Enter First Name'} type={'text'} name={'marketingFirstName'} onChange={(e) => marketingInputsChange(e, 'marketingFirstName')} value={marketingInputs.marketingFirstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Last name' />
                      <InputField placeholder={'Enter Last Name'} type={'text'} name={'marketingLstName'} onChange={(e) => marketingInputsChange(e, 'marketingLstName')} value={marketingInputs.marketingLstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Title' />
                      <InputField placeholder={'Enter'} name={'marketingTitle'} onChange={(e) => marketingInputsChange(e, 'marketingTitle')} value={marketingInputs.marketingTitle} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Role' />
                      <Autocomplete
                        name={'marketingRole'}
                        onChange={(index, value) => marketingInputsChange(value, 'marketingRole', index)}
                        className='w-full'
                        disablePortal
                        id="marketingRole"
                        options={bmBrdRoleData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC",
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select role'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Ethinicity' />
                      <Autocomplete
                        name={'marketingRace'}
                        onChange={(index, value) => marketingInputsChange(value, 'marketingRace', index)}
                        className='w-full'
                        disablePortal
                        id="marketingRace"
                        options={bmRaceData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9", // Change color on hover
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethnicity'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Citizenship' />
                      <Autocomplete
                        name={'marketingCitizen'}
                        onChange={(index, value) => { marketingInputsChange(value, 'marketingCitizen', index) }}
                        className='w-full'
                        disablePortal
                        id="marketingCitizen"
                        options={bmCitizenData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenships'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Gender' />
                      <Autocomplete
                        name={'marketingGender'}
                        onChange={(index, value) => { marketingInputsChange(value, 'marketingGender', index) }}
                        className='w-full'
                        disablePortal
                        id="marketingGender"
                        options={bmGenderData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Gender'
                        />}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Government Issued Photo ID" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Government Issued Photo ID`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`govtphotoidMS`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'marketingGovIDDocInp'} onChange={(e) => marketingDocInputChange(e, 'marketingGovIDDocInp')} value={marketingDocInput.marketingGovIDDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of Expertise" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of Expertise`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofexpertMS`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'marketingExprtDocInp'} onChange={(e) => marketingDocInputChange(e, 'marketingExprtDocInp')} value={marketingDocInput.marketingExprtDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of U.S. Citizenship" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of U.S. Citizenship`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofusMS`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'marketingPrfCitizenDocInp'} onChange={(e) => marketingDocInputChange(e, 'marketingPrfCitizenDocInp')} value={marketingDocInput.marketingPrfCitizenDocInp} />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3'>
                  <Label text='Estimating' />
                  <div className='flex gap-2 overflow-x-scroll'>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='First name' />
                      <InputField placeholder={'Enter First Name'} type={'text'} name={'estimatingFirstName'} onChange={(e) => estimatingInputsChange(e, 'estimatingFirstName')} value={estimatingInputs.estimatingFirstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Last name' />
                      <InputField placeholder={'Enter Last Name'} type={'text'} name={'estimatingLstName'} onChange={(e) => estimatingInputsChange(e, 'estimatingLstName')} value={estimatingInputs.estimatingLstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Title' />
                      <InputField placeholder={'Enter'} name={'estimatingTitle'} onChange={(e) => estimatingInputsChange(e, 'estimatingTitle')} value={estimatingInputs.estimatingTitle} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Role' />
                      <Autocomplete
                        name={'estimatingRole'}
                        onChange={(index, value) => estimatingInputsChange(value, 'estimatingRole', index)}
                        className='w-full'
                        disablePortal
                        id="estimatingRole"
                        options={bmBrdRoleData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC",
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select role'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Ethinicity' />
                      <Autocomplete
                        name={'estimatingRace'}
                        onChange={(index, value) => estimatingInputsChange(value, 'estimatingRace', index)}
                        className='w-full'
                        disablePortal
                        id="estimatingRace"
                        options={bmRaceData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9", // Change color on hover
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethnicity'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Citizenship' />
                      <Autocomplete
                        name={'estimatingCitizen'}
                        onChange={(index, value) => { estimatingInputsChange(value, 'estimatingCitizen', index) }}
                        className='w-full'
                        disablePortal
                        id="estimatingCitizen"
                        options={bmCitizenData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenships'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Gender' />
                      <Autocomplete
                        name={'estimatingGender'}
                        onChange={(index, value) => { estimatingInputsChange(value, 'estimatingGender', index) }}
                        className='w-full'
                        disablePortal
                        id="estimatingGender"
                        options={bmGenderData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Gender'
                        />}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Government Issued Photo ID" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Government Issued Photo ID`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`govtphotoidestimat`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'estimatingGovIDDocInp'} onChange={(e) => estimatingDocInputChange(e, 'estimatingGovIDDocInp')} value={estimatingDocInput.estimatingGovIDDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of Expertise" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of Expertise`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofexpertestimat`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'estimatingExprtDocInp'} onChange={(e) => estimatingDocInputChange(e, 'estimatingExprtDocInp')} value={estimatingDocInput.estimatingExprtDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of U.S. Citizenship" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of U.S. Citizenship`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofusestimat`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'estimatingPrfCitizenDocInp'} onChange={(e) => estimatingDocInputChange(e, 'estimatingPrfCitizenDocInp')} value={estimatingDocInput.estimatingPrfCitizenDocInp} />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3'>
                  <Label text='Purchase of Major Items' />
                  <div className='flex gap-2 overflow-x-scroll'>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='First name' />
                      <InputField placeholder={'Enter First Name'} type={'text'} name={'purchaseFirstName'} onChange={(e) => purchaseInputsChange(e, 'purchaseFirstName')} value={purchaseInputs.purchaseFirstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Last name' />
                      <InputField placeholder={'Enter Last Name'} type={'text'} name={'purchaseLstName'} onChange={(e) => purchaseInputsChange(e, 'purchaseLstName')} value={purchaseInputs.purchaseLstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Title' />
                      <InputField placeholder={'Enter'} name={'purchaseTitle'} onChange={(e) => purchaseInputsChange(e, 'purchaseTitle')} value={purchaseInputs.purchaseTitle} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Role' />
                      <Autocomplete
                        name={'purchaseRole'}
                        onChange={(index, value) => purchaseInputsChange(value, 'purchaseRole', index)}
                        className='w-full'
                        disablePortal
                        id="purchaseRole"
                        options={bmBrdRoleData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC",
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select role'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Ethinicity' />
                      <Autocomplete
                        name={'purchaseRace'}
                        onChange={(index, value) => purchaseInputsChange(value, 'purchaseRace', index)}
                        className='w-full'
                        disablePortal
                        id="purchaseRace"
                        options={bmRaceData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9", // Change color on hover
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethnicity'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Citizenship' />
                      <Autocomplete
                        name={'purchaseCitizen'}
                        onChange={(index, value) => { purchaseInputsChange(value, 'purchaseCitizen', index) }}
                        className='w-full'
                        disablePortal
                        id="purchaseCitizen"
                        options={bmCitizenData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenships'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Gender' />
                      <Autocomplete
                        name={'purchaseGender'}
                        onChange={(index, value) => { purchaseInputsChange(value, 'purchaseGender', index) }}
                        className='w-full'
                        disablePortal
                        id="purchaseGender"
                        options={bmGenderData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Gender'
                        />}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Government Issued Photo ID" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Government Issued Photo ID`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`govtphotoidpurch`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'purchaseGovIDDocInp'} onChange={(e) => purchaseDocInputChange(e, 'purchaseGovIDDocInp')} value={purchaseDocInput.purchaseGovIDDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of Expertise" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of Expertise`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofexpertpurch`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'purchaseExprtDocInp'} onChange={(e) => purchaseDocInputChange(e, 'purchaseExprtDocInp')} value={purchaseDocInput.purchaseExprtDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of U.S. Citizenship" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of U.S. Citizenship`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofuspurch`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'purchasePrfCitizenDocInp'} onChange={(e) => purchaseDocInputChange(e, 'purchasePrfCitizenDocInp')} value={purchaseDocInput.purchasePrfCitizenDocInp} />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3'>
                  <Label text='Supervision of Field Operations' />
                  <div className='flex gap-2 overflow-x-scroll'>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='First name' />
                      <InputField placeholder={'Enter First Name'} type={'text'} name={'superFieldFirstName'} onChange={(e) => superFieldInputsChange(e, 'superFieldFirstName')} value={superFieldInputs.superFieldFirstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Last name' />
                      <InputField placeholder={'Enter Last Name'} type={'text'} name={'superFieldLstName'} onChange={(e) => superFieldInputsChange(e, 'superFieldLstName')} value={superFieldInputs.superFieldLstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Title' />
                      <InputField placeholder={'Enter'} name={'superFieldTitle'} onChange={(e) => superFieldInputsChange(e, 'superFieldTitle')} value={superFieldInputs.superFieldTitle} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Role' />
                      {/* <InputField placeholder={'Select'} type={'text'} name={'superFieldRole'} onChange={(e) => superFieldInputsChange(e, 'superFieldRole')} value={superFieldInputs.superFieldRole} /> */}
                      <Autocomplete
                        name={'superFieldRole'}
                        onChange={(index, value) => superFieldInputsChange(value, 'superFieldRole', index)}
                        className='w-full'
                        disablePortal
                        id="superFieldRole"
                        options={bmBrdRoleData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC",
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select role'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Ethinicity' />
                      {/* <InputField placeholder={'Enter Ethinicity'} name={'superFieldRace'} onChange={(e) => superFieldInputsChange(e, 'superFieldRace')} value={superFieldInputs.superFieldRace} /> */}
                      <Autocomplete
                        name={'superFieldRace'}
                        onChange={(index, value) => superFieldInputsChange(value, 'superFieldRace', index)}
                        className='w-full'
                        disablePortal
                        id="superFieldRace"
                        options={bmRaceData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9", // Change color on hover
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethnicity'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Citizenship' />
                      {/* <InputField placeholder={'Enter Citizenship'} type={'text'} name={'superFieldCitizen'} onChange={(e) => superFieldInputsChange(e, 'superFieldCitizen')} value={superFieldInputs.superFieldCitizen} /> */}
                      <Autocomplete
                        name={'superFieldCitizen'}
                        onChange={(index, value) => { superFieldInputsChange(value, 'superFieldCitizen', index) }}
                        className='w-full'
                        disablePortal
                        id="superFieldCitizen"
                        options={bmCitizenData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenships'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Gender' />
                      {/* <InputField placeholder={'Select'} name={'superFieldGender'} onChange={(e) => superFieldInputsChange(e, 'superFieldGender')} value={superFieldInputs.superFieldGender} /> */}
                      <Autocomplete
                        name={'superFieldGender'}
                        onChange={(index, value) => { superFieldInputsChange(value, 'superFieldGender', index) }}
                        className='w-full'
                        disablePortal
                        id="superFieldGender"
                        options={bmGenderData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Gender'
                        />}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Government Issued Photo ID" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Government Issued Photo ID`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`govtphotoidSOF`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'superFieldGovIDDocInp'} onChange={(e) => superFieldDocInputChange(e, 'superFieldGovIDDocInp')} value={superFieldDocInput.superFieldGovIDDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of Expertise" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of Expertise`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofexpertSOF`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'superFieldExprtDocInp'} onChange={(e) => superFieldDocInputChange(e, 'superFieldExprtDocInp')} value={superFieldDocInput.superFieldExprtDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of U.S. Citizenship" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of U.S. Citizenship`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofusSOF`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'superFieldPrfCitizenDocInp'} onChange={(e) => superFieldDocInputChange(e, 'superFieldPrfCitizenDocInp')} value={superFieldDocInput.superFieldPrfCitizenDocInp} />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3'>
                  <Label text='Determine Jobs/Projects to accept' />
                  <div className='flex gap-2 overflow-x-scroll'>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='First name' />
                      <InputField placeholder={'Enter First Name'} type={'text'} name={'deterJobFirstName'} onChange={(e) => deterJobInputsChange(e, 'deterJobFirstName')} value={deterJobInputs.deterJobFirstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Last name' />
                      <InputField placeholder={'Enter Last Name'} type={'text'} name={'deterJobLstName'} onChange={(e) => deterJobInputsChange(e, 'deterJobLstName')} value={deterJobInputs.deterJobLstName} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Title' />
                      <InputField placeholder={'Enter'} name={'deterJobTitle'} onChange={(e) => deterJobInputsChange(e, 'deterJobTitle')} value={deterJobInputs.deterJobTitle} />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Role' />
                      {/* <InputField placeholder={'Select'} type={'text'} name={'deterJobRole'} onChange={(e) => deterJobInputsChange(e, 'deterJobRole')} value={deterJobInputs.deterJobRole} /> */}
                      <Autocomplete
                        name={'deterJobRole'}
                        onChange={(index, value) => manageEmpInputsChange(value, 'deterJobRole', index)}
                        className='w-full'
                        disablePortal
                        id="deterJobRole"
                        options={bmBrdRoleData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC",
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select role'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Ethinicity' />
                      {/* <InputField placeholder={'Enter Ethinicity'} name={'deterJobRace'} onChange={(e) => deterJobInputsChange(e, 'deterJobRace')} value={deterJobInputs.deterJobRace} /> */}
                      <Autocomplete
                        name={'deterJobRace'}
                        onChange={(index, value) => deterJobInputsChange(value, 'deterJobRace', index)}
                        className='w-full'
                        disablePortal
                        id="deterJobRace"
                        options={bmRaceData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9", // Change color on hover
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem", // Adjust the font size as needed (0.875rem is equivalent to text-sm)
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Race/Ethnicity'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Citizenship' />
                      {/* <InputField placeholder={'Enter Citizenship'} type={'text'} name={'deterJobCitizen'} onChange={(e) => deterJobInputsChange(e, 'deterJobCitizen')} value={deterJobInputs.deterJobCitizen} /> */}
                      <Autocomplete
                        name={'deterJobCitizen'}
                        onChange={(index, value) => { deterJobInputsChange(value, 'deterJobCitizen', index) }}
                        className='w-full'
                        disablePortal
                        id="deterJobCitizen"
                        options={bmCitizenData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Citizenships'
                        />}
                      />
                    </div>
                    <div className='min-w-44 flex flex-col gap-2'>
                      <ManConLabl text='Gender' />
                      {/* <InputField placeholder={'Select'} name={'deterJobGender'} onChange={(e) => deterJobInputsChange(e, 'deterJobGender')} value={deterJobInputs.deterJobGender} /> */}
                      <Autocomplete
                        name={'deterJobGender'}
                        onChange={(index, value) => { deterJobInputsChange(value, 'deterJobGender', index) }}
                        className='w-full'
                        disablePortal
                        id="deterJobGender"
                        options={bmGenderData}
                        fullWidth={true}
                        style={{ fontSize: 1 }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                            borderRadius: 0,
                            height: '2.8rem',
                            fontSize: "0.875rem",
                            padding: '5px 4px 7.5px 5px',
                            color: ' rgb(100 116 139)',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #E2E4E9",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #BCBCBC", // Change color on focus
                            },
                          },
                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #E2E4E9",
                            outline: 'none',
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          },
                          "& .MuiInputBase-root": {
                            fontSize: "0.875rem",
                          }
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth={true} placeholder='Select Gender'
                        />}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Government Issued Photo ID" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Government Issued Photo ID`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`govtphotoidproject`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'deterJobGovIDDocInp'} onChange={(e) => deterJobDocInputChange(e, 'deterJobGovIDDocInp')} value={deterJobDocInput.deterJobGovIDDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of Expertise" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of Expertise`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofexpertproject`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'deterJobExprtDocInp'} onChange={(e) => deterJobDocInputChange(e, 'deterJobExprtDocInp')} value={deterJobDocInput.deterJobExprtDocInp} />
                    </div>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {/* <div className='flex justify-between'>
                      <Label text="Proof of U.S. Citizenship" />
                      <UploadInp />
                    </div> */}
                    <FileUpload label={`Proof of U.S. Citizenship`} maxSizeMB={50} onFilesChange={onFilesChange} fileName={`proofofusproject`} fileInfos={pdfmandcontrol} setFileInfos={setFileUpload} validExtensions={['.pdf', '.doc', '.docx']} />
                    <div className='flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        {/* <Pdf ></Pdf> */}
                      </div>
                      <InputField placeholder={'Add comments if any'} type={'text'} name={'deterJobPrfCitizenDocInp'} onChange={(e) => deterJobDocInputChange(e, 'deterJobPrfCitizenDocInp')} value={deterJobDocInput.deterJobPrfCitizenDocInp} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Management & Controls end  */}
      </div>
      <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeFormToDisplayManagement({ formName: "Business Type" })} actionNext={changeSideBar({ sideBarName: "Business Desc" })} className='bg-white' />
    </div>
  )
}

export default ManControl