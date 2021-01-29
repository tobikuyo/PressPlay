const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");
const User = require("../models/user");

require("dotenv").config();

mongoose.connect(process.env.TEST_DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const request = supertest(app);
const token = process.env.TOKEN;

afterAll(async () => {
    await mongoose.connection.close();
});

describe("Movie tests with token", () => {
    it("adds a movie", async () => {
        const { status, type, body } = await request
            .put("/api/movies")
            .send({
                _id: 1,
                title: "PressPlay",
                overview: "The best movie on the planet",
                backdrop: "",
                poster: "",
                cast: []
            })
            .set("authorization", token);

        expect(status).toBe(200);
        expect(type).toBe("application/json");
        expect(body.movie.title).toBe("PressPlay");
        expect(body.movie.overview).toBe("The best movie on the planet");
    });

    it("gets all movies in a user's watchlist", async () => {
        const { status, body } = await request
            .get("/api/movies")
            .set("authorization", token);

        expect(status).toBe(200);
        expect(body.results).toEqual(1);
        expect(body.movies).toHaveLength(1);
    });

    it("gets all movies in a user's watchlist", async () => {
        const { status, body } = await request
            .get("/api/movies/ids")
            .set("authorization", token);

        expect(status).toBe(200);
        expect(body.ids).toHaveLength(1);
    });

    it("removes a movie", async () => {
        const { status, body } = await request
            .delete("/api/movies/1")
            .set("authorization", token);

        expect(status).toBe(204);
        expect(body).toEqual({});
    });
});

describe("Movie tests without token", () => {
    it("throws an error when there is no token", async () => {
        const { status, type, body } = await request.get("/api/movies");

        expect(status).toBe(401);
        expect(type).toBe("application/json");
        expect(body.message).toBe("You need a valid token");
    });
});
