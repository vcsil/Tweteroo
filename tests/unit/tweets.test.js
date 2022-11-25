import supertest from "supertest";

import Tweet from "../factories/generateTweets";
import User from "../factories/generateUser";
import app from "../../src/app";

const server = supertest(app);

describe("Testa POST /tweets", () => {
    it("Cria tweet com body correto -> deve retornar 201", async () => {
        const { username, tweet } = new Tweet();

        const body = { tweet, username };

        const result = await server.post("/tweets").send(body);

        expect(result.status).toBe(201);
        expect(result.text).toBe("OK, seu tweet foi criado");
    });

    it("Cria tweet com body correto e usuário novo -> deve retornar 201", async () => {
        const { username, avatar } = new User();
        const result = await server.post("/sign-up").send({ username, avatar });

        const { tweet } = new Tweet();

        const body = { tweet, username };

        const result2 = await server.post("/tweets").send(body);

        expect(result.status).toBe(200);
        expect(result.text).toBe("OK deu tudo certo");
        expect(result2.status).toBe(201);
        expect(result2.text).toBe("OK, seu tweet foi criado");
    });

    it("Cria tweet sem tweet -> deve retornar 400", async () => {
        const { username } = new Tweet();

        const body = { username };

        const result = await server.post("/tweets").send(body);

        expect(result.status).toBe(400);
        expect(result.text).toBe("Todos os campos são obrigatórios!");
    });

    it("Cria tweet sem username -> deve retornar 400", async () => {
        const { tweet } = new Tweet();

        const body = { tweet };

        const result = await server.post("/tweets").send(body);

        expect(result.status).toBe(400);
        expect(result.text).toBe("Todos os campos são obrigatórios!");
    });
});

describe("Testa GET /tweets/:username", () => {
    it("Pega tweets de um usuário -> deve receber 200", async () => {
        const username = "Teste";

        const result = await server.get(`/tweets/${username}`);

        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Object);
    });

    it("Reseta tweets e cria um novo -> deve receber 200", async () => {
        const result0 = await server.get("/tweetsreset");

        const newTweet = new Tweet();
        const bodyTweet = newTweet.createTweet();

        const result = await server.get(`/tweets/${newTweet.username}`);

        expect(result0.status).toBe(201);
        expect(result0.text).toBe("Todos tweets apagados");

        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Object);
        expect(result.body).toStrictEqual([bodyTweet]);
    });
});

describe("Testa GET /tweets", () => {
    it("Tenta receber todos tweets -> deve receber 200", async () => {
        const result = await server.get("/tweets");

        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Object);
    });

    it("Falha ao tentar receber todos tweets -> deve receber 200", async () => {
        const result = await server.get("/tweets?page=-15");

        expect(result.status).toBe(400);
        expect(result.text).toBe("Informe uma página válida!");
    });
});
