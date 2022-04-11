import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import prisma from "../config/prismaClient";

class UserController {
  prisma: any;

  constructor() {
    this.prisma = prisma;
  }

  create(req: NextApiRequest, res: NextApiResponse) {
    const {
      name,
      email,
      password,
      profile_img,
      phone_number,
      address,
      zip_code,
      city,
      state,
      country,
      description,
    } = req.body;
    this.prisma.user
      .create({
        data: {
          name,
          email,
          password: this.hashPassword(password),
          profile_img,
          phone_number,
          address,
          zip_code,
          city,
          state,
          country,
          description,
        },
      })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }

  update(req: NextApiRequest, res: NextApiResponse) {
    const {
      name,
      email,
      password,
      profile_img,
      phone_number,
      address,
      zip_code,
      city,
      state,
      country,
      description,
    } = req.body;
    this.prisma.user
      .update({
        where: {
          id: req.query.id,
        },
        data: {
          name,
          email,
          password: this.hashPassword(password),
          profile_img,
          phone_number,
          address,
          zip_code,
          city,
          state,
          country,
          description,
        },
      })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }

  delete(req: NextApiRequest, res: NextApiResponse) {
    this.prisma.user
      .delete({
        where: {
          id: req.query.id,
        },
      })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }

  findAll(req: NextApiRequest, res: NextApiResponse) {
    this.prisma.user
      .findMany()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }

  findOne(req: NextApiRequest, res: NextApiResponse) {
    this.prisma.user
      .findUnique({
        where: {
          id: req.query.id,
        },
      })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }

  findByEmail(req: NextApiRequest, res: NextApiResponse) {
    this.prisma.user
      .findUnique({
        where: {
          email: req.query.email,
        },
      })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }

  private hashPassword(password: string) {
    let hash = crypto.createHash("sha256");
    let digestedPassword = hash.update(password, "utf-8").digest("hex");
    return digestedPassword;
  }
}

export default UserController;