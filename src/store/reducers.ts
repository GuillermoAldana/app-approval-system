import { combineReducers } from "@reduxjs/toolkit";
import requestTypesReducer from "@/features/RequestType";
export const reducers = combineReducers({
    requestTypes: requestTypesReducer
})