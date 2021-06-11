import { combineReducers } from "redux";
import { reducerUser } from "./Auth/user";

const reducer = combineReducers({
  user: reducerUser!,
});

export default reducer;
