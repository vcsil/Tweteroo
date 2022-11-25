import createUser from "../services/authService.js";

export default function signUp(req, res) {
    const { username, avatar } = req.body;

    createUser(username, avatar);

    res.status(200).send("OK deu tudo certo");
}
