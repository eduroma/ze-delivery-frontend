module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js",
  },
  collectCoverageFrom: [
    "src/pages/**/*.tsx",
    "src/components/**/*.tsx",
    "src/hooks/*.tsx",
    "!src/hooks/index.tsx"
  ]
};
