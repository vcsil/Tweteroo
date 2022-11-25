import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

const usuarios = [
    {
        username: "Teste",
        avatar: "https://haieng.com/wp-content/uploads/2017/10/test-image-500x500-300x300.jpg",
    },
];
export const tweets = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
        res.status(400).send("Todos os campos são obrigatórios!");
        return;
    }

    usuarios.push({ username, avatar });

    res.status(200).send("OK deu tudo certo");
});

app.post("/tweets", (req, res) => {
    const { tweet, username } = req.body;

    if (!username || !tweet) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    const { avatar } = usuarios.find((user) => user.username === username);

    tweets.push({ username, tweet, avatar });

    res.status(201).send("OK, seu tweet foi criado");
});

app.get("/tweets/:username", (req, res) => {
    const { username } = req.params;

    const tweetsDoUsuario = tweets.filter((t) => t.username === username);

    res.status(200).send(tweetsDoUsuario);
});

app.get("/tweets", (req, res) => {
    const { page } = req.query;

    if (page && page < 1) {
        res.status(400).send("Informe uma página válida!");
        return;
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    if (tweets.length <= 10) {
        return res.send(reverseTweets());
    }

    res.status(200).send([...tweets].reverse().slice(start, end));
});

app.get("/tweetsreset", (req, res) => {
    const MODE = String(process.env.MODE);

    if (MODE === "DEV") {
        while (tweets.length > 0) {
            tweets.pop();
        }
        res.status(201).send("Todos tweets apagados");
    } else {
        res.status(400).send("Proibido garotinho");
    }
});

function reverseTweets() {
    return [...tweets].reverse();
}

export default app;
