import React, { useState } from 'react';
import Check from '../../assests/images/check.png';
import { dummyStepper } from '../../data/stepperData';

const Step = ({ index, label, completed, onClick }) => (
    <div className={`justify-start items-center gap-2 flex ${completed ? 'text-lime-500' : 'text-blue-800'} cursor-pointer`} onClick={onClick}>
        <div className={`w-8 h-8 p-0.5 rounded-[999px] flex-col justify-center items-center inline-flex ${completed ? 'bg-lime-500' : 'bg-blue-800'}`}>
            {completed ? (
                <div className="w-4 relative">
                    <img src={Check} alt="" />
                </div>
            ) : (
                <div className={`text-xs font-medium font-['Inter'] leading-none ${completed ? '' : 'text-white'}`}>
                    {index + 1}
                </div>
            )}
        </div>
        <div className="text-sm font-normal font-['Degular Demo'] leading-tight">{label}</div>
    </div>
);

const Stepper = () => {
    const [activeStep, setActiveStep] = useState(0);

    const defaultSteps = [
        { label: 'Business Description', completed: true },
        { label: 'NAICS & UNSPSC Description', completed: true },
        { label: 'Corporate Plus', completed: false },
        { label: 'Strategic Alliances & Partnerships', completed: false },
    ];

    const handleStepClick = (stepIndex) => {
        setActiveStep(stepIndex);
    };

    const steps = defaultSteps.map((step) => {
        const matchingBackendStep = dummyStepper.find((backendStep) => backendStep.label === step.label);

        return {
            ...step,
            completed: matchingBackendStep ? matchingBackendStep.completed : step.completed,
        };
    });

    return (
        <div className="w-full h-10 justify-start items-center gap-3 inline-flex p-8 flex-wrap">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <Step
                        index={index}
                        label={step.label}
                        completed={step.completed}
                        onClick={() => handleStepClick(index)}
                    />
                    {index < steps.length - 1 && (
                        <div className="grow shrink basis-0 h-[1.50px] flex-col justify-start items-start inline-flex">
                            <div className={`self-stretch h-px ${step.completed ? 'bg-lime-500' : 'bg-blue-800'}`} />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Stepper;
