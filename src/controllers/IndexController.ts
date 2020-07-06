import { Request, Response } from "express";

const index = [
  {
    Try: "/users, /projects, /specializations",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(index);
  },
};
