import {Tool} from '@beemo/core';

module.exports = function(tool: Tool) {
  // ESLint
  tool.onRunDriver.listen(context => {
    context.addOptions(['--color']);
  }, 'eslint');

  // Jest
  tool.onRunDriver.listen((context) => {
    context.addOptions(['--colors']);
  }, 'jest');
};
