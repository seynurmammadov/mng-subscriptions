import { authService } from "../../../Api/Service/Auth";
import { ILogin, IUser } from "../../interface/auth";
import { ACTION_TYPES } from "../types";

export const registerUser = (data: IUser) => (dispatch: Function) => {
  authService.registerUser(data);
};

export const userLogin = (data: ILogin) => (dispatch: Function) => {
  authService.loginUser(data).then(({ data }) => {
    console.log("data", data);
    dispatch({
      type: ACTION_TYPES.USER_LOGIN,
      payload: data,
    });
  });
};
