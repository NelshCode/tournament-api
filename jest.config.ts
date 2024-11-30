import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node', // Environnement d'exécution pour Node.js
  verbose: true,           // Affiche plus de détails sur les tests
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/tests/**/*.test.ts'], // Localisation des fichiers de test
  collectCoverage: true,   // Génère un rapport de couverture de code
  coverageDirectory: 'coverage',
};

export default config;
