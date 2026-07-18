import mongoose from "mongoose";
import { envConfig } from "../env.config.js";
import logger from "../logger.js";

let isConnected = false;

export async function connectMongoDB() {
    if (isConnected) {
        logger.warn("MongoDB connection already established.");
        return;
    }

    try {
        await mongoose.connect(envConfig.database.uri, {
            dbName: envConfig.database.database,
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 20,
            minPoolSize: 5,
            autoIndex: envConfig.nodeEnv !== "production",
        });

        isConnected = true;

        logger.info("MongoDB connected successfully.");
    } catch (error) {
        logger.error("Unable to establish MongoDB connection.", error);
        throw error;
    }
}

export async function disconnectMongoDB() {
    if (!isConnected) return;

    try {
        await mongoose.disconnect();

        isConnected = false;

        logger.info("MongoDB connection closed.");
    } catch (error) {
        logger.error("Error while disconnecting MongoDB.", error);
    }
}
export async function clearMongoDB() {
    if (!isConnected) {
        return;
    }

    const collections = mongoose.connection.collections;

    for (const collection of Object.values(collections)) {
        await collection.deleteMany({});
    }

    logger.info("MongoDB test database cleared.");
}

mongoose.connection.on("connected", () => {
    logger.info("MongoDB connection opened.");
});

mongoose.connection.on("disconnected", () => {
    isConnected = false;
    logger.warn("MongoDB disconnected.");
});

mongoose.connection.on("reconnected", () => {
    isConnected = true;
    logger.info("MongoDB reconnected.");
});

mongoose.connection.on("error", (error) => {
    logger.error("MongoDB connection error.", error);
});