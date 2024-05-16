import { useDispatch, useSelector } from "react-redux";
import { changeFormToDisplay } from "../features/displayPage/displayPageSlice";
import GenBusinessInfo from "./GeneralInfoPages/GenBusinessInfo";
import ContactInfo from "./GeneralInfoPages/ContactInfo";
import GenInfoSummary from "./GeneralInfoPages/GenInfoSummary";
import Stepper from "../globalComponents/Stepper";

export default function GeneralInfo() {

    const dispatch = useDispatch()
    const { sideBar, formToDisplay, generalInfoStepper } = useSelector((store) => store.displayPage)

    const defaultSteps = [
        { label: "General Business Information", completed: generalInfoStepper.genBusInfo },
        { label: "Contact Information", completed: generalInfoStepper.contactInfo },
    ];

    return (
        <div className=' bg-white w-full flex flex-col relative'>
            <Stepper data={defaultSteps} />
            <div className='bg-white w-full flex flex-col gap-4'>
                {(formToDisplay === "Gen Business Info") && <GenBusinessInfo />}
                {(formToDisplay === "Contact Info") && <ContactInfo />}
                {(formToDisplay === "Gen Summary") && <GenInfoSummary />}
            </div>
        </div>
    )
}

{/* <div>GeneralInfo</div>

            <button onClick={() => dispatch(changeFormToDisplay({ formName: "Contact Info" }))}>
                Next
            </button> */}