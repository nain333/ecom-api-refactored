import { connectMongoDB, disconnectMongoDB } from "./mongodb.connection.js";

export async function connectDatabase() {
    await connectMongoDB();
}

export async function disconnectDatabase() {
    await disconnectMongoDB();
}