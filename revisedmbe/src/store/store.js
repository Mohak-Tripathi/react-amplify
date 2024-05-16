import { configureStore } from "@reduxjs/toolkit";
import displayPageReducer from "../features/displayPage/displayPageSlice";
import treeStructureReducer from "../features/treeStructure/treeStructureSlice";
import individualFormReducer from "../features/individualForm/individualFormSlice";
import companyFormReducer from "../features/treeStructure/companyFormSlice";
import businessInfoReducer from "../features/forms/businessInfoSlice";
import generalinfoReducer from "../features/forms/generalinfoSlice";
import managementcontrolReducer from "../features/forms/managementcontrolSlice";
import businessprofileReducer from "../features/forms/businessprofileSlice";


export const store = configureStore({
    reducer: {
        displayPage: displayPageReducer,
        treeStructure: treeStructureReducer,
        individualForm: individualFormReducer,
        companyForm: companyFormReducer,
        businessInfo: businessInfoReducer,
        generalInfo: generalinfoReducer,
        managementcontrol: managementcontrolReducer,
        businessprofile: businessprofileReducer,
    }
});