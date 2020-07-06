import { Router } from "express";
import IndexController from "./controllers/IndexController";
import ProjectController from "./controllers/ProjectController";
import UserController from "./controllers/UserController";
import SpecializationController from "./controllers/SpecializationController";

const routes = Router();

routes.get("/", IndexController.index);
routes.get("/projects", ProjectController.index);
routes.get("/users", UserController.index);
routes.get("/specializations", SpecializationController.index);

export default routes;
