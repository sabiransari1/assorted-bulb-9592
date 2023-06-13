import { Places } from "../../utils/types";
import { AppAction } from "./action";
import {
  PLACES_REQUEST,
  PLACES_ERROR,
  GET_PLACES_SUCCESS,
  UPDATE_PLACES_SUCCESS,
} from "../actionTypes";

export interface IAppState {
  loading: boolean;
  error: boolean;
  data: Places[];
}

const initialState = {
  loading: false,
  error: false,
  data: new Array(),
};

const placesReducer = (state: IAppState = initialState, action: AppAction): IAppState => {
  const { type } = action;

  switch (type) {
    case PLACES_REQUEST: {
      return { ...state, loading: true, error: false };
    }

    case PLACES_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case GET_PLACES_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }

    case UPDATE_PLACES_SUCCESS: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};

export { placesReducer };
