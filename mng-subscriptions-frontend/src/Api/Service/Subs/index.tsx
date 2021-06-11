import { ILogin, IUser } from "../../../redux/interface/auth";
import { ISubs } from "../../../redux/interface/subscriptions";
import { HttpClient } from "../../HttpClient";

class SubscriptionService extends HttpClient {
  constructor() {
    super("http://172.28.0.232:8080/api");
  }

  getSubs() {
    return this.getByToken("subscribes");
  }
  createSubs(body: ISubs) {
    return this.post("subscribes", body);
  }
}
export const subscriptionService = new SubscriptionService();
