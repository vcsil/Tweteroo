import dotenv from "dotenv";
import chalk from "chalk";
import app from "./app.js";

dotenv.config();

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
    console.log(
        chalk.bold.blue(`Servidor funfando de boas na porta ${PORT}!!!`)
    );
});
