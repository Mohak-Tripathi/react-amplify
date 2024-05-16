import React from 'react'
import { useState } from 'react'
import FormFooter from '../../globalComponents/FormFooter'
import SectionTitle from '../../globalComponents/SectionTitle'
import InputField from '../../globalComponents/InputField'
import Label from '../../globalComponents/Label'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from "react-redux";
import Stepper from './StepperBusDesc'
import '../General.css'
import Plus from '../../assests/images/Plus.png'
import { changeFormToDisplayBusinessDesc, changeSideBar } from '../../features/displayPage/displayPageSlice'

export default function StrategicAlliance() {
  const dispatch = useDispatch();
  // Data handling
  const [strategicAllianceDecision, setStrategicAllianceDecision] = useState('No');
  const [sections, setSections] = useState([{ companyName: '', companyDescription: '' }]);
  const [certifiedPartnerDecision, setCertifiedPartnerDecision] = useState('No');
  const [certifiedPartnerSections, setCertifiedPartnerSections] = useState([{ companyNameCertified: '', companyDescriptionCertified: '' }]);

  // Functions for Data handling
  const handleStrategicAllianceDecision = (event) => {
    const decision = event.target.value;
    setStrategicAllianceDecision(decision);

    if (decision === 'No') {
      setSections([{ companyName: '', companyDescription: '' }]);
    }
  };

  const handleInputChange = (index, fieldName, value) => {
    const updatedSections = [...sections];
    updatedSections[index][fieldName] = value;
    setSections(updatedSections);
  };

  const handleAddMore = () => {
    setSections((prevSections) => [
      ...prevSections,
      { companyName: '', companyDescription: '' },
    ]);
  };

  const handleDelete = () => {
    setSections((prevSections) => prevSections.slice(0, -1));
  };

  // certified partner

  const handleCertifiedPartnerDecision = (event) => {
    const decision = event.target.value;
    setCertifiedPartnerDecision(decision);

    if (decision === 'No') {
      setCertifiedPartnerSections([{ companyNameCertified: '', companyDescriptionCertified: '' }]);
    }
  };

  const handleCertifiedPartnerInputChange = (index, fieldName, value) => {
    const updatedSections = [...certifiedPartnerSections];
    updatedSections[index][fieldName] = value;
    setCertifiedPartnerSections(updatedSections);
  };

  const handleCertifiedPartnerAddMore = () => {
    setCertifiedPartnerSections((prevSections) => [
      ...prevSections,
      { companyNameCertified: '', companyDescriptionCertified: '' },
    ]);
  };

  const handleCertifiedPartnerDelete = (index) => {
    setCertifiedPartnerSections((prevSections) => prevSections.filter((_, i) => i !== index));
    // setCertifiedPartnerSections((prevSections) => prevSections.slice(0, -1));
  };

  const handleNext = () => {
    dispatch(changeFormToDisplayBusinessDesc({ formName: "Summary", step: "next" }))
  }

  const handleReturn = () => {
    dispatch(changeFormToDisplayBusinessDesc({ formName: "Business NMSDC", step: "prev" }))
  }

  return (
    <>
      <div className="main bg-white flex justify-between flex-col min-h-full h-full overflow-y-auto">
        <div>
          {/* stepper stars */}

          {/* <Stepper /> */}

          {/* stepper ends */}

          <div className='flex flex-col gap-6 p-8'>
            <div className="divider"></div>

            {/* strategic partner */}
            <div className='strategic partner general-gap'>
              <div className="flex flex-col gap-6">
                <Label text='Does your business have any strategic partners or alliances that will increase your business capacity?' />

                <div className='flex gap-2'>
                  <div className='flex gap-2 justify-center items-center'>
                    <input
                      type="radio"
                      id="yes"
                      name="strategic_alliance_decision"
                      value='Yes'
                      className='checkBoxBtn'
                      checked={strategicAllianceDecision === 'Yes'}
                      onChange={handleStrategicAllianceDecision}
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div className='flex gap-2 justify-center items-center'>
                    <input
                      type="radio"
                      id="no"
                      name="strategic_alliance_decision"
                      value='No'
                      className='checkBoxBtn'
                      checked={strategicAllianceDecision === 'No'}
                      onChange={handleStrategicAllianceDecision}
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </div>
              </div>

              {strategicAllianceDecision === 'Yes' && (
                <div>
                  {sections.map((section, index) => (
                    <div key={index} className='general-gap'>
                      {strategicAllianceDecision === 'Yes' && (
                        <div className='split'>
                          <div className='left split-gap'>
                            <SectionTitle title={`Company Name ${index + 1}`} />
                            <InputField
                              name={`companyName_${index}`}
                              placeholder='Enter Company Name'
                              value={section.companyName}
                              onChange={(e) => handleInputChange(index, 'companyName', e.target.value)}
                            />
                          </div>
                          <div className='right split-gap'>
                            <SectionTitle title={`Description ${index + 1}`} />
                            <InputField
                              name={`companyDescription_${index}`}
                              placeholder='Enter Description'
                              value={section.companyDescription}
                              onChange={(e) => handleInputChange(index, 'companyDescription', e.target.value)}
                            />
                          </div>
                        </div>
                      )}

                      <div className='flex justify-between items-center w-full'>
                        {index === sections.length - 1 && (
                          <div className="w-full h-[18px] justify-start items-center gap-1 inline-flex" role='button' onClick={handleAddMore}>
                            <div className="w-4 h-4 relative" >
                              <img src={Plus} alt="" />
                            </div>
                            <div className="text-blue-800 text-[15px] font-normal font-['Degular Demo'] leading-[18px]">Add more</div>
                          </div>
                        )}

                        {index > 0 && (
                          <div className="w-full h-[18px] justify-end items-center gap-1 inline-flex" role='button' onClick={handleDelete}>
                            <div className="w-4 h-4 relative text-red-500" >
                              <RiDeleteBin6Line />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* strategic partner */}

            {/* certified partner */}

            <div className='certified-partner general-gap'>
              <div className="flex flex-col gap-6">
                <Label text='Is the business a certified partner/representative/reseller?' />

                <div className='flex gap-2'>
                  <div className='flex gap-2 justify-center items-center'>
                    <input
                      type="radio"
                      id="certified-yes"
                      name="certified_partner_decision"
                      value='Yes'
                      className='checkBoxBtn'
                      checked={certifiedPartnerDecision === 'Yes'}
                      onChange={handleCertifiedPartnerDecision}
                    />
                    <label htmlFor="certified-yes">Yes</label>
                  </div>
                  <div className='flex gap-2 justify-center items-center'>
                    <input
                      type="radio"
                      id="certified-no"
                      name="certified_partner_decision"
                      value='No'
                      className='checkBoxBtn'
                      checked={certifiedPartnerDecision === 'No'}
                      onChange={handleCertifiedPartnerDecision}
                    />
                    <label htmlFor="certified-no">No</label>
                  </div>
                </div>
              </div>

              {certifiedPartnerDecision === 'Yes' && (
                <div>
                  {certifiedPartnerSections.map((section, index) => (
                    <div key={index} className='general-gap'>
                      {certifiedPartnerDecision === 'Yes' && (
                        <div className='split'>
                          <div className='left split-gap'>
                            <SectionTitle title={`Company Name ${index + 1}`} />
                            <InputField
                              name={`companyName_${index}`}
                              placeholder='Enter Company Name'
                              value={certifiedPartnerSections.companyNameCertified}
                              onChange={(e) => handleCertifiedPartnerInputChange(index, 'companyNameCertified', e.target.value)}
                            />
                          </div>
                          <div className='right split-gap'>
                            <SectionTitle title={`Description ${index + 1}`} />
                            <InputField
                              name={`companyDescription_${index}`}
                              placeholder='Enter Description'
                              value={certifiedPartnerSections.companyDescriptionCertified}
                              onChange={(e) => handleCertifiedPartnerInputChange(index, 'companyDescriptionCertified', e.target.value)}
                            />
                          </div>
                        </div>
                      )}

                      <div className='flex justify-between items-center w-full'>
                        {index === certifiedPartnerSections.length - 1 && (
                          <div className="w-full h-[18px] justify-start items-center gap-1 inline-flex" role='button' onClick={handleCertifiedPartnerAddMore}>
                            <div className="w-4 h-4 relative" >
                              <img src={Plus} alt="" />
                            </div>
                            <div className="text-blue-800 text-[15px] font-normal font-['Degular Demo'] leading-[18px]">Add more</div>
                          </div>
                        )}
                        {index > 0 && (

                          <div className="w-full h-[18px] justify-end items-center gap-1 inline-flex" role='button' onClick={() => handleCertifiedPartnerDelete(index)}>
                            <div className="w-4 h-4 relative text-red-500" >
                              <RiDeleteBin6Line />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* certified partner */}
            {console.log(certifiedPartnerSections)}
            {/* {console.log(sections)}  */}
          </div>
        </div>
        {/* <FormFooter onNextClick={handleNext} onReturnClick={handleReturn}  actionReturn={changeFormToDisplayBusinessDesc({ formName: "Business NMSDC" })} actionNext={changeSideBar({ sideBarName: "References" })} /> */}
        <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeFormToDisplayBusinessDesc({ formName: "Business NMSDC" })} actionNext={changeFormToDisplayBusinessDesc({ formName: "Summary" })} />

        {/* footer */}
      </div >
    </>
  )
}
