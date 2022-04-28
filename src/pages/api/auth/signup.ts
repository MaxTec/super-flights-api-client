// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import sha256 from "crypto-js/sha256";

type User =
  | {
      firstName: string;
      middleName: string;
      lastName: string;
      username: string;
      email: string;
      password: string;
      role: string;
      refreshToken: string;
      deleteAt: Date;
      updateAt: Date;
      id: string;
    }
  | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  let data = req.body;
  const hashPassword = sha256(data.password).toString();
  data.password = hashPassword;
  try {
    const request = await axios.post(
      process.env.API_URL + "auth/sign-up",
      data
    );
    // TODO: a handler for request
    res.status(request.status).send(request.data);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Usuario ya existente" });
  }
}
