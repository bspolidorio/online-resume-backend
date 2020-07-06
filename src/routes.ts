import { Router } from "express";
import ProjectController from "./controllers/ProjectController";

const routes = Router();

routes.get("/projects", ProjectController.index);

export default routes;
