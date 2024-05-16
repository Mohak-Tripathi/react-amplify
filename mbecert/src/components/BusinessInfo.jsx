import { useDispatch, useSelector } from "react-redux";
import { changeSideBar } from "../features/displayPage/displayPageSlice";
import BusinessStructure from "./BusinessInfoPages/BusinessStructure";
import OwnershipDetails from "./BusinessInfoPages/OwnershipDetails";
import BusinessInfoStepper from "./BusinessInfoPages/BusinessInfoStepper";
import OtherOwnershipConsiderations from "./BusinessInfoPages/OtherOwnershipConsiderations";
import BusinessAcquastion from "./BusinessInfoPages/BusinessAcquastion";
import BusinessSizeCertifications from "./BusinessInfoPages/BusinessSizeCertifications";
import AdditionalDocuments from "./BusinessInfoPages/AdditionalDocuments";
import TreeStructure from "./TreeStructure/TreeStructure";
import Stepper from "../globalComponents/Stepper";

export default function BusinessInfo() {

    const dispatch = useDispatch()
    const { sideBar, businessPage, businessStepperState } = useSelector((store) => store.displayPage)

    const defaultSteps = [
        { label: "Business Structure", completed: businessStepperState.businessStructure },
        { label: "Ownership Details", completed: businessStepperState.ownerShipDetails },
        { label: "Other Ownership Considerations", completed: businessStepperState.otherOwnerShipConsiderations },
        { label: "Business Acquisition & Opening license", completed: businessStepperState.businessAcquisition },
        { label: "Business Size & Certifications", completed: businessStepperState.businessSize },
        { label: "Additional Documents", completed: businessStepperState.additionalDocuments },
    ];

    return (
        <div className=' bg-white w-full flex flex-col relative'>
            {/* <BusinessInfoStepper /> */}
            <Stepper data={defaultSteps} />
            <div className=' bg-white w-full flex flex-col gap-8'>

                {(businessPage === "Business Structure") && <BusinessStructure />}
                {(businessPage === "Ownership Details") && <TreeStructure />}
                {/* {(businessPage === "Ownership Details") && <OwnershipDetails />} */}
                {(businessPage === "Other Ownership Considerations") && <OtherOwnershipConsiderations />}
                {(businessPage === "Business Acquastion & Opening licence") && <BusinessAcquastion />}
                {(businessPage === "Business Size & Certifications") && <BusinessSizeCertifications />}
                {(businessPage === "Additional Documents") && <AdditionalDocuments />}

            </div>
        </div>
    )
};

{/* <div>BusinessInfo</div>
            <button onClick={() => dispatch(changeSideBar({ sideBarName: "General Info" }))}>
                Next
            </button> */}
