import { useSelector } from "react-redux";

import ReferencesInfo from "./ReferencesPages/ReferencesInfo";
import BankRefInfo from "./ReferencesPages/BankRefInfo";
import OptIns from "./ReferencesPages/OptIns";
import ReferenceStepper from "./ReferencesPages/ReferenceStepper";
import Stepper from "../globalComponents/Stepper";


export default function References() {

    const { referencesPage, referenceStepperState } = useSelector((store) => store.displayPage)

    const defaultSteps = [
        { label: "References", completed: referenceStepperState.references },
        { label: "Operating Bank References", completed: referenceStepperState.operatingBankReferences },
        { label: "Opt Ins", completed: referenceStepperState.optIns },
    ];

    return (
        <div className=' bg-white w-full h-full flex flex-col relative'>
            {/* <ReferenceStepper /> */}
            <Stepper data={defaultSteps} />
            <div className='pt-8 bg-white w-full flex flex-col gap-8 h-full'>
                {(referencesPage === "References Info 1") && <ReferencesInfo />}
                {(referencesPage === "Bank Ref Info") && <BankRefInfo />}
                {(referencesPage === "Opt Ins") && <OptIns />}
            </div>
        </div>
    )
}

