import { cardsService } from "../../../Api/Service/Cards";
import { subscriptionService } from "../../../Api/Service/Subs";
import { ISubs } from "../../interface/subscriptions";
import { ACTION_TYPES } from "../types";

export const getCardsList = () => (dispatch: any) => {
  dispatch({
    type: `${ACTION_TYPES.GET_CARDS}_PENDING`,
  });
  cardsService.getCards().then(({ data }) => {
    dispatch({
      type: `${ACTION_TYPES.GET_CARDS}_SUCCESS`,
      payload: data,
    });
  });
};
export const createCard = (body: any) => (dispatch: any) => {
  dispatch({
    type: `${ACTION_TYPES.CREATE_CARDS}_PENDING`,
  });
  cardsService
    .createCards(body)
    .then(({ data }) => {
      dispatch({
        type: `${ACTION_TYPES.CREATE_CARDS}_SUCCESS`,
        payload: data,
      });
    })
    .then(() => {
      dispatch(getCardsList());
    });
};
