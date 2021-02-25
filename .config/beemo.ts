import { Config } from "..";

const config: Config = {
  module: '@local',
  drivers: ['prettier', 'typescript'],
  settings: {
    node: true
  }
};

export default config;
