import { NextApiRequest, NextApiResponse } from "next";

import UserController from "../../../../src/controllers/UsersController";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const Users = new UserController();
    switch (req.method) {
        case "GET":
            Users.findByEmail(req, res);
            break;
        default:
            res.status(405).json({
                message: "Method not allowed"
            });
            break;
    }
};