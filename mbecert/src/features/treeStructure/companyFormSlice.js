import { createSlice } from "@reduxjs/toolkit";
import { updateCompany, initialState as initialStateTree, updateNameValue } from "./treeStructureSlice";


export const initialState = {
    companyFormData: {},
    // companyFormData: [
    //     { name: "Company", value: "Company", companyName: '', ein: '', registrationNumber: '', businessStructure: '', },
    // ],
    companyFormDataTree: {
        l2: {},
        l3: {},
    },
    individualFormData: {},
    // individualFormData: [
    //     { name: "Individual", value: "Individual", firstName: '', lastName: '', title: '', email: '', role: '', citizenship: '', yrsOfOwnership: '', ethnicOrigin: '', gender: '', ownershipPercent: '', votingPercent: '', typeofCapitalContribution: '', expertise: '', },
    // ],
    trustFormData: [
        { name: "Trust", value: "Trust", trustName: "", firstName: '', lastName: '', title: '', ownerEmail: '', role: '', citizenship: '', yrsOfOwnership: '', ethnicOrigin: '', gender: '', ownershipPercent: '', votingPercent: '', typeofCapitalContribution: '', expertise: '', },
    ],
    investmentFundFormData: [
        { name: "Investment Fund", value: "Investment Fund", fundName: "", firstName: '', lastName: '', title: '', ownerEmail: '', role: '', citizenship: '', yrsOfOwnership: '', ethnicOrigin: '', gender: '', ownershipPercent: '', votingPercent: '', typeofCapitalContribution: '', expertise: '', },
    ],
};

const companyForm = createSlice({
    name: "companyForm",
    initialState,
    reducers: {
        handleUpdateForm: (state, { payload }) => {
            console.log(state, payload)
            state[payload.formName].push(payload.form)
        },
        handleUpdateFormField: (state, { payload }) => {
            console.log(state, payload);
            state[payload.formName][payload.index] = {
                ...state[payload.formName][payload.index],
                [payload.fieldName]: payload.value
            }
            if (payload.fieldName === "companyName") {
                console.log("tree state in company form", initialStateTree)
            }
            // state[payload.formName].push(payload.form)
        },
        handleDeleteForm: (state, { payload }) => {
            console.log(state, payload, "delete")
            let filteredCompanyArray = state[payload.formName][payload.parentCompany].filter((_, i) => i !== payload.index)
            state[payload.formName][payload.parentCompany] = filteredCompanyArray;
        },
        handleEditForm: (state, { payload }) => {
            console.log(state, payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(updateCompany, (state, { payload }) => {
            console.log("tree state in company form", state, initialStateTree, payload)
        })
        builder.addCase(updateNameValue, (state, { payload }) => {
            console.log("tree state in updateNameValue", state, initialStateTree, payload)
            state[payload.formName] = {
                ...state[payload.formName],
                [payload.companyName]: payload.filteredArr
            }

            // state[payload.formName][payload.index] = {
            //     ...state[payload.formName][payload.index],
            //     [payload.fieldName]: payload.value
            // }
        })
    }
});

export const { handleUpdateForm, handleUpdateFormField, handleEditForm, handleDeleteForm } = companyForm.actions;

export default companyForm.reducer;