interface IRole {
  id: number;
  name: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id?: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  createdAt?: any;
  roles?: IRole[];
  phone: string;
}
