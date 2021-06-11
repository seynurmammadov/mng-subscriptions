import { ACTION_TYPES } from "../../actions/types";
import { IAction } from "../../interface/action";

const initialState = {
  status: "",
  data: [],
  errors: [],
};
export function reducerSubs(state = initialState, action: IAction) {
  switch (action.type) {
    case `${ACTION_TYPES.GET_SUBS}_PENDING`:
      return {
        ...state,
        status: "PENDING",
      };

    case `${ACTION_TYPES.GET_SUBS}_SUCCESS`:
      return {
        ...state,
        status: "SUCCESS",
        data: action.payload,
      };

    case `${ACTION_TYPES.GET_SUBS}_ERROR`:
      return {
        ...state,
        status: "ERROR",
        errors: [...action.errors],
      };

    default:
      return state;
  }
}
