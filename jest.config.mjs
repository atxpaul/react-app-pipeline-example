export default {
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Reemplaza la barra inclinada inicial por doble barra invertida
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/mocks/fileMock.js',
    },
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/cypress/'],

    // Opciones de cobertura
    collectCoverage: true, // Habilita la cobertura siempre
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/main.jsx',
        '!mocks/*.js',
        '!cypress/e2e/*.spec.js',
    ],
    coverageReporters: ['text', 'lcov'], // Formatos de reporte: consola y archivo lcov
};
