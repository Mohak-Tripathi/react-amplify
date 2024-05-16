import React, { useState } from "react";
import { useSelector } from "react-redux";

import Check from "../../assests/images/check.png";

const Step = ({ index, label, completed, onClick }) => (
    <div
        className={`justify-start items-center gap-1.5 flex ${completed ? "text-lime-500" : "text-blue-800"
            } cursor-pointer`}
        onClick={onClick}
    >
        <div
            className={`w-8 h-8 py-0.5 px-3 rounded-full flex-col justify-center items-center flex ${completed ? "bg-lime-500" : "bg-blue-800"
                }`}
        >
            {completed ? (
                <div className="w-4 relative">
                    <img src={Check} alt="" />
                </div>
            ) : (
                <div
                    className={`text-xs font-medium font-['Inter'] leading-none ${completed ? "" : "text-white"
                        }`}
                >
                    {index + 1}
                </div>
            )}
        </div>
        <div className="text-sm font-normal font-['Degular Demo'] leading-tight min-w-min flex">
            {label}
        </div>
    </div>
);

export default function BusinessInfoStepper() {

    const { businessStepperState } = useSelector((store) => store.displayPage)
    const [activeStep, setActiveStep] = useState(0);

    const defaultSteps = [
        { label: "Business Structure", completed: businessStepperState.businessStructure },
        { label: "Ownership Details", completed: businessStepperState.ownerShipDetails },
        { label: "Other Ownership Considerations", completed: businessStepperState.otherOwnerShipConsiderations },
        { label: "Business Acquisition & Opening license", completed: businessStepperState.businessAcquisition },
        { label: "Business Size & Certifications", completed: businessStepperState.businessSize },
        { label: "Additional Documents", completed: businessStepperState.additionalDocuments },
    ];

    const handleStepClick = (stepIndex) => {
        setActiveStep(stepIndex);
    };

    const steps = defaultSteps.map((step) => {
        const matchingBackendStep = defaultSteps.find(
            (backendStep) => backendStep.label === step.label
        );

        return {
            ...step,
            completed: matchingBackendStep
                ? matchingBackendStep.completed
                : step.completed,
        };
    });

    return (
        <div className="w-full h-10 justify-start items-center gap-3 flex p-8 sticky top-0 left-0 right-0 bg-white z-20">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <Step
                        index={index}
                        label={step.label}
                        completed={step.completed}
                        onClick={() => handleStepClick(index)}
                    />
                    {index < steps.length - 1 && (
                        <div className="grow shrink basis-0 h-[1.50px] flex-col justify-start items-start inline-flex min-w-[25px]">
                            <div
                                className={`self-stretch h-px ${step.completed ? "bg-lime-500" : "bg-blue-800"
                                    }`}
                            />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

