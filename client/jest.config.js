module.exports = {
	transform: {
		"^.+\\.(js|jsx)$": "babel-jest",
	},
	moduleFileExtensions: ["js", "jsx"],
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"\\.(css|less)$": "<rootDir>/test/jest/__mocks__/styleMock.js",
	},
};
