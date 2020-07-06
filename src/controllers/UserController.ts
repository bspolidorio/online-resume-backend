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
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(user);
  },
};
