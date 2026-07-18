import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        environment: "node",

        include: [
            "tests/**/*.test.js",
        ],

        setupFiles: [
            "./tests/config/setup.js",
            "./tests/config/teardown.js",
        ],

        clearMocks: true,
        restoreMocks: true,
        mockReset: true,

        testTimeout: 10000,
        hookTimeout: 10000,
    },
});