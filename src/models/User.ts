export type User = {
  id: number;
  name: string;
  email: string;
  password?: string;
  address: string;
  username: string;
};

export const initUser = {
  id: 0,
  name: "",
  email: "",
  password: "",
  address: "",
  username: "",
};
