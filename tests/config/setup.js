import { beforeAll } from "vitest";
import { connectDatabase } from "../../src/config/database/index.js";

console.log(">>> setup.js loaded");

beforeAll(async () => {
    console.log(">>> beforeAll started");

    await connectDatabase();

    console.log(">>> database connected");
});