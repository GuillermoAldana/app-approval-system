import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ApprovalRequest {
    id: number;
    requester: string,
    title: string,
    description: string,
    status: string;
    type: string,
}

interface ApprovalState {
    requests: ApprovalRequest[];
}

const initialState: ApprovalState = {
    requests: [],
};

export const requestFormSlice = createSlice({
    name: "requestForm",
    initialState,
    reducers: {
        addRequest: (state, action: PayloadAction<ApprovalRequest>) => {
            state.requests.push(action.payload);
        },
    },
});

export const { addRequest } = requestFormSlice.actions;
export default requestFormSlice.reducer;
export const selectedRequest = (store: RootState) => store.requestForm
