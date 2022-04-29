// import axios from "axios";
import { get, post, put, destroy } from "../conf";

type User =
  | {
      username: string;
      password: string;
    }
  | { message: string };

const index = () => {
  return get("/users");
};
const single = (id: number) => {
  return get(`/users/${id}`);
};
const create = (params: User) => {
  return post(`/users`, params);
};
const update = (params: User) => {
  return put(`/users`, params);
};
const remove = (id: number) => {
  return destroy(`/users/${id}`);
};

export const Users = { index, single, create, update, remove };
