import { ACTION_TYPES } from "../../actions/types";
import { IAction } from "../../interface/action";

const initialState = {
  status: "",
  data: [],
  errors: [],
};
export function reducerCards(state = initialState, action: IAction) {
  switch (action.type) {
    case `${ACTION_TYPES.GET_CARDS}_PENDING`:
      return {
        ...state,
        status: "PENDING",
      };

    case `${ACTION_TYPES.GET_CARDS}_SUCCESS`:
      return {
        ...state,
        status: "SUCCESS",
        data: action.payload,
      };

    case `${ACTION_TYPES.GET_CARDS}_ERROR`:
      return {
        ...state,
        status: "ERROR",
        errors: [...action.errors],
      };

    default:
      return state;
  }
}
