import { ILogin, IUser } from "../../../redux/interface/auth";
import { HttpClient } from "../../HttpClient";

class AuthService extends HttpClient {
  constructor() {
    super("http://172.28.0.232:8080/api");
  }

  registerUser(body: IUser) {
    return this.post("user/register", body);
  }
  loginUser(body: ILogin) {
    return this.post("login", body);
  }

  getUser() {
    return this.getByToken("user");
  }

  currentUser(token: string) {
    return this.getUserWithToken("user", token);
  }
}
export const authService = new AuthService();
