// var greetings = require('./greetings');
// var audience = require('./audience');

var h1 = document.getElementById('greetings');
h1.innerText = greetings.random() + audience();

