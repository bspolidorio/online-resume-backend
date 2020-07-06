import { Request, Response } from "express";

const specialization = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "Javascript",
  },
  {
    name: "Typescript",
  },
  {
    name: "React",
  },
  {
    name: "Node",
  },
  {
    name: "REST",
  },
  {
    name: "GraphQL",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Firebase",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(specialization);
  },
};
