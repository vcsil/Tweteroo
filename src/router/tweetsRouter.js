import { Router } from "express";

import {
    newTweet,
    getTweets,
    getTweetsUser,
    resetTweets,
} from "../controllers/tweetsController.js";
import emptyStringMiddleware from "../middlewares/emptyStringMiddleware.js";

const tweetsRouter = Router();

tweetsRouter.post("/tweets", emptyStringMiddleware, newTweet);

tweetsRouter.get("/tweets", getTweets);
tweetsRouter.get("/tweets/:username", getTweetsUser);
tweetsRouter.get("/tweetsreset", resetTweets);

export default tweetsRouter;
