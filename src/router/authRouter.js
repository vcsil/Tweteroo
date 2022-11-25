import { Router } from "express";

import signUp from "../controllers/authController.js";
import emptyStringMiddleware from "../middlewares/emptyStringMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", emptyStringMiddleware, signUp);

export default authRouter;
