import { subscriptionService } from "../../../Api/Service/Subs";
import { ISubs } from "../../interface/subscriptions";
import { ACTION_TYPES } from "../types";

export const getAllSubs = (setState: any) => {
  subscriptionService.getAllSubscriptions().then(({ data }) => {
    console.log("list", data.list);

    setState(data.list);
  });
};
export const getAllSubsWithRedux = (dispatch: Function) => {
  dispatch({
    type: `${ACTION_TYPES.GET_SUBS}_PENDING`,
  });
  subscriptionService.getAllSubscriptions().then(({ data }) => {
    console.log("data", data);
    dispatch({
      type: `${ACTION_TYPES.GET_SUBS}_SUCCESS`,
      payload: data,
    });
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

export const createSubscription = (dispatch: Function, body: ISubs) => {
  subscriptionService.createSubs(body).then(({ data }) => {
    getAllSubsWithRedux(dispatch);
  });
};
