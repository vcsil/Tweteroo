export default function (req, res, next) {
    const { body } = req;

    if (Object.values(body).includes("") || Object.values(body).length < 2) {
        res.status(400).send("Todos os campos são obrigatórios!");
        return;
    }

    return next();
}
