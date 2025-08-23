import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { IRequestType } from "../types";


interface IRequestTypesState {
  data: IRequestType[];
}

const initialState: IRequestTypesState = {
  data: [],
};

export const requestTypesSlice = createSlice({
  name: "requestTypes",
  initialState,
  reducers: {
    setRequestTypes: (state, action: PayloadAction<IRequestType[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setRequestTypes } = requestTypesSlice.actions;
export default requestTypesSlice.reducer;
export const selectedRequestTypes = (store: RootState) => store.requestTypes;