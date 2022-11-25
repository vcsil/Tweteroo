import { faker } from "@faker-js/faker";

export default class User {
    constructor() {
        this.username = faker.name.firstName();
        this.avatar = faker.image.avatar();
    }
}

// function createUser(username, avatar) {

// }
