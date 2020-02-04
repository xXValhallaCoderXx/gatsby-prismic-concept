const path = require("path")

module.exports = {
  setupFilesAfterEnv: [
    path.resolve(__dirname, "./jest-config/setup-test-env.js"),
  ],
  transform: {
    // "^.+\\.(tsx?|jsx?)$": "ts-jest",
    "\\.svg": "<rootDir>/jest-config/__mocks__/svg-transform.js",
    "^.+\\.(tsx?|jsx?)$": `<rootDir>/jest-config/jest-preprocess.js`,
  },
  moduleNameMapper: {
    // "\\.svg": `./jest-configs/__mocks__/file-mocks.js`,
    "\\.svg": `<rootDir>/jest-config/__mocks__/svg-transform.js`,
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/jest-config/__mocks__/file-mocks.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  collectCoverage: false,
  coverageReporters: ["lcov", "text", "html"],
}
