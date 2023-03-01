export interface User {
  username: string;
  email: string;
  isLogged: boolean;
  token: string;
}

export enum Status {
  received,
  inProgress,
  completed,
}

export interface Order {
  status: Status;
  id: number;
}

export interface Products {
  name: string;
  image: string;
  price: number;
  description: string;
  isAvailable: boolean;
}
