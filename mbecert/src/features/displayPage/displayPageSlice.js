import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideBar: "General Info",
    formToDisplay: "Gen Business Info",
    formToDisplayBusiness: "Business Structure",
    formToDisplayManagement: "Business Type",
    formToDisplayBusinessDesc: "Business Profile",
    referencesPage: "References Info 1",
    referenceStepperState: {
        references: false,
        operatingBankReferences: false,
        optIns: false,
    },
    businessPage: "Business Structure",
    businessStepperState: {
        businessStructure: false,
        ownerShipDetails: false,
        otherOwnerShipConsiderations: false,
        businessAcquisition: false,
        businessSize: false,
        additionalDocuments: false,
    },
    generalInfoStepper: {
        genBusInfo: false,
        contactInfo: false,
    },
    managementCtrlStepper: {
        busType: false,
        managementCtrl: false,
    },
    busDescStepper: {
        busDesc: false,
        naicsUnspscDesc: false,
        CorporatePlus: false,
        strategicAlliancePartner: false,
    }
}


const displayPage = createSlice({
    name: "displayPage",
    initialState,
    reducers: {
        changeSideBar: (state, { payload }) => {
            console.log(state, payload)
            state.sideBar = payload.sideBarName;
        },
        changeFormToDisplay: (state, { payload }) => {
            console.log(state, payload)
            if (payload.formName === "Contact Info" && payload.step === "next")
                state.generalInfoStepper.genBusInfo = true;

            if (payload.formName === "Gen Business Info" && payload.step === "prev")
                state.generalInfoStepper.genBusInfo = false;

            state.formToDisplay = payload.formName;
        },
        changeFormToDisplayBusiness: (state, { payload }) => {
            console.log(state, payload)
            state.formToDisplayBusiness = payload.formName;
        },
        changeFormToDisplayBusinessDesc: (state, { payload }) => {
            console.log(state, payload)
            if (payload.formName === "Naics" && payload.step === "next")
                state.busDescStepper.busDesc = true;
            if (payload.formName === "Business Profile" && payload.step === "prev")
                state.busDescStepper.busDesc = false;
            if (payload.formName === "Business NMSDC" && payload.step === "next")
                state.busDescStepper.naicsUnspscDesc = true;
            if (payload.formName === "Naics" && payload.step === "prev")
                state.busDescStepper.naicsUnspscDesc = false;
            if (payload.formName === "Stragetic Alliance" && payload.step === "next")
                state.busDescStepper.CorporatePlus = true;
            if (payload.formName === "Business NMSDC" && payload.step === "prev")
                state.busDescStepper.CorporatePlus = false;
            if (payload.formName === "Summary" && payload.step === "next")
                state.busDescStepper.strategicAlliancePartner = true;
            if (payload.formName === "Stragetic Alliance" && payload.step === "prev")
                state.busDescStepper.strategicAlliancePartner = false;
            state.formToDisplayBusinessDesc = payload.formName
        },

        changeBusinessPage: (state, { payload }) => {
            console.log(payload)
            // if(payload.formName === "TreeStructure" && payload.step==="next") {
            //     state.businessStepperState.businessStructure = true;
            //     state.businessPage = payload.formName;
            // }
            // if(payload.formName === "TreeStructure" && payload.step==="prev") {
            //     // state.businessStepperState.businessStructure = true;
            //     state.businessPage = payload.formName;
            // }
            if (payload.formName === "Business Structure" && payload.step === "prev") {
                state.businessStepperState.businessStructure = false;
                state.businessPage = payload.formName;
            }
            if (payload.formName === "Business Structure" && payload.step === "next") {
                state.businessStepperState.businessStructure = true;
                state.businessPage = payload.formName;
            }

            if (payload.formName === "Ownership Details" && payload.step === "prev") {
                state.businessStepperState.ownerShipDetails = false;
                state.businessPage = payload.formName;
            }
            if (payload.formName === "Ownership Details" && payload.step === "next") {
                // console.log("TEST")
                state.businessStepperState.businessStructure = true;
                state.businessPage = payload.formName;
            }

            if (payload.formName === "Other Ownership Considerations" && payload.step === "prev") {
                state.businessStepperState.otherOwnerShipConsiderations = false;
                state.businessPage = payload.formName;
            }
            if (payload.formName === "Other Ownership Considerations" && payload.step === "next") {
                state.businessStepperState.ownerShipDetails = true;
                state.businessPage = payload.formName;
            }

            if (payload.formName === "Business Acquastion & Opening licence" && payload.step === "prev") {
                state.businessStepperState.businessAcquisition = false;
                state.businessPage = payload.formName;
            }
            if (payload.formName === "Business Acquastion & Opening licence" && payload.step === "next") {
                state.businessStepperState.otherOwnerShipConsiderations = true;
                state.businessPage = payload.formName;
            }


            if (payload.formName === "Business Size & Certifications" && payload.step === "prev") {
                state.businessStepperState.businessSize = false;
                state.businessPage = payload.formName;
            }
            if (payload.formName === "Business Size & Certifications" && payload.step === "next") {
                state.businessStepperState.businessAcquisition = true;
                state.businessPage = payload.formName;
            }

            if (payload.formName === "Additional Documents" && payload.step === "prev") {
                state.businessStepperState.businessSize = false;
                state.businessPage = payload.formName;
            }
            if (payload.formName === "Additional Documents" && payload.step === "next") {
                state.businessStepperState.businessSize = true;
                state.businessPage = payload.formName;
            }

        },
        changeReferencesPage: (state, { payload }) => {
            console.log(state, payload)
            if (payload.formName === "References Info 1" && payload.step === "prev") {
                state.referenceStepperState.references = false;
                state.referencesPage = payload.formName;
            }
            if (payload.formName === "Bank Ref Info" && payload.step === "next") {
                state.referenceStepperState.references = true;
                state.referencesPage = payload.formName;
            }
            if (payload.formName === "Bank Ref Info" && payload.step === "prev") {
                state.referenceStepperState.operatingBankReferences = false;
                state.referencesPage = payload.formName;
            }
            if (payload.formName === "Opt Ins" && payload.step === "next") {
                state.referenceStepperState.operatingBankReferences = true;
                state.referencesPage = payload.formName;
            }
        },
        changeFormToDisplayManagement: (state, { payload }) => {
            console.log(state, payload)
            if (payload.formName === "Man Control" && payload.step === "next")
                state.managementCtrlStepper.busType = true;
            if (payload.formName === "Business Type" && payload.step === "prev")
                state.managementCtrlStepper.busType = false;
            state.formToDisplayManagement = payload.formName;
        },
    }
})

export const { changeSideBar, changeFormToDisplay, changeFormToDisplayBusiness, changeFormToDisplayBusinessDesc, changeReferencesPage, changeBusinessPage, changeFormToDisplayManagement } = displayPage.actions;

export default displayPage.reducer;