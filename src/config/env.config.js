import { configDotenv } from "dotenv";

const envFile =
    process.env.NODE_ENV === "test"
        ? ".env.test"
        : ".env";

configDotenv({
    path: envFile,
});

export const envConfig = {
    nodeEnv: process.env.NODE_ENV,

    port: process.env.PORT,

    jwtSecret: process.env.JWT_SECRET,

    database: {
        driver: process.env.DB_DRIVER,
        uri: process.env.MONGODB_URI,
        database: process.env.MONGODB_DATABASE,
    },
};