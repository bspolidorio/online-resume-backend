import { Request, Response } from "express";

const projects = [
  {
    name: "Star Wars",
    description: "React + Apollo project",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(projects);
  },
};
