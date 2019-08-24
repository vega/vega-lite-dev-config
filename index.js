module.exports = function(tool) {
  // ESLint
  tool.onRunDriver.listen(context => {
    context.addOptions(['--color']);
  }, 'eslint');

  // Jest
  tool.onRunDriver.listen((context) => {
    context.addOptions(['--colors']);
  }, 'jest');
};
