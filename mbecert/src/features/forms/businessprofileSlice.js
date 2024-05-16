import { createSlice } from "@reduxjs/toolkit";
import { changeBusinessPage, changeFormToDisplayBusinessDesc, changeSideBar } from "../displayPage/displayPageSlice";

const initialState = {
    // businessStructure: {

    // },
    // additionalDocument: {},
    // businessacquisition: {},
    // managementcontrol: {},
    businessprofile: {},
}

const businessprofile = createSlice({
    name: "businessprofile",
    initialState,
    reducers: {
        handlebusinessprofilePdf: (state, { payload }) => {
            console.log(state, payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(changeFormToDisplayBusinessDesc, (state, { payload }) => {
            console.log(state, payload, payload.fileUpload);
            if (payload.fileUpload && payload.page) {
                state[payload.page] = payload.fileUpload
            }
        })
        builder.addCase(changeSideBar, (state, { payload }) => {
            console.log(state, payload, payload.fileUpload);
            if (payload.fileUpload && payload.page === "businessprofile") {
                state[payload.page] = payload.fileUpload
            }
        })
    }
})

export const { handlebusinessprofilePdf } = businessprofile.actions;

export default businessprofile.reducer;