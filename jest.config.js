// https://jestjs.io/docs/en/configuration

module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: false,
  reporters: ["default"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules"],
  // moduleNameMapper: {
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|)$":
  //     "<rootDir>/test"
  // },
  testMatch: ["<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)"],
  transform: {
    "^.unit\\.(js|jsx)$": "babel-jest",
    "^.unit\\.(ts|tsx)$": "ts-jest"
  },
  setupFilesAfterEnv: ["./test/setupTests.js"],
  preset: "ts-jest"
};
