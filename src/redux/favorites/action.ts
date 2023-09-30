import axios from "axios";
import { Places } from "../../utils/types";
import { DELETE_FAV, GET_FAV_FAILURE, GET_FAV_REQUEST, GET_FAV_SUCCESS } from "../actionTypes";
import { AppDispatch } from "../store";

const URL = "https://safar-json-server-sabiransari1.onrender.com";
export interface IFavRequest {
  type: typeof GET_FAV_REQUEST;
}

export interface IFavError {
  type: typeof GET_FAV_FAILURE;
}
export interface IFavSuccess {
  type: typeof GET_FAV_SUCCESS;
  payload: Places[];
}
export interface IFavDelete {
  type: typeof DELETE_FAV;
}
export type FavAction = IFavRequest | IFavError | IFavSuccess | IFavDelete;

export const getFavdata = () => (dispatch: AppDispatch) => {
  dispatch({ type: GET_FAV_REQUEST });
  axios
    .get(`${URL}/favourite`)
    .then((res) => {
      dispatch({ type: GET_FAV_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_FAV_FAILURE }));
};

export const postSingleProductItem = (obj: any) => (dispatch: AppDispatch) => {
  dispatch({ type: GET_FAV_REQUEST });
  return axios
    .post(`${URL}/favourite`, obj)
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => dispatch({ type: GET_FAV_FAILURE }));
};
// export const deleteFav = (data: Places[]) => (dispatch: AppDispatch) => {
//   dispatch({ type: DELETE_FAV, payload: data });
// };
export const deleteFav = (id: number) => (dispatch: AppDispatch) => {
  dispatch({ type: GET_FAV_REQUEST });
  return axios
    .delete(`${URL}/favourite/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_FAV });
    })
    .catch((err) => {
      dispatch({ type: GET_FAV_FAILURE });
    });
};
