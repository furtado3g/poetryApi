import { NextApiRequest, NextApiResponse } from "next"

import PoetryController from "../../../src/controllers/PoetryController";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const Poetry = new PoetryController();
    switch (req.method) {
        case "GET":
            Poetry.findAll(req, res);
            break
        case "POST":
            Poetry.create(req, res);
            break;
        default:
            res.status(405).json({
                message: "Method not allowed"
            });
            break;
    }
}
