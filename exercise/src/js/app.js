var greetings = require('./greetings.js');
var audience = require('./audience.js');

var h1 = document.getElementById('greetings');
h1.innerText = greetings.random() + audience();

