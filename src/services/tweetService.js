import { usuarios } from "../repositories/authRepositories.js";
import {
    getTweets,
    getTweetsByUser,
    insertTweet,
    totTweet,
    tweets,
} from "../repositories/tweetRepositories.js";

function reverseTweets() {
    const tweets = getTweets();
    return [...tweets].reverse();
}

export function createTweet(username, tweet) {
    const { avatar } = usuarios.find((user) => user.username === username);

    insertTweet(username, tweet, avatar);

    return;
}

export function showTweets(page = undefined) {
    if (page && page < 1) {
        return -1;
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    const tweetsLength = totTweet();
    if (tweetsLength <= 10) {
        return reverseTweets();
    }

    const tweetsMostrar = [...tweets].reverse().slice(start, end);

    return tweetsMostrar;
}

export function userTweets(username) {
    const userTweetsArr = getTweetsByUser(username);

    return userTweetsArr;
}
