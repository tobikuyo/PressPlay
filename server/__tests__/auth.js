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

beforeAll(async () => {
    await User.deleteOne({ email: "john.doe@mail.com" });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe("Successful user authentication tests", () => {
    it("creates a new user", async () => {
        const { status, type, body } = await request
            .post("/api/auth/register")
            .send({
                name: "John Doe",
                email: "john.doe@mail.com",
                password: "johndoe"
            });

        expect(status).toBe(201);
        expect(type).toBe("application/json");
        expect(body.user_id).toBeDefined();
        expect(body.user_id).not.toBeNull();
    });

    it("logs in an existing user", async () => {
        const { status, type, body } = await request
            .post("/api/auth/login")
            .send({ email: "john.doe@mail.com", password: "johndoe" });

        expect(status).toBe(200);
        expect(type).toBe("application/json");
        expect(body.token).toBeDefined();
        expect(body.token).not.toBeNull();
    });
});

describe("Unsuccessful authentication tests", () => {
    it("doesn't allow users to register with exising email", async () => {
        const { status, type, body } = await request
            .post("/api/auth/register")
            .send({
                name: "John Doe",
                email: "john.doe@mail.com",
                password: "johndoe"
            });

        expect(status).toBe(400);
        expect(type).toBe("application/json");
        expect(body.message).toBe("This email has already been registered");
    });

    it("notifies users that an email used to login is unregistered", async () => {
        const { status, body } = await request
            .post("/api/auth/login")
            .send({ email: "jane.doe@mail.com", password: "janedoe" });

        expect(status).toBe(404);
        expect(body.message).toBe("No registered user with that email");
    });

    it("notifies users when they use a wrong password", async () => {
        const { status, body } = await request
            .post("/api/auth/login")
            .send({ email: "john.doe@mail.com", password: "john" });

        expect(status).toBe(403);
        expect(body.message).toBe("Incorrect password");
    });
});
