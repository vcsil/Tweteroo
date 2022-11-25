import { insertUser } from "../repositories/authRepositories.js";

export default function createUser(username, avatar) {
    insertUser(username, avatar);
    return;
}
