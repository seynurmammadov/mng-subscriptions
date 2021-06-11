import { subscriptionService } from "../../../Api/Service/Subs";
import { ISubs } from "../../interface/subscriptions";
import { ACTION_TYPES } from "../types";

export const getAllSubs = () => (dispatch: Function) => {
  dispatch({
    type: `${ACTION_TYPES.GET_SUBS}_PENDING`,
  });
  subscriptionService.getSubs().then(({ data }) => {
    console.log("data", data);
    dispatch({
      type: `${ACTION_TYPES.GET_SUBS}_SUCCESS`,
      payload: data,
    });
  });
};
