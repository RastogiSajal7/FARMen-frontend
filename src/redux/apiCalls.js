import {
    registerFailure,
    registerStart,
    registerSuccess,
} from "./userSlice";

import { userRequest } from "./requestMethods";

export const register = async (dispatch, user) =>{
    dispatch(registerStart());
    try{
        const res = await userRequest.post("/register", user);
        console.log("register res - ", res);
        if (res.status ===201) {
            dispatch(registerSuccess(res.data));
        } else {
            dispatch(registerFailure());
        }
    } catch (error) {
        dispatch(registerFailure());
    }
};