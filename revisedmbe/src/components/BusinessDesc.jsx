import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../store/store';
import BusinessProfile from './BusinessDescription/BusinessProfile';
import Naics from './BusinessDescription/Naics';
import BusinessNMSDC from './BusinessDescription/BusinessNMSDC';
import StrategicAlliance from './BusinessDescription/StrategicAlliance';
import BusinessDescSummary from './BusinessDescription/BusinessDescSummary';
import Stepper from '../globalComponents/Stepper';

export default function BusinessDesc() {

    const { side, formToDisplayBusinessDesc, busDescStepper } = useSelector((store) => store.displayPage);

    const defaultSteps = [
        { label: "Business Description", completed: busDescStepper.busDesc },
        { label: "NAICS & UNSPSC Description", completed: busDescStepper.naicsUnspscDesc },
        { label: "Corporate Plus", completed: busDescStepper.CorporatePlus },
        { label: "Strategic Alliances & Partnerships", completed: busDescStepper.strategicAlliancePartner },
    ];

    return (
        <div className='w-full flex flex-col h-full'>
            <Stepper data={defaultSteps} />
            <div className='w-full flex flex-col gap-8 h-full'>
                {(formToDisplayBusinessDesc === "Business Profile") && <BusinessProfile />}
                {(formToDisplayBusinessDesc === "Naics") && <Naics />}
                {(formToDisplayBusinessDesc === "Business NMSDC") && <BusinessNMSDC />}
                {(formToDisplayBusinessDesc === "Stragetic Alliance") && <StrategicAlliance />}
                {(formToDisplayBusinessDesc === "Summary") && <BusinessDescSummary />}
            </div>
        </div>
    )
}
