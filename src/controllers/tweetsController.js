import { tweets } from "../repositories/tweetRepositories.js";
import {
    createTweet,
    showTweets,
    userTweets,
} from "../services/tweetService.js";

export function newTweet(req, res) {
    const { tweet, username } = req.body;

    createTweet(username, tweet);

    return res.status(201).send("OK, seu tweet foi criado");
}

export function getTweets(req, res) {
    const { page } = req.query;

    const tweets = showTweets(page);

    if (tweets === -1) {
        return res.status(400).send("Informe uma página válida!");
    }

    res.status(200).send(tweets);
}

export function getTweetsUser(req, res) {
    const { username } = req.params;

    const userTweetsArr = userTweets(username);

    res.status(200).send(userTweetsArr);
}

export function resetTweets(req, res) {
    const MODE = String(process.env.MODE);

    if (MODE === "DEV") {
        while (tweets.length > 0) {
            tweets.pop();
        }
        res.status(201).send("Todos tweets apagados");
    } else {
        res.status(400).send("Proibido garotinho");
    }
}
