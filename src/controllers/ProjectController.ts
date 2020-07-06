import { Request, Response } from "express";

const projects = [
  {
    name: "Cantagalli Corretora",
    description:
      "This was my first real world website, this page was designed inraw HTML and CSS to copy the original design of a template inWordPress following the client expetation.",
    code: "http://github.com/bspolidorio/cantagalli_seguradora",
    live: "http://cantagalli.com.br/",
  },
  {
    name: "Star wars",
    description:
      "A Star Wars fan page, created in React.js and Apollo-client tointeract with a GraphQL API. Styled using Styled-components.",
    code: "https://github.com/bspolidorio/starwars",
    live: "http://starwars-react.herokuapp.com/",
  },
  {
    name: "Task Counter",
    description: "React + Apollo project",
  },
  {
    name: "Online Resume",
    description: "React + Apollo project",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(projects);
  },
};
