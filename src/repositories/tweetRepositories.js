export const tweets = [];

export function insertTweet(username, tweet, avatar) {
    tweets.push({ username, tweet, avatar });
    return;
}

export function getTweets() {
    return tweets;
}

export function totTweet() {
    return tweets.length;
}

export function getTweetsByUser(username) {
    const tweetsDoUsuario = tweets.filter((t) => t.username === username);
    return tweetsDoUsuario;
}
