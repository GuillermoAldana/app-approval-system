import { combineReducers } from "@reduxjs/toolkit";
import requestTypesReducer from "@/features/RequestType";
import requestFormReducer from "@/features/Form";

export const reducers = combineReducers({
    requestTypes: requestTypesReducer,
    requestForm: requestFormReducer
})