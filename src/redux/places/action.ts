import { Places } from "../../utils/types";
import { AppDispatch } from "../store";
import { getPlacesAPI, updatePlacesAPI } from "./api";
import {
  PLACES_REQUEST,
  PLACES_ERROR,
  GET_PLACES_SUCCESS,
  UPDATE_PLACES_SUCCESS,
} from "../actionTypes";

export interface IPlacesRequest {
  type: typeof PLACES_REQUEST;
}

export interface IPlacesError {
  type: typeof PLACES_ERROR;
}

export interface IGetPlacesSuccess {
  type: typeof GET_PLACES_SUCCESS;
  payload: Places[];
}

export interface IUpdatePlaceSuccess {
  type: typeof UPDATE_PLACES_SUCCESS;
}

export type AppAction = IPlacesRequest | IPlacesError | IGetPlacesSuccess | IUpdatePlaceSuccess;

//action creators
const placesRequest = (): IPlacesRequest => {
  return { type: PLACES_REQUEST };
};

const placesError = (): IPlacesError => {
  return { type: PLACES_ERROR };
};

const getPlacesSuccess = (data: Places[]): IGetPlacesSuccess => {
  return { type: GET_PLACES_SUCCESS, payload: data };
};

const updatePlacesSuccess = (): IUpdatePlaceSuccess => {
  return { type: UPDATE_PLACES_SUCCESS };
};

export const getPlaces =
  (getplacessParam?: { params: { category: string[] } }): any =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(placesRequest());
      const res = await getPlacesAPI(getplacessParam);
      if (res) {
        dispatch(getPlacesSuccess(res));
      }
    } catch (error) {
      dispatch(placesError());
    }
  };

export const updatePlaces =
  (id: number, payload: { title: string; price: number }): any =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(placesRequest());
      await updatePlacesAPI(id, payload);
      dispatch(updatePlacesSuccess());
    } catch (error) {
      dispatch(placesError());
    }
  };
