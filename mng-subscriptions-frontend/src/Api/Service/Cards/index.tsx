import { ICards } from "../../../redux/interface/cards";
import { HttpClient } from "../../HttpClient";

class CardsService extends HttpClient {
  constructor() {
    super("http://172.28.0.232:8080/api");
  }

  getCards() {
    return this.getByToken("cards");
  }
  createCards(body: any) {
    return this.postWithToken("cards", body);
  }
}
export const cardsService = new CardsService();
