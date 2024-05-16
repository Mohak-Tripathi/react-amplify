import { createSlice } from "@reduxjs/toolkit";
import { changeBusinessPage, changeFormToDisplay, changeSideBar } from "../displayPage/displayPageSlice";

const initialState = {
    generalInfo: {

    },
   
}

const generalInfo = createSlice({
    name: "generalInfo",
    initialState,
    reducers: {
        handlegeneralInfoPdf: (state, { payload }) => {
            console.log(state, payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(changeFormToDisplay, (state, { payload }) => {
            console.log(state, payload, payload.fileUpload);
            if (payload.fileUpload && payload.page) {
                state[payload.page] = payload.fileUpload
            }
        })
        builder.addCase(changeSideBar, (state, { payload }) => {
            console.log(state, payload, payload.fileUpload);
            if (payload.fileUpload && payload.page === "generalInfo") {
                state[payload.page] = payload.fileUpload
            }
        })
    }
})

export const { handlegeneralInfoPdf } = generalInfo.actions;

export default generalInfo.reducer;