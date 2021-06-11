import { subscriptionService } from "../../../Api/Service/Subs";
import { ISubs } from "../../interface/subscriptions";
import { ACTION_TYPES } from "../types";

export const getAllSubs = (setState: any) => {
  subscriptionService.getAllSubscriptions().then(({ data }) => {
    setState(data);
  });
};
export const getPaginateSubs =
  (currentPage: number, limit: number) => (dispatch: Function) => {
    dispatch({
      type: `${ACTION_TYPES.GET_SUBS}_PENDING`,
    });
    subscriptionService
      .getPaginateSubscriptions(currentPage, limit)
      .then(({ data }) => {
        console.log("data", data);
        dispatch({
          type: `${ACTION_TYPES.GET_SUBS}_SUCCESS`,
          payload: data,
        });
      });
  };
