import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    indiForm: [{ firstName: '', lastName: '', title: '', ownerEmail: '', role: '', citizenship: '', yrsOfOwnership: '', ethnicOrigin: '', gender: '', ownershipPercent: '', votingPercent: '', typeofCapitalContribution: '', expertise: '', },]
}

const individualForm = createSlice({
    name: "individualForm",
    initialState,
    reducers: {
        changeIndiInput: (state, { payload }) => {
            const updatedSessions = [...state.indiForm];
            updatedSessions[payload.index][payload.fieldName] = payload.value;
            state.indiForm = updatedSessions;
        },
    }
})

export const { changeIndiInput } = individualForm.actions;

export default individualForm.reducer;