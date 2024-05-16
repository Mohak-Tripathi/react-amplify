import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import FormFooter from '../../globalComponents/FormFooter'
import { changeFormToDisplayBusinessDesc } from '../../features/displayPage/displayPageSlice'
import Stepper from './StepperBusDesc'
import SectionTitle from '../../globalComponents/SectionTitle'
import Label from '../../globalComponents/Label'
import BusinessInputField from '../../globalComponents/BusinessInputField'


export default function BusinessNMSDC() {
    const dispatch = useDispatch()
    // Data handling
    const [corporatePlus, setCorporatePlus] = useState('No');
    const [NmsdcSponsor, setNmsdcSponsor] = useState('');

    // function for data handling
    const handleCorporatePlus = (event) => {
        setCorporatePlus(event.target.value)
    }

    const handleNMSDCSponsor = (value) => {
        setNmsdcSponsor(value);
    }

    const handleNext = () => {
        dispatch(changeFormToDisplayBusinessDesc({ formName: "Stragetic Alliance", step: "next" }))
    }

    const handleReturn = () => {
        dispatch(changeFormToDisplayBusinessDesc({ formName: "Naics", step: "prev" }))
    }

    return (
        <>
            <div className="main bg-white min-h-full flex justify-between flex-col h-full">
                <div>
                    {/* stepper stars */}
                    {/* <Stepper /> */}
                    {/* stepper ends */}

                    <div className='flex flex-col gap-6 p-8'>
                        <div className='divider'></div>
                        <div className='general-gap'>
                            <SectionTitle title='CORPORATE PLUS' />
                        </div>

                        <div className="checkbox flex flex-col gap-6">
                            <Label text='Are you a corporate plus member?' />
                            <div className='flex gap-4 justify-start items-center text-base'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <input type="radio" id='yes' name='primary_representative' value='Yes' className='checkBoxBtn' checked={corporatePlus === 'Yes'} onChange={handleCorporatePlus} />
                                    <label for='yes'>Yes</label>
                                </div>
                                <div className='flex gap-2 justify-center items-center'>
                                    <input type="radio" id='no' name='primary_representative' value='No' className='checkBoxBtn' checked={corporatePlus === 'No'} onChange={handleCorporatePlus} />
                                    <label for='no'>No</label>
                                </div>
                            </div>

                            {corporatePlus === 'Yes' &&
                                <div className='general-gap'>
                                    <Label text='NMSDC Corporate Sponsor' />
                                    <BusinessInputField placeholder='Enter Sponsors' onChange={handleNMSDCSponsor} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <FormFooter onNextClick={handleNext} onReturnClick={handleReturn} actionReturn={changeFormToDisplayBusinessDesc({ formName: "Naics" })} actionNext={changeFormToDisplayBusinessDesc({ formName: "Stragetic Alliance" })} />
            </div>
        </>
    )
}
