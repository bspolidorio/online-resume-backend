import { Request, Response } from "express";

const user = [
  {
    name: "Bruno Spolidorio",
    email: "bspolidorio@gmail.com",
    phone: "936 019 281",
    github: "https://github.com/bspolidorio",
    linkedin: "https://pt.linkedin.com/in/bspolidorio/",
    about:
      'From the instant I produced "Hello World" in the console of my first application, I knew I was hooked into the world of software development. But software development has never been "just a job" for me, it\'s offered an engaging challenge to continually learn and improve my skills in creating high-quality software. What started with a simple "Hello World" has become a full-fledged passion that only gets more exciting as the time go by.',
    location: "Porto - Portugal",
    specializations: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React",
      "Node",
      "REST",
      "GraphQL",
      "MongoDB",
      "Firebase",
    ],
    projects: [
      {
        name: "Cantagalli Corretora",
        description:
          "This was my first real world website, this page was designed in raw HTML and CSS to copy the original design of a template in WordPress following the client expetations.",
        code: "https://github.com/bspolidorio/cantagalli_seguradora",
        live: "http://cantagalli.com.br/",
      },
      {
        name: "Star wars",
        description:
          "A Star Wars fan page, created in React.js and Apollo-client to interact with a GraphQL API. Styled using Styled-components.",
        code: "https://github.com/bspolidorio/starwars",
        live: "https://starwars-react.herokuapp.com/",
      },
      {
        name: "Online Resume - backend",
        description: "...",
        code: "https://github.com/bspolidorio/online-resume-backend",
        live: "https://online-resume-backend.herokuapp.com",
      },
      {
        name: "Online Resume - Frontend",
        description: "...",
        code: "https://github.com/bspolidorio/online-resume-frontend",
        live: "https://bspolidorio.github.io/online-resume-frontend/",
      },
    ],
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(user);
  },
};
