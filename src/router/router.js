import { Router } from "express";

import authRouter from "./authRouter.js";
import tweetsRouter from "./tweetsRouter.js";

const router = Router();

router.use(authRouter);
router.use(tweetsRouter);

export default router;
