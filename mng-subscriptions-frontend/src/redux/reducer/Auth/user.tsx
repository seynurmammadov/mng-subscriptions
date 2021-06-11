import { ACTION_TYPES } from "../../actions/types";
import { IAction } from "../../interface/action";

const initialState = {
  status: "",
  data: {},
  errors: [],
};
export function reducerUser(state = initialState, action: IAction) {
  switch (action.type) {
    case `${ACTION_TYPES.USER_LOGIN}_PENDING`:
      return {
        ...state,
        status: "PENDING",
      };

    case `${ACTION_TYPES.USER_LOGIN}_SUCCESS`:
      return {
        ...state,
        status: "SUCCESS",
        data: action.payload,
      };

    case `${ACTION_TYPES.USER_LOGIN}_ERROR`:
      return {
        ...state,
        status: "ERROR",
        errors: [...action.errors],
      };

    case `${ACTION_TYPES.USER_LOGOUT}_PENDING`:
      return {
        ...state,
        status: "PENDING",
      };

    case `${ACTION_TYPES.USER_LOGOUT}_SUCCESS`:
      return {
        ...state,
        status: "SUCCESS",
        data: {},
      };

    case `${ACTION_TYPES.USER_LOGOUT}_ERROR`:
      return {
        ...state,
        status: "ERROR",
        errors: [...action.errors],
      };

    default:
      return state;
  }
}
