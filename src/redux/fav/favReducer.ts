import { Places } from "../../utils/types";
import {
  DELETE_FAV,
  GET_FAV_FAILURE,
  GET_FAV_REQUEST,
  GET_FAV_SUCCESS,
} from "../actionTypes";
import { FavAction } from "./action";
export interface IFavState {
  isLoading: boolean;
  isError: boolean;
  fav: Places[];
}
const initialState = {
  isLoading: false,
  isError: false,
  fav: new Array(),
};

export const favReducer = (
  state: IFavState = initialState,
  action: FavAction
) => {
  const { type } = action;
  switch (type) {
    case GET_FAV_REQUEST:
      return { ...state, isLoading: true };
    case GET_FAV_SUCCESS:
      return { ...state, isLoading: false, fav: action.payload };

    case GET_FAV_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case DELETE_FAV:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
