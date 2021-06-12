import { ILogin, IUser } from "../../../redux/interface/auth";
import { ISubs } from "../../../redux/interface/subscriptions";
import { HttpClient } from "../../HttpClient";

class SubscriptionService extends HttpClient {
  constructor() {
    super("http://172.28.0.232:8080/api");
  }

  getPaginateSubscriptions(currentPage: number, limit: number) {
    return this.getByToken(`subscribes?page=${currentPage}&count=${limit}`);
  }
  getAllSubscriptions() {
    return this.getByToken("subscribes");
  }
  createSubs(body: ISubs) {
    return this.postWithToken("subscribes", body);
  }

  updateSubs(id: number, body: ISubs) {
    return this.putWithToken("subscribes", id, body);
  }
}
export const subscriptionService = new SubscriptionService();
