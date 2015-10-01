module.exports = {
// greetings = {
  english: 'Hello ',
  french: 'Bonjour ',
  german: 'Hallo ',
  spanish: 'Hola ',

  random: function() {
    var arr = ['english', 'french', 'german', 'spanish'];
    return this[arr[Math.floor(Math.random() * arr.length)]]
  }
};
