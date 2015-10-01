var greetings = require('./lib/greetings');
var audience = require('./lib/audience');

module.exports = function() {
  return greetings.random() + audience();
};
