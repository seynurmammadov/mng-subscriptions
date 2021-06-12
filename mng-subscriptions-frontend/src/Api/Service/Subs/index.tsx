import { ILogin, IUser } from "../../../redux/interface/auth";
import { ISubs } from "../../../redux/interface/subscriptions";
import { HttpClient } from "../../HttpClient";

class SubscriptionService extends HttpClient {
  constructor() {
    super("http://172.28.0.232:8080/api");
    // super("https://60b74cf317d1dc0017b898bc.mockapi.io");
  }

  getPaginateSubscriptions(currentPage: number, limit: number) {
    // return this.getByToken("subscribes");
    return this.getByToken(`subscribes?page=${currentPage}&count=${limit}`);
  }
  getAllSubscriptions() {
    return this.getByToken("subscribes");
    // return this.get(`subscriptions`);
  }
  createSubs(body: ISubs) {
    return this.post("subscribes", body);
  }

  updateSubs(id: number, body: ISubs) {
    return this.put("subscriptions", id, body);
  }
}
export const subscriptionService = new SubscriptionService();
