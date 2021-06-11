import { IUser } from "./auth";

interface ICategory {
  id?: number;
  name: "string";
  subscribes: [];
}

interface ICards {
  id: number;
  name: string;
  cardNumber: number;
  expvalidation: string;
  cvv: number;
  balance: number;
}

export interface ISubs {
  id?: number;
  name: string;
  fee?: number;
  createdDate: Date;
  nextPaymentDate: Date;
  isSubscribed: boolean;
  category?: ICategory;
  mUser?: IUser;
  card?: ICards;
}
