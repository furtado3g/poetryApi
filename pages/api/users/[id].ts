import { NextApiRequest, NextApiResponse } from "next";
import UserController from "../../../src/controllers/UsersController";

const controller = new UserController()
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            await controller.findOne(req, res)
            break;
        case "PUT":
            await controller.update(req, res)
            break;
        case "DELETE":
            await controller.delete(req, res)
            break;
        default:
            res.status(405).end()
            break;
    }
}

export default handler;