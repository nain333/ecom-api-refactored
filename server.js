import "./src/config/env.config.js";

import app from "./src/app.js";
import { connectDatabase } from "./src/config/database/index.js";
import logger from "./src/config/logger.js";

const PORT = process.env.PORT || 3200;

async function bootstrap() {
    try {
        await connectDatabase();

        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}.`);
        });
    } catch (error) {
        logger.error("Application startup failed.", error);
        console.error(error);

        process.exit(1);
    }
}

bootstrap();