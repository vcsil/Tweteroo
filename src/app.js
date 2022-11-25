import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./router/router.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use(router);

export default app;
