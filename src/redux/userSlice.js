import { createSlice} from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        registerStart: (state) =>{
            state.isFetching = true;
            state.error = false;
        },
        registerSuccess: (state, action)=>{
            state.isFetching = false;
            state.error = false;

            state.currentUser = action.payload;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },
    },
});

export const{
    registerFailure,
    registerStart,
    registerSuccess,
    initialState,
} = userSlice.actions;
export default userSlice.reducer;