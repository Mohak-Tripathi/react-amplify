import { createSlice } from "@reduxjs/toolkit";
import companyFormSlice, { handleUpdateForm, initialState as initialStateCompany, handleDeleteForm } from "./companyFormSlice";

export const initialState = {
    tree: {
        l1: {},
        l2: {},
        l3: {},
        l4: {},
    },
    companySelected: [],
    companySelected_l2: [],
    companySelected_l3: [],
    companySelectedArr: {
        l1: [],
        l2: {},
        l3: {},
        l4: {},
    },
    companySelectedArr_l2: [],
    companySelectedArr_l3: [],
};

const treeStructure = createSlice({
    name: "treeStructure",
    initialState,
    reducers: {
        updateTree: (state, { payload }) => {
            console.log(state, payload)
        },
        updateCompany: (state, { payload }) => {
            console.log(state, payload)
            if (payload.level === "l1") {
                state.companySelectedArr.l1 = payload.arr;
            }
            if (payload.level === "l2") {
                // state.companySelectedArr.l2[payload.companyIndex] = payload.arr;
                // console.log("this", state.companySelectedArr[payload.level]);
                state.companySelectedArr = {
                    ...state.companySelectedArr,
                    [payload.level]: {
                        ...state.companySelectedArr[payload.level],
                        [payload.companyIndex]: payload.arr,
                    }
                }
            }
            if (payload.level === "l3") {
                // state.companySelectedArr.l3[payload.companyI] = payload.arr;
                state.companySelectedArr = {
                    ...state.companySelectedArr,
                    [payload.level]: {
                        ...state.companySelectedArr[payload.level],
                        [payload.companyIndex]: payload.arr,
                    }
                }
            }
            const newArr = payload.arr.map((elem) => {
                return { name: elem, value: "" }
            });
            state.tree = {
                ...state.tree,
                [payload.level]: {
                    ...state.tree[payload.level],
                    [payload.companyName]: newArr
                }
            };
            state.companySelected = newArr;
        },
        updateNameValue: (state, { payload }) => {
            console.log(state, payload.level, payload.name, payload.value, payload.index, payload.companyName, payload.filteredArr, payload.unfilteredArr);
            // let filteredList = state.tree[payload.level][payload.companyName].filter((elem) => elem.name === payload.name);
            // let unfilteredList = state.tree[payload.level][payload.companyName].filter((elem) => elem.name !== payload.name);
            // filteredList[payload.index]["value"] = payload.value;
            // filteredList[payload.index] = {
            //     ...filteredList[payload.index],
            //     value: payload.value
            // };
            // console.log(filteredList, unfilteredList);
            state.tree[payload.level][payload.companyName] = [...payload.unfilteredArr, ...payload.filteredArr];
        },
        handleChangeCompanySelectedArr: (state, { payload }) => {
            state.companySelectedArr[payload.level] = payload.arr;
        },
        updateCompanyFromForm: (state, { payload }) => {
            const newArr = payload.arr.map((elem) => elem);
            // state.companySelectedArr[payload.currentLevel] = newArr;
            state.tree = { ...state.tree, [payload.currentLevel]: { [payload.companyName]: payload.arr } };
            // state.companySelected = payload.arr;
            console.log(state, payload, newArr);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(handleUpdateForm, (state, { payload }) => {
            console.log("company form", state, payload, initialStateCompany);
        })
        builder.addCase(handleDeleteForm, (state, { payload }) => {
            console.log("company form", state, payload, state.tree[payload.level][payload.companyName]);
            delete state.tree[payload.level][payload.companyName];
        })
    }
});

export const { updateTree, updateCompany, updateCompanyFromForm, handleChangeCompanySelectedArr, updateNameValue } = treeStructure.actions;

export default treeStructure.reducer;