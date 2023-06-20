import { LoginData } from "../../utils/types";
import { REGISTER_USER, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESSFUL } from "../actionTypes";
import { AuthAction } from "./action";

export interface AuthState {
  isLoading: boolean;
  isAuth: boolean;
  isRegistered: boolean;
  users: LoginData[];
  isError: boolean;
}

const initialState = {
  isLoading: false,
  isAuth: false,
  isRegistered: false,
  users: new Array(),
  isError: false,
};

export const authReducer = (state: AuthState = initialState, action: AuthAction) => {
  const { type } = action;
  switch (type) {
    case REGISTER_USER: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case REGISTER_USER_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        isRegistered: true,
        isAuth: true,
        users: [...state.users, action.payload],
      };
    }

    case REGISTER_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isError: true,
      };
    }
    default:
      return state;

    // case LOGIN_USER: {
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isAuth: false,
    //   };
    // }

    // case LOGIN_USER_SUCCESSFUL: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isAuth: true,
    //     users: action.payload,
    //   };
    // }

    // case LOGIN_USER_FAILURE: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //     isAuth: false,
    //   };
    // }

    // case RESET: {
    //   return {
    //     ...initialState,
    //   };
    // }

    // default: {
    //   return state;
    // }
  }
};

// import { AuthAction } from "./action";
// import { USER_LOGIN_REQUEST, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../actionTypes";

// export interface AuthState {
//   isLoading: boolean;
//   isError: boolean;
//   isAuth: boolean;
//   token: string;
// }

// const initialState = {
//   isLoading: false,
//   isError: false,
//   isAuth: false,
//   token: "",
// };

// const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
//   const { type } = action;

//   switch (type) {
//     case USER_LOGIN_REQUEST: {
//       return { ...state, isLoading: true, isError: false };
//     }

//     case USER_LOGIN_SUCCESS: {
//       return {
//         ...state,
//         isLoading: false,
//         isAuth: true,
//         token: action.payload,
//       };
//     }

//     case USER_LOGIN_ERROR: {
//       return { ...state, isLoading: false, isError: true };
//     }

//     default:
//       return state;
//   }
// };
