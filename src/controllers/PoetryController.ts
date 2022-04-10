import prisma from "../config/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";


class PoetryController {

    prisma: any;

    constructor() {
        this.prisma = prisma;
    }

    create(req: NextApiRequest, res: NextApiResponse) {
        const {
            title,
            author,
            description,
            image
        } = req.body;

        this.prisma.poetry
            .create({
                data: {
                    title,
                    author_id: author,
                    description,
                    image
                }
            }).then((poetry) => {
                res.status(200).json(poetry);
            }).catch((err) => {
                res.status(500).json({ error: err.message });
            });
    }

    update(req: NextApiRequest, res: NextApiResponse) {
        const {
            title,
            author,
            description,
            image
        } = req.body;

        this.prisma.poetry
            .update({
                where: {
                    id: req.query.id
                },
                data: {
                    title,
                    author_id: author,
                    description,
                    image
                }
            }).then((poetry) => {
                res.status(200).json(poetry);
            }).catch((err) => {
                res.status(500).json({ error: err.message });
            });
    }

    findAll(req: NextApiRequest, res: NextApiResponse) {
        return this.prisma.poetry
            .findMany().then((poetry) => {
                res.status(200).json(poetry);
            }).catch((err) => {
                res.status(500).json({ error: err.message });
            });
    }

    findById(req: NextApiRequest, res: NextApiResponse) {
        return this.prisma.poetry
            .findUnique({
                where: {
                    id: req.query.id
                }
            }).then((poetry) => {
                res.status(200).json(poetry);
            }).catch((err) => {
                res.status(500).json({ error: err.message });
            });
    }

}

export default PoetryController;