import {
  REGISTER_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESSFUL,
} from "../actionTypes";
import axios from "axios";
import { LoginData } from "../../utils/types";
import { AppDispatch } from "../store";

const URL = "https://safar-json-server-sabiransari1.onrender.com";

export interface IRegisterRequest {
  type: typeof REGISTER_USER;
}

export interface IRegisterSuccess {
  type: typeof REGISTER_USER_SUCCESSFUL;
  payload: LoginData[];
}

export interface IRegisterError {
  type: typeof REGISTER_USER_FAILURE;
}

export type AuthAction = IRegisterRequest | IRegisterSuccess | IRegisterError;

const userRequest = (): IRegisterRequest => {
  return {
    type: REGISTER_USER,
  };
};

const userSuccess = (userData: []): IRegisterSuccess => {
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload: userData,
  };
};

const userError = (): IRegisterError => {
  return {
    type: REGISTER_USER_FAILURE,
  };
};

export const signup = (userData: LoginData) => (dispatch: AppDispatch) => {
  dispatch({ type: REGISTER_USER });
  axios
    .post(`${URL}/users`, userData)
    .then((res) => {
      dispatch({ type: REGISTER_USER_SUCCESSFUL, payload: res.data });
    })
    .catch((err) => {
      console.log(err);

      dispatch({ type: REGISTER_USER_FAILURE });
    });
};
