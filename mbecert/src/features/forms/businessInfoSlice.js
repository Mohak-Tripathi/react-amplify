import { createSlice } from "@reduxjs/toolkit";
import { changeBusinessPage, changeSideBar } from "../displayPage/displayPageSlice";
import { updateNameValue } from "../treeStructure/treeStructureSlice";

const initialState = {
    businessStructure: {

    },
    additionalDocument: {},
    businessacquisition: {},
    independentSponsor: {},
    angelInvestorGroup: {},
    investmentFund: {},
    FamilyOffice: {},
    foreignOperatingCompany: {},
    publicMarket: {},
    individualForm: {},
}

const businessInfo = createSlice({
    name: "businessInfo",
    initialState,
    reducers: {
        handleBusinessInfoPdf: (state, { payload }) => {
            console.log(state, payload)
            if (payload.fileUpload && payload.page) {
                state[payload.page] = payload.fileUpload
            }
        },
        popUpFileHandling: (state, { payload }) => {
            console.log(state, payload)
            state[payload.page] = payload.fileUpload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(changeBusinessPage, (state, { payload }) => {
            console.log(state, payload, payload.fileUpload);
            if (payload.fileUpload && payload.page) {
                state[payload.page] = payload.fileUpload
            }
        })
        builder.addCase(updateNameValue, (state, { payload }) => {
            console.log(state, payload, payload.fileUpload);
            if (payload.fileUpload && payload.page) {
                state[payload.page] = payload.fileUpload
            }
        })
        builder.addCase(changeSideBar, (state, { payload }) => {
            console.log(state, payload, payload.fileUpload);
            if (payload.fileUpload && payload.page) {
                state[payload.page] = payload.fileUpload
            }
        })
    }
})

export const { handleBusinessInfoPdf, popUpFileHandling } = businessInfo.actions;

export default businessInfo.reducer;