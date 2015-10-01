function audience() {
  var arr = ['World', 'Peeps', 'Earthlings', 'my fellow Americans'];
  return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = audience;
