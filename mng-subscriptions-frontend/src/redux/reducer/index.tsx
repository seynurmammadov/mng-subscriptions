import { combineReducers } from "redux";
import { reducerUser } from "./Auth/user";
import { reducerCards } from "./Cards";
import { reducerSubs } from "./Subscription";

const reducer = combineReducers({
  user: reducerUser!,
  subs: reducerSubs!,
  cards: reducerCards!,
});

export default reducer;
