import axios from "axios";
import { LoginFailure, LoginStart, LoginSuccess } from "./AuthAction";

export const loginCall = async (userCredential, dispatch) => {
  const urlpath = process.env.REACT_APP_URL
  dispatch(LoginStart());
  try {
    const res = await axios.post(`${urlpath}auth/login`, userCredential);
    console.log(res);
    dispatch(LoginSuccess(res.data));
  } catch (err) {
    dispatch(LoginFailure(err));
  }
};