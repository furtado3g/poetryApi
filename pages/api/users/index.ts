import { NextApiRequest, NextApiResponse } from "next";
import UserController from "../../../src/controllers/UsersController";
const users = (req: NextApiRequest, res: NextApiResponse) => {
  const Users = new UserController();
  switch (req.method) {
    case "GET":
      Users.findAll(req, res);
      break;
    case "POST":
      Users.create(req, res);
      break;
  }
};

export default users;