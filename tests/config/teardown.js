import { afterAll } from "vitest";

import mongoose from "mongoose";

import { disconnectDatabase } from "../../src/config/database/index.js";

afterAll(async () => {
    await mongoose.connection.dropDatabase();

    await disconnectDatabase();
});