module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/presentation/pages/*.{js,jsx}', 'src/services/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    moduleNameMapper: {
        '^.+\\.svg$': 'jest-svg-transformer',
        // ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/testing/__mocks__/fileMock.js',
     }
}