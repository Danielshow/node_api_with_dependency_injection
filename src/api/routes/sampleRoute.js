import { Router } from "express";
import sampleController from "../../controllers/sampleController";

const route = new Router();

route.get("/login", sampleController.login);

export default route;
