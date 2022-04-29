import { post } from "../conf";

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

export const Auth = { signIn, signUp, signOut, refreshToken, mailer };
