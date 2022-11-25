import { faker } from "@faker-js/faker";
import { tweets } from "../../src/repositories/tweetRepositories";

export default class Tweet {
    constructor() {
        this.username = "Teste";
        this.tweet = faker.lorem.words(5);
    }

    createTweet() {
        const tweet = {
            username: this.username,
            tweet: "Testando né",
            avatar: "https://haieng.com/wp-content/uploads/2017/10/test-image-500x500-300x300.jpg",
        };

        tweets.push(tweet);
        return tweet;
    }
}
