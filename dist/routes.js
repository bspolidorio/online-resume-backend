"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProjectController_1 = __importDefault(require("./controllers/ProjectController"));
var UserController_1 = __importDefault(require("./controllers/UserController"));
var SpecializationController_1 = __importDefault(require("./controllers/SpecializationController"));
var routes = express_1.Router();
routes.get("/projects", ProjectController_1.default.index);
routes.get("/users", UserController_1.default.index);
routes.get("/specializations", SpecializationController_1.default.index);
exports.default = routes;
