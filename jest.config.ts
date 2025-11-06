import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",

  testMatch: ["**/?(*.)+(test).ts?(x)"],

  // Runs setup after env is ready
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    // Mock CSS modules
    "\\.(css|scss|sass)$": "identity-obj-proxy",

    // Mock image/static files
    "\\.(png|jpg|jpeg|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.ts",

    // Support @/* imports from tsconfig paths
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default config;
