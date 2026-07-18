import request from "supertest";
import { describe, it, expect } from "vitest";

import app from "../../src/app.js";

describe("User API", () => {
    it("should register a new user", async () => {
        const response = await request(app)
            .post("/api/users/signup")
            .send({
                name: "Himanshu",
                email: "himanshu@test.com",
                password: "Password123",
                role: "customer",
            });

        expect(response.statusCode).toBe(201);

        expect(response.body.success).toBe(true);

        expect(response.body.data).toBeDefined();

        expect(response.body.data.email).toBe("himanshu@test.com");

        expect(response.body.data.password).toBeUndefined();
    });

    it("should login successfully", async () => {
        await request(app)
            .post("/api/users/signup")
            .send({
                name: "Himanshu",
                email: "himanshu@test.com",
                password: "Password123",
                role: "customer",
            });

        const response = await request(app)
            .post("/api/users/signin")
            .send({
                email: "himanshu@test.com",
                password: "Password123",
            });

        expect(response.statusCode).toBe(200);

        expect(response.body.success).toBe(true);

        expect(response.body.token).toBeDefined();

        expect(response.body.user).toBeDefined();

        expect(response.body.user.email).toBe("himanshu@test.com");

        expect(response.body.user.password).toBeUndefined();
    });
});