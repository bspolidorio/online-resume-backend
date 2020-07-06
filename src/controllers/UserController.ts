import { Request, Response } from "express";

const user = [
  {
    name: "Bruno",
    email: "bspolidorio@gmail.com",
    phone: "936 019 281",
    github: "http://github.com/bspolidorio",
    linkedin: "https://www.linkedin.com/in/bspolidorio/",
    about:
      'From the instant I produced "Hello World" in the console of my first application, I knew I was hooked into the world of software development. But software development has never been "just a job" for me, it\'s offered an engaging challenge to continually learn and improve my skills in creating high-quality software. What started with a simple "Hello World" has become a full-fledged passion that only gets more exciting as the time go by.',
    location: "Porto - Portugal",
    specializations: [
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
    ],
    projects: [
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
    ],
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(user);
  },
};
