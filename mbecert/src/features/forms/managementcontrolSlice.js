import { createSlice } from "@reduxjs/toolkit";
import { changeBusinessPage, changeSideBar } from "../displayPage/displayPageSlice";

const initialState = {
    // businessStructure: {

    // },
    // additionalDocument: {},
    // businessacquisition: {},
    managementcontrol: {},
}

const managementcontrol = createSlice({
    name: "managementcontrol",
    initialState,
    reducers: {
        handlemanagementcontrolPdf: (state, { payload }) => {
            console.log(state, payload)
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(changeBusinessPage, (state, { payload }) => {
        //     console.log(state, payload, payload.fileUpload);
        //     if (payload.fileUpload && payload.page) {
        //         state[payload.page] = payload.fileUpload
        //     }
        // })
        builder.addCase(changeSideBar, (state, { payload }) => {
            console.log(state, payload, payload.fileUpload);
            if (payload.fileUpload && payload.page === "managementcontrol") {
                state[payload.page] = payload.fileUpload
            }
        })
    }
})

export const { handlemanagementcontrolPdf } = managementcontrol.actions;

export default managementcontrol.reducer;