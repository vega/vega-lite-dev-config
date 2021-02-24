import {JestConfig} from '@beemo/driver-jest';

const config: JestConfig = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/', '<rootDir>/build/'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
};

export default config;
