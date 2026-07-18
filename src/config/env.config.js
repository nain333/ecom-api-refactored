import { configDotenv } from "dotenv";

configDotenv();

export const envConfig = {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,

    database: {
        driver: process.env.DB_DRIVER,
        uri: process.env.MONGODB_URI,
        database: process.env.MONGODB_DATABASE,
    },
};