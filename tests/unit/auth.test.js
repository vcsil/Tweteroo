import supertest from "supertest";

import User from "../factories/generateUser";
import app from "../../src/app";

const server = supertest(app);

describe("Testa POST /sign-up ", () => {
    it("Testa com body correto -> deve retornar 200", async () => {
        const { username, avatar } = new User();

        const body = { username, avatar };

        const result = await server.post("/sign-up").send(body);

        expect(result.status).toBe(200);
        expect(result.text).toBe("OK deu tudo certo");
    });

    it("Testa body sem username -> deve retornar 400", async () => {
        const { avatar } = new User();

        const body = { username: "", avatar };

        const result = await server.post("/sign-up").send(body);

        expect(result.status).toBe(400);
        expect(result.text).toBe("Todos os campos são obrigatórios!");
    });

    it("Testa body sem avatar -> deve retornar 400", async () => {
        const { username } = new User();

        const body = { username, avatar: "" };

        const result = await server.post("/sign-up").send(body);

        expect(result.status).toBe(400);
        expect(result.text).toBe("Todos os campos são obrigatórios!");
    });
});
