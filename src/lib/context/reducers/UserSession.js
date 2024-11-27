import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: undefined,
};

export const counterSlice = createSlice({
    name: 'UserSession',
    initialState,
    reducers: {
        setUserSession: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserSession } = counterSlice.actions;

export default counterSlice.reducer;
