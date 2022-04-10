import { NextApiRequest, NextApiResponse } from 'next';
import PoetryController from '../../../src/controllers/PoetryController';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const Poetry = new PoetryController();
    switch (req.method) {
        case "GET":
            Poetry.findById(req, res);
            break
        case "PUT":
            Poetry.update(req, res);
            break;
        default:
            res.status(405).json({
                message: "Method not allowed"
            });
            break;
    }
};