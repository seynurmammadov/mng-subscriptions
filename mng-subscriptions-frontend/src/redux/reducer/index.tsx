import { combineReducers } from "redux";
import { reducerUser } from "./Auth/user";
import { reducerSubs } from "./Subscription";

const reducer = combineReducers({
  user: reducerUser!,
  subs: reducerSubs!,
});

export default reducer;
