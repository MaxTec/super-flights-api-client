// import axios from "axios";
import { post } from "../conf";
// import { get, post, put, destroy } from "../conf";

type User =
  | {
      username: string;
      password: string;
    }
  | { message: string };

const signIn = (data: User) => {
  return post("/auth/sign-in", data);
};
const signOut = () => {
  return post("/auth/sign-out");
};
const signUp = (params: User) => {
  return post(`/users`, params);
};
const refreshToken = () => {
  return post("/auth/refresh");
};
const mailer = (id: number) => {
  return post("/auth/mailer");
};

// const index = () => {
//   return get("/users");
// };
// const single = (id: number) => {
//   return get(`/users/${id}`);
// };
// const create = (params: User) => {
//   return post(`/users`, params);
// };
// const update = (params: User) => {
//   return put(`/users`, params);
// };
// const remove = (id: number) => {
//   return destroy(`/users/${id}`);
// };

export const Users = { signIn, signUp, signOut, refreshToken, mailer };
// export const Users = { index, single, create, update,remove };
