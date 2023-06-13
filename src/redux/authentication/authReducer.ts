import { AuthAction } from "./action";
import { USER_LOGIN_REQUEST, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../actionTypes";

export interface AuthState {
  loading: boolean;
  error: boolean;
  isAuth: boolean;
  token: string;
}

const initialState = {
  loading: false,
  error: false,
  isAuth: false,
  token: "",
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  const { type } = action;

  switch (type) {
    case USER_LOGIN_REQUEST: {
      return { ...state, loading: true };
    }

    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: action.payload,
      };
    }

    case USER_LOGIN_ERROR: {
      return { ...state, loading: false, error: true };
    }

    default:
      return state;
  }
};

export { authReducer };
